/** BIT stable daily hub — 28 Aug 2026 latest edition and archive entrypoint. */
import { Archive, ArrowUpRight, X } from "lucide-react";
import { useState } from "react";
import archiveData from "../../../data/report_archive.json";
import DailyAug28Full from "./DailyAug28Full";

type Lang = "TW" | "CN" | "EN";
const base = import.meta.env.BASE_URL;
const archive: any = archiveData;
const copy: Record<Lang, any> = {
  TW: { archive: "版本庫", title: "每日版本庫", latest: "最新定稿", open: "開啟版本", canonical: "固定每日入口", body: "此根網址永遠顯示最新已批准版本；歷史版本以日期保存，不會被新報告覆蓋。" },
  CN: { archive: "版本库", title: "每日版本库", latest: "最新定稿", open: "打开版本", canonical: "固定每日入口", body: "此根网址永远显示最新已批准版本；历史版本以日期保存，不会被新报告覆盖。" },
  EN: { archive: "Edition archive", title: "Daily edition archive", latest: "Latest approved", open: "Open edition", canonical: "Stable daily entry", body: "This root URL always opens the latest approved edition. Previous editions remain date-addressable and are not overwritten by a new report." }
};

export default function DailyHubAug28() {
  const query = new URLSearchParams(window.location.search);
  const lang = (["TW", "CN", "EN"].includes(query.get("lang") || "") ? query.get("lang") : "CN") as Lang;
  const exportPdf = query.get("export") === "pdf";
  const [open, setOpen] = useState(false);
  const t = copy[lang];
  return <div className="bit-v3 relative bg-white text-[#0A0D14]"><DailyAug28Full printAll={exportPdf}/>{!exportPdf && <button onClick={() => setOpen(true)} className="bit-action bit-archive-trigger fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-[10px] border border-[#0040FF] bg-white px-4 py-3 text-xs font-bold text-[#0040FF] shadow-[0_12px_34px_rgba(10,13,20,.16)]" aria-label={t.archive}><Archive size={16}/><span>{t.archive}</span></button>}{!exportPdf && open && <div className="fixed inset-0 z-50 flex justify-end bg-[#0A0D14]/25 p-3 sm:p-6" role="dialog" aria-modal="true" aria-label={t.title}><aside className="h-full w-full max-w-[440px] overflow-y-auto rounded-[14px] bg-white p-6 shadow-2xl"><div className="flex items-start justify-between gap-4"><div><p className="section-kicker">BIT DAILY HUB</p><h2 className="mt-3 font-display text-3xl">{t.title}</h2></div><button onClick={() => setOpen(false)} className="bit-action rounded-[8px] border border-[#E4E6EA] p-2 text-[#59657A]" aria-label="Close"><X size={18}/></button></div><div className="mt-7 rounded-[10px] border-l-2 border-[#0040FF] bg-[#F5F7FA] p-5"><p className="font-mono text-[10px] font-bold tracking-[.14em] text-[#0040FF]">{t.canonical.toUpperCase()}</p><p className="mt-3 text-sm leading-6 text-[#59657A]">{t.body}</p><a href={`${base}?lang=${lang}`} className="bit-action mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#0040FF]"><ArrowUpRight size={14}/>{t.latest}</a></div><div className="mt-7 space-y-3">{archive.editions.map((edition: any) => <a key={edition.date} href={`${base}?${edition.date === archive.latest ? "" : `date=${edition.date}&`}lang=${lang}`} className="group block rounded-[10px] border border-[#E4E6EA] p-5 transition hover:border-[#0040FF]"><div className="flex items-center justify-between gap-4"><p className="font-mono text-[11px] font-bold tracking-[.13em] text-[#0040FF]">{edition.label}</p>{edition.date === archive.latest && <span className="rounded-full bg-[#E8F0FF] px-2 py-1 font-mono text-[9px] font-bold text-[#0040FF]">{t.latest}</span>}</div><p className="mt-3 text-sm leading-6 text-[#59657A]">{edition.summary[lang]}</p><p className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#0A0D14]">{t.open}<ArrowUpRight size={13}/></p></a>)}</div></aside></div>}</div>;
}
