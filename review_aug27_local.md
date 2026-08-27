# 27 August 2026 — Local Release Review

## Scope and evidence boundary

The report was prepared as of **27 Aug 2026 14:04 HKT**. It labels 26 Aug as the latest completed U.S. regular session and NVIDIA FY27 Q2 as a post-close company disclosure. Hong Kong values are explicitly labelled as a 14:04 HKT intraday snapshot, rather than a completed close.

## Automated validations

| Check | Result |
|---|---|
| `node scripts/validate_aug27_report.mjs` | Passed |
| `pnpm validate:data` | Passed (legacy 21 Aug schema validation remains separate) |
| `pnpm check` | Passed |
| `pnpm build` | Passed; only pre-existing font-resolution and bundle-size warnings |

## Browser review

| View | Result |
|---|---|
| Desktop English U.S. | 26 Aug close, PCE, Treasury daily par yields, NVIDIA results and Stocks / Industry Chain preceding the 26 Aug heatmap rendered. No application console errors. |
| Heatmap interaction | 1D / 5D / 20D controls rendered; 5D click completed with distinct sector-window values. |
| 390px Traditional Chinese Hong Kong | BIT mark, TW/CN/EN selector, full-PDF control and six-tab header remained visible. Prior-close context, 14:04 HKT snapshot, HSBIO relative position and post-close pending check were distinct. No application console errors. |
| Traditional Chinese full-report PDF | All six sections rendered under the print route, beginning with a print/save control. Interactive archive control was absent. |

## Release condition

Local evidence, type, build, mobile, PDF and heatmap checks passed. A public cache-busted Pages check is still required before describing the edition as published.
