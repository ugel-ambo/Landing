"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Megaphone,
  Scale,
  GraduationCap,
  ClipboardCheck,
  Shield,
  Wallet,
  BookUser,
  Mail,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Convocatorias",
    icon: Megaphone,
    href: "/convocatoria",
    image: "/Convocatoria.png",
    external: false,
  },
  {
    id: 2,
    title: "Denuncias de Corrupción",
    icon: Scale,
    href: "https://denuncias.servicios.gob.pe/?gobpe_id=4412",
    image: "/corrupcion.png",
    external: true,
  },
  {
    id: 3,
    title: "SIAGIE",
    icon: GraduationCap,
    image: "/siagie.png",
    href: "https://siagie.minedu.gob.pe/",
    external: true,
  },
  {
    id: 4,
    title: "Reporte de asistencia",
    icon: ClipboardCheck,
    image: "/asistencia.png",
    href: "https://monitoreo.ugelambo.edu.pe",
    external: true,
  },
  {
    id: 5,
    title: "Conformidad del servicio de internet",
    icon: BookUser,
    image: "/Servicio.png",
    href: "https://reporteinternet.ugelambo.edu.pe/",
    external: true,
  },
  {
    id: 6,
    title: "Correo Institucional",
    icon: Mail,
    image: "/correo.png",
    href: "https://webmail.ugelambo.edu.pe/",
    external: true,
  },
  {
    id: 7,
    title: "Presupuesto",
    icon: Wallet,
    image: "/presupuesto.png",
    href: "https://www.transparencia.gob.pe/reportes_directos/pte_transparencia_info_finan.aspx?id_entidad=18827&id_tema=19&ver=",
    external: true,
  },
  {
    id: 8,
    title: "Directorio",
    icon: BookUser,
    image: "/directorio.png",
    href: "/Nosotros/Directorio",
    external: false,
  },
  {
    id: 9,
    title: "Integridad",
    icon: Shield,
    image: "/integridad2.png",
    href: "/integridad",
    external: false,
  },
];

export default function ServicesCards() {
  return (
    <section id="servicios" className="py-10 w-full bg-white">
      <div className="w-full px-4 md:px-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Servicios <span className="text-primary">Principales</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-5 max-w-[1400px] mx-auto">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.id}
                href={service.href}
                target={service.external ? "_blank" : undefined}
                rel={service.external ? "noopener noreferrer" : undefined}
                className="group block"
              >
                {service.image ? (
                  /* La imagen ES el botón: se muestra completa, sin recorte */
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    style={{ width: "100%", height: "auto" }}
                    className="rounded-2xl shadow-md group-hover:shadow-xl group-hover:scale-[1.03] transition-all duration-300"
                  />
                ) : (
                  /* Fallback solo si no hay imagen */
                  <div className="w-full aspect-4/3 rounded-2xl bg-primary/10 flex flex-col items-center justify-center gap-3 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] transition-all duration-300 text-primary border border-primary/20">
                    <Icon className="w-10 h-10" />
                    <span className="text-sm font-bold text-center px-2 leading-tight">
                      {service.title}
                    </span>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
