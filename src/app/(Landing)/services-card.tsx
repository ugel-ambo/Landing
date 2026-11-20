"use client";

import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import SectionHeader from "@/components/section-header";
import { Sparkles } from "lucide-react";
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
    title: "Convocatoria",
    icon: Megaphone,
    href: "/convocatoria",
    image: "/Convocatoria.png",
    external: false,
  },
  {
    id: 2,
    title: "DENUNCIAS_CORRUPCIÓN",
    icon: Scale,
    href: "https://denuncias.servicios.gob.pe/?gobpe_id=4412",
    image: "/CARDS/DENUNCIAS_CORRUPCION/DENUNCIAS_CORRUPCION.png",
    external: true,
  },
  {
    id: 3,
    title: "SIAGIE",
    icon: GraduationCap,
    image: "/CARDS/SIAGIE/SIAGIE (3).png",
    href: "https://siagie.minedu.gob.pe/",
    external: true,
  },
  {
    id: 4,
    title: "Parte Mensual de  asistencia",
    icon: ClipboardCheck,
    image: "/asistencia.png",
    href: "https://monitoreo.ugelambo.edu.pe",
    external: true,
  },
  {
    id: 5,
    title: "Conformidad del servicio de internet",
    icon: BookUser,
    image: "/CARDS/CONFORMIDAD/conformidad.png",
    href: "https://internet.ugelambo.edu.pe/login",
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
    title: "PRESUPUESTO",
    icon: Wallet,
    image: "/CARDS/PRESUPUESTO/PRESUPUESTO.png",
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
  {
    id: 10,
    title: "SIFODS",
    icon: Shield,
    image: "/CARDS/SIFODS/SIFODS.png",
    href: "https://sifods.minedu.gob.pe/docente/preview",
    external: true,
  },
  {
    id: 11,
    title: "PERÚEDUCA",
    icon: Shield,
    image: "/CARDS/PERUEDUCA/PERUEDUCA2.png",
    href: "https://www.perueduca.pe/#/home",
    external: true,
  },
  {
    id: 12,
    title: "SIMON",
    icon: Shield,
    image: "/CARDS/SIMON/SIMON.png",
    href: "https://simon.minedu.gob.pe/login",
    external: true,
  },
];

const serviceColors: Record<number, string> = {
  1: "#049dd9", 2: "#ef4654", 3: "#25a45a", 4: "#168bd4",
  5: "#ad52bc", 6: "#e2a017", 7: "#ec4651", 8: "#049dd9",
  9: "#1887b8", 10: "#e94b54", 11: "#e4434f", 12: "#e04c5c",
};

export default function ServicesCards() {
  return (
    <section id="servicios" className="relative w-full overflow-hidden bg-gradient-to-b from-[#f0faff] via-white to-white py-14 md:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-8 h-56 w-56 rounded-full bg-[#049DD9]/5 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-[#f4bc32]/10 blur-3xl" />
      <div className="relative w-full px-4 md:px-10">
        <SectionHeader
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#049DD9]" />}
          badgeText="Accesos Rápidos"
          title="Servicios"
          titleHighlight="Principales"
          description="Encuentra en un solo lugar las plataformas y servicios para nuestra comunidad educativa."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-5 max-w-[1400px] mx-auto">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.id}
                href={service.href}
                target={service.external ? "_blank" : undefined}
                rel={service.external ? "noopener noreferrer" : undefined}
                style={{ "--service-color": serviceColors[service.id] } as CSSProperties}
                className="group relative block rounded-2xl transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.025] focus-visible:-translate-y-2 focus-visible:scale-[1.025] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#049DD9] motion-reduce:transform-none motion-reduce:transition-none"
              >
                <span aria-hidden="true" className="pointer-events-none absolute inset-x-[8%] bottom-0 h-1/3 rounded-full bg-[var(--service-color)] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40 group-focus-visible:opacity-40 motion-reduce:transition-none" />
                <span aria-hidden="true" className="pointer-events-none absolute -inset-1 rounded-[1.25rem] bg-[var(--service-color)] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-25 group-focus-visible:opacity-25 motion-reduce:transition-none" />
                {service.image ? (
                  <>
                  <div className="relative overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 group-hover:shadow-[0_16px_28px_-12px_var(--service-color)] group-focus-visible:shadow-[0_16px_28px_-12px_var(--service-color)] motion-reduce:transition-none">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    style={{ width: "100%", height: "auto" }}
                    className="rounded-2xl transition-[filter] duration-300 group-hover:brightness-[1.04] group-focus-visible:brightness-[1.04] motion-reduce:transition-none"
                  />
                  <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-[left,opacity] duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100 group-focus-visible:left-[120%] group-focus-visible:opacity-100 motion-reduce:hidden" />
                  <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-inset ring-[var(--service-color)] opacity-0 transition-opacity duration-300 group-hover:opacity-50 group-focus-visible:opacity-50 motion-reduce:transition-none" />
                  <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-[var(--service-color)] transition-[width] duration-300 group-hover:w-1/2 group-focus-visible:w-1/2 motion-reduce:transition-none" />
                  </div>
                  <span aria-hidden="true" className="service-card-spark pointer-events-none absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full border border-white/80 bg-[var(--service-color)] text-white shadow-md opacity-0 motion-reduce:hidden"><Sparkles className="h-4 w-4" /></span>
                  </>
                ) : (
                  /* Fallback solo si no hay imagen */
                  <div className="w-full aspect-4/3 rounded-2xl bg-primary/10 flex flex-col items-center justify-center gap-3 shadow-md service-card-glow group-hover:shadow-xl group-hover:scale-[1.03] transition-all duration-300 text-primary border border-primary/20">
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

