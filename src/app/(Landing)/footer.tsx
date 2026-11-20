import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin } from "lucide-react";

const enlaces = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Trámites", href: "/#tramite" },
  { label: "Últimas noticias", href: "/#noticias" },
];

const consultas = [
  { label: "Convocatorias", href: "/convocatoria" },
  { label: "Normativa", href: "/Normativa" },
  { label: "Verificar certificado", href: "/verificar-certificado" },
  { label: "Tutoriales", href: "/tutoriales" },
];

const linkClass = "inline-block py-1 text-sm text-[#486779] transition-colors hover:text-[#087da9] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#049DD9]";

export default function Footer() {
  return (
    <footer className="border-t border-[#a9d8e9] bg-gradient-to-b from-[#eef9fd] to-[#def1f8] text-[#223F59]">
      <div className="mx-auto max-w-7xl px-5 pt-9 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 border-b border-[#c7e3ee] pb-8 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="flex items-center gap-4 sm:gap-5">
            <Link href="/" aria-label="UGEL Ambo, ir al inicio" className="block w-36 shrink-0 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#049DD9] sm:w-44">
              <Image src="/logo2026.png" alt="Logo completo de UGEL Ambo" width={280} height={160} className="h-auto w-full object-contain" />
            </Link>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#087da9]">UGEL Ambo</p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#486779]">Al servicio de nuestra comunidad educativa.</p>
            </div>
          </div>
          <div className="border-l-2 border-[#e7bc4a] pl-4 md:max-w-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#087da9]">Gestión 2026</p>
            <p className="mt-1 text-base font-bold leading-snug">Dr. Hugo Eduardo Palomino Esteban</p>
            <p className="mt-1 text-sm text-[#587788]">Director de la UGEL Ambo</p>
            <p className="mt-2 text-sm font-medium italic text-[#34647c]">“Con visión de futuro y resultados”</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 py-8 md:grid-cols-[1fr_1fr_1.3fr] md:gap-10">
          <nav aria-label="Enlaces rápidos">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#087da9]">Enlaces rápidos</h2>
            <ul className="space-y-1">{enlaces.map((enlace) => <li key={enlace.href}><Link href={enlace.href} className={linkClass}>{enlace.label}</Link></li>)}</ul>
          </nav>
          <nav aria-label="Consultas">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#087da9]">Consultas</h2>
            <ul className="space-y-1">{consultas.map((enlace) => <li key={enlace.href}><Link href={enlace.href} className={linkClass}>{enlace.label}</Link></li>)}</ul>
          </nav>
          <div className="col-span-2 md:col-span-1">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#087da9]">Contacto</h2>
            <ul className="space-y-3 text-sm text-[#486779]">
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#049DD9]" aria-hidden="true" /><a href="mailto:ugelambo308@gmail.com" className="break-all hover:text-[#087da9] hover:underline">ugelambo308@gmail.com</a></li>
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#049DD9]" aria-hidden="true" /><span>Ambo, Huánuco, Perú</span></li>
            </ul>
            <div className="mt-5 flex gap-2">
              <a href="https://www.facebook.com/UGELAmbo" aria-label="Facebook de UGEL Ambo" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b7dce9] bg-white/60 text-[#087da9] transition-colors hover:bg-[#049DD9] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#049DD9]"><Facebook className="h-4 w-4" aria-hidden="true" /></a>
              <a href="https://www.instagram.com/ugelambo/" aria-label="Instagram de UGEL Ambo" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b7dce9] bg-white/60 text-[#087da9] transition-colors hover:bg-[#049DD9] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#049DD9]"><Instagram className="h-4 w-4" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#c7e3ee] py-5 pb-28 text-xs text-[#587788] sm:pr-28 sm:pb-5">
          <p>© {new Date().getFullYear()} UGEL Ambo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
