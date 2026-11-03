import { Clock8 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Superhero() {
  return (
    <div className="flex min-h-10 items-center justify-between gap-3 bg-[#087da9] px-4 sm:px-6 lg:px-10">
      <div className="flex flex-row items-center gap-2">
        <Clock8 className="hidden shrink-0 text-white/90 sm:block" size={16} />
        <p className="text-[10px] font-medium text-white sm:text-xs">
          <span className="hidden sm:inline">Horario de atención: </span>Lunes a viernes · 8:00 a. m. - 5:00 p. m.
        </p>
      </div>
      <div className="flex flex-row items-center gap-4">
        <Link
          href="https://webmail.ugelambo.edu.pe/"
          target="_blank"
          aria-label="Correo institucional"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-md transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <div className="bg-white rounded-full w-8 h-8 md:w-8 md:h-8 flex items-center justify-center shrink-0">
            <Image
              src="/email.svg"
              alt="Correo"
              width={18}
              height={18}
              style={{ filter: "none" }}
            />
          </div>
          <div className="hidden md:flex flex-col gap-0">
            <span className="text-white font-medium text-[10px]  leading-none">
              CORREO
            </span>
            <span className="text-white font-medium text-[10px]  leading-none">
              INSTITUCIONAL
            </span>
          </div>
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
  );
}

export default Superhero;
