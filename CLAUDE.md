# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Status: empty repo, build pending.** This is a fresh book-power-style hand-crafted MCP that hasn't been built yet. Don't start from scratch — follow the book-power umbrella's pre-flight checklist (link below) which has the canonical sequence and the templates to copy.

## What this will be

An MCP server embedding Nathan Schneider's *Governable Spaces: Democratic Design for Online Life* (University of California Press / Luminos, 2024).

- **Source:** https://luminosoa.org/books/m/10.1525/luminos.181 (PDF / EPUB / MOBI freely available)
- **License:** Source is **CC BY-NC-SA 4.0**; this MCP will dual-license: MIT for code + CC BY-NC-SA 4.0 for embedded book content (attribution to Schneider built into every quoted response).
- **Chosen domain template:** `extract-data.democracy-tech.ts` (NOT `extract-data.commons.ts` — Schneider's framing is governance-of-online-communities, distinct enough from Bollier's commons framing to warrant its own catalog set).

## Build kickoff (Linux agent — first 3 steps)

This repo's build is queued for the Linux machine. Before starting:

```bash
# 1. Sync workspace — load latest conventions and templates
git -C ~/claude-project/claude-config pull
git -C ~/claude-project/book-power pull

# If this is the first time the Linux machine is touching a book-power MCP,
# the parent folder doesn't exist yet — book-power-output/ is a workspace-root
# convention folder, not tracked by any repo, so nothing auto-creates it.
# Create it and clone this repo into the canonical slug-subfolder path:
mkdir -p ~/claude-project/book-power-output/mcp
cd ~/claude-project/book-power-output/mcp
[ -d governable-spaces ] || git clone https://github.com/zhiganov/governable-spaces-mcp.git governable-spaces
git -C ~/claude-project/book-power-output/mcp/governable-spaces pull

# 2. Download the source book (Luminos provides PDF/EPUB freely)
#    Save to ~/claude-project/book-power/books/governable-spaces.<ext>
#    Then run book-power's extract pipeline to convert to markdown:
cd ~/claude-project/book-power
npx tsx src/cli.ts process ./books/governable-spaces.pdf --output mcp --skip-copyright

# 3. Copy the democracy-tech extraction templates into this repo:
cp ~/claude-project/book-power/templates/mcp-server-handcrafted/extract-core.ts \
   ~/claude-project/book-power-output/mcp/governable-spaces/scripts/extract-core.ts
cp ~/claude-project/book-power/templates/mcp-server-handcrafted/extract-data.democracy-tech.ts \
   ~/claude-project/book-power-output/mcp/governable-spaces/scripts/extract-data.democracy-tech.ts
```

Then follow the **full build checklist** at `~/claude-project/book-power/CLAUDE.md` — the "Building a new hand-crafted MCP — pre-flight checklist" section walks every remaining step (license check, repo paths, Railway service under Book Power project, README structure, commit hygiene, distribution follow-ups).

## Why democracy-tech, not commons

Schneider's *Governable Spaces* shares vocabulary with the commons tradition (Schneider IS a commons-adjacent scholar) but its central frame is **democratic design of online governance**, not commons stewardship. The framework's distinct concepts:

- **Implicit feudalism** — the default counter-democratic pattern of online platforms (admins as fiefdom rulers)
- **Governable spaces** — platforms designed to permit democratic self-governance
- **Governable stacks** — modular composition of governance primitives across the web stack
- **Democratic mediation** — collective ownership/governance of platforms as movement strategy
- **Modular politics, metagovernance** — Schneider's vocabulary for governance-of-governance

These map awkwardly onto commons / enclosures / strategies. The democracy-tech catalog set (cases / failure_modes / governance_forms / policy_strategies / glossary / quotes) fits cleanly. See the template's header comment and book-power#22 / TLAC#7 for the design rationale.

## Customizations expected vs the template

When the build starts, expect to refine these parts of `extract-data.democracy-tech.ts`:

- `SOURCE` path — point at the converted markdown
- `SYSTEM_PROMPT`'s book metadata line is correct as-shipped (Schneider, UC Press / Luminos, 2024, CC BY-NC-SA 4.0)
- `INCLUSION CRITERIA` / `TARGET SIZES` may need refinement after the first run if catalogs land wildly off
- `extractTargetedFixedCardinality` is intentionally absent — Schneider's book has no Ostrom-equivalent fixed-cardinality catalog. If you find one during reading, add it.

## Forward links

- book-power umbrella: https://github.com/zhiganov/book-power (private — not linkable from a public README, but local docs are at `~/claude-project/book-power/`)
- Sibling MCPs:
  - **think-like-a-commoner-mcp** (Bollier, public) — first reference for the domain-template pattern
  - **jtbd-knowledge-mcp** (Moesta + Kalbach, private) — first reference for hand-crafted MCP architecture
  - **facilitating-deliberation-mcp** (MosaicLab, private) — facilitator's reference
