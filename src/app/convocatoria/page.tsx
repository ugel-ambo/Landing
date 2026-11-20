import React from "react";
import Menu from "../(Landing)/menu";
import ConvocatoriaList from "./convocatoria-list";
import { getConvocatorias } from "@/lib/convocatorias";
import { BriefcaseBusiness, Sparkles } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ConvocatoriaPage() {
  const convocatorias = await getConvocatorias().catch((error) => {
    console.error("Error fetching convocatorias:", error);
    return [];
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f0faff] via-white to-[#f8fcfe]">
      <Menu />

      <div className="relative overflow-hidden bg-gradient-to-b from-[#eaf7fc] to-[#f7fcfe] py-8 md:py-10">
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-[#049DD9]/10 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-[#f4bc32]/10 blur-3xl" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 md:flex-row md:items-end md:justify-between">
          <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#049DD9]/20 bg-[#049DD9]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#087da9]"><Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Oportunidades UGEL Ambo</span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#223F59] md:text-5xl">Nuestras <span className="text-[#049DD9]">convocatorias</span></h1>
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[#049DD9] to-[#f4bc32]" />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">Consulta los procesos de selección y accede a sus documentos en un solo lugar.</p>
          </div>
          <div className="inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-[#d6eaf3] bg-white/80 px-4 py-2.5 text-sm text-[#223F59]"><BriefcaseBusiness className="h-4 w-4 text-[#049DD9]" aria-hidden="true" /><strong>{convocatorias.length}</strong> procesos publicados</div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-5 sm:px-6">
        <ConvocatoriaList initialConvocatorias={convocatorias} />
      </div>
    </main>
  );
}
