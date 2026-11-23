import { ArrowUpRight, ContactRound, Landmark, Send } from "lucide-react";

const accesos = [
  { label: "Portal Gob.pe", detail: "UGEL Ambo", href: "https://www.gob.pe/ugelambo", icon: Landmark, tone: "from-[#fff3f3] to-white hover:border-[#eab6bb]", iconTone: "bg-[#ffe5e6] text-[#d43e49] group-hover:bg-[#d43e49]", accent: "bg-[#e75b65]", arrow: "text-[#cf6972]" },
  { label: "Mesa de Partes", detail: "Presenta tu solicitud", href: "http://digital.regionhuanuco.gob.pe/registro/mesa-partes-virtual/263", icon: Send, tone: "from-[#eaf8fe] to-white hover:border-[#9dd7eb]", iconTone: "bg-[#d9f2fb] text-[#0786b4] group-hover:bg-[#049DD9]", accent: "bg-[#049DD9]", arrow: "text-[#4a9ebc]" },
  { label: "Registro de Visitas", detail: "Consulta las visitas", href: "https://visitas.servicios.gob.pe/consultas/index.php?ruc_enti=20573159030", icon: ContactRound, tone: "from-[#eefaf5] to-white hover:border-[#a9dcc5]", iconTone: "bg-[#def6e9] text-[#16845a] group-hover:bg-[#16845a]", accent: "bg-[#29a474]", arrow: "text-[#51a27d]" },
];

export default function AccesosInstitucionales() {
  return (
    <nav aria-label="Accesos institucionales" className="border-b border-[#d7eaf3] bg-gradient-to-r from-[#e7f5fb] via-[#f4fbfd] to-[#e8f6fb] px-4 py-3 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
        {accesos.map(({ label, detail, href, icon: Icon, tone, iconTone, accent, arrow }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (abre en una nueva pestaña)`} className={`group relative flex min-w-0 items-center gap-3 overflow-hidden rounded-xl border border-[#dcebf2] bg-gradient-to-r ${tone} px-3 py-2.5 shadow-[0_6px_18px_-16px_rgba(16,64,89,0.45)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-16px_rgba(4,125,169,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#049DD9] motion-reduce:transform-none motion-reduce:transition-none sm:px-4`}>
            <span aria-hidden="true" className={`absolute inset-y-2 left-0 w-1 rounded-r-full ${accent}`} />
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconTone} transition-all duration-300 group-hover:scale-105 group-hover:text-white motion-reduce:transform-none motion-reduce:transition-none`}><Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" /></span>
            <span className="min-w-0 flex-1"><span className="block text-sm font-bold leading-tight text-[#223F59]">{label}</span><span className="mt-0.5 block text-xs text-[#688596]">{detail}</span></span>
            <ArrowUpRight className={`h-4 w-4 shrink-0 ${arrow} transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none`} aria-hidden="true" />
          </a>
        ))}
      </div>
    </nav>
  );
}
