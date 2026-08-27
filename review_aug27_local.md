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

## Public Pages verification

The cache-busted company root loaded `BIT MARKET INTELLIGENCE · DAILY · 2026.08.27` without a date parameter, confirming 27 Aug as the current fixed-root edition. The public CN overview showed the 26 Aug completed U.S. close, NVIDIA's completed post-close disclosure and the 27 Aug 14:04 HKT Hong Kong intraday boundary. There were no application console errors.

The preserved 26 Aug, 25 Aug, 24 Aug and 21 Aug public query-date routes also loaded successfully. The 26 Aug U.S. page retained its original 25 Aug completed-session label and content.

## Release condition

Local evidence, type, build, mobile, PDF, heatmap, fixed-root and historical-route checks passed. The 27 August edition is publicly verified on the company GitHub Pages site.
