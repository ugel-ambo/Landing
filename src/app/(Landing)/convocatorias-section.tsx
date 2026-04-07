"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  FileText,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Briefcase
} from "lucide-react";
import {
  Convocatoria,
  ConvocatoriasResponse,
  getEstadoTexto,
  getEstadoColor
} from "@/types/convocatoria.types";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

export default function ConvocatoriasSection() {
  const [convocatorias, setConvocatorias] = useState<Convocatoria[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConvocatorias = async () => {
      try {
        const res = await fetch("/api/convocatorias");
        if (!res.ok) throw new Error("Error al cargar convocatorias");
        const data: ConvocatoriasResponse = await res.json();

        // LIMITAMOS A EXACTAMENTE 3
        setConvocatorias(data.convocatorias.slice(0, 3));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchConvocatorias();
  }, []);

  const getStatusIcon = (estado: Convocatoria["estado"]) => {
    if (estado === "vigente" || estado === "en_proceso")
      return <CheckCircle2 className="w-4 h-4 mr-1" />;
    return <AlertCircle className="w-4 h-4 mr-1" />;
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("es-PE", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  };

  if (loading) {
    return (
      <section className="py-20 w-full bg-background">
        <div className="w-full px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-[350px] w-full rounded-3xl" />
          ))}
        </div>
      </section>
    );
  }

  if (error || convocatorias.length === 0) return null;

  return (
    <section
      id="convocatorias"
      className="py-16 md:py-24 w-full  from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="w-full px-6 md:px-16 lg:px-24">
        {/* Header de Ancho Completo */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#049DD9] font-bold tracking-widest uppercase text-xs md:text-sm">
              <Briefcase className="w-4 h-4" />
              <span>Oportunidades Laborales</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
              Convocatorias <span className="text-[#049DD9]">Recientes</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Únete a nuestro equipo. Revisa las últimas oportunidades laborales
              vigentes.
            </p>
          </div>
          <Link href="/convocatoria">
            <Button
              variant="outline"
              className="group border-[#049DD9] text-[#049DD9] hover:bg-[#049DD9] hover:text-white rounded-full px-8 py-6 font-bold transition-all duration-300">
              Ver todas las convocatorias
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Grid de 3 Columnas - Ocupa todo el espacio lateral */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {convocatorias.map((conv, index) => (
            <motion.div
              key={conv._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="h-full">
              <Card className="h-full flex flex-col hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500 border-none bg-white dark:bg-slate-900  overflow-hidden  border-t-[#049DD9]">
                <CardHeader className="pb-4 pt-10 px-10">
                  <div className="flex justify-between items-start mb-5">
                    <Badge
                      className={`${getEstadoColor(
                        conv.estado
                      )} text-white border-none px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm`}>
                      {getStatusIcon(conv.estado)}
                      {getEstadoTexto(conv.estado)}
                    </Badge>
                  </div>
                  <CardTitle
                    className="text-2xl font-extrabold leading-tight text-slate-800 dark:text-slate-100 line-clamp-3 "
                    title={conv.nombre}>
                    {conv.nombre}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 pb-8 px-10">
                  <div className="space-y-5 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center text-[#049DD9] font-black text-[11px] uppercase tracking-widest">
                        <Calendar className="w-4 h-4 mr-2" />
                        Inscripciones
                      </div>
                      <span className="text-base text-slate-600 dark:text-slate-400 font-semibold">
                        {formatDate(conv.fechaInicioInscripcion)} —{" "}
                        {formatDate(conv.fechaFinInscripcion)}
                      </span>
                    </div>

                    {conv.fechaResultados && (
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center text-[#049DD9] font-black text-[11px] uppercase tracking-widest">
                          <FileText className="w-4 h-4 mr-2" />
                          Resultados
                        </div>
                        <span className="text-base text-slate-600 dark:text-slate-400 font-semibold">
                          {formatDate(conv.fechaResultados)}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="pb-10 px-10 pt-0">
                  <Link href="/convocatoria" className="w-full">
                    <Button className="w-full bg-slate-950 dark:bg-[#049DD9] hover:bg-[#049DD9] dark:hover:bg-[#037bbd] text-white rounded-2xl py-7 font-black tracking-wide shadow-xl transition-all active:scale-95 group">
                      POSTULAR AHORA
                      <ArrowRight className="ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Calendar,
//   FileText,
//   ArrowRight,
//   AlertCircle,
//   CheckCircle2,
// } from "lucide-react";
// import {
//   Convocatoria,
//   ConvocatoriasResponse,
//   getEstadoTexto,
//   getEstadoColor,
// } from "@/types/convocatoria.types";
// import { Skeleton } from "@/components/ui/skeleton";
// import { motion } from "framer-motion";

// export default function ConvocatoriasSection() {
//   const [convocatorias, setConvocatorias] = useState<Convocatoria[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchConvocatorias = async () => {
//       try {
//         const res = await fetch("/api/convocatorias");
//         if (!res.ok) throw new Error("Error al cargar convocatorias");
//         const data: ConvocatoriasResponse = await res.json();
//         setConvocatorias(data.convocatorias.slice(0, 3));
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "Error desconocido");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchConvocatorias();
//   }, []);

//   const getStatusIcon = (estado: Convocatoria["estado"]) => {
//     if (estado === "vigente" || estado === "en_proceso")
//       return <CheckCircle2 className="w-4 h-4 mr-1" />;
//     return <AlertCircle className="w-4 h-4 mr-1" />;
//   };

//   const formatDate = (dateStr: string) => {
//     return new Date(dateStr).toLocaleDateString("es-PE", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   };

//   if (loading) {
//     return (
//       <section className="py-16 md:py-24 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <Skeleton className="h-10 w-64 mx-auto mb-4" />
//             <Skeleton className="h-6 w-96 mx-auto" />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[1, 2, 3].map((i) => (
//               <Card key={i} className="overflow-hidden">
//                 <CardHeader>
//                   <Skeleton className="h-6 w-3/4 mb-2" />
//                   <Skeleton className="h-4 w-1/2" />
//                 </CardHeader>
//                 <CardContent>
//                   <Skeleton className="h-20 w-full" />
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (error || convocatorias.length === 0) return null;

//   return (
//     <section
//       id="convocatorias"
//       className="py-8 md:py-10 bg-linear-to-b from-white to-gray-50"
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
//           <div className="text-center md:text-left lg:ml-24">
//             <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
//               Convocatorias <span className="text-[#049DD9]">Recientes</span>
//             </h2>
//             <p className="text-muted-foreground text-lg max-w-2xl">
//               Únete a nuestro equipo. Revisa las últimas oportunidades laborales
//               vigentes.
//             </p>
//           </div>
//           <Link href="/convocatoria">
//             <Button variant="outline" className="group">
//               Ver todas las convocatorias
//               <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </Link>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 md:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {convocatorias.map((conv, index) => (
//               <motion.div
//                 key={conv._id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-t-4 border-t-[#049DD9]">
//                   <CardHeader className="pb-3">
//                     <div className="flex justify-between items-start gap-2 mb-2">
//                       <Badge
//                         className={`${getEstadoColor(
//                           conv.estado
//                         )} text-white border-none flex items-center`}
//                       >
//                         {getStatusIcon(conv.estado)}
//                         {getEstadoTexto(conv.estado)}
//                       </Badge>
//                     </div>
//                     <CardTitle
//                       className="text-lg font-bold leading-tight line-clamp-2"
//                       title={conv.nombre}
//                     >
//                       {conv.nombre}
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="flex-1 pb-4">
//                     <div className="space-y-3 text-sm">
//                       <div className="flex items-center text-muted-foreground">
//                         <Calendar className="w-4 h-4 mr-2 text-[#049DD9]" />
//                         <span className="font-medium text-gray-700">
//                           Inscripción:
//                         </span>
//                         <span className="ml-auto">
//                           {formatDate(conv.fechaInicioInscripcion)} al{" "}
//                           {formatDate(conv.fechaFinInscripcion)}
//                         </span>
//                       </div>
//                       {conv.fechaResultados && (
//                         <div className="flex items-center text-muted-foreground">
//                           <FileText className="w-4 h-4 mr-2 text-[#049DD9]" />
//                           <span className="font-medium text-gray-700">
//                             Resultados:
//                           </span>
//                           <span className="ml-auto">
//                             {formatDate(conv.fechaResultados)}
//                           </span>
//                         </div>
//                       )}
//                     </div>
//                   </CardContent>
//                   <CardFooter className="pt-0">
//                     <Link href="/convocatoria" className="w-full">
//                       <Button className="w-full bg-[#049DD9] hover:bg-[#037bbd] text-white group-hover:shadow-md transition-all">
//                         Ver Detalles
//                       </Button>
//                     </Link>
//                   </CardFooter>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
