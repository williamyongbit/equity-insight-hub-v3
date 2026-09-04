# BIT Daily Market Intelligence — Cross-AI Continuity Handoff

**Prepared:** 4 September 2026, Asia/Hong_Kong  
**Purpose:** Let Claude Cowork, Claude Code, or another capable AI safely take over the BIT Daily Market Intelligence workflow without relying on historical chat context.  
**Controlling rule:** **The current company GitHub repository is the source of truth.** This document is a map to that source, not a replacement for it.

---

## 1. Executive status

The production website is a public, static GitHub Pages report product for the BIT U.S. Equities Team. It has an approved white/black/blue BIT design; six reader sections; full Traditional Chinese, Simplified Chinese and English localization; genuinely distinct Education and Analysis modes; a visible, data-driven historical archive; 1D/5D/20D sector heatmap controls; and a browser-native whole-report PDF/print route.

The latest **publicly verified production report** at the time of this handoff is the **1 September 2026** edition. Its fixed-root report and historical editions were verified after deployment. The public product must not be confused with the original Manus-hosted site or the legacy personal GitHub repository.

The daily workflow has been expanded at the **policy and handoff level**, but its new AM/PM data model and richer analytical modules have **not yet been implemented in website code**. This is deliberate. The next AI must first plan and then supervise the smallest safe implementation: an AM/PM same-date revision envelope and a Thesis Ledger data foundation. It must **not** redesign the site, set an autonomous publishing schedule, or make broad visual changes before that foundation is approved and tested.

---

## 2. Canonical assets and strict boundaries

| Item | Canonical location or value | Operating rule |
|---|---|---|
| Production source repository | `https://github.com/williamyongbit/equity-insight-hub-v3` | The sole repository for daily maintenance. Work only on its `main` and configured `gh-pages` branches. |
| Fixed public root | `https://williamyongbit.github.io/equity-insight-hub-v3/` | The root always serves the most recently approved daily edition. |
| Latest source-of-truth main commit at handoff | `6830e86` — **Expand BIT intelligence workflow and Claude handoff** | Always run `git fetch origin` and inspect `origin/main`; this may become stale. |
| Last public report source commit | `665175b` — **Publish 1 September BIT daily market intelligence** | Contains the latest published report data, components, routing and checks. |
| Last main verification record | `92c6d17` — **Record 1 September public verification** | Records successful public fixed-root/history verification. |
| Last Pages bundle commit | `89b39dc` on `gh-pages` | Latest known static deployment bundle at handoff. Verify current `origin/gh-pages`, not this number alone. |
| Legacy personal repository | `YongWilliam-ai/equity-insight-hub-v3` | Historical only. Do not push, deploy or maintain daily reports there. |
| Original Manus-hosted site | Separate original website | Never modify it under this workflow. |

> **Do not trust an old Claude chat, a prior prompt, or this document’s commit numbers over the current repository.** At the start of every task, run `git fetch origin`, then inspect the current log, `data/report_archive.json`, `client/src/App.tsx`, the current latest hub/component and the latest dated report folder.

---

## 3. What has already been completed

The following production work has been completed and should be preserved.

| Area | Completed state |
|---|---|
| Company migration | Daily maintenance moved from the personal repository to `williamyongbit/equity-insight-hub-v3`. The company GitHub Pages root is live. |
| Stable routing | The root renders the latest daily edition. Dated query routes preserve historical editions, including 21, 24, 25, 26, 27 and 28 August and 1 September 2026. |
| Archive | `data/report_archive.json` drives a visible edition archive. Each new date appends a record; historical records must not be overwritten. |
| Language and modes | TW/CN/EN are complete reader-facing locales. Education and Analysis modes must provide different value, not translated duplicates. |
| U.S. structure | Completed U.S. session → macro/market drivers → Stocks / Industry Chain fact–meaning–next-validation cards → dark Sector Heatmap. |
| Heatmap | 1D/5D/20D controls remain. Performance semantics are **green positive / grey neutral / orange-red negative**. The old SVG export control and retired breadth/unproven-claims cards remain removed. |
| Hong Kong logic | Dual clock is established: prior completed HK session plus only an explicitly timestamped intraday snapshot when available; never call an intraday level a close. |
| PDF | `?export=pdf` serializes all six sections in the selected language with a browser-native Print/Save as PDF action; it does not auto-open a print dialogue. |
| Responsive behavior | Language, archive and full-PDF controls were checked on desktop and 390px mobile. Page-level horizontal overflow is not permitted. |
| 26–28 Aug and 1 Sep reports | These daily editions were built, validated, pushed to `main`, deployed to `gh-pages`, then checked through cache-busted public URLs. |
| Claude migration package | Initial Cowork migration material was added at `a136cb4`, then refreshed and expanded at `6830e86`. |

---

## 4. Current product contract — never regress these rules

### 4.1 Six-section report and language contract

Every latest edition exposes all six sections in **Traditional Chinese, Simplified Chinese and English**:

1. Overview
2. U.S.
3. Hong Kong
4. Cross-market
5. This Week
6. Sources

Education mode must teach how to interpret the evidence. Analysis mode must state the thesis, confirmation cues, invalidation conditions and research implications. Do not let the two modes become copy-identical.

### 4.2 Brand and interaction contract

Use the approved BIT shell: white field, black typography, black BIT wordmark, official blue app mark and restrained BIT-blue interactive states. Do not restore old ivory/brass styling, default generic dashboard cards, dark cyber styling, excess rounded cards or a large centred landing-page treatment.

Keep the 1D/5D/20D controls, the sector heatmap, native PDF/print behavior and visible archive. Do **not** restore the old SVG export, the breadth summary card, the unproven-claims card or wording that explains BIT Blue as a performance meaning.

### 4.3 Historical preservation contract

The latest root is mutable only for the most recent approved edition. Every past approved report remains accessible through its dated query route. Never silently alter approved historical wording, heatmap basis or sources when adding a new date. Test at least one historical route before every release; for a material routing change, test all retained routes.

### 4.4 Hong Kong data boundary

Hong Kong is an analytical desk—not a decorative timeline. When evidence exists, show: previous completed close; current timestamped intraday observation; late-session/official close; index/sector/company context; post-close turnover and Stock Connect/Southbound confirmation; cross-market transmission; and next validation window. If official close, turnover or flows are not independently obtained, say so honestly rather than filling a placeholder number.

---

## 5. Permanent command router

The labels below are **workflow labels inside the Skill**, not native platform slash commands. In Claude, enable the custom Skill and begin the message with the relevant label.

| Route | Use it for | What it must not do |
|---|---|---|
| Default / no label | Normal recurring daily report workflow | Assume yesterday’s date or bypass evidence gates. |
| `[External daily market news report]` | Daily report based on supplied outside articles, screenshots or briefs | Treat external material as ground truth. |
| `[side task]` | One adjacent content, data, operational or function change | Disturb the active report/archive unless requested. |
| `[minor adjustment]` | Narrow visual, layout, interaction or feature correction | Change evidence semantics, localization or brand rules unintentionally. |
| `[Escape]` | Migration, connectors, skills, repositories or an unrelated operating task | Publish, modify the report or mutate the site unless the user explicitly requests it. |
| `[ideation]` | Hypothesis, effect/risk analysis and local-only prototype | Make a permanent product change or public deployment. |
| `[plan]` | Decision-complete implementation plan | Edit code, deploy, schedule or mutate systems. |

Promote a proposed new trigger or permanent product behavior only through:

> **Hypothesis → local test / consequence analysis → `[plan]` → explicit approval → supervised real-use test → permanent rule.**

---

## 6. Daily evidence and editorial contract

### 6.1 Timing and three evidence buckets

Resolve the actual execution time in `Asia/Hong_Kong` at the start of every report. The report date is the HKT generation date.

| Bucket | What belongs there | Rule |
|---|---|---|
| Completed-market facts | Latest completed U.S. regular session; latest completed HK session | Cite the as-of date and explain the prior market move. |
| HKT intraday context | An HK or other live reading obtained at a precise timestamp | Include provider/latency limitation; never call it a close. |
| Future catalysts | Scheduled data, earnings, policy event or explicit scenario condition | Give source, date/time or a clearly conditional label. |

Never let one sentence blur a completed close, current intraday level and future event.

### 6.2 Source hierarchy

| Tier | Role | Examples |
|---|---|---|
| Tier 1 | Primary facts, schedules and filings | Company IR, SEC, HKEX/HKEXnews, exchanges, Treasury, Federal Reserve, BLS, BEA, HKMA, PBOC, NBS, SAFE, CSRC. |
| Tier 2 | Cross-check and market context | Reuters, accessible Bloomberg, CNBC, FT, WSJ, Yahoo Finance, Investing.com. |
| Tier 3 | Lead generation/style only unless independently confirmed | User briefs, Futunn, TechFlow, broker summaries, social posts, BIT morning material. |

A search snippet is discovery, not evidence. Do not bypass paywalls. State exact access limits. Never create synthetic prices, fund flows, citations, earnings consensus, implied moves or causal explanations.

### 6.3 Thesis discipline

Before drafting, read the prior thesis and classify each watch item as **confirmed, partially confirmed, invalidated or unresolved**. Write one concise thesis that answers:

1. What did the last completed session trade?
2. Which one to three evidence-backed drivers explain it?
3. What appears priced versus still uncertain?
4. What would confirm or weaken the thesis next?

Use the chain:

> **Expectation → evidence → transmission → price reaction → confirmation or invalidation.**

For every material company, distinguish what happened, why it matters, the actual share-price reaction, what the reaction does or does not imply and the next validating datum. A single stock reaction does not prove an entire industry chain.

### 6.4 Disclosure and safety

Use source-based, AI-assisted, neutral internal-research language. Include a non-advice disclosure. Do not offer personalized buy/sell/short instructions, guaranteed returns, client-specific advice or a claim that the report identifies certain winners.

Never include secrets, tokens, passwords, cookies, user browser profiles, private company data, client information or unlicensed research in prompts, source files, commits, reports or attachments.

---

## 7. The approved future upgrade: policy is complete; code is not

The richer system described below has been documented and committed at `6830e86`. It is **not yet a live web implementation**. Treat it as the next planned development sequence, not proof that the product already has those modules.

### 7.1 Two same-date revisions

| Revision | Target HKT window | What it contains | What it must not claim |
|---|---|---|---|
| Morning Intelligence Edition | 09:30–10:00 | Completed U.S. session; prior completed HK close; same-day HK opening setup; global cross-asset context; weekly catalyst set | A full HK close analysis or live HK values without a timestamp. |
| HK Close Intelligence Edition | 17:00–17:30 | Update of the **same report date** after reliable HK completed evidence: breadth, turnover, Southbound, liquidity, China policy, HKEX/company events and HK→U.S. read-through | A second daily product or invented close/flow analysis when data is absent. |

The PM revision must preserve the AM basis and store `edition` (`AM`/`PM`), `cutoff_hkt`, `revision_timestamp` and a revision history. Do not add a second archive date merely because a close update occurred.

### 7.2 Twenty U.S./global research selection slots

This is a **coverage map**, not a 20-item reader-facing quota. Include only materially relevant and verified items.

| Cluster | Slots |
|---|---|
| Market regime | Index direction; regime/confidence; breadth/leadership; volatility/positioning |
| Rates and policy | Treasury curve; yield-sensitive valuation; Fed communication/pricing; fiscal/liquidity action |
| Macro | Inflation; labour/growth; consumption/credit; official calendar and expectation |
| Earnings and companies | Expectation gap; guidance/cash flow/margin; price reaction; verified industry-chain link |
| Cross-asset | Energy/commodity shock; FX; credit/fixed-income stress/liquidity; crypto/digital-asset signal |

### 7.3 Five Hong Kong close lenses

| Lens | Reader question | Primary evidence examples |
|---|---|---|
| Index and participation | Who drove HSI/HSCEI/HSTECH/HSBIO and was the move broad? | Hang Seng Indexes, HKEX quotations |
| Flow and liquidity | Did turnover, Southbound or positioning confirm the move? | HKEX/Stock Connect, HKEX short-selling, SFC where available |
| Funding | Did USD/HKD, HIBOR or Aggregate Balance change a liquidity-sensitive sector? | HKMA |
| China policy/macro | Did official China policy or macro have a material transmission mechanism? | PBOC, NBS, SAFE, CSRC, State Council, MOF |
| Company/cross-market | Which three to six HKEX/company items matter, and does HK evidence inform tonight’s U.S. session? | HKEXnews, company IR, verified ADR link |

### 7.4 Proposed analytical modules

Implement only through progressive disclosure, only when evidence exists, and one module at a time:

| Module | Minimum fields |
|---|---|
| Market Regime | Label, confidence, evidence and invalidation condition |
| Thesis Ledger | Prior watch, current status, evidence and next test |
| Driver / Transmission Chain | Driver → mechanism → observed price/breadth evidence → status |
| Expectation Gap | Expectation, actual, guidance, reaction and interpretation |
| Event Risk Map | Catalyst, priced risk if verifiable, positive/negative condition and read-through |
| Flow Confirmation | Index, turnover, baseline, Southbound, breadth and status |
| Scenario Frame | Base condition, confirm, weaken/invalidate and affected assets |
| Source Confidence Drawer | Source/tier, access limit and claim status |

### 7.5 Next smallest approved implementation

The next agent should **not** build every module. First use `[plan]` for **Phase 1: AM/PM same-date revision data envelope and Thesis Ledger foundation**. The plan must specify files, schema changes, back-compatibility for historical reports, validator updates, test commands, mobile/PDF acceptance and rollback.

After William explicitly approves that plan, use `[ideation]` to make a local-only prototype. Then conduct one supervised Morning Edition and one supervised same-date HK Close Edition. Only when both pass local and public-release gates should a recurring schedule or another module be considered.

---

## 8. Repository map for the next AI

| Need | Main paths |
|---|---|
| Application router | `client/src/App.tsx` |
| Latest report implementations | `client/src/pages/DailySep01Full.tsx`, `client/src/pages/DailyHubSep01.tsx` at handoff; always inspect current latest after fetch |
| Historical report implementations | `client/src/pages/DailyAug*.tsx` and their dated query routes |
| Dated evidence | `data/YYYY-MM-DD/us_market.json`, `hk_market.json`, `thesis.json`, `sources.json` |
| Heatmap analytics | `data/YYYY-MM-DD/market_analytics*.json`, `market_breadth_raw.json` |
| Archive registry | `data/report_archive.json` |
| Daily validators | `scripts/validate_*_report.mjs` |
| Main internal briefing | `bit_daily_market_intelligence_YYYY-MM-DD_main.md` |
| Production procedure | `handoff/claude/BUILD_AND_DEPLOYMENT_RUNBOOK.md` and current date-specific validation scripts |
| Claude project rules | `handoff/claude/CLAUDE_COWORK_PROJECT_INSTRUCTIONS.md` |
| Claude migration guide | `handoff/claude/CLAUDE_COWORK_MIGRATION_2026-08-26.md` |
| Claude custom Skill source | `handoff/claude/skills/bit-daily-market-intelligence-claude/` |
| Upgrade roadmap | `docs/INTELLIGENCE_UPGRADE_ROADMAP_2026-09-01.md` |
| Current cross-AI readiness prompt | `handoff/claude/CLAUDE_GITHUB_STATE_AND_INTELLIGENCE_UPGRADE_PROMPT_2026-09-01.md` |
| Permanent Manus Skill | `/home/ubuntu/skills/bit-daily-market-intelligence/` |

Some old documents in `handoff/claude/` reflect prior migration phases. `handoff/claude/DAILY_WORKFLOW.md` is now an explicit pointer to the controlling files and must not be used as an independent single-cycle contract.

---

## 9. Exact smooth migration process: Manus + GitHub → Claude + GitHub

### Step 1 — Freeze the correct source of truth

1. In Claude Desktop, ensure the connected repository is **only** `williamyongbit/equity-insight-hub-v3` on `main`.
2. Do not upload a duplicate full-repository ZIP. GitHub and the local clone should remain the working context.
3. At the beginning of every task, Claude must run or reason through:

```bash
git fetch origin
git log --oneline -12 origin/main
git status --short
```

4. Claude must read `data/report_archive.json`, `client/src/App.tsx`, the active latest hub/component and the newest dated data. If a chat claim conflicts with those files, repository state wins.

### Step 2 — Refresh Claude’s permanent context once

1. Upload `bit-daily-market-intelligence-claude-2026-09-01.zip` through **Customize → Skills → Create skill → Upload a skill**, then enable it.
2. Replace the existing Cowork Project Instructions with `handoff/claude/CLAUDE_COWORK_PROJECT_INSTRUCTIONS.md`.
3. Keep `handoff/claude/CLAUDE_COWORK_MIGRATION_2026-08-26.md` and `docs/INTELLIGENCE_UPGRADE_ROADMAP_2026-09-01.md` in project context.
4. Do not upload `pasted_content_20.txt`, `pasted_content_21.txt` or `pasted_content_22.txt` as operational truth. They are historical conversation material. The upgrade they describe has already been reconciled into the current repository documents.

### Step 3 — First Claude task: readiness only

Create a fresh Cowork task. Paste the full content of `handoff/claude/CLAUDE_GITHUB_STATE_AND_INTELLIGENCE_UPGRADE_PROMPT_2026-09-01.md`. Its expected output is a short readiness memo, not code.

The memo must identify the actual latest repository commit/date, fixed root, command router, current report structure, AM/PM proposal and the smallest next Phase 1. It must list any mismatch between current repository state and an old handoff. It must not commit, push, deploy, schedule or change report data.

### Step 4 — Ask for Phase 1 plan after readiness is correct

Send this exact follow-up:

```text
[plan]
Based only on the repository state you just self-audited, prepare a decision-complete Phase 1 plan for the AM/PM same-date revision data envelope and Thesis Ledger foundation. State the exact files and data schemas, backward compatibility for every historical route, validation commands, desktop/390px/PDF acceptance checks, public-release gates and rollback plan. Do not edit code, do not push and do not deploy.
```

Review the plan. It must not propose a total site redesign, a second site, a second archive date, automatic publication, fake HK flow data or a broad dashboard rebuild.

### Step 5 — Implement only with explicit approval

After approval, send a new `[ideation]` or `[side task]` task asking for a **local-only Phase 1 prototype**. The agent must complete data/type/build/browser validation first. Review the prototype. Only then grant a supervised real-use test.

### Step 6 — Daily routine after Phase 1 supervision

For each daily morning source pack, open a fresh task and use:

```text
[External daily market news report]
Use the enabled BIT Daily Market Intelligence Skill and current company repository. First self-audit origin/main, the archive, router and latest dated report. Read all supplied material first, then independently verify material facts. Produce the Morning Intelligence Edition for the actual HKT date. Preserve all evidence boundaries and report invariants. Do not publish if any evidence, localization, build, browser, GitHub or public-Pages gate fails; report NOT_DEPLOYED with the blocker.

Daily source pack:
[paste new articles, official links, screenshots, mentor focus and constraints]
```

For the same-date HK close revision, only after 17:00 HKT and only with reliable completed-HK data:

```text
[External daily market news report]
Run the HK Close Intelligence Edition for the same HKT date as the existing Morning Edition. First self-audit current origin/main and the date’s AM revision. Add only independently verified completed-HK evidence through the five close lenses. Preserve the AM revision and history, store edition/cutoff/revision timestamp, rerun all applicable validation and public checks, and state UNKNOWN / UNVERIFIED for unavailable turnover, Southbound, funding or flow evidence. Do not create a second daily archive date.
```

---

## 10. Daily release runbook

### Before implementation

1. State the active route and execution time in `Asia/Hong_Kong`.
2. Read the user’s latest material completely.
3. Inspect previous report/thesis and classify prior watch items.
4. Determine completed U.S. date, completed HK date, optional exact intraday HKT snapshot and scheduled catalysts.
5. Research through Tier 1 and Tier 2; preserve access limitations.
6. Create or update dated structured data before relying on JSX text.

### Implementation and local validation

1. Inspect the current architecture before editing; do not copy a historical component blindly.
2. Preserve historical components/data/paths.
3. Use a date-specific validator where available; create one if the new data contract needs a dedicated check.
4. Run data validation, `pnpm check` and `pnpm build`.
5. Inspect desktop and 390px mobile views, all language controls, Education/Analysis distinction, heatmap windows, sources, archive and `?export=pdf`.
6. Check browser console errors. Distinguish a third-party/debug collector warning from a real application failure.

### GitHub Pages release gate

1. Inspect `git diff`, `git status`, secrets and historical route impact.
2. Commit only to company `main`; push only to `origin/main`.
3. Deploy the built static output only to company `gh-pages` using the established clean checkout/deployment procedure.
4. Wait for propagation. Verify a cache-busted fixed-root public URL, then at least one historical route; when routing changed, test all retained history routes.
5. Only after public verification may the report state `DEPLOYED`.

If a source, validation, build, visual, access, push or Pages propagation gate fails, leave the prior public edition in place and end with **`NOT_DEPLOYED`** plus the exact blocker and missing evidence. Never claim success based on a local build alone.

---

## 11. Required end-of-run status table

Every completed daily run should end with a compact status table containing:

| Field | Required value |
|---|---|
| HKT run/cutoff time | Actual execution time, not a prompt date |
| Completed U.S. date | Latest completed regular session |
| Completed HK date | Latest independently supported completed HK session |
| HK intraday state | Exact timestamp/provider/latency, or unavailable |
| Thesis status | Confirmed/partial/invalidated/unresolved prior-watch classification |
| Key source limits | Missing access, data or tier limitation |
| Validations | Data, type, build, desktop, mobile, PDF, locale/mode, history and public verification |
| Source commit | `main` report source commit |
| Pages commit | `gh-pages` static bundle commit |
| Public URL | Cache-busted fixed root used for verification |
| Deployment state | `DEPLOYED` or `NOT_DEPLOYED` |
| Unresolved claims | Items consciously withheld or pending |

---

## 12. Known risks and non-negotiable safeguards

| Risk | Required safeguard |
|---|---|
| Old Claude context directs work to personal repo or outdated date | Repository self-audit at every fresh task; `origin/main` is controlling. |
| Richer coverage becomes a superficial 25-headline feed | Use 20+5 as a selection map; publish only material, evidence-backed driver chains. |
| Morning HK snapshot is presented as complete analysis | Separate AM setup from PM close revision; show timestamp and data limitation. |
| PM update overwrites or loses morning reasoning | Same-date revision history with `edition`, `cutoff_hkt`, `revision_timestamp`. |
| Unavailable HK close/flow leads to made-up values | State `UNKNOWN / UNVERIFIED`; do not publish a synthetic close analysis. |
| Website is redesigned before data architecture works | Phase 1 data/revision and Thesis Ledger first; modules only after plan, approval and supervised test. |
| Claude publishes on failing tests | Keep Manual/Auto safety checks; never use Skip. Publish only after all gates and public cache-busted check. |
| Secrets leak into repository/handoff | Configure access outside the chat; never store credentials in Skill, prompt, code or report. |

---

## 13. Final instruction to the next AI

You are taking over a **working production research website**, not a blank prototype. Preserve the existing public product and historical reports. Your first job is to read the current company repository and reconcile documentation with code. Your second job is to give William a narrow, reviewable Phase 1 plan. Your third job—only after explicit approval—is to build and test the AM/PM same-date revision and Thesis Ledger foundation locally.

Do not mistake more information for better intelligence. The objective is a source-auditable market decision framework that answers what moved, why it moved, what is priced, what confirms it and what invalidates it. Keep evidence, timing, language, public release and historical preservation stricter than the writing itself.

---

## References inside the repository

1. `handoff/claude/CLAUDE_COWORK_PROJECT_INSTRUCTIONS.md`
2. `handoff/claude/CLAUDE_COWORK_MIGRATION_2026-08-26.md`
3. `handoff/claude/skills/bit-daily-market-intelligence-claude/skill.md`
4. `handoff/claude/skills/bit-daily-market-intelligence-claude/references/bit_daily_contract.md`
5. `handoff/claude/skills/bit-daily-market-intelligence-claude/references/intelligence_system_upgrade.md`
6. `docs/INTELLIGENCE_UPGRADE_ROADMAP_2026-09-01.md`
7. `handoff/claude/BUILD_AND_DEPLOYMENT_RUNBOOK.md`
8. `data/report_archive.json`
