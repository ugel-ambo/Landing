"use client";

import { Button } from "@/components/ui/button";
import { FileText, Tag, Download, Send } from "lucide-react";

const flyers = [
  {
    title: "Campaña contra el Bullying 2026",
    desc: "Material informativo sobre prevención del acoso escolar en las instituciones educativas.",
    categoria: "Prevención",
  },
  {
    title: "Semana de la Convivencia Escolar",
    desc: "Flyer informativo sobre las actividades programadas durante la Semana de la Convivencia.",
    categoria: "Eventos",
  },
  {
    title: "Protocolos SíseVe",
    desc: "Resumen gráfico de los pasos para reportar un caso de violencia escolar en el SíseVe.",
    categoria: "Protocolos",
  },
  {
    title: "Derechos del Estudiante",
    desc: "Infografía sobre los derechos fundamentales de los estudiantes en la institución educativa.",
    categoria: "Derechos",
  },
  {
    title: "Números de Emergencia",
    desc: "Directorio de contactos de emergencia: DEMUNA, CEM, Comisaría, Línea 100.",
    categoria: "Contactos",
  },
  {
    title: "Normas de Convivencia",
    desc: "Guía visual para la elaboración participativa de normas de convivencia en el aula.",
    categoria: "Gestión",
  },
];

export default function FlyersPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary py-16 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 border border-white/30 px-4 py-2 text-sm font-semibold text-white mb-6">
            <FileText className="w-4 h-4" /> Material Gráfico
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Flyers Informativos
          </h1>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Material gráfico descargable sobre convivencia escolar, campañas y
            protocolos de atención
          </p>
        </div>
      </section>

      {/* Flyers Grid */}
      <section className="py-16 px-6 sm:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {flyers.map((flyer, i) => (
              <div
                key={i}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary transition-all duration-300 group"
              >
                {/* Flyer Placeholder */}
                <div className="relative aspect-3/4 bg-primary/5 flex items-center justify-center">
                  <div className="text-center px-6">
                    <FileText className="w-16 h-16 text-muted-foreground/40 mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground font-medium">
                      Flyer disponible próximamente
                    </p>
                  </div>
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-xs font-semibold bg-foreground text-white px-3 py-1 rounded-full">
                    <Tag className="w-3 h-3" />
                    {flyer.categoria}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {flyer.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {flyer.desc}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-border text-foreground hover:bg-primary/5 hover:border-primary font-medium text-sm"
                    disabled
                  >
                    <Download className="w-4 h-4 mr-2" /> Descargar PDF
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="mt-12 bg-card rounded-xl border border-border p-8 text-center">
            <p className="text-muted-foreground mb-4">
              ¿Tienes material gráfico educativo para compartir? Envíalo al
              equipo de Convivencia Escolar
            </p>
            <a href="mailto:paoloz65@gmail.com">
              <Button className="bg-foreground hover:bg-foreground/90 text-white font-semibold px-6">
                <Send className="w-4 h-4 mr-2" /> Enviar Material
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
