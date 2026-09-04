# Claude Cowork Upload Package — Refreshed 1 September 2026

## One-time refresh

The company repository is already connected in Claude Desktop. **Do not upload a duplicate repository ZIP.** Treat `williamyongbit/equity-insight-hub-v3` as the source of truth. In every fresh Cowork task, first use GitHub Sync and self-audit `origin/main`, recent commits, `data/report_archive.json`, the router and the latest report; this prevents Claude from using obsolete 26–27 August chat context.

| Item | Where to put it | Purpose |
|---|---|---|
| `bit-daily-market-intelligence-claude-2026-09-01.zip` | **Customize → Skills → Create skill → Upload a skill** | The permanent reusable daily contract: six routes, AM/PM same-date model, 20 U.S./global research slots, five HK-close lenses and release gates. Enable it after upload. |
| `CLAUDE_COWORK_PROJECT_INSTRUCTIONS.md` | Cowork Project **Instructions** field | Project-wide source-of-truth, safety, product and publication rules. Replace the previous pasted version. |
| `CLAUDE_COWORK_MIGRATION_2026-08-26.md` | Project files/context | Current company workflow and schedule safeguards, refreshed after the 27 August, 28 August and 1 September production releases. |
| `CLAUDE_GITHUB_STATE_AND_INTELLIGENCE_UPGRADE_PROMPT_2026-09-01.md` | First refreshed Cowork task | Forces Claude to read the current repository and return readiness only; it does not grant website-change or publish permission. |
| `CLAUDE_ROUTINE_DAILY_PROMPT.md` | Later routine/scheduled task template | Morning and HK-close sequence after supervised acceptance. |

## Correct Cowork sequence

First, upload the new custom Skill and replace the Project Instructions. Then start one fresh Cowork task with the new GitHub-state-and-upgrade prompt. Claude should state the actual latest repository date/commit, recognize the 27 August–1 September reports, and identify the next smallest approved implementation phase. Do **not** ask it to apply the large intelligence upgrade in the first readiness task.

After an explicit approval, use `[plan]` to obtain the first module’s implementation plan, then `[ideation]` for a local prototype. The first implementation should be the AM/PM dated-data and thesis-ledger foundation—not a visual redesign or a scheduled auto-publish workflow.

## Routine daily use after supervised acceptance

For a normal Morning Intelligence Edition, send the daily source pack and begin with:

```text
[External daily market news report]
Use the enabled BIT Daily Market Intelligence Skill and the current company repository. First self-audit origin/main and the latest report. Produce the Morning Intelligence Edition for the actual HKT date, then validate and publish only if every evidence, product, GitHub and public-Pages gate passes.
```

The HK Close Edition is a second run for the **same date**, not a new report. Use it only after 17:00 HKT when reliable completed-HK data exists. The Skill requires it to preserve the AM revision, update the same date, record revision timestamps and state `UNKNOWN / UNVERIFIED` for missing flow/turnover/close evidence.

## Configure as access — do not upload

Configure GitHub write/deploy access, permitted licensed-data access and any market-data credentials through the relevant connection/secret mechanism. Do not include tokens, passwords, cookies, browser profiles, company logins, private customer data or unlicensed research in a Project, prompt, skill, attachment, source log, code or commit.

## Before scheduling

Do not enable a recurring schedule yet. First run one supervised morning cycle and one supervised same-date HK-close revision. Check evidence boundaries, the revision record, full TW/CN/EN localization, local tests, mobile/PDF views, public cache-busted root and historical archive. After both pass, a 07:45 HKT preparation schedule can support the 09:30–10:00 Morning Edition target; a PM schedule is added only after the close-cycle is equally reproducible.

## Current production facts

| Field | Current source of truth |
|---|---|
| Canonical source | `https://github.com/williamyongbit/equity-insight-hub-v3` |
| Fixed root | `https://williamyongbit.github.io/equity-insight-hub-v3/` |
| Latest verified production edition at this refresh | 1 September 2026 |
| Repository check required | Run `git fetch origin` and inspect the current `origin/main`; never rely on this static date alone. |
| Legacy personal repository | `YongWilliam-ai/equity-insight-hub-v3` is historical only; do not use it for daily maintenance. |
