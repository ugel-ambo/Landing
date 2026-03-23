"use client";

import Link from "next/link";
// Para imagenes 
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Megaphone,
  Scale,
  GraduationCap,
  ClipboardCheck,
  Shield,
  Wallet,
  BookUser,
  Mail
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Convocatorias",
    description: "Últimas convocatorias y oportunidades laborales",
    icon: Megaphone,
    href: "/convocatoria",
    external: false
  },
  {
    id: 2,
    title: "Denuncias de Corrupción",
    description: "Plataforma Digital Única de Denuncias",
    icon: Scale,
    href: "https://denuncias.servicios.gob.pe/?gobpe_id=4412",
    external: true
  },
  {
    id: 3,
    title: "SIAGIE",
    description: "Sistema de Información de Apoyo a la Gestión",
    icon: GraduationCap,
    // image: "/logo-siagie.png",
    href: "https://siagie.minedu.gob.pe/",
    external: true
  },
  {
    id: 4,
    title: "Reporte de parte mensual",
    description: "De directivos, docentes y administrativos",
    icon: ClipboardCheck,
    href: "https://reportedeasistencia.ugelambo.edu.pe/",
    external: true
  },
  {
    id: 5,
    title: "Integridad",
    description: "Portal de integridad y transparencia institucional",
    icon: Shield,
    href: "/integridad",
    external: false
  },
  {
    id: 6,
    title: "Correo Institucional",
    description: "Correo institucional para docentes y personal administrativo",
    icon: Mail,
    href: "https://webmail.ugelambo.edu.pe/",
    external: true
  },
  {
    id: 7,
    title: "Presupuesto",
    description: "Información presupuestal y ejecución de gastos",
    icon: Wallet,
    href: "https://www.transparencia.gob.pe/reportes_directos/pte_transparencia_info_finan.aspx?id_entidad=18827&id_tema=19&ver=",
    external: true
  },
  {
    id: 8,
    title: "Directorio",
    description: "Directorio de instituciones educativas",
    icon: BookUser,
    href: "/Areas/Direccion",
    image: "",
    external: false
  }
];

export default function ServicesCards() {
  return (
    <section id="servicios" className="py-5 px-4 md:py-10 bg-white w-full">
      <div className="w-full">
        {" "}
        {/* Eliminamos 'container' para que no haya límites laterales */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 text-foreground">
            Servicios Principales
          </h2>
        </div>
        {/* Explicación de las columnas:
       - grid-cols-2: 2 por fila en celulares (4 filas total)
       - sm:grid-cols-4: 4 por fila en tablets y PC (2 filas total -> 4 arriba, 4 abajo)
    */}
        <div className="w-full px-2 md:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  target={service.external ? "_blank" : undefined}
                  className="block group">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border border-primary/20 hover:border-primary text-center bg-white hover:scale-[1.03] flex flex-col items-center p-4 md:p-6 gap-2">
                    {/* Contenedor de Imagen o Icono */}
                    <div className="relative w-16 h-16 md:w-50 md:h-24 mb-3 flex items-center justify-center rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors overflow-hidden">
                      {service.image ? (
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-contain p-2 transition-transform group-hover:scale-110"
                        />
                      ) : (
                        <Icon className="w-8 h-8 md:w-12 md:h-12 text-primary shrink-0" />
                      )}
                    </div>

                    <CardHeader className="w-full p-0">
                      <CardTitle className="text-sm md:text-lg font-bold leading-tight group-hover:text-primary transition-colors text-center w-full">
                        {service.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="w-full p-0 mt-2">
                      <p className="text-[11px] md:text-sm text-muted-foreground line-clamp-2 leading-relaxed text-center">
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

{/* <div>
  quiero hacer para poder colocar imafgenes "use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Megaphone,
  Scale,
  GraduationCap,
  ClipboardCheck,
  Shield,
  Wallet,
  BookUser,
  Mail
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Convocatorias",
    description: "Últimas convocatorias y oportunidades laborales",
    icon: Megaphone,
    href: "/convocatoria",
    external: false
  },
  {
    id: 2,
    title: "Denuncias de Corrupción",
    description: "Plataforma Digital Única de Denuncias",
    icon: Scale,
    href: "https://denuncias.servicios.gob.pe/?gobpe_id=4412",
    external: true
  },
  {
    id: 3,
    title: "SIxAGIE",
    description: "Sistema de Información de Apoyo a la Gestión",
    icon: GraduationCap,
    href: "https://siagie.minedu.gob.pe/",
    external: true
  },
  {
    id: 4,
    title: "Reporte de parte mensual",
    description: "De directivos, docentes y administrativos",
    icon: ClipboardCheck,
    href: "https://reportedeasistencia.ugelambo.edu.pe/",
    external: true
  },
  {
    id: 5,
    title: "Integridad",
    description: "Portal de integridad y transparencia institucional",
    icon: Shield,
    href: "/integridad",
    external: false
  },
  {
    id: 6,
    title: "Correo Institucional",
    description: "Correo institucional para docentes y personal administrativo",
    icon: Mail,
    href: "https://webmail.ugelambo.edu.pe/",
    external: true
  },
  {
    id: 7,
    title: "Presupuesto",
    description: "Información presupuestal y ejecución de gastos",
    icon: Wallet,
    href: "https://www.transparencia.gob.pe/reportes_directos/pte_transparencia_info_finan.aspx?id_entidad=18827&id_tema=19&ver=",
    external: true
  },
  {
    id: 8,
    title: "Directorio",
    description: "Directorio de instituciones educativas",
    icon: BookUser,
    href: "/Areas/Direccion",
    external: false
  }
];

export default function ServicesCards() {
  return (
    <section id="servicios" className="py-1 px-4 md:py-10 bg-white">
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
                  className="block group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border border-primary/20 hover:border-primary text-center bg-white hover:scale-[1.02] flex flex-col items-center p-1.5 md:p-3 gap-0 md:gap-0.5">
                    <div className="p-3  mb-2 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
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
 a las secciones 
</div> */}