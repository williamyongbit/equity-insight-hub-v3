# BIT Intelligence System Upgrade — Claude Reference

Use this file with `bit_daily_contract.md`. It is the current development direction after the 27 August Claude handoff and after the public 27 August, 28 August and 1 September report releases.

## Operating decision

Maintain **one report date with two revisions**: Morning Intelligence at 09:30–10:00 HKT and Hong Kong Close Intelligence at 17:00–17:30 HKT. Morning covers the latest completed U.S. session and Hong Kong setup. PM revises the same date only after official HK close evidence is available. Persist `edition`, `cutoff_hkt` and `revision_timestamp`; preserve the AM revision.

## Research selection map

Research up to twenty material U.S./global slots: index/regime, breadth/leadership, volatility/positioning, Treasury curve, Fed/policy, fiscal/liquidity, inflation, labour/growth, consumption/credit, calendar, earnings expectation gap, guidance/cash flow/margin, price reaction, verified industry chain, energy/commodities, FX, credit/fixed income, crypto and cross-asset confirmation. Publish only verified material evidence.

At the HK close, use five lenses: (1) index and breadth, (2) turnover/Southbound/positioning flow confirmation, (3) USD/HKD/HIBOR/Aggregate Balance when material, (4) China policy/macro transmission, and (5) 3–6 material HKEX/company events plus evidence-backed HK→U.S. read-through. State `UNKNOWN / UNVERIFIED` for missing data.

## Required analytic logic

Every material chain is **expectation → evidence → transmission → price reaction → confirmation/invalidation**. Include market regime only with confidence and an invalidation condition; build a thesis ledger every day. Do not confuse an earnings beat with a positive price reaction or a one-stock reaction with an industry-wide conclusion. Use a mechanism before a correlation.

## Product direction and guardrails

Keep the six sections, BIT visual shell, three languages, two genuine reader modes, Stocks/Industry Chain before heatmap, 1D/5D/20D, archive, query history and native PDF. Add analytical modules through progressive disclosure rather than longer blocks: Market Regime, Thesis Ledger, Driver/Transmission Chain, Expectation Gap, Event Risk Map, Flow Confirmation, Scenario Frame and Source Confidence.

This reference is a product contract—not blanket authorization to redesign. Prototype each module locally through `[ideation]` → `[plan]` → explicit approval → supervised use before making it permanent.
