import {
  ArrowDownToLine,
  ArrowUpRight,
  FileCheck,
  FileText,
  MailOpen,
  UsersRound,
} from "lucide-react";
import SectionHeader from "@/components/section-header";

const tramites = [
  {
    title: "Formato Único de Trámite",
    description: "Descarga el FUT para presentar tu solicitud ante la UGEL Ambo.",
    icon: FileCheck,
    label: "PDF y Word",
    action: "Descargar PDF",
    href: "/docs/FUT_UGEL_AMBO_ACTUALIZADO.pdf",
    filename: "FUT_UGEL.pdf",
    wordHref: "/docs/FUT_UGEL_AMBO_ACTUALIZADO.docx",
  },
  {
    title: "Papeleta de salida",
    description: "Descarga el formato para solicitar una papeleta de salida.",
    icon: FileText,
    label: "Documento Word",
    action: "Descargar formato",
    href: "/docs/PAPELETA_SALIDA_2026.doc",
    filename: "PAPELETA_2026.doc",
  },
  {
    title: "Mesa de Partes Virtual",
    description: "Presenta tus documentos y solicitudes de forma digital.",
    icon: MailOpen,
    label: "Servicio en línea",
    action: "Ir a mesa de partes",
    href: "http://digital.regionhuanuco.gob.pe/registro/mesa-partes-virtual/263",
  },
  {
    title: "Registro de Visitas",
    description: "Consulta el registro de visitas a la institución.",
    icon: UsersRound,
    label: "Servicio en línea",
    action: "Consultar visitas",
    href: "https://visitas.servicios.gob.pe/consultas/index.php?ruc_enti=20573159030",
  },
];

export default function TramitesSection() {
  return (
    <section id="tramite" className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#f2faff] to-white py-12 md:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-[#049DD9]/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-[#f4bc32]/10 blur-3xl" />
      <div className="relative mx-auto w-full max-w-[1400px] px-4 md:px-10">
        <SectionHeader
          badgeIcon={<FileCheck className="h-3.5 w-3.5 text-[#049DD9]" />}
          badgeText="Mesa de Partes"
          title="Trámites y"
          titleHighlight="Servicios"
          description="Realiza tus solicitudes y gestiones documentarias de forma digital, ágil y segura."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {tramites.map((tramite) => {
            const Icon = tramite.icon;
            const isDownload = Boolean(tramite.filename);
            return (
              <article
                key={tramite.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#dcecf3] bg-white shadow-[0_8px_25px_-20px_rgba(16,64,89,0.4)] transition duration-300 hover:-translate-y-1 hover:border-[#a9dbe9] hover:shadow-[0_18px_35px_-22px_rgba(4,125,169,0.4)] motion-reduce:transform-none motion-reduce:transition-none"
              >
                <div className="flex flex-1 flex-col p-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf7fc] text-[#049DD9] transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none"><Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" /></span>
                  <span className="text-xs font-semibold text-[#52778a]">{tramite.label}</span>
                </div>
                <h3 className="text-lg font-bold leading-snug text-[#223F59]">{tramite.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{tramite.description}</p>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-[#edf3f6] pt-4">
                    <a href={tramite.href} download={tramite.filename} className="inline-flex min-h-10 min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-[#eaf7fc] px-3 py-2 text-sm font-bold text-[#087da9] transition-colors hover:bg-[#d8eff8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#049DD9]">
                      {isDownload && <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />}
                      {tramite.action}
                      {isDownload ? <ArrowDownToLine className="h-4 w-4 shrink-0" aria-hidden="true" /> : <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />}
                    </a>
                  {"wordHref" in tramite && tramite.wordHref && (
                      <a href={tramite.wordHref} download="FUT_UGEL.docx" className="inline-flex min-h-10 min-w-0 flex-1 items-center justify-center gap-2 rounded-xl border border-[#d4e9f2] bg-white px-3 py-2 text-sm font-bold text-[#087da9] transition-colors hover:bg-[#f2faff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#049DD9]">
                        <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />
                        Descargar Word
                        <ArrowDownToLine className="h-4 w-4 shrink-0" aria-hidden="true" />
                      </a>
                  )}
                </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
