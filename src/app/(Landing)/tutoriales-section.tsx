"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import {
  Tutorial,
  TutorialesApiResponse,
  getYoutubeID,
  CATEGORIAS,
} from "@/types/tutorial.types";

export default function TutorialesSection() {
  const [tutoriales, setTutoriales] = useState<Tutorial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTutoriales = async () => {
      try {
        const res = await fetch(`/api/tutoriales?t=${Date.now()}`);
        if (!res.ok) throw new Error("Error al cargar tutoriales");
        const data: TutorialesApiResponse = await res.json();
        if (data.success) {
          setTutoriales(data.data.slice(0, 3));
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchTutoriales();
  }, []);

  if (loading) {
    return (
      <section className="py-8 md:py-10 bg-background w-full">
        <div className="w-full px-4 md:px-10">
          <div className="text-center mb-8">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || tutoriales.length === 0) return null;

  return (
    <section id="tutoriales" className="py-8 md:py-10 bg-background w-full">
      <div className="w-full px-4 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              Tutoriales <span className="text-[#049DD9]">Recientes</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Guías en video para facilitar el uso de nuestras plataformas.
            </p>
          </div>
          <Link href="/tutoriales">
            <Button variant="outline" className="group">
              Ver todos los tutoriales
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutoriales.map((tutorial, index) => {
            const videoId = getYoutubeID(tutorial.youtubeUrl);
            return (
              <motion.div
                key={tutorial._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-t-4 border-t-[#049DD9] overflow-hidden">
                  <div className="relative h-48 bg-black">
                    {videoId ? (
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={tutorial.titulo}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/50">
                        <PlayCircle className="w-12 h-12" />
                      </div>
                    )}
                  </div>
                  <CardHeader className="flex-1">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <Badge variant="secondary">
                        {CATEGORIAS[tutorial.categoria] || tutorial.categoria}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-bold leading-tight line-clamp-2">
                      {tutorial.titulo}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 mt-2">
                      {tutorial.descripcion}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
