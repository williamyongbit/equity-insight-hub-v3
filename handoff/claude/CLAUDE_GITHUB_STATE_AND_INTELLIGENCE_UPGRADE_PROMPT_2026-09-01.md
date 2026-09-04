# Claude Cowork — First Prompt After 1 September Workflow Upgrade

Paste this into a new or refreshed Cowork task after syncing the repository and enabling the BIT custom Skill.

```text
Route: [Escape]. This is a workflow and product-readiness task, not a live daily report and not permission to publish.

Work only in williamyongbit/equity-insight-hub-v3. Do not modify the original Manus-hosted site or the legacy YongWilliam-ai repository.

First self-audit the current source of truth. Run git fetch origin, inspect origin/main, git log --oneline -12, data/report_archive.json, client/src/App.tsx, the active latest hub/component and the latest dated data. State the latest report date and commit from the repository; do not rely on any old Claude chat, old patch or handoff claim.

Then read these repository files in order:
1. handoff/claude/CLAUDE_COWORK_PROJECT_INSTRUCTIONS.md
2. handoff/claude/CLAUDE_COWORK_MIGRATION_2026-08-26.md
3. handoff/claude/skills/bit-daily-market-intelligence-claude/skill.md
4. handoff/claude/skills/bit-daily-market-intelligence-claude/references/bit_daily_contract.md
5. handoff/claude/skills/bit-daily-market-intelligence-claude/references/intelligence_system_upgrade.md
6. docs/INTELLIGENCE_UPGRADE_ROADMAP_2026-09-01.md

Return a concise readiness memo only. Confirm: the active company repository/root; the six route labels; the morning 09:30–10:00 HKT and same-date Hong Kong close 17:00–17:30 HKT model; the 20 U.S./global research slots and five Hong Kong-close lenses as selection checklists rather than a publication quota; the existing product invariants; and the next smallest supervised implementation phase.

Do not edit code, update data, push, deploy, change a schedule or call any report live in this task. If a current-repository fact contradicts a handoff document, treat repository state as controlling and explicitly name the mismatch.
```
