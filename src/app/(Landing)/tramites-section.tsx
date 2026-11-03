import {
  ArrowDownToLine,
  ArrowUpRight,
  FileCheck,
  FileInput,
  Globe,
  LogIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/section-header";

const tramites = [
  {
    title: "Formato Único de Trámite",
    description: "Descarga el FUT para presentar tu solicitud ante la UGEL Ambo.",
    icon: FileCheck,
    label: "Documento PDF",
    action: "Descargar FUT",
    href: "/docs/FUT_NUEVO_MODELO.pdf",
    filename: "FUT_UGEL.pdf",
  },
  {
    title: "Papeleta de salida",
    description: "Descarga el formato para solicitar una papeleta de salida.",
    icon: FileInput,
    label: "Documento Word",
    action: "Descargar formato",
    href: "/docs/PAPELETA_SALIDA_2026.doc",
    filename: "PAPELETA_2026.doc",
  },
  {
    title: "Mesa de Partes Virtual",
    description: "Presenta tus documentos y solicitudes de forma digital.",
    icon: Globe,
    label: "Servicio en línea",
    action: "Ir a mesa de partes",
    href: "http://digital.regionhuanuco.gob.pe/registro/mesa-partes-virtual/263",
  },
  {
    title: "Registro de Visitas",
    description: "Consulta el registro de visitas a la institución.",
    icon: LogIn,
    label: "Servicio en línea",
    action: "Consultar visitas",
    href: "https://visitas.servicios.gob.pe/consultas/index.php?ruc_enti=20573159030",
  },
];

export default function TramitesSection() {
  return (
    <section id="tramite" className="w-full bg-background py-12 md:py-16">
      <div className="w-full px-4 md:px-10">
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
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#049DD9]/40 hover:shadow-lg hover:shadow-slate-200/60"
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#049DD9]/10 text-[#049DD9] transition-colors group-hover:bg-[#049DD9] group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {tramite.label}
                  </span>
                </div>
                <h3 className="text-lg font-bold leading-snug text-[#223F59]">{tramite.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{tramite.description}</p>
                <div className="mt-6 flex gap-2">
                  <Button asChild variant="outline" className="h-11 min-w-0 flex-1 justify-between border-slate-200 text-[#223F59] hover:border-[#049DD9] hover:bg-[#049DD9]/5 hover:text-[#007eaf]">
                    <a href={tramite.href} download={tramite.filename}>
                      {tramite.action}
                      {isDownload ? <ArrowDownToLine aria-hidden="true" /> : <ArrowUpRight aria-hidden="true" />}
                    </a>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
