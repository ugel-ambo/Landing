"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Landmark,
  ShieldAlert,
  Brain,
  ClipboardList,
  Siren,
  Briefcase,
  GraduationCap,
  Handshake,
  ArrowRight,
  Check,
  CalendarDays,
  Mail,
  ExternalLink,
  BookOpen,
  Sparkles,
  Phone,
  Copy,
  CheckCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const aliados = [
  {
    icon: Landmark,
    name: "DEMUNA AMBO",
    phone: "(062) 123-456",
  },
  {
    icon: Siren,
    name: "Comisaría de Ambo",
    phone: "(062) 456-789",
  },
  {
    icon: ShieldAlert,
    name: "Centro de Emergencia Mujer",
    phone: "Línea 100",
  },
  {
    icon: Brain,
    name: "Centro de Salud Mental",
    phone: "(062) 321-654",
  },
  {
    icon: ClipboardList,
    name: "Directorio UGEL",
    phone: "(062) 562-048",
  },
];

const herramientas = [
  {
    perfil: "Directivos",
    icon: Briefcase,
    bg: "bg-blue-600",
    shadow: "shadow-blue-500/20",
    items: [
      "Guía para el Reglamento Interno",
      "Protocolos ante violencia escolar",
      "Formato de informe SíseVe",
      "Guía del Comité de Tutoría",
    ],
  },
  {
    perfil: "Docentes",
    icon: GraduationCap,
    bg: "bg-emerald-500",
    shadow: "shadow-emerald-500/20",
    items: [
      "Guía de tutoría y orientación",
      "Sesiones de educación socioemocional",
      "Estrategias contra el bullying",
      "Detección temprana de violencia",
    ],
  },
  {
    perfil: "No Docentes",
    icon: Handshake,
    bg: "bg-amber-500",
    shadow: "shadow-orange-500/20",
    items: [
      "Pautas para un trato respetuoso",
      "Protocolo de actuación",
      "Guía de comunicación asertiva",
      "Manual de convivencia",
    ],
  },
];

const faq = [
  {
    q: "¿Qué es la Convivencia Escolar?",
    a: "Es el conjunto de relaciones respetuosas, democráticas y pacíficas que se dan en la comunidad educativa, orientadas al desarrollo integral y bienestar de todos sus miembros.",
  },
  {
    q: "¿Qué es el SíseVe?",
    a: "Es el Sistema Especializado en Reporte de Casos sobre Violencia Escolar del Ministerio de Educación. Permite reportar de forma confidencial cualquier caso de violencia que afecte a estudiantes.",
  },
  {
    q: "¿Cómo reporto un caso de violencia escolar?",
    a: "Puedes ingresar a siseve.minedu.gob.pe, crear una cuenta o iniciar sesión, seleccionar el tipo de violencia y completar el formulario de reporte. La UGEL dará seguimiento al caso.",
  },
  {
    q: "¿Quiénes conforman el Comité de Tutoría?",
    a: "Está conformado por el director, coordinador de tutoría, responsable de convivencia escolar, un representante de los docentes tutores, psicólogo (si lo hubiera) y un representante de los estudiantes.",
  },
  {
    q: "¿Qué hago si detecto un caso de violencia en mi institución?",
    a: "Debe comunicar de inmediato al responsable de convivencia escolar o al director de la IE. Luego, registrar el caso en el SíseVe y aplicar los protocolos de atención establecidos por el MINEDU.",
  },
  {
    q: "¿Dónde puedo acceder a los protocolos de atención?",
    a: "Los protocolos están disponibles en la sección de Protocolos de este portal. También puede solicitarlos directamente al equipo de Convivencia Escolar de la UGEL Ambo.",
  },
];

const calendario = [
  {
    mes: "Marzo",
    color: "bg-primary",
    actividades: [
      "Dia Mundial del Bienestar mental para Adolescentes",
      "Dia Internacional de la Mujer",
      "Dia Internacional de la Felicidad",
      "Dia Mundial del Síndrome de Down",
      "Asistencia Técnica sobre Protocolos de Atención violencia Escolar",
    ],
  },
  {
    mes: "Abril",
    color: "bg-secondary",
    actividades: [
      "Dia Mundial de la Educacion",
      "Dia Mundial de la Salud",
      "Inicio de Actividades. murales contra el bulling",
      "Dia Internacional de la lucha contra el Maltrato Infantil",
      "Dia del Psicologo Peruano",
    ],
  },
  {
    mes: "Mayo",
    color: "bg-primary",
    actividades: [
      "Dia del Trabajador",
      "Fin de PREVI Fase I",
      "Fin de actividad: Murales contra el Bulling",
      "INICIO PREVI FASE II",
      "Taller Presencial: Normas de Convivencia y de Participación Estudiantil",
    ],
  },
  {
    mes: "Junio",
    color: "bg-secondary",
    actividades: ["Día de la bandera", "Día del padre"],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function AliadosSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (phone: string, index: number) => {
    navigator.clipboard.writeText(phone);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="aliados" className="py-14 px-6 sm:px-8 bg-primary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Aliados Estratégicos
          </h2>
          <p className="text-white/80 text-base max-w-xl mx-auto">
            Contacta a nuestras instituciones aliadas para apoyo y orientación
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {aliados.map((aliado, i) => {
            const Icon = aliado.icon;
            const isCopied = copiedIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-foreground font-bold text-sm truncate">
                    {aliado.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm mt-0.5">
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    <span>{aliado.phone}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(aliado.phone, i)}
                  className="w-9 h-9 rounded-lg bg-primary/5 hover:bg-primary/15 flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                  title="Copiar número"
                >
                  {isCopied ? (
                    <CheckCheck className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-primary" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function ConvivenciaEscolar() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* HERO */}
      <section className="relative w-full overflow-hidden pb-0">
        {/* Imagen de fondo principal */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(convivencia/convivencia_hero.jpeg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        {/* Capa de color primario semitransparente */}
        <div className="absolute inset-0 bg-foreground/60 z-1"></div>

        <div className="relative z-10 w-full min-h-[40vh] flex items-center justify-center pt-10 pb-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center justify-center text-center px-6 sm:px-8 max-w-5xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-5 py-2.5 text-sm font-bold text-white mb-8 border border-white/20 shadow-xl"
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span>Convivencia Escolar Activa</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white tracking-tight drop-shadow-xl"
            >
              Convivencia Escolar <br />
              <span className="text-primary relative inline-block">
                UGEL AMBO
                <svg
                  className="absolute w-full h-3 -bottom-2 left-0 text-primary opacity-80"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 15 100 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-xl text-white max-w-2xl mb-12 leading-relaxed font-medium drop-shadow-md"
            >
              Construyendo relaciones respetuosas, democráticas y pacíficas para
              el desarrollo integral de nuestra comunidad educativa
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ ALIADOS ESTRATÉGICOS ═══════ */}
      <AliadosSection />

      {/* ═══════ CAJA DE HERRAMIENTAS ═══════ */}
      <section
        id="herramientas"
        className="py-20 px-6 sm:px-8 bg-white relative"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-900/20 px-4 py-2 text-sm font-bold text-blue-600 dark:text-blue-400 mb-4 border border-blue-100 dark:border-blue-800"
            >
              <BookOpen className="w-4 h-4" /> Recursos Educativos
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-foreground mb-6 tracking-tight"
            >
              Caja de Herramientas
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600 dark:text-muted-foreground max-w-3xl mx-auto font-medium"
            >
              Documentos, guías y recursos organizados para fortalecer la
              gestión de la convivencia según tu rol en la institución.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {herramientas.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -5 }}
                  className="rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 bg-white dark:bg-card shadow-2xl shadow-slate-200/40 dark:shadow-none transition-all duration-300 flex flex-col h-full"
                >
                  <div
                    className={`${h.bg} p-8 text-white relative overflow-hidden`}
                  >
                    <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                      <Icon className="w-40 h-40" />
                    </div>
                    <Icon className="w-12 h-12 mb-4 relative z-10" />
                    <h3 className="text-2xl font-bold relative z-10">
                      {h.perfil}
                    </h3>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <ul className="space-y-4 mb-8 flex-1">
                      {h.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 group">
                          <div
                            className={`mt-1 p-1 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-primary/20 transition-colors`}
                          >
                            <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-primary transition-colors" />
                          </div>
                          <span className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/convivencia/protocolos"
                      className="mt-auto block"
                    >
                      <Button
                        className={`w-full py-6 rounded-xl font-bold text-base bg-slate-50 hover:bg-slate-100 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 transition-all ${h.shadow} hover:shadow-lg`}
                      >
                        Acceder a recursos
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ ACCESO DIRECTO SÍSEVE ═══════ */}
      <section className="py-12 px-6 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-600 z-0"></div>
        {/* Patrón superpuesto */}
        <div
          className="absolute inset-0 opacity-10 mix-blend-overlay z-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-5 py-2.5 text-sm font-bold text-white mb-8 shadow-xl">
                <ShieldAlert className="w-5 h-5 text-yellow-300" />
                <span className="tracking-wide">
                  Portal Oficial de Reportes
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-md leading-tight">
                SíseVe: <span className="text-yellow-300">Cero Tolerancia</span>{" "}
                a la Violencia
              </h2>
              <p className="text-white/90 text-lg sm:text-xl md:text-2xl mb-10 leading-relaxed font-medium">
                Reporta incidentes de violencia escolar de manera{" "}
                <strong className="text-white bg-white/20 px-2 py-1 rounded-md">
                  100% confidencial
                </strong>
                . Garantizamos la protección e intervención inmediata.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
                {[
                  "Reporte confidencial y seguro",
                  "Atención prioritaria UGEL",
                  "Protección de identidad",
                  "Seguimiento garantizado",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-black/10 backdrop-blur-sm p-3 rounded-xl border border-white/10"
                  >
                    <div className="w-8 h-8 rounded-full bg-yellow-400 text-red-700 flex items-center justify-center shrink-0 shadow-md">
                      <Check className="w-4 h-4 font-bold" />
                    </div>
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://siseve.minedu.gob.pe/web/App/Index"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-red-900 font-black text-lg py-7 px-10 rounded-2xl shadow-2xl shadow-yellow-500/20 hover:scale-105 transition-all"
                >
                  Generar un Reporte en SíseVe{" "}
                  <ExternalLink className="w-5 h-5 ml-3" />
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 w-full max-w-lg lg:max-w-none"
            >
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border-4 border-white/20 backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-8">
                  <h3 className="text-2xl font-extrabold text-slate-800">
                    Pasos para reportar
                  </h3>
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Ingresa al portal",
                      desc: "Accede usando tu DNI o crea tú cuenta rápidamente.",
                    },
                    {
                      step: "2",
                      title: "Detalla el caso",
                      desc: "Completa el formulario describiendo qué sucedió.",
                    },
                    {
                      step: "3",
                      title: "Envía confidencial",
                      desc: "Tu identidad será protegida en todo momento.",
                    },
                    {
                      step: "4",
                      title: "Recibe el código",
                      desc: "Usa el código generado para el seguimiento.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 items-start group">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border-2 border-slate-100 text-red-600 flex items-center justify-center font-black shrink-0 text-lg group-hover:bg-red-50 group-hover:border-red-200 transition-colors shadow-sm">
                        {item.step}
                      </div>
                      <div className="pt-1">
                        <h4 className="font-bold text-slate-800 text-lg mb-1">
                          {item.title}
                        </h4>
                        <p className="text-slate-500 font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ CALENDARIO DE ACTIVIDADES ═══════ */}
      <section className="py-20 px-6 sm:px-8 bg-white dark:bg-card border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 dark:bg-purple-900/20 px-4 py-2 text-sm font-bold text-purple-700 dark:text-purple-400 mb-4 border border-purple-200 dark:border-purple-800">
                <CalendarDays className="w-4 h-4" /> Agenda Escolar
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-foreground mb-4">
                Calendario Anual
              </h2>
              <p className="text-lg text-slate-600 dark:text-muted-foreground font-medium">
                Principales actividades de promoción, prevención y atención
                programadas por la UGEL Ambo.
              </p>
            </div>
            <Link href="/convivencia/calendario">
              <Button
                variant="outline"
                className="rounded-full border-slate-300 dark:border-slate-700 font-bold hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Ver todos los eventos <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {calendario.map((mes, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-shadow group flex flex-col"
              >
                <div
                  className={`${mes.color} px-6 py-4 flex justify-between items-center group-hover:brightness-110 transition-all`}
                >
                  <h3 className="text-xl font-black text-white">{mes.mes}</h3>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                    <CalendarDays className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-6 flex-1 bg-white dark:bg-transparent">
                  <ul className="space-y-5">
                    {mes.actividades.map((act, j) => (
                      <li key={j} className="flex gap-4">
                        <div className="mt-1">
                          <div
                            className={`w-3 h-3 rounded-full ${mes.color} opacity-80 shadow-sm`}
                          />
                        </div>
                        <span className="text-slate-700 dark:text-slate-300 font-medium leading-snug">
                          {act}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PREGUNTAS FRECUENTES ═══════ */}
      <section className="py-12 px-6 sm:px-8 bg-slate-50 dark:bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-primary dark:text-foreground mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-foreground font-medium max-w-2xl mx-auto">
              Todo lo que necesitas saber sobre convivencia escolar,
              lineamientos y qué hacer ante situaciones vulnerables.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-2">
            {faq.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-slate-200 dark:border-slate-800 rounded-2xl px-6 sm:px-8 bg-white dark:bg-card shadow-sm data-[state=open]:shadow-md data-[state=open]:border-primary/50 transition-all overflow-hidden"
              >
                <AccordionTrigger className="text-left text-foreground dark:text-foreground font-bold hover:no-underline py-4 text-lg hover:text-primary transition-colors">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed pb-6 text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ═══════ CONTÁCTANOS ═══════ */}
      <section className="py-10 px-6 sm:px-8 bg-foreground text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-4xl font-black mb-6 tracking-tight">
            ¿Necesitas ayuda o asesoría?
          </h2>
          <p className="text-white/80 text-xl md:text-xl mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            El equipo de Convivencia Escolar de la UGEL Ambo está siempre
            dispuesto a apoyarte. Contáctanos para recibir orientación o
            atención.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="mailto:paoloz65@gmail.com">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/80 text-white font-bold px-10 h-12 rounded-2xl text-lg w-full sm:w-auto transition-transform hover:-translate-y-1"
              >
                <Mail className="w-5 h-5 mr-3" /> Escríbenos un Correo
              </Button>
            </a>
            <a
              href="https://siseve.minedu.gob.pe/web/App/Index"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-slate-900 hover:bg-white hover:text-slate-900 bg-white font-bold px-10 h-12 rounded-2xl shadow-xl text-lg w-full sm:w-auto transition-transform hover:-translate-y-1"
              >
                Ir al portal SíseVe <ExternalLink className="w-5 h-5 ml-3" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
