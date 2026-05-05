# Governable Spaces — MCP Server

An unofficial MCP server distilling Nathan Schneider's *Governable Spaces: Democratic Design for Online Life* (UC Press / Luminos, 2024) — open-access edition.

The book opens with a question anyone who has lived in a moderated online community will recognise: why does so much of digital life feel feudal? You participate for years; you build trust, follow the norms, contribute. Then one admin makes a unilateral move and there is no formal seat at the table for the people who actually live in the space. Schneider names this pattern *implicit feudalism* — not a slogan, a diagnosable structural claim — and argues the alternative, a *governable space*, has to be deliberately designed.

This MCP exposes the book's diagnostic taxonomy and design vocabulary as 13 callable tools, with citations back to the source. Use it inside Claude Desktop, Claude Code, or any MCP-compatible client when you're designing a fediverse instance, drafting platform-cooperative bylaws, examining a DAO's governance, writing up an admin overreach, or trying to find Schneider's name for a pattern you keep seeing.

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

Schneider's argument runs as a historical genealogy: implicit feudalism predates the platform era; it persists on platforms by business-model choice rather than technical necessity; alternatives exist but have to be built deliberately as *governable stacks*. The catalog reflects that genealogy.

- **Cases** — democratic-medium examples Schneider documents: Wikipedia's bureaucratic talk-page culture, the fediverse's instance-level autonomy, Loomio's worker-cooperative tooling, the Drupal community's elected governance, Ethereum DAO experiments, Porto Alegre's participatory budgeting, Decidim in Barcelona, Taiwan's listening-at-scale under Audrey Tang. Each entry names its *community*, the *governance forms* it composes, and what Schneider himself says about how it succeeds or strains.
- **Failure modes** — counter-democratic patterns Schneider names and diagnoses (*implicit feudalism*, *politics of no politics*, *digital colonialism*, *democracy theatre*, *founder lock-in*, *affective voice without effective voice*, *exit-as-democracy substitution*, *plutocratic DAO governance*, *cryptoeconomic reductionism*, *paternalism as patriarchy reconfigured*, *infrastructure mystification*) plus specific historical instances (LambdaMOO 1996, AOL community-leader unpaid labour, The WELL's 1994 sale, Linux BDFL, Reddit 2015 moderator revolt and Ellen Pao's resignation, BLM Global Network's single-board-member period, Meta's Oversight Board, El Salvador's Bitcoin adoption). Patterns cross-reference the governance forms that counter them; instances cross-reference the patterns they exemplify.
- **Governance forms** — democratic primitives Schneider documents both in the abstract and in the wild: representational voting, sortition, federated subsidiarity, plural voting (quadratic and weighted), consensus and rough consensus, *modular politics*, *metagovernance / constitutional design*, code-of-conduct enforcement, karma-based distributed moderation (Slashdot), bylaws-based community self-governance, participatory budgeting, cooperative one-member-one-vote, *governance archaeology* (treating non-Western democratic legacies as ancestors rather than extracted material).
- **Policy strategies** — Schneider's scaled moves at the policy and regulatory level: subsidiarity-based reform of platform liability (a Section 230 successor that requires demonstrable user self-governance as the price of safe harbour), antitrust as democracy-tech, public-option platform mandates, platform-cooperative tax incentives, exit-to-community securities reform, the California Cooperative Economy Act model.
- **Glossary** — Schneider's vocabulary defined as he uses it: *implicit feudalism*, *governable space*, *governable stack*, *modular politics*, *democratic mediation*, *metagovernance*, *politics of no politics*, *digital colonialism*, the *exit / voice / ownership* triad, *non-exclusive sovereignties*.
- **Quotes** — verbatim passages indexed by theme, with attribution to Schneider built into every response (per the CC BY-NC-SA license).

The categories track the book's own architecture — genealogy → patterns → primitives → policy → vocabulary — not a generic catalog template.

---

## What you can ask it to do

You don't call the tools directly. You talk to Claude in plain English, and Claude decides which tools to use. Two starting points that put the book to work:

### Diagnosing implicit feudalism

You're trying to write up, advocate against, or just *understand* a situation where a platform or online space has unaccountable admin power — a Discord owner who unilaterally bans, a subreddit where moderation is opaque, a DAO that's plutocratic in practice, a federation instance with no internal democracy. The MCP helps Claude walk Schneider's diagnostic ladder with you and surface the patterns he's already named.

> **You:** Help me write up the 2015 Reddit moderator revolt — when the major subreddits went private over the firing of Victoria Taylor and the AMA workflow collapse, ending in interim CEO Ellen Pao's resignation. I want Schneider's frame, not just a complaint about admin overreach.
>
> **Claude:** [calls `start_analysis(situation: "diagnose_feudalism")`] Schneider's diagnostic ladder: who holds unilateral power and over what; do members have meaningful exit, voice, *and* ownership stake; has the community pushed back, and what did that push produce.
>
> [calls `find_failure_mode(signs: ["volunteer mods exit en masse", "platform retains policy control", "CEO resigns"])`] Schneider catalogues this as `reddit-2015-revolt`, a canonical *instance* cross-referenced to two patterns: `implicit-feudalism` and `affective-vs-effective-voice-gap`. The pattern he draws out: moderators are unpaid labour whose work sustains the platform, but they have no formal seat at the table; the strike made the implicit explicit. Pao resigned — but Schneider notes the longer-term consequence was *tighter* platform-level policy enforcement, demonstrating the limits of moderator collective action against the platform monarchy.
>
> [calls `suggest_governance_forms(countering_failure_mode_id: "implicit-feudalism")`] Countering primitives Schneider documents: `federated-subsidiarity` (let mods set local rules without central override — what the fediverse encodes architecturally), `modular-politics` (governance components built as swappable modules rather than admin defaults), `bylaws-based-community-governance` (the garden-club move Schneider holds up as the in-person contrast that online spaces consistently fail to replicate). [calls `find_quote("implicit feudalism")`] Two grounding passages from the book for the writeup...

### Designing past plutocracy

You're designing or critiquing token-based governance — a DAO, a platform-cooperative with a governance token, a quadratic-voting experiment — and want Schneider's frame for what makes crypto governance "rediscover politics" rather than reproduce shareholder voting under a new label.

> **You:** Our DAO is one-token-one-vote on protocol decisions and a few VCs hold large stakes. Founders argue this is "democratic" because anyone can buy in. What would Schneider say, and what changes the answer?
>
> **Claude:** [calls `start_analysis(situation: "diagnose_feudalism")`] Schneider treats this directly in the crypto chapter. The relevant pattern is `plutocratic-dao-governance`: governance rights derived from token holdings rather than personhood; wealth concentrations translate directly into voting power; no counter-pressure equivalent to progressive taxation or collective bargaining. Often paired with `cryptoeconomic-reductionism` — every coordination question framed as an incentive-alignment problem, while non-economic values (justice, ecological harm, dignity) become invisible because they generate no penalty signal within the protocol.
>
> [calls `suggest_governance_forms(countering_failure_mode_id: "plutocratic-dao-governance")`] Schneider documents three counter-moves crypto culture has been working on: `plural-voting` (quadratic and weighted, so wealth doesn't convert linearly into voting power), `soulbound-identity-governance` (non-transferable tokens tied to persons, not capital — Schneider's framing: crypto "rediscovering politics," recognising souls and not just wallets), and `cooperative-democratic-governance` (one-member-one-vote vested in membership, with capital ownership barred from disproportionate governance power).
>
> [calls `find_quote("rediscover politics")`] Schneider's claim: the design problem is recognising persons, not optimising incentive alignment. [calls `apply_democratic_mediation(...)`] Here's how that translates into a concrete governance proposal you could put in front of your DAO's forum...

### Other things to try

- *"My online community has a code of conduct but the admin enforces it selectively. What does Schneider say about that?"* — surfaces `code-of-conduct-governance` and Schneider's structural critique that a CoC is insufficient under implicit feudalism without binding enforcement against admins, not just users.
- *"What's the difference between affective voice and effective voice, and how do platforms confuse them?"* — surfaces `affective-vs-effective-voice-gap`, the reaction-emoji-as-vote pattern, and Schneider's reading of cancel-culture dynamics.
- *"Reframe 'we need a benevolent dictator' in Schneider's terms."* — surfaces `linux-bdfl-model`, `founder-lock-in`, and Schneider's recurring point that BDFL emerges from a power vacuum produced by avoiding explicit governance, not from a deliberate democratic choice.
- *"Schneider compares his mother's garden club to the online spaces he administered. What was the contrast?"* — surfaces `democratic-skill-atrophy` and the eight-page-bylaws move (`bylaws-based-community-governance`).
- *"What does it actually take to make Section 230 reform pro-democracy rather than just pro-moderation?"* — surfaces `subsidiarity-as-content-liability-shield` and Schneider's argument that liability immunity should be conditional on demonstrable user self-governance.
- *"Show me how Schneider treats non-Western governance traditions in a 'governance archaeology' sense."* — surfaces `governance-archaeology`, the cowrie-shell precedent, and the Ch. 6 decolonial framing.
- *"What's a 'governable stack' and an example Schneider actually uses himself?"* — surfaces the May First example from the book and the cross-references between `governable-stacks` and the failure modes it counters.
- *"Find me Schneider's claim that implicit feudalism is itself a form of metagovernance."* — surfaces the closing-chapter passage: "Implicit feudalism has been a kind of metagovernance, and like so much metagovernance, it too often hides beneath our notice."

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
