"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Megaphone,
  Gift,
  Scale,
  GraduationCap,
  ClipboardCheck,
  Shield,
  PlayCircle,
  Wallet,
  BookUser,
} from "lucide-react";

const services = [
  {
    id: 2,
    title: "Convocatorias",
    description: "Últimas convocatorias y oportunidades laborales",
    icon: Megaphone,
    href: "/convocatoria",
    external: false,
  },
  {
    id: 3,
    title: "Denuncias de Corrupción",
    description: "Plataforma Digital Única de Denuncias",
    icon: Scale,
    href: "https://denuncias.servicios.gob.pe/?gobpe_id=4412",
    external: true,
  },
  {
    id: 4,
    title: "SIAGIE",
    description: "Sistema de Información de Apoyo a la Gestión",
    icon: GraduationCap,
    href: "https://siagie.minedu.gob.pe/",
    external: true,
  },
  {
    id: 5,
    title: "Asistencia Docente",
    description: "Control de asistencia del personal docente",
    icon: ClipboardCheck,
    href: "/asistencia-docente",
    external: false,
  },
  {
    id: 6,
    title: "Integridad",
    description: "Portal de integridad y transparencia institucional",
    icon: Shield,
    href: "/integridad",
    external: false,
  },
  {
    id: 7,
    title: "Tutoriales",
    description: "Guías y videos instructivos para docentes",
    icon: PlayCircle,
    href: "/tutoriales",
    external: false,
  },
  {
    id: 8,
    title: "Presupuesto",
    description: "Información presupuestal y ejecución de gastos",
    icon: Wallet,
    href: "https://www.transparencia.gob.pe/reportes_directos/pte_transparencia_info_finan.aspx?id_entidad=18827&id_tema=19&ver=",
    external: true,
  },
  {
    id: 9,
    title: "Directorio",
    description: "Directorio de instituciones educativas",
    icon: BookUser,
    href: "/directorio",
    external: false,
  },
];

export default function ServicesCards() {
  return (
    <section id="servicios" className="py-5 px-4 md:py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 text-foreground">
            Servicios Principales
          </h2>
        </div>

        <div className="w-full lg:w-3/4 mx-auto ">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  target={service.external ? "_blank" : undefined}
                  className="block group"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border border-primary/20 hover:border-primary text-center bg-white hover:scale-[1.02] flex flex-col items-center p-1.5 md:p-3 gap-0 md:gap-0.5">
                    <div className="p-3  mb-2 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary shrink-0" />
                    </div>

                    <CardHeader className="w-full p-0 ">
                      <CardTitle className="text-sm md:text-base font-bold leading-tight group-hover:text-primary transition-colors text-center w-full">
                        {service.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="w-full p-0 m-0">
                      <p className="text-[11px] md:text-xs text-muted-foreground line-clamp-3 leading-relaxed text-center ">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
