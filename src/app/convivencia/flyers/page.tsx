"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileText, Tag, Download, Send, FileIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FlyerItem {
  title: string;
  desc: string;
  categoria: string;
  tipo: "imagen" | "pdf";
  archivo: string;
}

const flyers: FlyerItem[] = [
  {
    title: "Campaña contra el Bullying 2026",
    desc: "Material informativo sobre prevención del acoso escolar en las instituciones educativas.",
    categoria: "Prevención",
    tipo: "imagen",
    archivo: "/convivencia/flyer/flyer_protocolo.jpeg",
  },
  {
    title: "Semana de la Convivencia Escolar",
    desc: "Flyer informativo sobre las actividades programadas durante la Semana de la Convivencia.",
    categoria: "Eventos",
    tipo: "imagen",
    archivo: "/convivencia/flyer/flyer_convivencia.jpeg",
  },
  {
    title: "Protocolos SíseVe",
    desc: "Resumen gráfico de los pasos para reportar un caso de violencia escolar en el SíseVe.",
    categoria: "Protocolos",
    tipo: "pdf",
    archivo: "",
  },
  {
    title: "Derechos del Estudiante",
    desc: "Infografía sobre los derechos fundamentales de los estudiantes en la institución educativa.",
    categoria: "Derechos",
    tipo: "imagen",
    archivo: "",
  },
  {
    title: "Números de Emergencia",
    desc: "Directorio de contactos de emergencia: DEMUNA, CEM, Comisaría, Línea 100.",
    categoria: "Contactos",
    tipo: "imagen",
    archivo: "",
  },
  {
    title: "Oficio Para Actividades de Convivencia",
    desc: "Guía visual para la elaboración participativa de normas de convivencia en el aula.",
    categoria: "Gestión",
    tipo: "imagen",
    archivo: "/convivencia/flyer/flyer_oficio.jpeg",
  },
];

function FlyerPreview({ flyer }: { flyer: FlyerItem }) {
  if (!flyer.archivo) {
    return (
      <div className="text-center px-6">
        <FileText className="w-16 h-16 text-muted-foreground/40 mx-auto mb-4" />
        <p className="text-sm text-muted-foreground font-medium">
          Flyer disponible próximamente
        </p>
      </div>
    );
  }

  if (flyer.tipo === "imagen") {
    return (
      <Image
        src={flyer.archivo}
        alt={flyer.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
    );
  }

  // PDF preview
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-muted/50">
      <div className="w-16 h-20 bg-destructive/10 rounded-lg flex items-center justify-center border border-destructive/20">
        <FileIcon className="w-8 h-8 text-destructive" />
      </div>
      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
        Documento PDF
      </span>
    </div>
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0, 0, 0.2, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {flyers.map((flyer, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary transition-all duration-300 group"
              >
                {/* Preview */}
                <div className="relative aspect-3/4 bg-primary/5 flex items-center justify-center overflow-hidden">
                  <FlyerPreview flyer={flyer} />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-xs font-semibold bg-foreground text-white px-3 py-1 rounded-full z-10">
                    <Tag className="w-3 h-3" />
                    {flyer.categoria}
                  </span>
                  {flyer.archivo && (
                    <span
                      className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full z-10 ${
                        flyer.tipo === "pdf"
                          ? "bg-destructive/90 text-white"
                          : "bg-primary/90 text-white"
                      }`}
                    >
                      {flyer.tipo === "pdf" ? "PDF" : "IMG"}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {flyer.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {flyer.desc}
                  </p>
                  {flyer.archivo ? (
                    <a
                      href={flyer.archivo}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={flyer.tipo === "imagen" ? undefined : true}
                    >
                      <Button
                        variant="outline"
                        className="w-full border-border text-foreground hover:bg-primary/5 hover:border-primary font-medium text-sm"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        {flyer.tipo === "pdf"
                          ? "Descargar PDF"
                          : "Ver / Descargar Imagen"}
                      </Button>
                    </a>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full border-border text-foreground hover:bg-primary/5 hover:border-primary font-medium text-sm"
                      disabled
                    >
                      <Download className="w-4 h-4 mr-2" /> Próximamente
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

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
