# Claude Cowork — Current GitHub Self-Audit and Next Safe Upgrade

Paste the following into a new or refreshed Cowork task after syncing `williamyongbit/equity-insight-hub-v3` and enabling the BIT custom Skill.

```text
Route: [Escape]. This is a repository, migration and product-readiness task. It is not a live daily report and is not permission to publish.

Work only in williamyongbit/equity-insight-hub-v3. Do not modify the original Manus-hosted site or the legacy YongWilliam-ai repository.

First self-audit current GitHub state. Run git fetch origin. Inspect origin/main and origin/gh-pages, git log --oneline -15 origin/main, git status --short, data/report_archive.json, client/src/App.tsx, the active latest hub/component, and the newest dated data folder. At the time this prompt was written, the last verified production report was 2026-09-14, source commit 683e89c and Pages commit d49db73; current repository state always overrides these references.

Then read, in this order:
1. docs/CROSS_AI_CONTINUITY_HANDOFF_2026-09-04.md
2. handoff/claude/CLAUDE_COWORK_PROJECT_INSTRUCTIONS.md
3. handoff/claude/CLAUDE_COWORK_MIGRATION_2026-08-26.md
4. handoff/claude/skills/bit-daily-market-intelligence-claude/skill.md
5. handoff/claude/skills/bit-daily-market-intelligence-claude/references/bit_daily_contract.md
6. handoff/claude/skills/bit-daily-market-intelligence-claude/references/intelligence_system_upgrade.md
7. docs/INTELLIGENCE_UPGRADE_ROADMAP_2026-09-01.md

Return a concise readiness memo only. Confirm the actual latest report date/commits; fixed public root; the six route labels; the 09:30–10:00 HKT Morning and 17:00–17:30 HKT same-date Hong Kong Close proposal; the 20 U.S./global selection slots and five Hong Kong-close lenses as research checklists rather than a publication quota; the existing six-section, TW/CN/EN, Education/Analysis, archive, heatmap and PDF product invariants; and the smallest safe next implementation.

Explicitly list every mismatch between current repository state and any old Claude chat, past prompt or handoff. Do not edit code, update report data, push, deploy, create a schedule or describe a report as live in this task.
```
