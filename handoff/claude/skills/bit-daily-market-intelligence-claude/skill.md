---
name: bit-daily-market-intelligence-claude
description: Run the BIT daily U.S./Hong Kong market-report workflow in Claude Cowork. Use for daily research, trilingual report updates, archive/PDF checks, controlled deployment and related product adjustments.
---

# BIT Daily Market Intelligence for Claude Cowork

Use this skill only for the company-maintained **BIT Market Intelligence** workflow. The canonical repository is `williamyongbit/equity-insight-hub-v3`; the fixed public root is `https://williamyongbit.github.io/equity-insight-hub-v3/`. Do not modify the original Manus-hosted site or the legacy `YongWilliam-ai` repository.

## Select the route

Identify the user’s route before work:

| Label | Action |
|---|---|
| No label | Run the standard daily workflow. |
| `[External daily market news report]` | Read all supplied external material first; verify before using it. |
| `[side task]` | Make one scoped content, function or operational change. |
| `[minor adjustment]` | Make a constrained visual, layout, interaction or feature refinement. |
| `[Escape]` | Work on migration, connectors, skills, repositories or another task outside the daily report. |
| `[ideation]` | Evaluate an idea in an isolated draft before production change. |
| `[plan]` | Produce an implementation plan only; do not edit, publish or schedule. |

## Use Claude’s native capabilities deliberately

Turn on **Research** and web search for source discovery and cited synthesis. Use the connected company GitHub repository for current code context; sync it before every fresh task. Use Cowork for long-running file/repository work. Do not confuse GitHub context with GitHub write authorization, and do not confuse Research citations with verified Tier 1 evidence.

Read `references/bit_daily_contract.md` before daily research. Use `templates/first_supervised_run.md` for the first live run and `templates/routine_daily_run.md` only after supervised approval.

## Daily truth rules

1. Resolve the execution date/time in `Asia/Hong_Kong`; never inherit an old date.
2. Use the latest completed U.S. regular session. Use the latest completed Hong Kong session plus an exact timestamped HK intraday observation only when available. Never label intraday data as a close.
3. Read user material fully first. Treat it as a lead until verified. A search snippet is not evidence.
4. Apply the hierarchy: Tier 1 primary source, Tier 2 reputable reporting, Tier 3 lead/style context. Keep completed facts, intraday context and future catalysts separate.
5. Audit the prior thesis as confirmed, partially confirmed, invalidated or unresolved. Build one thesis from one to three evidence-backed drivers.
6. Draft all six paths in full TW/CN/EN: Overview, U.S., Hong Kong, Cross-market, This Week and Sources. Education and Analysis must differ materially.

## Product rules

Preserve the BIT white/black/blue shell, data-driven visible archive, fixed latest root, dated query history and browser-native whole-report PDF. Keep language and PDF controls visible at desktop and narrow mobile widths.

For the U.S. section and printable document, use this sequence: completed-session context, macro/market drivers, **Stocks / Industry Chain** fact–meaning–next-validation cards, then the dark Sector Heatmap. Retain 1D/5D/20D controls and green-positive/grey-neutral/orange-red-negative semantics. Do not restore retired SVG export, breadth summary or unproven-claims cards.

For Hong Kong, maintain the dual clock: prior completed close; timestamped intraday state if any; post-close turnover/Stock Connect confirmation; and the next validation window.

## Release gate

Inspect the latest architecture before editing; do not force legacy-pointer or five-path instructions onto the current product. Preserve historical routes. Run the applicable date validator, `pnpm check`, `pnpm build`, desktop/mobile/PDF browser checks, language/mode checks, archive history checks and public cache-busted verification.

If any source, evidence, localization, build, visual, authorization or deployment gate fails, keep the prior public report and state `NOT_DEPLOYED`. Never claim a report is live until the public fixed root is verified after the `main` and `gh-pages` updates.

Never place secrets or licensed/private material in prompts, files, code, commits or reports. Do not give personalized investment instructions or guaranteed-return language. Use a neutral internal research, AI-assisted, non-advice disclosure.
