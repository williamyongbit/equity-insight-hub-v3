# Routine Daily Run — Prompt for Claude Cowork

Use only after the first supervised run has been accepted and company repository write/deployment access has been verified.

```text
Use the BIT Daily Market Intelligence custom skill and Project instructions. Run the daily workflow for the actual current Asia/Hong_Kong date. First synchronize and self-audit the company repository: `git fetch origin`, inspect the current `origin/main` log, `data/report_archive.json`, current hub/router and latest report; the repository is the post-27-August source of truth. Read the task attachments and supplied external material before research.

At 09:30–10:00 HKT, publish the Morning Intelligence Edition: research and verify the latest completed U.S. regular session, prior completed Hong Kong session and any exact timestamped intraday observation; audit the prior thesis; then answer what changed, what is priced, whether leadership/breadth confirms the move, and what can invalidate it. Use the 20-slot U.S./global evidence pool as a selection map, not a quota. Update the complete TW/CN/EN six-section report and archive revision, then run all required data, type, build and browser validations.

At 17:00–17:30 HKT, revise that same date as the HK Close Intelligence Edition only after reliable close data exists. Apply the five Hong Kong close lenses: index/breadth; flow/liquidity; funding; China policy/macro; and 3–6 material company/HKEX disclosures plus HK→U.S. read-through. Preserve the AM revision and attach `edition`, `cutoff_hkt` and `revision_timestamp`. If data is unavailable, state `UNKNOWN / UNVERIFIED`; do not produce a synthetic close analysis.

If a source, localization, data-boundary, build, visual, GitHub or deployment gate fails, keep the prior public report unchanged and report NOT_DEPLOYED with evidence. Do not fill gaps with assumptions.

If every gate passes: inspect the diff for secrets and historical regressions; commit only to williamyongbit/equity-insight-hub-v3 main; deploy the built static bundle only to company gh-pages; wait for propagation; verify a cache-busted fixed-root URL and at least one historical route. End with a compact status table containing run time, U.S./HK session boundaries, thesis status, unresolved claims, validations, main commit, Pages commit, public URL and deployment state.
```
