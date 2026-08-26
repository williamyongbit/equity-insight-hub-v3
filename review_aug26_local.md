# 26 August Local Review Notes

## Simplified Chinese overview — desktop

Verified at local Vite URL on 26 Aug 2026. The header visibly carries the BIT wordmark, the date/time boundary, TW/CN/EN controls and the `导出完整PDF` button. All six section controls are visible. The overview visibly distinguishes the **25 Aug completed U.S. close** from the **26 Aug 10:42 HKT Hong Kong intraday snapshot**. The Education and Analysis controls are both visible; analysis mode starts with different validation/invalidation content.

The page snapshot showed no application console errors and one non-blocking warning. The floating edition archive trigger is visible. This note records only local pre-publication review and does not establish public deployment.

## English U.S. route — desktop

The local `?date=2026-08-26&market=us&lang=EN` route loaded successfully with zero application console errors and one non-blocking warning. A dedicated accessibility snapshot was captured for inspection of the completed-session market cards and the 1D/5D/20D sector heatmap controls.

## 390px mobile route checkpoint

The sandbox browser was resized to 390×844. The English U.S. route and the Traditional Chinese Hong Kong route both loaded with zero application console errors and one non-blocking warning. A further snapshot is required to record the compact header and Hong Kong time-boundary text in detail.

The 390px Traditional Chinese Hong Kong snapshot and viewport PNG were captured. At capture time, the browser recorded zero application console errors and one non-blocking warning. The detailed snapshot and image are retained for the final pre-publication check of header visibility, floating archive placement and the intraday boundary.

## Final compact-header checkpoint

After shortening the mobile report-boundary line and localising the Hong Kong limitation sentence, the 390px Traditional Chinese Hong Kong route reloaded with HTTP 304, zero application console errors and one non-blocking warning. A refreshed viewport screenshot was retained for visual inspection.

## Native PDF route

The local Traditional Chinese `?date=2026-08-26&lang=TW&export=pdf` route loaded without application console errors and a full accessibility snapshot was captured for the six-section check. The PDF route is a normal render with a visible print action; it does not auto-trigger a browser print dialog.

After the print-only revision, the same route reloaded successfully with HTTP 304, zero application console errors and one non-blocking warning. A final full snapshot was captured to verify that the six report sections remained available without report-navigation controls in the print document.

## Public GitHub Pages verification

The cache-busted public URL using gh-pages deployment `c2c6f40` loaded at the company fixed root on 26 Aug 2026 with zero application console errors and one non-blocking warning. However, its captured accessibility snapshot still showed the prior **25 August** bundle. This is an observed Pages/edge propagation state, not evidence of the 26 August public release; a later public re-check is required before completion is claimed.

A second cache-busted public request (`r2`) also loaded with zero application console errors and one non-blocking warning. Its detailed snapshot is retained for a definitive date/content check before the deployment can be marked public-ready.

The second public snapshot confirmed that the fixed root now serves the **26 August** report: its headline, 25 August completed U.S. cards and 26 August 10:42 HKT Hong Kong card were all present. The public `date=2026-08-25` English historical route then loaded successfully with zero application console errors and one non-blocking warning, confirming the immediate prior edition remains addressable.

The public 24 August Traditional Chinese weekend route and 21 August English historical route also loaded successfully. Both recorded zero application console errors and one non-blocking warning; the 21 August page returned its dedicated historical title. The fixed root and all three retained dated editions are therefore publicly addressable.
