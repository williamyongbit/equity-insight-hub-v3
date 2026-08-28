# 28 August 2026 Local Review Record

## Validation boundary

The report uses the **27 August 2026 completed U.S. regular session** and an **official 28 August 2026 10:41 HKT Hong Kong intraday snapshot**. It does not label the Hong Kong observation as a close or estimate uncaptured turnover / Stock Connect flow.

## Automated and browser checks

| Gate | Result |
|---|---|
| `node scripts/validate_aug28_report.mjs` | Pass |
| `pnpm check` | Pass |
| `pnpm build` | Pass; existing font-resolution and bundle-size warnings only |
| Local CN overview | 28 August edition boundary and language/PDF controls present; no application console errors |
| Local EN U.S. | Indexes, rates, VIX, company evidence and the sector heatmap load; cards precede the heatmap |
| 5D heatmap control | Pass; retained window changed without application console errors |
| 390px TW Hong Kong | Language selector, PDF action and explicit 10:41 HKT intraday warning remain visible |
| TW native PDF route | Six sections render together; archive interaction absent; print/save action present |
| Local desktop visual | BIT white/black/blue shell, wide evidence cards, dark heatmap and compact header render without visible clipping or horizontal overflow |

## Copy correction applied before release

The initial printable Traditional Chinese review surfaced three generic English reader-facing UI labels. They were localized to Traditional/Simplified Chinese and the data/type/build gate was rerun successfully. English remains available only in the English locale and approved mono labels / dates.

## Outstanding evidence limits

Warsh’s 28 August 22:00 HKT remarks remain future/pending at the report cutoff. Hormuz shipping-operation details, several commodity/crypto claims and uncaptured Hong Kong completed-session values remain outside the report’s factual conclusions.

## Public GitHub Pages verification

The cache-busted company URL `?v=5ff5efc-r1&date=2026-08-28&market=overview&lang=CN` loaded the 28 August edition from the fixed root with no application console errors. The public header states the 28 August 10:40 HKT cutoff, 27 August U.S. completed close and 10:41 HKT Hong Kong intraday state.

The following dated public history routes also loaded successfully without application console errors: 27 August (EN), 26 August (TW), 25 August (CN), 24 August (TW) and 21 August (EN). The 28 August fixed-root release did not overwrite the retained reports.
