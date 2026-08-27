import fs from "node:fs";
import path from "node:path";

const directory = "data/2026-08-27";
const errors = [];
const read = (name) => {
  const file = path.join(directory, name);
  if (!fs.existsSync(file)) { errors.push(`Missing ${file}`); return null; }
  try { return JSON.parse(fs.readFileSync(file, "utf8")); }
  catch (error) { errors.push(`Invalid JSON ${file}: ${error.message}`); return null; }
};
const require = (condition, message) => { if (!condition) errors.push(message); };

const us = read("us_market.json");
const hk = read("hk_market.json");
const thesis = read("thesis.json");
const sources = read("sources.json");
const analytics = read("market_analytics.json");
const raw = read("market_breadth_raw.json");
const detail = read("market_analytics_detail.json");
const archive = JSON.parse(fs.readFileSync("data/report_archive.json", "utf8"));

if (us) {
  require(us.report_date === "2026-08-27", "U.S. report date must be 2026-08-27");
  require(us.latest_completed_session?.date === "2026-08-26", "Latest U.S. session must be the 26 Aug completed regular session");
  for (const [name, row] of Object.entries(us.index_close || {})) require(Number.isFinite(row.value) && Number.isFinite(row.change_pct), `Invalid U.S. index row: ${name}`);
  require(Number.isFinite(us.treasury_par_yields?.ten_year_pct), "Treasury 10Y par yield must be numeric");
  require(JSON.stringify(us).includes("96.221"), "NVIDIA completed official Q2 revenue evidence must be retained");
  require(/cash session|cash-session/i.test(JSON.stringify(us)), "NVIDIA next-session price-discovery boundary must be explicit");
}
if (hk) {
  require(hk.previous_completed_session?.date === "2026-08-26", "Hong Kong completed-session context must refer to 26 Aug");
  require(hk.intraday_snapshot?.timestamp_hkt === "2026-08-27 14:04 HKT", "Hong Kong intraday snapshot needs exact 14:04 HKT timestamp");
  require(hk.intraday_snapshot?.indices?.HSI?.value === 25560.25, "Hong Kong intraday HSI must match audited snapshot");
  require(/not a completed close/i.test(hk.intraday_snapshot?.limitation || ""), "Hong Kong intraday data must prohibit completed-close inference");
  require(/pending/i.test(hk.southbound_status || ""), "Southbound flow must remain pending rather than estimated");
}
if (thesis) {
  require(thesis.report_date === "2026-08-27", "Thesis report date must be 2026-08-27");
  require(Array.isArray(thesis.this_week) && thesis.this_week.length === 4, "Weekly agenda must contain four bounded events");
  for (const row of thesis.this_week || []) require(row.id && row.event && row.when && row.boundary && row.positive && row.negative, `Incomplete weekly event: ${row.id || "unknown"}`);
  require(/Warsh/.test(JSON.stringify(thesis.this_week)) && /pending/i.test(JSON.stringify(thesis.this_week)), "Warsh speech must remain an explicitly pending future catalyst");
}
if (sources) {
  require(Array.isArray(sources.sources) && sources.sources.length >= 10, "Source ledger must retain ten audit entries");
  for (const row of sources.sources || []) for (const lang of ["TW", "CN", "EN"]) require(Boolean(row.label?.[lang]), `Source ${row.id} missing ${lang} label`);
}
if (analytics) {
  require(analytics.report_date === "2026-08-27" && analytics.as_of === "2026-08-26", "Breadth must distinguish 27 Aug report date from 26 Aug completed U.S. close");
  require(analytics.files?.raw_input === "data/2026-08-27/market_breadth_raw.json", "Breadth raw provenance must use the 27 Aug report folder");
  require(analytics.files?.calculation_output === "data/2026-08-27/market_analytics_detail.json", "Breadth detail provenance must use the 27 Aug report folder");
}
if (raw) require(raw.report_date === "2026-08-27" && raw.as_of === "2026-08-26" && raw.dataset?.length === 12, "Breadth raw data must contain the 26 Aug close and 11 sectors plus SPY");
if (detail) require(detail.report_date === "2026-08-27" && detail.as_of === "2026-08-26" && detail.sector_heatmap?.length === 11, "Heatmap must contain 11 sectors through 26 Aug close for the 27 Aug report");
require(archive.latest === "2026-08-27" && archive.editions?.[0]?.date === "2026-08-27", "Archive latest entry must be 27 Aug");

if (errors.length) { console.error(`AUG27 DATA VALIDATION FAIL (${errors.length})`); errors.forEach(error => console.error(`- ${error}`)); process.exit(1); }
console.log("AUG27 DATA VALIDATION PASS: completed U.S. session, NVIDIA post-close result boundary, Hong Kong intraday boundary, pending catalysts, source audit, archive and breadth provenance verified");
