import { Clock8 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Superhero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#12334d] via-[#075d83] to-[#087fa6]">
      <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-24 h-40 w-64 rounded-full bg-[#31c4e7]/20 blur-3xl" />
      <div className="relative mx-auto flex min-h-11 max-w-[1500px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-10">
      <div className="flex min-w-0 flex-row items-center gap-2.5">
        <span className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 sm:flex"><Clock8 className="text-[#a9e9fa]" size={15} /></span>
        <p className="text-[10px] font-medium text-white/90 sm:text-xs">
          <span className="hidden sm:inline">Horario de atención: </span>Lunes a viernes · 8:00 a. m. - 5:00 p. m.
        </p>
      </div>
      <div className="flex shrink-0 flex-row items-center gap-3 sm:gap-5">
        <Link
          href="https://webmail.ugelambo.edu.pe/"
          target="_blank"
          aria-label="Correo institucional"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
            <Image
              src="/email.svg"
              alt="Correo"
              width={18}
              height={18}
              style={{ filter: "none" }}
            />
          </div>
          <span className="hidden text-[11px] font-semibold text-white md:block">Correo institucional</span>
        </Link>
        <Link
          href="https://www.transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=18827"
          aria-label="Ir al portal de transparencia"
        >
          <Image
            src="/portal.png"
            alt="Portal UGEL"
            width={70}
            height={70}
            priority
            sizes="70px"
          />
        </Link>
      </div>
      </div>
      <div aria-hidden="true" className="h-0.5 bg-gradient-to-r from-[#049dd9] via-[#55d0ed] to-[#f4bc32]" />
    </div>
  );
}

export default Superhero;
