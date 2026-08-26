# BIT Daily Market Intelligence — Claude Cowork Migration

**Status:** Current operating guide as of 26 August 2026 HKT.
**Canonical repository:** `williamyongbit/equity-insight-hub-v3`.
**Canonical public root:** `https://williamyongbit.github.io/equity-insight-hub-v3/`.

## Purpose and scope

This guide replaces the legacy personal-repository migration assumptions for ongoing daily operation. The public website and the reusable operating standard are finalized through the 26 August 2026 edition. Claude’s role is to research, draft, validate, update, and publish subsequent daily editions while preserving the approved product, data boundaries and historical access.

> Do not treat the older `YongWilliam-ai/equity-insight-hub-v3` migration report as the current production state. It is historical migration evidence only. Do not push to it. Do not modify the original Manus-hosted site.

## What Claude should use natively

| Claude capability | Use it for | Do not mistake it for |
|---|---|---|
| **Cowork Project** | Persistent local workspace, project instructions, files and task memory for this workflow | A shared company workspace; Cowork Projects are desktop-local and are not currently shareable. |
| **Research** | Parallel web research with citations; use it for discovery and source reconciliation | Automatic truth. Read the cited source, preserve source tier and label access limits. |
| **Custom BIT skill** | Triggering the daily contract, data boundary rules, report structure and release gates | A substitute for the repository or GitHub permission. |
| **GitHub integration** | Repository context and selected-file synchronization | Proof of write permission or a deployment mechanism. Verify operational access separately. |
| **Financial Services marketplace** | Optional earnings/thesis/catalyst workflow patterns after review | Licensed market data. Provider connectors can require independent subscriptions or API credentials. |

## One-time setup

1. Update Claude Desktop, select **Cowork**, and create a Project using a local clone of `williamyongbit/equity-insight-hub-v3` as the working folder.
2. In the Project, add the project instructions from `CLAUDE_COWORK_PROJECT_INSTRUCTIONS.md` and attach the BIT custom-skill ZIP supplied with this package. Enable the skill.
3. In Claude’s GitHub integration, add or refresh the **company** repository. Select only the folders Claude needs: `client/src`, `data`, `scripts`, `handoff/claude`, `docs`, `reports`, `package.json`, `pnpm-lock.yaml`, and brand assets. Sync before every new daily run.
4. Enable Claude **Research** and web search. Use Research for broad, cited investigation; use the source hierarchy in the skill for publication facts.
5. Configure access outside prompts: GitHub write access, authorized primary/reputable source access, and any licensed market-data connectors. Never paste a token, password, cookie, browser profile, or client data into the Project, chat, skill, repository or report.
6. Start the first live edition in **Manual** approval mode. After a successful supervised end-to-end run, use **Auto**, not **Skip**, for routine daily runs. Reserve Skip for no part of this workflow.

## Current product contract

Every latest edition must retain the fixed root and the visible date archive. The public page must continue to offer six full reader paths in Traditional Chinese, Simplified Chinese and English: Overview, U.S., Hong Kong, Cross-market, This Week and Sources. Education and Analysis must be genuinely different reader modes.

The U.S. sequence is: completed U.S. session, macro/market drivers, **Stocks / Industry Chain** fact–meaning–next-validation cards, then the dark **Sector Heatmap**. Retain 1D/5D/20D controls and green/grey/orange-red performance semantics. Do not restore retired SVG export, removed breadth summary, or removed unproven-claims cards.

Use the Hong Kong dual clock: prior completed close; explicit HKT timestamped intraday observation only while it exists; post-close turnover/Stock Connect verification; then the next Hong Kong/U.S. validation window. Never call an intraday observation a close.

## Daily operating sequence

1. Read the user’s daily source pack, current report, previous thesis and `data/report_archive.json`. Record HKT run time and identify the latest completed U.S. and Hong Kong sessions.
2. Use Research to find sources, then verify material claims through Tier 1 sources first and Tier 2 sources second. Treat user-provided media and Tier 3 sources as leads, not facts.
3. Classify the previous watch items as confirmed, partially confirmed, invalidated or unresolved. Write one evidence-bounded market thesis using one to three drivers.
4. Draft complete TW/CN/EN content. Separate completed facts, intraday observations and future catalysts. Use neutral internal research language and no individualized investment recommendation or return guarantee.
5. Update the correct current dated files, archive record, report component/hub and router based on the **actual architecture in the latest clone**. Preserve explicit historical query routes; do not blindly apply old pointer/refactor instructions from legacy handoff files.
6. Run the date-specific validator, TypeScript check, production build, and local browser review for desktop, 390px mobile and `?export=pdf`. Check all languages, both modes, heatmap windows, archive history, source disclosure and console errors.
7. Before any publish, inspect `git diff`, check for secrets/private material and verify the root/archive routes. If any evidence, build, visual, authorization or deployment gate fails, retain the prior public site and set the run to `NOT_DEPLOYED`.
8. On an approved routine run, commit only to company `main`, deploy the built static bundle to company `gh-pages`, wait for propagation and validate a cache-busted public URL. Never claim publication until that public URL is checked.

## First supervised live run

Use `CLAUDE_FIRST_SUPERVISED_RUN_PROMPT.md`. The result must be a complete draft plus a release-readiness record. Review the report, data boundaries, tests, source log and public-page result before turning on a recurring schedule.

## Scheduling after supervised approval

Create a Cowork scheduled task only after the first supervised report is accepted. Set it at **07:45 HKT**, beginning with a daily draft/release-readiness task. Once repeatability is proved, include the controlled publish step in the same task. Scheduled tasks run remotely and cannot depend on a local folder; required inputs therefore need to be available through the Project, cloud files, configured connectors and GitHub access.

## References

[1] [Anthropic — Get started with Claude Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)
[2] [Anthropic — Use research on Claude](https://support.claude.com/en/articles/11088861-use-research-on-claude)
[3] [Anthropic — Use skills in Claude](https://support.claude.com/en/articles/12512180-use-skills-in-claude)
[4] [Anthropic — Use the GitHub integration](https://support.claude.com/en/articles/10167454-use-the-github-integration)
[5] [Anthropic — Schedule recurring tasks in Cowork](https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-cowork)
[6] [Anthropic — Claude for Financial Services](https://github.com/anthropics/financial-services)
