# Governable Spaces — MCP Server

An unofficial MCP server embedding Nathan Schneider's framing of democratic design for online life from *Governable Spaces: Democratic Design for Online Life* (UC Press / Luminos, 2024).

> Built for: democracy-tech builders, governance designers, platform-cooperative organizers, fediverse implementers, DAO designers, civic-tech researchers. Use it inside Claude Desktop, Claude Code, or any MCP-compatible client to apply Schneider's framing to a real situation — diagnose implicit feudalism, find precedent democratic-medium cases, surface countering governance forms, or reframe a market/feudal-mind problem.

The server is hosted publicly. No account, no API key, no install required — just point your Claude client at the URL.

---

## Quickstart — Claude Desktop

If you use the Claude Desktop app:

**1. Open your Claude Desktop config file.**

| Your OS | File location |
|---|---|
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |
| Linux | `~/.config/Claude/claude_desktop_config.json` |

If the file doesn't exist, create it.

**2. Add this entry.** If you already have other `mcpServers`, add `"governable-spaces"` alongside them; otherwise paste the whole block:

```json
{
  "mcpServers": {
    "governable-spaces": {
      "url": "https://governable-spaces-mcp-production.up.railway.app/mcp",
      "transport": "http"
    }
  }
}
```

**3. Quit and restart Claude Desktop.** (Fully quit — closing the window doesn't reload MCP servers.)

**4. Verify it's connected.** Open a new conversation and type:

> What MCP tools do you have available?

Claude should mention 13 tools whose names start with `start_analysis`, `diagnose_implicit_feudalism`, `find_failure_mode`, `find_quote`, etc. If not, the config file probably has a syntax error or the wrong path — see [troubleshooting](#troubleshooting) below.

## Quickstart — Claude Code

Run this once from your terminal:

```bash
claude mcp add --transport http -s user governable-spaces https://governable-spaces-mcp-production.up.railway.app/mcp
```

Then restart your Claude Code session and check `claude mcp list` — you should see `governable-spaces ... ✓ Connected`. The 13 tools become available with names like `mcp__governable-spaces__start_analysis`.

---

## What's in the catalog

Schneider's central distinction — *governable space vs. implicit feudalism* — shapes the data:

- **Cases** — democratic-medium examples Schneider documents (Wikipedia, Mastodon / fediverse, Loomio, Decidim, the Drupal community, the Ethereum DAO ecosystem, etc.). Each entry names its **community** (who participates), the **governance forms** it uses, and 2–5 concrete **democratic features** with MUST / SHOULD / MUST NOT modal markers drawn directly from Schneider's framing.
- **Failure modes** — recurring counter-democratic patterns (implicit feudalism, politics of no politics, digital colonialism, captured-DAO plutocracy, etc.) plus specific historical instances Schneider names (the 2023 Reddit API revolt, Twitter's acquisition, etc.). Each entry has a `kind` discriminator (`pattern` or `instance`) and cross-references to the governance forms that counter it.
- **Governance forms** — democratic primitives with diagnostic questions: representational voting, sortition, federated subsidiarity, plural voting, consensus, modular politics, metagovernance, etc. Each lists which failure modes it counters and which cases exemplify it.
- **Policy strategies** — scaled moves that embed democratic design at the policy/regulatory level: governable-stack acts, antitrust as democracy-tech, public-option mandates, platform-cooperative tax incentives, exit-to-community securities reform, etc.
- **Glossary** — Schneider's vocabulary (implicit feudalism, governable space, governable stack, modular politics, democratic mediation, metagovernance, politics of no politics, digital colonialism, etc.).
- **Quotes** — verbatim passages indexed by theme, with full attribution to Schneider built into every response that surfaces them (per the CC BY-NC-SA license).

Example of what a "democratic feature" looks like — from the Wikipedia entry:

> - "MUST surface community-developed policies through talk pages and noticeboards rather than top-down admin fiat"
> - "SHOULD subject administrator actions to community review and appeal processes"
> - "Editors MUST reach consensus or supermajority before major content or policy changes take effect"

---

## What you can ask it to do

You don't call the tools directly. You talk to Claude in plain English, and Claude decides which tools to use. Two common starting points:

### Diagnosing implicit feudalism

You're trying to write up, advocate against, or just *understand* a situation where a platform or online space has unaccountable admin power — a Discord owner who unilaterally bans, a subreddit where moderation is opaque, a DAO that's plutocratic in practice, a federation instance with no internal democracy. The MCP helps Claude walk Schneider's diagnostic ladder with you.

> **You:** Help me write up the 2023 Reddit API revolt as a case study. The volunteer moderators of the largest subreddits went on strike when Reddit's CEO unilaterally killed third-party apps and broke their workflows. I want to ground this in real framing, not just complain about admin overreach.
>
> **Claude:** [calls `start_analysis(situation: "diagnose_feudalism")`] Schneider names four diagnostic angles: who has unilateral power and over what? Do members have meaningful voice / exit / ownership? What domain? Has the community pushed back?
>
> [calls `find_failure_mode(signs: ["unilateral CEO", "moderators no voice", "no recourse"])`] Closest matched pattern: **implicit feudalism**. The 2023 Reddit revolt is one of Schneider's canonical instance examples — moderators are unpaid lord-tenants whose labor sustains the platform but who have no formal seat at the table when platform-wide decisions get made. The strike made the implicit explicit.
>
> [calls `suggest_governance_forms(countering_failure_mode_id: "implicit-feudalism")`] Schneider's countering primitives include: federated subsidiarity (let mods set local rules without central override), community-ownership / cooperative-conversion, modular politics (plug-in governance layers), and democratic mediation (structured appeal + recall procedures). [calls `find_quote("implicit feudalism")`] Here are two grounding passages you can quote in the writeup...

### Designing a governable space

You're building or stewarding an online community — a Mastodon instance, a co-op platform, a DAO, a research network — and want to design democratic accountability into the structure rather than relying on a "benevolent dictator."

> **You:** I'm starting a small federated discussion platform for environmental researchers — maybe 200 people, distributed across a few institutions. What does Schneider say about designing this as a governable space rather than yet another admin-run forum?
>
> **Claude:** [calls `start_analysis(situation: "design_governable_space")`] Schneider's frame: a governable space MUST give participants meaningful exit, voice, AND ownership stake. Let's walk through what each requires.
>
> [calls `find_precedent_case(domain: "federated_network", what_governed: "moderation and policy")`] Two precedent cases worth studying: Mastodon's federated moderation (instance-level rule-setting + cross-instance defederation as exit mechanism) and the Drupal community's elected governance.
>
> [calls `assess_governable_space`] Let me walk you through Schneider's four structural requirements with diagnostic questions: voice, exit, ownership stake, accountability... [continues]
>
> [calls `suggest_governance_forms(domain: "federated_network")`] Forms that fit: federated subsidiarity (each instance sets its own rules), elected steering councils, community-policy-making via talk pages or proposals, sortition-based dispute resolution. Here are the diagnostic questions for each...

### Other things to try

- "Reframe 'we need a benevolent dictator' in democratic-mediation terms" — pulls in Schneider's reframe move
- "What does Schneider mean by metagovernance?" — uses the glossary
- "Find me a Schneider passage on the 'politics of no politics'" — surfaces verbatim quotes with citations
- "Is this DAO actually democratic, or just an oligarchy with token-voting?" — surfaces failure-mode signals (captured DAO, plutocratic governance)
- "What policy moves would scale platform cooperatives?" — surfaces policy strategies

---

## Troubleshooting

**Claude doesn't list any Governable Spaces tools after restart.**
Most often a JSON typo or wrong file path. On macOS: `cat ~/Library/Application\ Support/Claude/claude_desktop_config.json` should print your config — if not, the file is in the wrong place or has malformed JSON. Run the file's contents through a JSON validator (paste into https://jsonlint.com).

**Claude Code says "Connection failed".**
Confirm the URL works directly: `curl https://governable-spaces-mcp-production.up.railway.app/health` should return `{"status":"ok",...}`. If yes, the server is up — check `claude mcp list` to see what scope and URL Claude Code recorded.

**Tools work but responses feel generic.**
The MCP scaffolds Schneider's framing; the depth comes from how specifically you describe your situation. Vague prompts get vague tool calls. Lead with the concrete case ("the 2023 Reddit API revolt", "our small federated researcher platform") and let Claude route from there.

---

## All 13 tools (for reference)

You don't usually call these directly — Claude picks them based on your prompt — but here's the surface:

- **Routing:** `start_analysis`, `suggest_next_step`
- **Diagnostic:** `diagnose_implicit_feudalism`, `find_failure_mode`, `find_precedent_case`, `list_policy_strategies`
- **Design:** `assess_governable_space`, `find_similar_case`, `suggest_governance_forms`
- **Reference:** `apply_democratic_mediation`, `get_glossary_term`, `find_quote`, `search_book`

---

## Run it locally (advanced)

If you'd rather host the MCP yourself (offline, custom catalog, learning, contributing):

```bash
git clone https://github.com/zhiganov/governable-spaces-mcp.git
cd governable-spaces-mcp
npm install
npm run build
```

Then add it to Claude Code as a local stdio server. The path you need is the absolute path to `dist/index.js` — run `pwd` inside the cloned directory and append `/dist/index.js`:

```bash
claude mcp add-json governable-spaces '{"command":"node","args":["<absolute-path>/dist/index.js"],"type":"stdio"}' -s local
```

(For Claude Desktop, the equivalent JSON in your config file uses `"command"` and `"args"` instead of `"url"`.)

---

## License

Dual-licensed.

- **Source code:** MIT.
- **Embedded book content** (catalogs, quotes, glossary): CC BY-NC-SA 4.0. Attribution to Nathan Schneider required, non-commercial only. See [LICENSE](LICENSE).

Source book: [Governable Spaces on Luminos](https://luminosoa.org/books/m/10.1525/luminos.181) — free open-access PDF/EPUB/MOBI from UC Press.

## Development

Source: TypeScript ESM, `@modelcontextprotocol/sdk`, `zod`. Stack documented in [CLAUDE.md](CLAUDE.md).

Catalogs are extracted from the source markdown via `npm run extract` (requires `ANTHROPIC_API_KEY` in `.env`). The extraction pipeline uses `claude-sonnet-4-6` with structured tool-use, prompt caching, and a post-extraction semantic dedup pass — see `scripts/extract-core.ts` and `scripts/extract-data.democracy-tech.ts` (templates from the book-power umbrella, private).

EPUB → markdown conversion: Kreuzberg flattens EPUB heading structure, so `scripts/convert-source.ts` post-processes the extracted text to add `# Chapter` markers based on Schneider's table of contents. Re-runs from the EPUB are idempotent.

## Related

Sibling MCPs under the book-power umbrella (umbrella repo private):

- [think-like-a-commoner-mcp](https://github.com/zhiganov/think-like-a-commoner-mcp) — Bollier's commons framing (shipped, public, CC BY-NC-SA)
- jtbd-knowledge-mcp — JTBD framing combining Moesta + Kalbach (shipped, private — copyrighted source)
- facilitating-deliberation-mcp — MosaicLab's facilitator reference (shipped, private — copyrighted source)
- Plurality (Weyl & Tang) — queued, will be public (CC0 source)
