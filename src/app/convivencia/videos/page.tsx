"use client";

import { Button } from "@/components/ui/button";
import { Play, Tag, Send } from "lucide-react";

const videos = [
  {
    title: "¿Qué es la Convivencia Escolar?",
    desc: "Conoce los fundamentos de la convivencia escolar según los lineamientos del MINEDU.",
    categoria: "Conceptos",
  },
  {
    title: "Protocolos de Atención SíseVe",
    desc: "Guía práctica sobre cómo registrar y dar seguimiento a casos de violencia escolar.",
    categoria: "Protocolos",
  },
  {
    title: "Prevención del Bullying",
    desc: "Estrategias efectivas para prevenir y abordar el acoso escolar en las instituciones educativas.",
    categoria: "Prevención",
  },
  {
    title: "Educación Socioemocional",
    desc: "Herramientas para desarrollar competencias socioemocionales en los estudiantes.",
    categoria: "Formación",
  },
  {
    title: "Rol del Comité de Tutoría",
    desc: "Funciones y responsabilidades del Comité de Tutoría y Orientación Educativa.",
    categoria: "Gestión",
  },
  {
    title: "Participación de las Familias",
    desc: "Cómo involucrar a los padres de familia en la gestión de la convivencia escolar.",
    categoria: "Comunidad",
  },
];

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary py-16 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 border border-white/30 px-4 py-2 text-sm font-semibold text-white mb-6">
            <Play className="w-4 h-4" /> Material Audiovisual
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Videos Educativos
          </h1>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Recursos audiovisuales sobre convivencia escolar, protocolos de
            atención y estrategias de prevención
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16 px-6 sm:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <div
                key={i}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary transition-all duration-300 group"
              >
                {/* Video Placeholder */}
                <div className="relative aspect-video bg-foreground flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-primary/80 transition-colors duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full">
                    <Tag className="w-3 h-3" />
                    {video.categoria}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {video.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="mt-12 bg-card rounded-xl border border-border p-8 text-center">
            <p className="text-muted-foreground mb-4">
              ¿Tienes material audiovisual para compartir? Envíalo al equipo de
              Convivencia Escolar
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
