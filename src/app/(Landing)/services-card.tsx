"use client";

import Link from "next/link";
import Image from "next/image";
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
    image: "/CARDS/inicio-2026/convocatorias.png",
    external: false,
  },
  {
    id: 2,
    title: "DENUNCIAS_CORRUPCIÓN",
    icon: Scale,
    href: "https://denuncias.servicios.gob.pe/?gobpe_id=4412",
    image: "/CARDS/inicio-2026/denuncias.png",
    external: true,
  },
  {
    id: 3,
    title: "SIAGIE",
    icon: GraduationCap,
    image: "/CARDS/inicio-2026/siagie-ajustada.png",
    href: "https://siagie.minedu.gob.pe/",
    external: true,
  },
  {
    id: 4,
    title: "Parte Mensual de  asistencia",
    icon: ClipboardCheck,
    image: "/CARDS/inicio-2026/asistencia.png",
    href: "https://monitoreo.ugelambo.edu.pe",
    external: true,
  },
  {
    id: 5,
    title: "Conformidad del servicio de internet",
    icon: BookUser,
    image: "/CARDS/inicio-2026/conformidad.png",
    href: "https://internet.ugelambo.edu.pe/login",
    external: true,
  },
  {
    id: 6,
    title: "Correo Institucional",
    icon: Mail,
    image: "/CARDS/inicio-2026/correo.png",
    href: "https://webmail.ugelambo.edu.pe/",
    external: true,
  },
  {
    id: 7,
    title: "PRESUPUESTO",
    icon: Wallet,
    image: "/CARDS/inicio-2026/presupuesto-ajustada.png",
    href: "https://www.transparencia.gob.pe/reportes_directos/pte_transparencia_info_finan.aspx?id_entidad=18827&id_tema=19&ver=",
    external: true,
  },
  {
    id: 8,
    title: "Directorio",
    icon: BookUser,
    image: "/CARDS/inicio-2026/directorio.png",
    href: "/Nosotros/Directorio",
    external: false,
  },
  {
    id: 9,
    title: "Integridad",
    icon: Shield,
    image: "/CARDS/inicio-2026/integridad.png",
    href: "/integridad",
    external: false,
  },
  {
    id: 10,
    title: "SIFODS",
    icon: Shield,
    image: "/CARDS/inicio-2026/sifods.png",
    href: "https://sifods.minedu.gob.pe/docente/preview",
    external: true,
  },
  {
    id: 11,
    title: "PERÚEDUCA",
    icon: Shield,
    image: "/CARDS/inicio-2026/perueduca-ajustada.png",
    href: "https://www.perueduca.pe/#/home",
    external: true,
  },
  {
    id: 12,
    title: "SIMON",
    icon: Shield,
    image: "/CARDS/inicio-2026/simon-ajustada.png",
    href: "https://simon.minedu.gob.pe/login",
    external: true,
  },
];

export default function ServicesCards() {
  return (
    <section id="servicios" className="relative w-full overflow-hidden bg-gradient-to-b from-[#eaf7fc] via-[#dcedf7] to-[#f5fbfd] py-14 md:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,rgba(255,255,255,0.78),transparent_65%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-[#049DD9]/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#f4bc32]/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/3 top-1/2 h-64 w-64 rounded-full bg-[#7867d8]/10 blur-3xl" />
      <div className="relative w-full px-4 md:px-10">
        <SectionHeader
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#049DD9]" />}
          badgeText="Accesos Rápidos"
          title="Servicios"
          titleHighlight="Principales"
          description="Encuentra en un solo lugar las plataformas y servicios para nuestra comunidad educativa."
        />

        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-4 md:gap-x-5 md:gap-y-7">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.id}
                href={service.href}
                target={service.external ? "_blank" : undefined}
                rel={service.external ? "noopener noreferrer" : undefined}
                className="group relative block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#049DD9]"
              >
                <span aria-hidden="true" className="pointer-events-none absolute inset-x-[8%] bottom-0 h-1/2 rounded-full bg-gradient-to-r from-[#049DD9]/30 via-[#7560d5]/20 to-[#f4bc32]/25 blur-xl transition-all duration-300 group-hover:inset-x-[2%] group-hover:scale-110 group-hover:opacity-100 motion-reduce:transform-none motion-reduce:transition-none" />
                {service.image ? (
                  /* La imagen ES el botón: se muestra completa, sin recorte */
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={840}
                    height={420}
                    sizes="(max-width: 639px) 50vw, (max-width: 1400px) 25vw, 350px"
                    className="relative aspect-[2/1] w-full object-contain drop-shadow-[0_6px_6px_rgba(34,63,89,0.14)] transition-[transform,filter] duration-300 ease-out group-hover:-translate-y-1.5 group-hover:drop-shadow-[0_12px_10px_rgba(34,63,89,0.22)] motion-reduce:transform-none motion-reduce:transition-none"
                  />
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

