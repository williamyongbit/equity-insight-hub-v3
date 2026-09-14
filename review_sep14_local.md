# 14 September 2026 Local Release Review

## Evidence and build gates

- `node scripts/validate_sep14_report.mjs`: PASS.
- `pnpm validate:data`: PASS for the legacy shared data validator.
- `pnpm check`: PASS.
- `pnpm build`: PASS. The existing build emitted only the established local-font resolution and bundle-size warnings.

## Browser checks

- **Desktop U.S. English:** local 14 September route loaded without application errors. The screen showed the 11 September completed-session boundary, index values, macro cards, Stocks / Industry Chain cards before the heatmap, and 1D / 5D / 20D controls. The 5D selector was clicked successfully with no application error.
- **390px Hong Kong Traditional Chinese:** local route loaded without application errors. The header language and PDF controls remained visible. The page marked the reading as `14 Sep 10:57 HKT intraday`, explicitly stated it was not a close, and retained the provider's limited 15-minute outage update caveat.
- **Traditional Chinese PDF route:** local `?date=2026-09-14&lang=TW&export=pdf` loaded without application errors. The 390px full-page screenshot showed the complete vertical sequence of Overview, U.S., Hong Kong, Cross-market, This Week and Sources; the archive interaction was absent and only the native print/save control remained.
- **Desktop U.S. visual review:** the 1280px English screenshot showed the BIT white/black/blue shell, readable language and full-PDF controls, index/macro cards, three Stocks / Industry Chain cards before the dark 11-sector heatmap, and visible 1D / 5D / 20D controls. The green, grey and orange-red performance semantics remained intact with no apparent horizontal overflow.

## Result

The local 14 September candidate is suitable for source-control review. Public deployment remains blocked until company-main and GitHub Pages checks are completed.
