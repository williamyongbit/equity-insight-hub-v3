# Mentor Revision Screenshot Notes — 25 August 2026

## Screenshot extraction

The supplied screenshot is 2496 × 650 pixels and was reviewed in ordered overlapping horizontal crops.

### Tiles 1–2: confirmed left-hand removal target

The full left-hand card is **「美股廣度代理／8月24日」**. It contains 1D, 5D, 20D and SPY 5D metrics, plus the note that it is an 11 Select Sector SPDR ETF adjusted-close proxy rather than constituent advance/decline breadth. William’s mentor asked to remove this entire card and all corresponding content across Traditional Chinese, Simplified Chinese and English.

The remaining ordered tiles will be reviewed to confirm the right-hand removal target and preserve the exact mentor direction.

### Tiles 3–4: confirmed right-hand removal target

The full right-hand dark card is **「本時段未能證明的事情」**. Its visible copy explains that lower yields alone do not resolve AI valuation, policy or earnings uncertainty and cannot pre-judge NVIDIA results or prove a single-cause story. William’s mentor asked to remove this entire card and all equivalent Traditional Chinese, Simplified Chinese and English copy.

The two removed cards must not be replaced by a visually similar disclaimer panel. The revised overview should reclaim the space for evidence-led market context; uncertainty and source caveats remain in the relevant stock, source-audit and disclosure sections.

## Local implementation and verification

The 25 August report’s rendered U.S. path now removes the full breadth-proxy card and the full unproven-claims card in all three languages. Browser assertions confirmed that the following were absent while the approved sector heatmap remained visible:

| Language | Breadth card / SPY 5D | Unproven-claims card | Heatmap |
|---|---|---|---|
| Traditional Chinese | Absent | Absent | Present |
| Simplified Chinese | Absent | Absent | Present |
| English | Absent | Absent | Present |

The local Hong Kong path now renders a market-continuity desk in addition to the original evidence boundary: overnight completed U.S. context, the 10:36 HKT constrained snapshot, the 15:54 HKT official index checkpoint, four index cross-checks, post-close southbound/turnover verification, company/industry watch, and next-session conditions. Local browser assertions confirmed the component, the four indices, the flow boundary and the next-session block render correctly.

Local `pnpm check` and production `pnpm build` both passed. The only observed console warning remains the existing development collector warning; no report runtime errors were observed.
