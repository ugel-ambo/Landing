import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, CalendarDays, FileText } from "lucide-react";
import { Convocatoria, getEstadoTexto, getEstadoColor } from "@/types/convocatoria.types";
import { getConvocatorias } from "@/lib/convocatorias";
import SectionHeader from "@/components/section-header";

export default async function ConvocatoriasSection() {
  let convocatorias: Convocatoria[] = [];
  let error = false;
  try {
    convocatorias = await getConvocatorias(3);
  } catch (err) {
    console.error("Error fetching recent convocatorias:", err);
    error = true;
  }

  const formatDate = (dateStr: string) => new Date(dateStr).toLocaleDateString("es-PE", {
    day: "2-digit", month: "short", year: "numeric",
  });

  return (
    <section id="convocatorias" className="relative overflow-hidden bg-gradient-to-b from-white via-[#f0faff] to-white py-12 md:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-10 h-64 w-64 rounded-full bg-[#049DD9]/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 bottom-4 h-48 w-48 rounded-full bg-[#f4bc32]/10 blur-3xl" />
      <div className="relative mx-auto max-w-[1400px] px-4 md:px-10">
        <SectionHeader badgeIcon={<BriefcaseBusiness className="h-3.5 w-3.5 text-[#049DD9]" />} badgeText="Oportunidades laborales" title="Convocatorias" titleHighlight="Recientes" description="Conoce los últimos procesos de selección de la UGEL Ambo." />
        {error || convocatorias.length === 0 ? (
          <p role="status" className="rounded-2xl border border-[#dcecf3] bg-white px-6 py-8 text-center text-sm text-slate-600">{error ? "No se pudieron cargar las convocatorias. Inténtalo más tarde." : "Por el momento no hay convocatorias disponibles."}</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {convocatorias.map((conv) => (
              <article key={conv._id} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#dcecf3] bg-white shadow-[0_8px_25px_-20px_rgba(16,64,89,0.4)] transition duration-300 hover:-translate-y-1 hover:border-[#a9dbe9] hover:shadow-[0_18px_35px_-22px_rgba(4,125,169,0.4)] motion-reduce:transform-none motion-reduce:transition-none">
                <div className="relative flex items-center justify-between gap-3 overflow-hidden bg-gradient-to-r from-[#e5f7fc] via-[#f2fbfe] to-[#fdf9ec] px-5 py-4">
                  <span aria-hidden="true" className="absolute -right-6 -top-14 h-28 w-28 rounded-full border border-[#049DD9]/15" />
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#049DD9] shadow-sm"><BriefcaseBusiness className="h-5 w-5" aria-hidden="true" /></span>
                  <span className={`relative rounded-full px-3 py-1 text-xs font-bold text-white ${getEstadoColor(conv.estado)}`}>{getEstadoTexto(conv.estado)}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#087da9]">Proceso de selección</p>
                  <h3 className="mt-2 text-base font-bold leading-snug text-[#223F59]">{conv.nombre}</h3>
                  <div className="mt-5 flex-1 space-y-3 border-t border-[#edf3f6] pt-4 text-sm text-slate-600">
                    <div className="flex items-start gap-2"><CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-[#049DD9]" aria-hidden="true" /><div><span className="block text-xs font-semibold text-slate-500">Inscripción</span><span>{formatDate(conv.fechaInicioInscripcion)} al {formatDate(conv.fechaFinInscripcion)}</span></div></div>
                    {conv.fechaResultados && <div className="flex items-start gap-2"><FileText className="mt-0.5 h-4 w-4 shrink-0 text-[#049DD9]" aria-hidden="true" /><div><span className="block text-xs font-semibold text-slate-500">Resultados</span><span>{formatDate(conv.fechaResultados)}</span></div></div>}
                  </div>
                  <Link href="/convocatoria" className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#087da9] hover:text-[#049DD9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#049DD9]">Ver convocatorias <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none" aria-hidden="true" /></Link>
                </div>
              </article>
            ))}
          </div>
        )}
        <div className="mt-8 flex justify-center"><Link href="/convocatoria" className="inline-flex items-center gap-2 rounded-full border border-[#b8deeb] bg-white px-5 py-3 text-sm font-bold text-[#087da9] transition-colors hover:bg-[#eaf7fc] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#049DD9]">Ver todas las convocatorias <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
      </div>
    </section>
  );
}
