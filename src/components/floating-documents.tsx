"use client";

import { useState } from "react";
import { ChevronLeft, Download, FileDown, FileText } from "lucide-react";

export default function FloatingDocuments() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const expanded = open || hovered;

  return (
    <>
      <div className="relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }} onKeyDown={(event) => { if (event.key === "Escape") { setOpen(false); setHovered(false); (event.currentTarget.querySelector("button") as HTMLButtonElement | null)?.focus(); } }}>
        <button type="button" aria-expanded={expanded} aria-controls={expanded ? "fut-opciones" : undefined} onClick={() => setOpen((value) => !value)} className="flex min-h-11 items-center gap-1.5 rounded-l-xl border border-r-0 border-white/25 bg-[#087da9] px-3 py-2.5 text-white shadow-lg shadow-[#17364e]/20 transition-colors hover:bg-[#065f82] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17364e]">
          <FileDown className="h-5 w-5 shrink-0" aria-hidden="true" /><span className="text-xs font-bold">FUT</span><ChevronLeft className={`h-3.5 w-3.5 transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>
        {expanded && <div id="fut-opciones" className="absolute right-full top-0 w-44 pr-2">
          <div className="overflow-hidden rounded-xl border border-[#d5eaf2] bg-white p-1.5 shadow-xl shadow-[#17364e]/20">
            <p className="px-2 pb-1 pt-1 text-[10px] font-bold uppercase tracking-wide text-[#678596]">Descargar FUT</p>
            <a href="/docs/FUT_UGEL_AMBO_ACTUALIZADO.pdf" download="FUT_UGEL.pdf" className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-[#27485e] hover:bg-[#edf8fc] focus-visible:outline-2 focus-visible:outline-[#049DD9]"><FileText className="h-4 w-4 text-[#dc4b55]" aria-hidden="true" /> PDF <Download className="ml-auto h-4 w-4 text-[#7e9eac]" aria-hidden="true" /></a>
            <a href="/docs/FUT_UGEL_AMBO_ACTUALIZADO.docx" download="FUT_UGEL.docx" className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-[#27485e] hover:bg-[#edf8fc] focus-visible:outline-2 focus-visible:outline-[#049DD9]"><FileText className="h-4 w-4 text-[#2774bf]" aria-hidden="true" /> Word <Download className="ml-auto h-4 w-4 text-[#7e9eac]" aria-hidden="true" /></a>
          </div>
        </div>}
      </div>
      <a href="/docs/PAPELETA_SALIDA_2026.doc" download="PAPELETA_2026.doc" aria-label="Descargar papeleta de salida en Word" className="flex min-h-11 items-center gap-1.5 rounded-l-xl border border-r-0 border-white/25 bg-[#126b8e] px-3 py-2.5 text-white shadow-lg shadow-[#17364e]/20 transition-colors hover:bg-[#075571] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17364e]"><FileText className="h-5 w-5 shrink-0" aria-hidden="true" /><span className="text-xs font-bold">Papeleta</span></a>
    </>
  );
}
