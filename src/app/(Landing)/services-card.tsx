"use client";

import Link from "next/link";
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
    // image: "/convocatoria.png",
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
    href: "https://drive.google.com/file/d/1PVqUrEdxH_hTTPuKDkDtFOGGqEV3mEAf/view?usp=sharing",
    image: "",
    external: true
  }
];

export default function ServicesCards() {
  return (
    <section id="servicios" className="py-5 px-4 md:py-10 bg-white w-full">
      <div className="w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 text-foreground">
            Servicios Principales
          </h2>
        </div>

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

// ... (mismos imports y data de servicios)

// "use client";

// import Link from "next/link";

// import Image from "next/image";

// import { Card } from "@/components/ui/card";

// import {
//   Megaphone,
//   Scale,
//   GraduationCap,
//   ClipboardCheck,
//   Shield,
//   Wallet,
//   BookUser,
//   Mail
// } from "lucide-react";

// const services = [
//   {
//     id: 1,

//     title: "Convocatorias",

//     icon: Megaphone,

//     href: "/convocatoria",

//     image: "/Convocatoria.png",

//     external: false
//   },

//   {
//     id: 2,

//     title: "Denuncias de Corrupción",

//     icon: Scale,

//     href: "https://denuncias.servicios.gob.pe/?gobpe_id=4412",

//     image: "/corrupcion.png", // Sugerencia: añade imágenes a todos

//     external: true
//   },

//   {
//     id: 3,

//     title: "SIAGIE",

//     icon: GraduationCap,

//     image: "/siagie.png",

//     href: "https://siagie.minedu.gob.pe/",

//     external: true
//   },

//   {
//     id: 4,

//     title: "Reporte de asistencia",

//     icon: ClipboardCheck,

//     image: "/asistencia.png",

//     href: "https://reportedeasistencia.ugelambo.edu.pe/",

//     external: true
//   },

//   {
//     id: 5,

//     title: "Integridad",

//     icon: Shield,

//     image: "/integridad2.png",

//     href: "/integridad",

//     external: false
//   },

//   {
//     id: 6,

//     title: "Correo Institucional",

//     icon: Mail,

//     image: "/correo.png",

//     href: "https://webmail.ugelambo.edu.pe/",

//     external: true
//   },

//   {
//     id: 7,

//     title: "Presupuesto",

//     icon: Wallet,

//     image: "/presupuesto.png",

//     href: "https://www.transparencia.gob.pe/reportes_directos/pte_transparencia_info_finan.aspx?id_entidad=18827&id_tema=19&ver=",

//     external: true
//   },

//   {
//     id: 8,

//     title: "Directorio",

//     icon: BookUser,

//     image: "/directorio.png",

//     href: "https://drive.google.com/file/d/1PVqUrEdxH_hTTPuKDkDtFOGGqEV3mEAf/view?usp=sharing",

//     external: true
//   }
// ];

// export default function ServicesCards() {
//   return (
//     <section id="servicios" className="py-10 w-full bg-white">
//       <div className="w-full px-4 md:px-10">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
//             Servicios <span className="text-primary">Principales</span>
//           </h2>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
//           {services.map((service) => {
//             const Icon = service.icon;

//             return (
//               <Link
//                 key={service.id}
//                 href={service.href}
//                 target={service.external ? "_blank" : undefined}
//                 className="block group relative">
//                 <Card className="relative h-[180px] md:h-[410px] overflow-hidden border-none shadow-md group-hover:shadow-2xl group-hover:scale-[1.02] transition-all duration-500 rounded-2xl bg-slate-100">
//                   {/* Imagen que ocupa TODO el espacio */}

//                   {service.image ? (
//                     <Image
//                       src={service.image}
//                       alt={service.title}
//                       fill
//                       className="object-cover object-bottom transition-transform duration-700 group-hover:scale-110" // <--- AÑADE 'object-bottom' AQUÍ
//                     />
//                   ) : (
//                     /* Fallback si no hay imagen: Icono centrado grande */

//                     <div className="w-full h-full flex flex-col items-center justify-center bg-primary/5 text-primary">
//                       <Icon className="w-12 h-12 mb-2" />

//                       <span className="text-xs font-bold px-2 text-center">
//                         {service.title}
//                       </span>
//                     </div>
//                   )}

//                   {/* Overlay de Degradado para que el texto sea legible (Opcional) */}

//                   <div className="absolute inset-0  from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

//                   {/* Título flotante solo imagen */}

//                   <div className="absolute bottom-0 left-0 w-full p-4">
//                     <p className="text-white text-sm md:text-base font-bold leading-tight drop-shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
//                       {service.title}
//                     </p>

//                     {/* Línea decorativa */}

//                     <div className="h-1 w-8 bg-primary mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
//                   </div>
//                 </Card>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
