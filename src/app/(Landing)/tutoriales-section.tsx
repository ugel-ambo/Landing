"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MonitorPlay, Video } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import {
  Tutorial,
  TutorialesApiResponse,
  getYoutubeID,
  CATEGORIAS
} from "@/types/tutorial.types";

export default function TutorialesSection() {
  const [tutoriales, setTutoriales] = useState<Tutorial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTutoriales = async () => {
      try {
        const res = await fetch(`/api/tutoriales?t=${Date.now()}`);
        const data: TutorialesApiResponse = await res.json();
        if (data.success) setTutoriales(data.data.slice(0, 3));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTutoriales();
  }, []);

  if (loading) {
    return (
      <section className="py-16 w-full bg-background">
        <div className="w-full px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-[300px] w-full rounded-3xl" />
          ))}
        </div>
      </section>
    );
  }

  if (tutoriales.length === 0) return null;

  return (
    <section
      id="tutoriales"
      className="py-16 md:py-20 w-full bg-white dark:bg-slate-950 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-20">
        {/* Header - Tamaño Equilibrado y Moderno */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-slate-100 dark:border-slate-800 pb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#049DD9] font-bold tracking-[0.2em] uppercase text-xs">
              <Video className="w-4 h-4" />
              <span>Centro de Aprendizaje</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Tutoriales <span className="text-[#049DD9]">en Video</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium max-w-xl">
              Guías visuales diseñadas para facilitarte el uso de nuestras
              plataformas.
            </p>
          </div>
          <Link href="/tutoriales">
            <Button className="rounded-full bg-slate-900 dark:bg-[#049DD9] hover:bg-[#049DD9] text-white px-8 py-6 font-bold shadow-lg transition-all">
              Ver todos <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Grid de 3 Columnas - Espacio Optimizada */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tutoriales.map((tutorial, index) => {
            const videoId = getYoutubeID(tutorial.youtubeUrl);
            return (
              <motion.div
                key={tutorial._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col h-full">
                {/* Contenedor del Video con esquinas suavizadas */}
                <div className="relative aspect-video w-full rounded-[1.8rem] overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-md group-hover:shadow-2xl transition-all duration-500">
                  {videoId ? (
                    <iframe
                      className="w-full h-full object-cover"
                      src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`}
                      title={tutorial.titulo}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <MonitorPlay className="w-12 h-12 text-slate-300" />
                    </div>
                  )}

                  {/* Badge sutil sobre el video */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 dark:bg-slate-900/90 text-[#049DD9] backdrop-blur-sm border-none px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                      {CATEGORIAS[tutorial.categoria] || tutorial.categoria}
                    </Badge>
                  </div>

                  {/* Play Indicator sutil en hover */}
                  <div className="absolute inset-0 bg-[#049DD9]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                      <Play className="w-5 h-5 text-[#049DD9] fill-current ml-1" />
                    </div>
                  </div>
                </div>

                {/* Texto - Ajustado para legibilidad */}
                <div className="mt-6 flex-grow">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#049DD9] transition-colors leading-snug">
                    {tutorial.titulo}
                  </h3>
                  <p className="mt-3 text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed line-clamp-2">
                    {tutorial.descripcion}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-50 dark:border-slate-900">
                  <span className="text-[11px] font-black text-[#049DD9] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Reproducir Video
                  </span>
                </div>
              </motion.div>
            );
          })}
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
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, PlayCircle } from "lucide-react";
// import { Skeleton } from "@/components/ui/skeleton";
// import { motion } from "framer-motion";
// import {
//   Tutorial,
//   TutorialesApiResponse,
//   getYoutubeID,
//   CATEGORIAS,
// } from "@/types/tutorial.types";

// export default function TutorialesSection() {
//   const [tutoriales, setTutoriales] = useState<Tutorial[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchTutoriales = async () => {
//       try {
//         // Añadimos timestamp para evitar cache
//         const res = await fetch(`/api/tutoriales?t=${Date.now()}`);
//         if (!res.ok) throw new Error("Error al cargar tutoriales");
//         const data: TutorialesApiResponse = await res.json();
//         if (data.success) {
//           setTutoriales(data.data.slice(0, 3));
//         }
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "Error desconocido");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTutoriales();
//   }, []);

//   if (loading) {
//     return (
//       <section className="py-8 md:py-10 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-8">
//             <Skeleton className="h-10 w-64 mx-auto mb-4" />
//             <Skeleton className="h-6 w-96 mx-auto" />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[1, 2, 3].map((i) => (
//               <Card key={i} className="overflow-hidden">
//                 <Skeleton className="h-48 w-full" />
//                 <CardHeader>
//                   <Skeleton className="h-6 w-3/4 mb-2" />
//                   <Skeleton className="h-4 w-full" />
//                 </CardHeader>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (error || tutoriales.length === 0) return null;

//   return (
//     <section id="tutoriales" className="py-8 md:py-10 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
//           <div className="text-center md:text-left lg:ml-24">
//             <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
//               Tutoriales <span className="text-[#049DD9]">Recientes</span>
//             </h2>
//             <p className="text-muted-foreground text-lg max-w-2xl ">
//               Guías en video para facilitar el uso de nuestras plataformas.
//             </p>
//           </div>
//           <Link href="/tutoriales">
//             <Button variant="outline" className="group">
//               Ver todos los tutoriales
//               <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </Link>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 md:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {tutoriales.map((tutorial, index) => {
//               const videoId = getYoutubeID(tutorial.youtubeUrl);
//               return (
//                 <motion.div
//                   key={tutorial._id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-t-4 border-t-[#049DD9] overflow-hidden">
//                     <div className="relative h-48 bg-black">
//                       {videoId ? (
//                         <iframe
//                           className="w-full h-full"
//                           src={`https://www.youtube.com/embed/${videoId}`}
//                           title={tutorial.titulo}
//                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                           allowFullScreen
//                         ></iframe>
//                       ) : (
//                         <div className="w-full h-full flex items-center justify-center text-white/50">
//                           <PlayCircle className="w-12 h-12" />
//                         </div>
//                       )}
//                     </div>
//                     <CardHeader className="flex-1">
//                       <div className="flex justify-between items-start gap-2 mb-2">
//                         <Badge variant="secondary">
//                           {CATEGORIAS[tutorial.categoria] || tutorial.categoria}
//                         </Badge>
//                       </div>
//                       <CardTitle className="text-lg font-bold leading-tight line-clamp-2">
//                         {tutorial.titulo}
//                       </CardTitle>
//                       <CardDescription className="line-clamp-2 mt-2">
//                         {tutorial.descripcion}
//                       </CardDescription>
//                     </CardHeader>
//                   </Card>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
