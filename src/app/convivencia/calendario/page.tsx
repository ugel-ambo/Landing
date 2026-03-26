"use client";

import { CalendarDays, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Actividad {
  dia: number;
  titulo: string;
}

interface MesData {
  mes: string;
  actividades: Actividad[];
}

const calendarioAnual: MesData[] = [
  {
    mes: "Marzo",
    actividades: [
      { dia: 2, titulo: "Dia Mundial del Bienestar mental para Adolescentes" },
      { dia: 8, titulo: "Dia Internacional de la Mujer" },
      { dia: 20, titulo: "Dia Internacional de la Felicidad" },
      { dia: 21, titulo: "Dia Mundial del Síndrome de Down" },
      {
        dia: 30,
        titulo:
          "Asistencia Técnica sobre Protocolos de Atención violencia Escolar",
      },
    ],
  },
  {
    mes: "Abril",
    actividades: [
      { dia: 1, titulo: "Dia Mundial de la Educacion" },
      { dia: 7, titulo: "Dia Mundial de la Salud" },
      { dia: 13, titulo: "Inicio de Actividades. murales contra el bulling" },
      {
        dia: 25,
        titulo: "Dia Internacional de la lucha contra el Maltrato Infantil",
      },
      { dia: 30, titulo: "Dia del Psicologo Peruano" },
    ],
  },
  {
    mes: "Mayo",
    actividades: [
      { dia: 1, titulo: " Dia del Trabajador" },
      { dia: 6, titulo: "Fin de PREVI Fase I" },
      { dia: 15, titulo: " Fin de actividad: Murales contra el Bulling" },
      { dia: 18, titulo: "INICIO PREVI FASE II" },
      {
        dia: 20,
        titulo:
          "Taller Presencial: Normas de Convivencia y de Participación Estudiantil",
      },
    ],
  },
  {
    mes: "Junio",
    actividades: [
      { dia: 7, titulo: "Día de la bandera" },
      { dia: 21, titulo: "Día del padre" },
    ],
  },
  {
    mes: "Julio",
    actividades: [
      { dia: 10, titulo: "FIN PREVI FASE II" },
      {
        dia: 13,
        titulo: 'Inicio de Actividad: "Sacale Tarjeta Roja a la Violencia"',
      },
    ],
  },
  {
    mes: "Agosto",
    actividades: [
      {
        dia: 5,
        titulo:
          'Taller Presencial: "Fortalecimiento de habilidades socioemocionales\"',
      },
      { dia: 15, titulo: "Aniversario de Huanuco" },
    ],
  },
  {
    mes: "Septiembre",
    actividades: [
      {
        dia: 18,
        titulo: "Fin de Actividad: Sacale Tarjeta Roja a la Violencia",
      },
      { dia: 23, titulo: "Dia de la Juventud" },
      { dia: 24, titulo: "FIN PREVI FASE III" },
    ],
  },
  {
    mes: "Octubre",
    actividades: [
      { dia: 1, titulo: "Inicio de Actividad: Feria de las emociones" },
      { dia: 10, titulo: "Dia Mundial de la Salud Mental" },
      {
        dia: 14,
        titulo: "Reflexion sobre la gestión de la convivencia escolar",
      },
      { dia: 17, titulo: "Fin de Actividad: Feria de las emociones" },
    ],
  },
  {
    mes: "Noviembre",
    actividades: [
      { dia: 9, titulo: "Inicio de Actividad: Flashmob" },
      { dia: 20, titulo: "Feria de Orientación Vocacional" },
      { dia: 21, titulo: "Fin de Actividad: Flashmob" },
      {
        dia: 24,
        titulo:
          "Dia Internacional de la Eliminación de la Violencia contra la Mujer",
      },
    ],
  },
  {
    mes: "Diciembre",
    actividades: [
      { dia: 3, titulo: "Dia Internacional de las personas con discapacidad" },
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export default function CalendarioPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary py-16 px-6 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-5 py-2 text-sm font-bold text-white mb-6 border border-white/30">
              <CalendarDays className="w-4 h-4" />
              Agenda Escolar 2026
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
              Calendario Anual de Actividades
            </h1>
            <p className="text-white/85 text-lg sm:text-xl max-w-3xl mx-auto font-medium">
              Todas las actividades de convivencia escolar programadas por la
              UGEL Ambo a lo largo del año.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calendar Grid */}
      <section className="py-16 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {calendarioAnual.map((mesData, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={mesData.mes}
                  variants={fadeInUp}
                  className="rounded-2xl border border-border overflow-hidden bg-card hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  <div
                    className={`${isEven ? "bg-primary" : "bg-secondary"} px-6 py-5 flex justify-between items-center`}
                  >
                    <h3 className="text-xl font-black text-primary-foreground">
                      {mesData.mes}
                    </h3>
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-primary-foreground">
                      <CalendarDays className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 space-y-3">
                    {mesData.actividades.map((act) => (
                      <div
                        key={`${act.dia}-${act.titulo}`}
                        className="flex gap-3 items-center"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg ${isEven ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"} flex items-center justify-center shrink-0 text-sm font-black`}
                        >
                          {act.dia}
                        </div>
                        <span className="text-foreground font-semibold text-sm leading-snug">
                          {act.titulo}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Back button */}
      <section className="pb-16 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/convivencia">
            <Button
              variant="outline"
              className="rounded-full border-border font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Volver a Convivencia
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
