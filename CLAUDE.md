# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

**governable-spaces-mcp** — Public MCP server embedding Nathan Schneider's *Governable Spaces: Democratic Design for Online Life* (UC Press / Luminos, 2024). 13 tools across 4 groups (routing, diagnostic, design, reference). Dual-licensed: MIT code + CC BY-NC-SA 4.0 embedded content.

## Commands

```bash
npm run build          # Compile TypeScript (tsc)
npm run dev            # Run directly with tsx (no build step)
npm start              # Run compiled server (dist/index.js)
npm run convert        # Re-run EPUB → markdown post-processor (adds # chapter markers)
npm run extract        # Re-run Sonnet extraction over books/governable-spaces.md (requires ANTHROPIC_API_KEY)
npm run typecheck      # tsc --noEmit

# Not in package.json scripts (run directly):
npx tsx scripts/dry-run.ts   # Sanity-check chapter chunking from books/governable-spaces.md. No API calls; no key needed.
```

## Architecture

```
src/
├── index.ts                 # MCP server — 13 tool registrations + handlers + dual transport
├── search.ts                # Substring search across all 6 catalogs
├── types.ts                 # Case, FailureMode, GovernanceForm, PolicyStrategy, GlossaryTerm, Quote
└── data/
    ├── index.ts             # Re-exports
    ├── cases.ts             # ~64 democratic-medium cases
    ├── failure_modes.ts     # ~40 failure-mode patterns + named instances (kind discriminator)
    ├── governance_forms.ts  # ~26 democratic primitives (sortition, federated, plural-voting, etc.)
    ├── policy_strategies.ts # ~21 scaled policy moves
    ├── glossary.ts          # ~89 Schneider vocabulary terms
    └── quotes.ts            # ~43 themed grounding passages

scripts/
├── convert-source.ts            # EPUB → markdown post-processor (adds # chapter markers; Kreuzberg flattens EPUB headings)
├── extract-core.ts              # Book-agnostic extraction infra (chapter chunking, ids_so_far, dedup pass, cache). Synced from book-power templates.
├── extract-data.democracy-tech.ts  # Domain config (catalog set, schemas, system prompt). Reusable across democracy-tech books.
└── dry-run.ts                   # Sanity check: confirms chapterChunks splits the source as expected (no API calls)

books/
└── governable-spaces.md     # Schneider source as flat markdown with # chapter markers. Gitignored — regenerate via `npm run convert` from the EPUB at ../book-power/books/.

.extraction-cache/           # Per-chapter result cache for restart-safe extraction. Gitignored.
```

## Tool groups (13 total)

**Routing (2):** `start_analysis`, `suggest_next_step`
**Diagnostic (4):** `diagnose_implicit_feudalism`, `find_failure_mode`, `find_precedent_case`, `list_policy_strategies`
**Design (3):** `assess_governable_space`, `find_similar_case`, `suggest_governance_forms`
**Reference (4):** `apply_democratic_mediation`, `get_glossary_term`, `find_quote`, `search_book`

## Key design decisions

- Hybrid: server provides framing scaffolding; Claude in conversation does analytical work (no LLM calls in server)
- All data embedded as TypeScript constants — no DB, no vector search
- Substring search for cross-catalog discovery (`search_book`)
- Branching entry-point (`start_analysis`) routes to one of 4 workflows: diagnose_feudalism, design_governable_space, name_failure_mode, exploring
- Dual transport: stdio (local dev) / StreamableHTTP (Railway). Mode is selected by `process.env.PORT` at runtime — set → HTTP listen on that port; unset → stdio. Railway sets `PORT` automatically. **No auth** — public, by design (book is CC BY-NC-SA, framing is for movement-building)
- `diagnose_implicit_feudalism` is intentionally heuristic and surfaces caveat: a governable space MUST give participants meaningful exit, voice, AND ownership stake (Schneider Ch. 1). Negation handling is coarse — for nuanced cases the LLM consumer should override.
- `find_failure_mode` returns both pattern entries and instance entries (kind discriminator) so the agent can show "this is X pattern, exemplified by Y, Z, W historical instances."
- `find_quote` capped at 3 results × ~200 words each, per CC BY-NC-SA fair-use discipline; each response includes attribution.
- **Known debt:** glossary is over-extracted — 89 entries vs ~25 intended. Dedup pass left warnings about `keep` ids not matching the live catalog (case mismatch on `communityRule`, missing `modpol` / `governable-stack` / `metagovernance`). A manual cull pass before the next major release is the right move; not blocking.

## How to extend

- **New tool** — add a `server.registerTool(...)` block in `src/index.ts`. If the tool returns a new shape, add the interface to `src/types.ts` first; the data files import from there. Group with the matching tools-tools section header (`// === ROUTING TOOLS ===` etc.) and update the count comment in the section header.
- **New catalog entry** — append to the relevant `src/data/<catalog>.ts` array. Each entry is typed against the corresponding interface in `src/types.ts` (`Case`, `FailureMode`, `GovernanceForm`, `PolicyStrategy`, `GlossaryTerm`, `Quote`). Run `npm run typecheck` to surface shape errors.
- **Re-extract from a revised source** — `npm run convert && npm run extract`. Requires `ANTHROPIC_API_KEY` in `.env` and the EPUB at `../book-power/books/`. Cached per-chapter in `.extraction-cache/` so partial re-runs are cheap.

## Testing

No test suite. Validate changes via:

- `npm run typecheck` — type-safety + Zod-schema sanity (catches most data-shape regressions)
- `npm run dev` then connect with [MCP Inspector](https://github.com/modelcontextprotocol/inspector) or a real Claude client to call the changed tool
- For catalog-only edits, typecheck plus one targeted tool call is usually sufficient

## Stack

TypeScript strict ESM, `@modelcontextprotocol/sdk` v1.27+, `zod` v4, `express`. Extraction script uses `@anthropic-ai/sdk` with `claude-sonnet-4-6` and prompt caching.

## Deployment

Railway (public, no auth), service `governable-spaces-mcp` under the **Book Power** Railway project. Live at https://governable-spaces-mcp-production.up.railway.app. GitHub auto-deploy from `main` is wired via Railway's GitHub app on `zhiganov/governable-spaces-mcp`.

## Source

Nathan Schneider, *Governable Spaces: Democratic Design for Online Life* (UC Press / Luminos, 2024). Free open-access PDF/EPUB/MOBI: https://luminosoa.org/books/m/10.1525/luminos.181 — DOI 10.1525/luminos.181 — CC BY-NC-SA 4.0.

## Related

Sibling MCPs from the same book-power umbrella (private): think-like-a-commoner (Bollier, public), jtbd-knowledge (Moesta + Kalbach, private), facilitating-deliberation (White, Hunter, Greaves, private), Plurality (Weyl + Tang, queued).
