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
  BriefcaseBusiness,
} from "lucide-react";
import {
  Convocatoria,
  getEstadoTexto,
  getEstadoColor,
} from "@/types/convocatoria.types";
import { getConvocatorias } from "@/lib/convocatorias";
import SectionHeader from "@/components/section-header";

export default async function ConvocatoriasSection() {
  let convocatorias: Convocatoria[] = [];
  let error = false;
  try {
    convocatorias = await getConvocatorias(3);
  } catch (err) {
    console.error("Error fetching recent convocatorias:", err);
    error = true;
  }

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

  return (
    <section
      id="convocatorias"
      className="w-full bg-background py-12 md:py-16"
    >
      <div className="w-full px-4 md:px-10">
        <SectionHeader
          badgeIcon={<BriefcaseBusiness className="h-3.5 w-3.5 text-[#049DD9]" />}
          badgeText="Oportunidades Laborales"
          title="Convocatorias"
          titleHighlight="Recientes"
          description="Únete a nuestro equipo. Revisa las últimas oportunidades laborales vigentes."
        />

        {error || convocatorias.length === 0 ? (
          <p role="status" className="rounded-xl border border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-600">
            {error ? "No se pudieron cargar las convocatorias. Inténtalo más tarde." : "Por el momento no hay convocatorias disponibles."}
          </p>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {convocatorias.map((conv) => (
            <div key={conv._id}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-t-4 border-t-[#049DD9]">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <Badge
                      className={`${getEstadoColor(
                        conv.estado,
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
            </div>
          ))}
        </div>
        )}
        <div className="mt-8 flex justify-center">
          <Button asChild variant="outline" className="group">
            <Link href="/convocatoria">
              Ver todas las convocatorias
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
