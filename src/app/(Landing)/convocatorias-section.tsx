"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  FileText,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import {
  Convocatoria,
  ConvocatoriasResponse,
  getEstadoTexto,
  getEstadoColor,
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
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <section className="py-8 md:py-10 bg-background w-full">
        <div className="w-full px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-20 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || convocatorias.length === 0) return null;

  return (
    <section
      id="convocatorias"
      className="py-8 md:py-10 w-full bg-gradient-to-b from-white to-gray-50"
    >
      <div className="w-full px-4 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div className="text-center md:text-left">
            <p className="text-[#049DD9] font-bold text-sm uppercase tracking-widest mb-1">
              Oportunidades Laborales
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              Convocatorias <span className="text-[#049DD9]">Recientes</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Únete a nuestro equipo. Revisa las últimas oportunidades laborales
              vigentes.
            </p>
          </div>
          <Link href="/convocatoria">
            <Button variant="outline" className="group">
              Ver todas las convocatorias
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {convocatorias.map((conv, index) => (
            <motion.div
              key={conv._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-t-4 border-t-[#049DD9]">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <Badge
                      className={`${getEstadoColor(
                        conv.estado
                      )} text-white border-none flex items-center`}
                    >
                      {getStatusIcon(conv.estado)}
                      {getEstadoTexto(conv.estado)}
                    </Badge>
                  </div>
                  <CardTitle
                    className="text-lg font-bold leading-tight line-clamp-2"
                    title={conv.nombre}
                  >
                    {conv.nombre}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pb-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 text-[#049DD9]" />
                      <span className="font-medium text-gray-700">
                        Inscripción:
                      </span>
                      <span className="ml-auto">
                        {formatDate(conv.fechaInicioInscripcion)} al{" "}
                        {formatDate(conv.fechaFinInscripcion)}
                      </span>
                    </div>
                    {conv.fechaResultados && (
                      <div className="flex items-center text-muted-foreground">
                        <FileText className="w-4 h-4 mr-2 text-[#049DD9]" />
                        <span className="font-medium text-gray-700">
                          Resultados:
                        </span>
                        <span className="ml-auto">
                          {formatDate(conv.fechaResultados)}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link href="/convocatoria" className="w-full">
                    <Button className="w-full bg-[#049DD9] hover:bg-[#037bbd] text-white transition-all">
                      Ver Detalles
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
