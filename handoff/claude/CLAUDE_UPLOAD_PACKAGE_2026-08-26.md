# Claude Cowork Upload Package — 26 August 2026

## Do this once

The company repository is already connected in Claude Desktop. **Do not upload a duplicate full repository ZIP.** Claude should use `williamyongbit/equity-insight-hub-v3` as the source of truth and click GitHub **Sync** before each new task.

Upload the following small, current package to Claude:

| Item | Where to put it | Purpose |
|---|---|---|
| `bit-daily-market-intelligence-claude.zip` | **Customize → Skills → Create skill → Upload a skill** | Permanent, reusable daily workflow contract. Enable it after upload. |
| `CLAUDE_COWORK_PROJECT_INSTRUCTIONS.md` | Cowork Project **Instructions** field | Project-wide operating and safety rules. |
| `CLAUDE_COWORK_MIGRATION_2026-08-26.md` | Project files/context | Setup order, native capability mapping and current product state. |
| `CLAUDE_FIRST_SUPERVISED_RUN_PROMPT.md` | First Cowork task message | First complete daily run, stopping before publish for review. |
| `CLAUDE_ROUTINE_DAILY_PROMPT.md` | Later routine task / scheduled task | Routine execution after supervised approval. |

## Create the Cowork Project

1. Update Claude Desktop and select **Cowork**.
2. Create a Project from the local company-repository clone, or create a new project and attach the four Markdown handoff files above.
3. Paste the Project Instructions file into the Project instructions field.
4. In GitHub project context, select/sync only the current company repository and relevant folders. Confirm the source is `williamyongbit/equity-insight-hub-v3`, not `YongWilliam-ai`.
5. Turn on web search and Research. Start the first run in **Manual** approval mode.
6. Attach that day’s external source pack and send the First Supervised Run prompt.

## Send for every daily edition

Attach only new material for that report: user/mentor focus, external article links or pasted content, screenshots/PDFs/charts, approved source-provider rules and any changed disclosure text. Tell Claude the desired route such as `[External daily market news report]`.

## Configure as access — do not upload

Configure GitHub write/deploy access, permitted licensed-data access and any market-data credentials through the relevant connection/secret mechanism. Do not include tokens, passwords, cookies, browser profiles, company logins, private customer data or unlicensed research in a Project, prompt, skill, attachment, source log, code or commit.

## Before creating a schedule

Run one supervised edition end-to-end. Check evidence boundaries, TW/CN/EN localization, local tests, mobile/PDF views, public cache-busted root and historical archive. Only then create a 07:45 HKT Cowork schedule. Scheduled tasks run remotely and cannot depend on an arbitrary local folder, so use connected GitHub, Project/cloud context and configured connectors.

## Current repository facts

- Canonical source: `https://github.com/williamyongbit/equity-insight-hub-v3`
- Latest root: `https://williamyongbit.github.io/equity-insight-hub-v3/`
- Latest production edition: 26 August 2026; historic 25/24/21 August query routes are retained.
- Legacy `YongWilliam-ai/equity-insight-hub-v3` is historical only; do not use it for daily maintenance.
