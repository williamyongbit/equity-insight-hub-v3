import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = file => JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
const required = ["data/2026-09-01/us_market.json", "data/2026-09-01/hk_market.json", "data/2026-09-01/thesis.json", "data/2026-09-01/sources.json", "data/2026-09-01/market_analytics.json", "data/2026-09-01/market_analytics_detail.json", "data/2026-09-01/market_breadth_raw.json"];
const failures = [];
for (const file of required) if (!fs.existsSync(path.join(root, file))) failures.push(`missing ${file}`);
const us = read("data/2026-09-01/us_market.json");
const hk = read("data/2026-09-01/hk_market.json");
const thesis = read("data/2026-09-01/thesis.json");
const sources = read("data/2026-09-01/sources.json");
const analytics = read("data/2026-09-01/market_analytics.json");
const detail = read("data/2026-09-01/market_analytics_detail.json");
const raw = read("data/2026-09-01/market_breadth_raw.json");
const archive = read("data/report_archive.json");
if (us.report_date !== "2026-09-01" || us.completed_session.date !== "2026-08-31") failures.push("U.S. report/session boundary incorrect");
for (const key of ["Dow", "S&P 500", "Nasdaq"]) if (typeof us.index_close[key]?.value !== "number") failures.push(`missing U.S. index ${key}`);
if (us.vix.value !== 14.92) failures.push("VIX differs from audited Cboe close");
if (us.treasury_daily_par_yields.ten_year !== 4.75) failures.push("10Y differs from audited Treasury daily par yield");
if (hk.report_date !== "2026-09-01" || hk.intraday_snapshot.as_of_hkt !== "2026-09-01 10:09 HKT") failures.push("Hong Kong snapshot boundary incorrect");
if (!hk.intraday_snapshot.limitation.includes("not a completed close")) failures.push("Hong Kong intraday safeguard absent");
if (analytics.report_date !== "2026-09-01" || analytics.as_of !== "2026-08-31" || detail.report_date !== "2026-09-01" || detail.as_of !== "2026-08-31" || raw.report_date !== "2026-09-01" || raw.as_of !== "2026-08-31") failures.push("analytics provenance incorrect");
if (detail.sector_heatmap.length !== 11 || detail.sector_heatmap.find(x => x.symbol === "XLE")?.oneDay !== 2.04) failures.push("heatmap evidence incorrect");
if (!thesis.this_week.some(x => x.id === "employment" && x.when.includes("4 Sep 2026"))) failures.push("BLS event missing");
if (sources.sources.length < 7 || !sources.sources.every(x => x.label.TW && x.label.CN && x.label.EN)) failures.push("source audit incomplete");
if (archive.latest !== "2026-09-01" || !archive.editions.some(x => x.date === "2026-09-01")) failures.push("archive latest entry missing");
if (failures.length) { console.error("VALIDATE_SEP01_REPORT: FAIL\n- " + failures.join("\n- ")); process.exit(1); }
console.log("VALIDATE_SEP01_REPORT: PASS");
