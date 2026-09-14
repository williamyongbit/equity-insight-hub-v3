import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = file => JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
const required = ["data/2026-09-14/us_market.json", "data/2026-09-14/hk_market.json", "data/2026-09-14/thesis.json", "data/2026-09-14/sources.json", "data/2026-09-14/market_analytics.json", "data/2026-09-14/market_analytics_detail.json", "data/2026-09-14/market_breadth_raw.json"];
const failures = [];
for (const file of required) if (!fs.existsSync(path.join(root, file))) failures.push(`missing ${file}`);
const us = read("data/2026-09-14/us_market.json");
const hk = read("data/2026-09-14/hk_market.json");
const thesis = read("data/2026-09-14/thesis.json");
const sources = read("data/2026-09-14/sources.json");
const analytics = read("data/2026-09-14/market_analytics.json");
const detail = read("data/2026-09-14/market_analytics_detail.json");
const raw = read("data/2026-09-14/market_breadth_raw.json");
const archive = read("data/report_archive.json");
if (us.report_date !== "2026-09-14" || us.completed_session.date !== "2026-09-11") failures.push("U.S. report/session boundary incorrect");
for (const key of ["Dow Jones", "S&P 500", "Nasdaq"]) if (typeof us.index_close[key]?.value !== "number") failures.push(`missing U.S. index ${key}`);
if (us.volatility.close !== 15.84) failures.push("VIX differs from audited Cboe close");
if (us.treasury_daily_par_yields.ten_year !== 4.96) failures.push("10Y differs from audited Treasury daily par yield");
if (hk.report_date !== "2026-09-14" || hk.intraday_snapshot.as_of !== "2026-09-14 10:57 HKT" || hk.intraday_snapshot.status !== "intraday_not_close") failures.push("Hong Kong snapshot boundary incorrect");
if (!hk.intraday_snapshot.limitation.includes("not a close")) failures.push("Hong Kong intraday safeguard absent");
if (analytics.report_date !== "2026-09-14" || analytics.as_of !== "2026-09-11" || detail.report_date !== "2026-09-14" || detail.as_of !== "2026-09-11" || raw.report_date !== "2026-09-14" || raw.as_of !== "2026-09-11") failures.push("analytics provenance incorrect");
if (detail.sector_heatmap.length !== 11 || analytics.latest.daily_breadth_pct !== 81.8 || analytics.latest.five_day_breadth_pct !== 18.2) failures.push("heatmap evidence incorrect");
if (!thesis.this_week.some(x => x.id === "fomc" && x.when.includes("16 Sep 2026"))) failures.push("FOMC future catalyst missing");
if (sources.sources.length < 9 || !sources.sources.every(x => x.label.TW && x.label.CN && x.label.EN)) failures.push("source audit incomplete");
if (archive.latest !== "2026-09-14" || !archive.editions.some(x => x.date === "2026-09-14")) failures.push("archive latest entry missing");
if (failures.length) { console.error("VALIDATE_SEP14_REPORT: FAIL\n- " + failures.join("\n- ")); process.exit(1); }
console.log("VALIDATE_SEP14_REPORT: PASS");
