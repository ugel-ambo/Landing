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

const linkClass = "inline-block py-1 text-sm text-white/90 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#65c8ee]";

export default function Footer() {
  return (
    <footer className="bg-[#087da9] text-white">
      <div className="h-1 bg-gradient-to-r from-[#049DD9] via-[#049DD9] to-[#d4af37]" />
      <div className="mx-auto max-w-7xl px-5 pt-12 sm:px-8 lg:px-10 lg:pt-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] lg:gap-12">
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white p-1.5">
                <Image src="/logo-ugel-circular.png" alt="Logo de la UGEL Ambo" width={80} height={80} className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="text-lg font-extrabold tracking-wide">UGEL AMBO</p>
                <p className="mt-1 text-sm text-white/90">Con visión de futuro y resultados</p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/90">
              Unidad de Gestión Educativa Local de Ambo, al servicio de nuestra comunidad educativa.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="https://www.facebook.com/UGELAmbo" aria-label="Facebook de UGEL Ambo" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-[#049DD9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#65c8ee]">
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/ugelambo/" aria-label="Instagram de UGEL Ambo" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-[#049DD9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#65c8ee]">
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Enlaces rápidos">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Enlaces rápidos</h2>
            <ul className="space-y-1">{enlaces.map((enlace) => <li key={enlace.href}><Link href={enlace.href} className={linkClass}>{enlace.label}</Link></li>)}</ul>
          </nav>
          <nav aria-label="Consultas">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Consultas</h2>
            <ul className="space-y-1">{consultas.map((enlace) => <li key={enlace.href}><Link href={enlace.href} className={linkClass}>{enlace.label}</Link></li>)}</ul>
          </nav>
          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contacto</h2>
            <ul className="space-y-4 text-sm text-white/90">
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" /><a href="mailto:ugelambo308@gmail.com" className="break-all hover:text-white hover:underline">ugelambo308@gmail.com</a></li>
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" aria-hidden="true" /><span>Ambo, Huánuco, Perú</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/15 py-6 pb-28 text-sm text-white/85 sm:pr-28 sm:pb-6">
          <p>© {new Date().getFullYear()} UGEL Ambo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

