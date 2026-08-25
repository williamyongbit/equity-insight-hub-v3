/**
 * BIT Daily Hub — company-ready stable entry, visible edition archive and Hong Kong market desk.
 * Design contract: official BIT white / black / blue editorial system; no speculative recommendation language.
 */
import { Archive, ArrowUpRight, Clock3, Layers3, X } from "lucide-react";
import { useEffect, useState } from "react";
import hkData from "../../../data/2026-08-25/hk_market.json";
import archiveData from "../../../data/report_archive.json";
import DailyAug25Full from "./DailyAug25Full";

type Language = "TW" | "CN" | "EN";
const base = import.meta.env.BASE_URL;
const hk: any = hkData;
const archive: any = archiveData;

const copy: Record<Language, any> = {
  TW: {
    archive: "版本庫", archiveTitle: "每日版本庫", latest: "最新定稿", open: "開啟版本", canonical: "固定每日入口", canonicalBody: "此根網址永遠顯示最新已批准版本；歷史版本以日期保存，不會被新報告覆蓋。",
    hkKicker: "香港／市場連續性桌", hkTitle: "先把本日可驗證的香港價格位置放進美股隔夜與下一交易窗口之間。", hkBody: "港股研究不應只是交易時段表。這裡分開已發生的美股背景、香港可觀察的盤中／晚段指數、收市後才可取得的資金與成交證據，以及下一交易日必須驗證的條件。",
    timeline: [["隔夜背景", "8月24日完成美股時段", "科技與晶片承壓、金融支撐道指；這是香港科技與風險偏好需要比對的隔夜背景，不是港股當日因果結論。"], ["上午快照", "10:36 HKT", "HSI 25,478.38、-0.15%；官方供應商披露系統故障及有限15分鐘更新，僅作受限盤中快照。"], ["晚段檢查點", "15:54 HKT", "官方指數頁面顯示HSI 25,495.81（-0.08%）、HSCEI -0.37%、HSTECH -0.18%、HSBIO +2.46%；仍須等待收市後核實。"]],
    indexTitle: "指數／板塊位置，而非單一原因", indexBody: "中國企業與科技指數在晚段仍較弱，生物科技指數則相對強。這描述的是相對表現，不足以單獨歸因於政策、單一公司或資金流。",
    flowTitle: "收市後資金與成交核對", flowBody: "南向資金、總成交及活躍股資料應在香港收市後以HKEX Historical Daily核對。本版尚未擷取到日期相符的官方流量數字，因此顯示為待核對，不以估計值補上。",
    companyTitle: "公司／產業鏈觀察", companyBody: "平台、科技硬件與金融股的解讀必須回到當日公司披露、成交及相對指數表現。阿里巴巴AI相關配售是既有週末背景，不等同25日盤中任何個股的已證實驅動。",
    nextTitle: "本日 → 下一交易日驗證", nextBody: "收市後先完成指數、成交與南向核對；下一個港股開市再比較HSTECH相對HSI、HSBIO相對強度與公司公告。下一美股窗口同時驗證消費者信心與NVIDIA財報前定位，避免把不同時鐘的價格混成同一日結論。",
    sourceTitle: "資料服務狀態", sourceBody: "恒生指數公司仍顯示系統故障與有限15分鐘更新；所有本日香港數字均保留為帶時間戳的官方觀察，而非完成收市。",
    dates: [["2026-08-25", "25 Aug · Daily", "最新：美股8月24日完成時段／港股日內監測"], ["2026-08-24", "24 Aug · Weekend", "週末研究、This Week驗證層及完整來源審計"], ["2026-08-21", "21 Aug · Historical", "完整歷史研究與雙閱讀模式"]]
  },
  CN: {
    archive: "版本库", archiveTitle: "每日版本库", latest: "最新定稿", open: "打开版本", canonical: "固定每日入口", canonicalBody: "此根网址永远显示最新已批准版本；历史版本以日期保存，不会被新报告覆盖。",
    hkKicker: "香港／市场连续性台", hkTitle: "先把本日可验证的香港价格位置放进美股隔夜与下一交易窗口之间。", hkBody: "港股研究不应只是交易时段表。这里分开已发生的美股背景、香港可观察的盘中／晚段指数、收市后才可取得的资金与成交证据，以及下一交易日必须验证的条件。",
    timeline: [["隔夜背景", "8月24日完成美股时段", "科技与芯片承压、金融支撑道指；这是香港科技与风险偏好需要比对的隔夜背景，不是港股当日因果结论。"], ["上午快照", "10:36 HKT", "HSI 25,478.38、-0.15%；官方供应商披露系统故障及有限15分钟更新，仅作受限盘中快照。"], ["晚段检查点", "15:54 HKT", "官方指数页面显示HSI 25,495.81（-0.08%）、HSCEI -0.37%、HSTECH -0.18%、HSBIO +2.46%；仍须等待收市后核实。"]],
    indexTitle: "指数／板块位置，而非单一原因", indexBody: "中国企业与科技指数在晚段仍较弱，生物科技指数则相对强。这描述的是相对表现，不足以单独归因于政策、单一公司或资金流。",
    flowTitle: "收市后资金与成交核对", flowBody: "南向资金、总成交及活跃股资料应在香港收市后以HKEX Historical Daily核对。本版尚未提取到日期相符的官方流量数字，因此显示为待核对，不以估计值补上。",
    companyTitle: "公司／产业链观察", companyBody: "平台、科技硬件与金融股的解读必须回到当日公司披露、成交及相对指数表现。阿里巴巴AI相关配售是既有周末背景，不等同25日盘中任何个股的已证实驱动。",
    nextTitle: "本日 → 下一交易日验证", nextBody: "收市后先完成指数、成交与南向核对；下一个港股开市再比较HSTECH相对HSI、HSBIO相对强度与公司公告。下一美股窗口同时验证消费者信心与NVIDIA财报前定位，避免把不同时钟的价格混成同一天结论。",
    sourceTitle: "数据服务状态", sourceBody: "恒生指数公司仍显示系统故障与有限15分钟更新；所有本日香港数字均保留为带时间戳的官方观察，而非完成收市。",
    dates: [["2026-08-25", "25 Aug · Daily", "最新：美股8月24日完成时段／港股日内监测"], ["2026-08-24", "24 Aug · Weekend", "周末研究、This Week验证层及完整来源审计"], ["2026-08-21", "21 Aug · Historical", "完整历史研究与双阅读模式"]]
  },
  EN: {
    archive: "Edition archive", archiveTitle: "Daily edition archive", latest: "Latest approved", open: "Open edition", canonical: "Stable daily entry", canonicalBody: "This root URL always opens the latest approved edition. Previous editions remain date-addressable and are not overwritten by a new report.",
    hkKicker: "HONG KONG / MARKET CONTINUITY DESK", hkTitle: "Place verifiable Hong Kong price position between the completed U.S. session and the next trading window.", hkBody: "Hong Kong research should not be a timetable alone. This desk separates the completed U.S. backdrop, observable Hong Kong intraday / late-session index evidence, post-close flow and turnover evidence, and the conditions the next session must validate.",
    timeline: [["Overnight backdrop", "24 Aug completed U.S. session", "Technology and chips were under pressure while financials supported the Dow. This is the overnight context for Hong Kong technology and risk appetite—not a causal conclusion for Hong Kong."], ["Morning snapshot", "10:36 HKT", "HSI 25,478.38, -0.15%. The official provider disclosed an outage and limited 15-minute updates; this is a constrained intraday snapshot only."], ["Late-session checkpoint", "15:54 HKT", "The official index page showed HSI 25,495.81 (-0.08%), HSCEI -0.37%, HSTECH -0.18% and HSBIO +2.46%; post-close confirmation was still required."]],
    indexTitle: "Index / sector position—not a single cause", indexBody: "China-enterprise and technology indexes remained softer late in the session while biotech was relatively stronger. This is relative performance, not standalone attribution to policy, one company or one flow.",
    flowTitle: "Post-close flow and turnover check", flowBody: "Southbound flow, total turnover and active-stock data should be checked against HKEX Historical Daily after the Hong Kong close. A date-matched official flow figure was not extracted for this edition, so the state remains pending rather than estimated.",
    companyTitle: "Company / industry-chain watch", companyBody: "Platform, technology hardware and financial interpretations must return to same-day disclosures, turnover and relative-index performance. Alibaba’s AI-related placement is weekend context, not a confirmed driver of any 25 Aug intraday stock move.",
    nextTitle: "Today → next-session verification", nextBody: "Complete index, turnover and southbound checks after the close; at the next Hong Kong open, compare HSTECH versus HSI, biotech relative strength and company announcements. The next U.S. window separately tests consumer confidence and NVIDIA positioning, avoiding a false single-day narrative across clocks.",
    sourceTitle: "Data-service status", sourceBody: "Hang Seng Indexes continued to display an outage notice and limited 15-minute updates; all Hong Kong values on this edition remain timestamped official observations, not a completed close.",
    dates: [["2026-08-25", "25 Aug · Daily", "Latest: U.S. 24 Aug completed session / Hong Kong intraday monitoring"], ["2026-08-24", "24 Aug · Weekend", "Weekend research, This Week verification layer and full source audit"], ["2026-08-21", "21 Aug · Historical", "Full historical research and both reading modes"]]
  }
};

export default function DailyHubAug25() {
  const [locationVersion, setLocationVersion] = useState(0);
  useEffect(() => { const sync = () => setLocationVersion(v => v + 1); window.addEventListener("bit-location", sync); window.addEventListener("popstate", sync); return () => { window.removeEventListener("bit-location", sync); window.removeEventListener("popstate", sync); }; }, []);
  const query = new URLSearchParams(window.location.search);
  const language = (["TW", "CN", "EN"].includes(query.get("lang") || "") ? query.get("lang") : "CN") as Language;
  const market = query.get("market") || "overview";
  const exportPdf = query.get("export") === "pdf";
  const [archiveOpen, setArchiveOpen] = useState(false);
  const t = copy[language];
  const latestDate = archive.latest as string;
  void locationVersion;

  return <div className="bit-v3 relative bg-white text-[#0A0D14]">
    <DailyAug25Full printAll={exportPdf} printHongKongDesk={exportPdf ? <HongKongMarketDesk t={t}/> : undefined} />
    {!exportPdf && market === "hk" && (
      <HongKongMarketDesk t={t} />
    )}
    {!exportPdf && <button onClick={() => setArchiveOpen(true)} className="bit-action bit-archive-trigger fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-[10px] border border-[#0040FF] bg-white px-4 py-3 text-xs font-bold text-[#0040FF] shadow-[0_12px_34px_rgba(10,13,20,.16)]" aria-label={t.archive}><Archive size={16}/><span>{t.archive}</span></button>}
    {!exportPdf && archiveOpen && <div className="fixed inset-0 z-50 flex justify-end bg-[#0A0D14]/25 p-3 sm:p-6" role="dialog" aria-modal="true" aria-label={t.archiveTitle}>
      <aside className="h-full w-full max-w-[440px] overflow-y-auto rounded-[14px] bg-white p-6 shadow-2xl"><div className="flex items-start justify-between gap-4"><div><p className="section-kicker">BIT DAILY HUB</p><h2 className="mt-3 font-display text-3xl">{t.archiveTitle}</h2></div><button onClick={() => setArchiveOpen(false)} className="bit-action rounded-[8px] border border-[#E4E6EA] p-2 text-[#59657A]" aria-label="Close"><X size={18}/></button></div><div className="mt-7 rounded-[10px] border-l-2 border-[#0040FF] bg-[#F5F7FA] p-5"><p className="font-mono text-[10px] font-bold tracking-[.14em] text-[#0040FF]">{t.canonical.toUpperCase()}</p><p className="mt-3 text-sm leading-6 text-[#59657A]">{t.canonicalBody}</p><a href={`${base}?lang=${language}`} className="bit-action mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#0040FF]"><ArrowUpRight size={14}/>{t.latest}</a></div><div className="mt-7 space-y-3">{archive.editions.map((edition: any) => <a key={edition.date} href={`${base}?${edition.date === latestDate ? "" : `date=${edition.date}&`}lang=${language}`} className="group block rounded-[10px] border border-[#E4E6EA] p-5 transition hover:border-[#0040FF]"><div className="flex items-center justify-between gap-4"><p className="font-mono text-[11px] font-bold tracking-[.13em] text-[#0040FF]">{edition.label}</p>{edition.date === latestDate && <span className="rounded-full bg-[#E8F0FF] px-2 py-1 font-mono text-[9px] font-bold text-[#0040FF]">{t.latest}</span>}</div><p className="mt-3 text-sm leading-6 text-[#59657A]">{edition.summary[language]}</p><p className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#0A0D14]">{t.open}<ArrowUpRight size={13}/></p></a>)}</div></aside>
    </div>}
  </div>;
}

function HongKongMarketDesk({ t }: { t: any }) {
  const late = hk.late_session_checkpoint;
  const metricRows = Object.entries(late.indices).map(([name, row]: any) => [name, Number(row.value).toLocaleString(), `${row.change_pct > 0 ? "+" : ""}${row.change_pct.toFixed(2)}%`]);
  return <section className="border-t border-[#E4E6EA] bg-[#F5F7FA] px-5 py-14 sm:px-10 lg:px-[var(--layout-padding)]"><div className="mx-auto max-w-[1200px]">
    <div className="max-w-4xl"><p className="section-kicker">{t.hkKicker}</p><h2 className="mt-3 font-display text-4xl leading-tight text-[#0A0D14] sm:text-5xl">{t.hkTitle}</h2><p className="mt-5 text-[16px] leading-8 text-[#59657A]">{t.hkBody}</p></div>
    <div className="mt-8 grid gap-4 lg:grid-cols-3">{t.timeline.map((row: string[], i: number) => <article key={row[0]} className="rounded-[12px] border border-[#E4E6EA] bg-white p-6"><div className="flex items-center justify-between"><p className="font-mono text-[10px] font-bold tracking-[.14em] text-[#0040FF]">0{i + 1} · {row[0]}</p><Clock3 size={16} className="text-[#0040FF]"/></div><p className="mt-5 font-display text-2xl">{row[1]}</p><p className="mt-4 text-sm leading-7 text-[#59657A]">{row[2]}</p></article>)}</div>
    <div className="mt-8 rounded-[12px] border border-[#E4E6EA] bg-white p-6"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="section-kicker">15:54 HKT · OFFICIAL INDEX CHECKPOINT</p><h3 className="mt-3 font-display text-2xl">{t.indexTitle}</h3></div><p className="max-w-2xl text-sm leading-7 text-[#59657A]">{t.indexBody}</p></div><div className="mt-6 grid border-l border-t border-[#E4E6EA] sm:grid-cols-2 lg:grid-cols-4">{metricRows.map(([name, value, change]: string[]) => <div key={name} className="-ml-px -mt-px border border-[#E4E6EA] p-5"><p className="font-mono text-[10px] font-bold tracking-[.12em] text-[#59657A]">{name}</p><p className="mt-3 font-mono text-2xl font-semibold">{value}</p><p className={`mt-2 font-mono text-xs ${change.startsWith("+") ? "text-[#17733B]" : "text-[#C22F26]"}`}>{change}</p></div>)}</div></div>
    <div className="mt-8 grid gap-5 lg:grid-cols-3"><Insight title={t.flowTitle} body={t.flowBody}/><Insight title={t.companyTitle} body={t.companyBody}/><Insight title={t.nextTitle} body={t.nextBody}/></div>
    <div className="mt-8 flex items-start gap-3 border-l-2 border-[#F6C82A] bg-white p-6"><Layers3 size={17} className="mt-1 shrink-0 text-[#765D00]"/><div><p className="font-mono text-[10px] font-bold tracking-[.14em] text-[#765D00]">{t.sourceTitle.toUpperCase()}</p><p className="mt-3 text-sm leading-7 text-[#0A0D14]">{t.sourceBody}</p></div></div>
  </div></section>;
}

function Insight({ title, body }: { title: string; body: string }) { return <article className="rounded-[12px] border border-[#E4E6EA] bg-white p-6"><p className="font-display text-2xl">{title}</p><p className="mt-5 text-sm leading-7 text-[#59657A]">{body}</p></article>; }
