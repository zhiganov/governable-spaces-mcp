// =============================================================================
// extract-core.ts
// -----------------------------------------------------------------------------
// Book-agnostic, domain-agnostic infrastructure for hand-crafted MCP extraction
// pipelines. Pair this with a domain-specific config file (e.g.,
// extract-data.commons.ts, extract-data.jtbd.ts) that supplies the catalog
// schemas, system prompt, and orchestration.
//
// What's in here (do NOT customize per book — bug fixes belong here, not in
// per-MCP copies):
//   - chapterChunks: split a markdown source into chapter-shaped chunks
//   - callTool: generic Anthropic tool call returning raw tool input
//   - extractChapter: per-chapter extraction with cache + ids_so_far passthrough
//   - extractCatalog: sequential per-catalog driver (load-bearing dedup fix)
//   - dedupCatalog: post-extraction semantic dedup pass via Sonnet
//   - ExtractConfig<C> interface, ToolSchema type, helpers
//
// Reference instances kept in sync with this file:
//   - book-power-output/mcp/think-like-a-commoner/scripts/extract-core.ts
//   - book-power-output/mcp/jtbd-knowledge/scripts/extract-core.ts (when migrated)
//
// When updating this file, re-sync each instance manually until book-power#17
// (the @book-power/mcp-toolkit shared package) lands and eliminates the copy.
//
// Last synced: 2026-05-04 (book-power#22 / TLAC#7).
// =============================================================================

import Anthropic from '@anthropic-ai/sdk';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

// =============================================================================
// EXTRACTION DISCIPLINES
// -----------------------------------------------------------------------------
// The rhetorical mode in which extracted entries express the source's claims.
// Each per-book extract-data.<flavor>.ts declares one of these by setting a
// DISCIPLINE constant at the top of the file; that discipline's
// systemPromptSection is injected into the SYSTEM_PROMPT, and its fieldHint is
// appended to tool-schema field descriptions.
//
// Pick the discipline that matches the source book:
//   - prescriptive: source argues in rules/defaults/anti-patterns (RFC 2119
//     modal markers fit). Examples: Bollier's commons protocols, Ostrom's
//     design principles, programming-discipline books (Clean Code, etc.).
//   - descriptive:  source argues structurally/historically/dialectically;
//     "MUST X" reformulations distort the author's voice. Examples:
//     Schneider's *Governable Spaces*, most academic argument.
//   - dialectical:  source works through opposing positions; entries should
//     surface tensions rather than collapse to recommendations.
//   - procedural:   source teaches a process with steps, triggers, and exit
//     conditions. Examples: facilitation handbooks, how-to guides, recipes.
// =============================================================================

export const DISCIPLINES = {
  prescriptive: {
    systemPromptSection: `EXTRACTION VOICE: PRESCRIPTIVE

The source argues prescriptively — it issues rules, strong defaults, and explicit anti-patterns. Use RFC-2119-style modal markers (MUST / SHOULD / MUST NOT) in field values that capture rules, defaults, or diagnostic questions, when the author states:
- A hard rule (e.g., "a commons MUST have boundaries, rules, social norms, and sanctions")
- A strong default (e.g., "monitoring SHOULD be done by community members, not external authorities")
- An explicit anti-pattern (e.g., "a commons MUST NOT be confused with open-access — that is Hardin's mistake")

Forces specificity. Don't waffle. Do NOT impose modal markers where the author is being descriptive — paraphrase descriptively in those cases.`,
    fieldHint: 'with MUST/SHOULD/MUST NOT modal markers where the source is prescriptive',
  },
  descriptive: {
    systemPromptSection: `EXTRACTION VOICE: DESCRIPTIVE

The source argues descriptively, structurally, and historically — it documents what is the case, names patterns, and analyses how they emerged. Do NOT use RFC-2119-style modal markers (MUST / SHOULD / MUST NOT). Render claims as descriptive prose grounded in what the author actually says or shows:
- For diagnostic / feature fields: state what the entity in question does, has, or makes possible (e.g., "Wikipedia editors develop policy through talk pages and noticeboards, with the Five Pillars holding that there are 'no firm rules'") rather than what it MUST do.
- For pattern signatures: describe the recognition heuristics ("how do you spot this in the wild") in the author's voice, not as modal claims.
- For diagnostic questions: ask questions in their natural form ("Is X the case?", "Does Y hold?") rather than reformulating as "MUST X be the case?".

If the author makes an explicit prescription, you may quote or paraphrase it directly — but do NOT impose a modal voice on descriptive material.`,
    fieldHint: 'as descriptive prose grounded in the source — do NOT use MUST/SHOULD modal markers',
  },
  dialectical: {
    systemPromptSection: `EXTRACTION VOICE: DIALECTICAL

The source argues dialectically — it works through opposing positions, surfaces tensions, and treats the resolution as an ongoing question rather than a settled rule. Render entries as positions paired with their counter-positions where the author sets them up that way:
- For pattern signatures: name both the position the author critiques and the position the author argues for.
- For governance/design forms: surface the tradeoffs the author names ("X enables A but at the cost of B") rather than collapsing to a single recommendation.
- For diagnostic questions: prefer "What would the X view say here?" framings over yes/no MUSTs.

Do NOT use RFC-2119 modal markers unless the author explicitly does. Preserve productive disagreement; don't flatten the argument.`,
    fieldHint: 'as positions paired with counter-positions where the source sets them up that way',
  },
  procedural: {
    systemPromptSection: `EXTRACTION VOICE: PROCEDURAL

The source teaches a process — sequenced steps, triggers, branching decisions, and exit conditions. Render entries with explicit process structure:
- For workflow fields: list ordered steps with their triggers and outcomes ("when X, do Y, exit when Z").
- For technique entries: describe when to use the technique, its preconditions, the actions it involves, and how to know if it worked.
- For diagnostic questions: ask "what comes next?" / "what would this look like in practice?" rather than imposing modal MUST claims.

Use modal markers only where the source treats a step as non-negotiable. Procedural sources usually argue empirically ("here's what works"), not normatively.`,
    fieldHint: 'as ordered steps / triggers / outcomes — modal markers only when the source treats a step as non-negotiable',
  },
} as const;

export type DisciplineName = keyof typeof DISCIPLINES;

export type ToolSchema = { name: string; description: string; input_schema: any };

export interface ExtractConfig<C extends string> {
  client: Anthropic;
  model: string;
  systemPrompt: string;
  cacheDir: string;
  tools: Record<C, ToolSchema>;
  /** Catalogs that should skip part-divider chapters (low-yield content) */
  skipPartDividers: Set<C>;
  /** Catalogs eligible for the post-extraction semantic dedup pass */
  dedupCatalogs: Set<C>;
}

export function entriesArray(itemSchema: any): any {
  return {
    type: 'object',
    properties: {
      entries: { type: 'array', items: itemSchema },
    },
    required: ['entries'],
  };
}

export function slugify(label: string): string {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);
}

/**
 * Split a markdown source into chapter chunks by `# Heading` lines.
 * `isPartDivider` lets the caller flag part dividers (or other low-yield
 * chapters) that some catalogs should skip — defaults to a label starting
 * with "Part " (e.g., "Part I", "Part II").
 */
export function chapterChunks(
  source: string,
  isPartDivider: (label: string) => boolean = (l) => /^Part\s/i.test(l)
): { chapterLabel: string; text: string; isPartDivider: boolean }[] {
  const lines = source.split('\n');
  const chunks: { chapterLabel: string; text: string; isPartDivider: boolean }[] = [];
  let currentLabel = 'Frontmatter';
  let currentLines: string[] = [];
  for (const line of lines) {
    if (/^# [^#]/.test(line)) {
      if (currentLines.length) {
        chunks.push({
          chapterLabel: currentLabel,
          text: currentLines.join('\n'),
          isPartDivider: isPartDivider(currentLabel),
        });
      }
      currentLabel = line.replace(/^# /, '').trim();
      currentLines = [line];
    } else {
      currentLines.push(line);
    }
  }
  if (currentLines.length) {
    chunks.push({
      chapterLabel: currentLabel,
      text: currentLines.join('\n'),
      isPartDivider: isPartDivider(currentLabel),
    });
  }
  return chunks;
}

/**
 * Generic single-tool Anthropic call. Returns the raw tool input object,
 * or null if no tool_use was emitted. Consumers extract their expected
 * field shape (entries / merges / etc.) from the result.
 *
 * Caches the system prompt + tool schema (5-min ephemeral TTL) so a run
 * processing many chapters within the window pays only one prompt cost.
 */
export async function callTool(
  config: { client: Anthropic; model: string; systemPrompt: string },
  tool: ToolSchema,
  userContent: string
): Promise<any> {
  const response = await config.client.messages.create({
    model: config.model,
    max_tokens: 8000,
    system: [{ type: 'text', text: config.systemPrompt, cache_control: { type: 'ephemeral' } } as any],
    tools: [{ ...tool, cache_control: { type: 'ephemeral' } } as any],
    tool_choice: { type: 'tool', name: tool.name },
    messages: [{ role: 'user', content: userContent }],
  });
  const toolUse = response.content.find((b: any) => b.type === 'tool_use');
  if (!toolUse || toolUse.type !== 'tool_use') {
    console.error('  No tool_use in response:', JSON.stringify(response.content).slice(0, 300));
    return null;
  }
  return toolUse.input;
}

/**
 * Per-chapter extraction. Restart-safe via cache file at
 * `{cacheDir}/{catalog}/{slugified-chapter}.json`. Passes idsSoFar to the
 * model so it doesn't coin a new slug for an already-extracted concept.
 */
export async function extractChapter<C extends string>(
  config: ExtractConfig<C>,
  catalog: C,
  chunk: { chapterLabel: string; text: string },
  idsSoFar: string[]
): Promise<any[]> {
  const cachePath = join(config.cacheDir, catalog, `${slugify(chunk.chapterLabel)}.json`);

  if (existsSync(cachePath)) {
    return JSON.parse(readFileSync(cachePath, 'utf-8'));
  }

  const idsContext = idsSoFar.length > 0
    ? `

ALREADY EXTRACTED FROM PRIOR CHAPTERS (DO NOT RE-EMIT THESE IDs):
${idsSoFar.join(', ')}

If this chapter expands on one of those concepts, leave its slug alone — the dedup pass will fold any new context in. Do NOT invent a new slug ("foo-as-relationalized-finance", "foo-north-america") for the same concept under a slightly different framing.`
    : '';

  const userContent = `CHAPTER: ${chunk.chapterLabel}

CONTENT:
${chunk.text}

Extract every entry from this chapter that fits the tool schema. If no entries fit, call the tool with entries: [].${idsContext}`;

  const result = await callTool(config, config.tools[catalog], userContent);
  const entries = Array.isArray(result?.entries) ? result.entries : [];

  mkdirSync(join(config.cacheDir, catalog), { recursive: true });
  writeFileSync(cachePath, JSON.stringify(entries, null, 2));
  return entries;
}

/**
 * Per-catalog extraction is SEQUENTIAL (not concurrent) so each chapter call
 * can see the ids extracted from earlier chapters and avoid coining a new slug
 * for an already-named concept. This is the load-bearing fix from
 * book-power#22: without ids_so_far passthrough, the model independently
 * re-coins slugs across chapters and the post-pass dedup has to clean up.
 * Sequential is ~4x slower wall time but the system prompt + tool schema
 * stay cached so cost is unchanged.
 */
export async function extractCatalog<C extends string>(
  config: ExtractConfig<C>,
  catalog: C,
  chunks: { chapterLabel: string; text: string; isPartDivider: boolean }[]
): Promise<any[]> {
  console.log(`\n=== Extracting ${catalog} ===`);

  const eligible = chunks.filter(c => !(config.skipPartDividers.has(catalog) && c.isPartDivider));
  console.log(`  ${eligible.length} chapters to process (sequential — ids_so_far passed forward)`);

  const idsSoFar: string[] = [];
  const all: any[] = [];

  for (let i = 0; i < eligible.length; i++) {
    const chunk = eligible[i];
    const entries = await extractChapter(config, catalog, chunk, idsSoFar);
    process.stdout.write(`  [${i + 1}/${eligible.length}] ${chunk.chapterLabel}: +${entries.length}\n`);

    for (const e of entries) {
      const key = e.id ?? e.term ?? `${e.number ?? ''}-${e.name ?? ''}` as string;
      if (!idsSoFar.includes(key)) {
        idsSoFar.push(key);
        all.push(e);
      }
    }
  }
  console.log(`  Total ${catalog}: ${all.length} (after string-equal dedup)`);
  return all;
}

const DEDUP_TOOL: ToolSchema = {
  name: 'propose_merges',
  description: 'Propose semantic dedup merges for the catalog. Each merge picks one canonical id (keep) and lists the others to fold into it (drop).',
  input_schema: {
    type: 'object',
    properties: {
      merges: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            keep: { type: 'string', description: 'The canonical id to keep' },
            drop: { type: 'array', items: { type: 'string' }, description: 'Slugs to fold into keep — same concept under different framings/regions/sub-aspects' },
            reason: { type: 'string', description: 'One sentence: what concept these all describe' },
          },
          required: ['keep', 'drop', 'reason'],
        },
      },
    },
    required: ['merges'],
  },
};

/**
 * Post-extraction semantic dedup pass. Sends a flat view of the catalog
 * (id | name | brief, one per line) to Sonnet and asks for groups of
 * semantic duplicates. Applies merges by unioning `protocols` arrays
 * (where present) and dropping the merged-out entries. Cached at
 * `{cacheDir}/{catalog}/_dedup.json`.
 *
 * No-op for catalogs with fewer than 10 entries (too small to benefit).
 */
export async function dedupCatalog<C extends string>(
  config: ExtractConfig<C>,
  catalog: C,
  entries: any[]
): Promise<any[]> {
  if (entries.length < 10) {
    console.log(`  [dedup] ${catalog}: ${entries.length} entries, skipping (too few)`);
    return entries;
  }

  console.log(`\n=== Deduping ${catalog} (${entries.length} entries) ===`);

  const cachePath = join(config.cacheDir, catalog, '_dedup.json');
  let merges: Array<{ keep: string; drop: string[]; reason: string }>;

  if (existsSync(cachePath)) {
    merges = JSON.parse(readFileSync(cachePath, 'utf-8'));
    console.log(`  cache hit (${merges.length} merges proposed)`);
  } else {
    const summaries = entries.map(e => {
      const id = e.id ?? e.term ?? `${e.number ?? ''}-${e.name ?? ''}`;
      const blurb = (e.brief ?? e.description ?? e.definition ?? e.text ?? e.signature ?? '').slice(0, 140).replace(/\s+/g, ' ');
      return `${id} | ${e.name ?? e.term ?? id} | ${blurb}`;
    }).join('\n');

    const userContent = `Below is a flat list of all "${catalog}" entries extracted from the source, one per line: id | name | brief.

Identify groups of semantically duplicate entries — same concept under different slugs, framings, regions, or sub-aspects. For each group:
- Pick the cleanest/canonical id as the primary ("keep")
- List the other ids to merge into it ("drop")
- One-sentence reason naming what concept the group all describe

ONLY merge entries that genuinely describe the same concept. Common examples to merge:
- Same case under different names ("wikipedia-knowledge-commons" + "wikipedia-digital-knowledge-commons")
- Same concept under different framings ("X-as-relationalized-property" + "X" + "X-as-relationalized-finance")
- Sub-aspect entries that overlap fully with a parent entry
- "(Concept)" + "(Framework)" pairs

DO NOT merge entries that describe distinct cases, even if they share a name pattern:
- Different geographic instances of the same model (Bangla-Pesa vs BerkShares are both local currencies but distinct cases — keep both)
- Different sub-spheres deliberately distinguished by the source (e.g. Bollier's three Triad of Commoning spheres are intentional, not duplicates)

If no duplicates are present, return an empty merges array. Don't force merges to look productive.

Entries:
${summaries}`;

    const result = await callTool(config, DEDUP_TOOL, userContent);
    merges = (result?.merges as any) ?? [];

    mkdirSync(join(config.cacheDir, catalog), { recursive: true });
    writeFileSync(cachePath, JSON.stringify(merges, null, 2));
  }

  if (merges.length === 0) {
    console.log(`  no merges proposed`);
    return entries;
  }

  // Apply: union protocols (where applicable), drop merged entries
  const dropSet = new Set<string>();
  const protoUnions = new Map<string, string[]>();

  const idOf = (e: any): string => e.id ?? e.term ?? `${e.number ?? ''}-${e.name ?? ''}`;
  const byId = new Map<string, any>(entries.map(e => [idOf(e), e]));

  for (const m of merges) {
    const kept = byId.get(m.keep);
    if (!kept) {
      console.warn(`  WARNING: keep "${m.keep}" not in catalog — skipping`);
      continue;
    }

    if (Array.isArray(kept.protocols)) {
      const union = [...kept.protocols];
      const seen = new Set(union);
      for (const dropId of m.drop) {
        const dropped = byId.get(dropId);
        if (!dropped) continue;
        for (const p of (dropped.protocols ?? [])) {
          if (!seen.has(p)) {
            union.push(p);
            seen.add(p);
          }
        }
      }
      if (union.length > kept.protocols.length) {
        protoUnions.set(m.keep, union);
      }
    }

    for (const dropId of m.drop) {
      if (byId.has(dropId)) dropSet.add(dropId);
    }
    console.log(`  merge: ${m.keep} ← ${m.drop.join(', ')}`);
  }

  const final = entries
    .filter(e => !dropSet.has(idOf(e)))
    .map(e => protoUnions.has(idOf(e)) ? { ...e, protocols: protoUnions.get(idOf(e)) } : e);

  console.log(`  After dedup: ${final.length} (was ${entries.length}, -${entries.length - final.length})`);
  return final;
}
