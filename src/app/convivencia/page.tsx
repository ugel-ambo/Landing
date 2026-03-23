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
  Circle,
  CalendarDays,
  HelpCircle,
  Mail,
  ExternalLink,
  Heart,
  BookOpen,
  Video,
  FileImage,
} from "lucide-react";

const aliados = [
  {
    icon: Landmark,
    name: "DEMUNA AMBO",
    desc: "Defensoría Municipal del Niño y del Adolescente de la Municipalidad Provincial de Ambo",
    role: "Protección de derechos de niños, niñas y adolescentes",
  },
  {
    icon: Siren,
    name: "Comisaría de Ambo",
    desc: "Comisaría de la Policía Nacional del Perú - Ambo",
    role: "Seguridad ciudadana y atención de denuncias",
  },
  {
    icon: ShieldAlert,
    name: "Centro de Emergencia Mujer",
    desc: "CEM - Ministerio de la Mujer y Poblaciones Vulnerables",
    role: "Atención integral a víctimas de violencia familiar y sexual",
  },
  {
    icon: Brain,
    name: "Centro de Salud Mental",
    desc: "Centro de Salud Mental Comunitario de Ambo",
    role: "Atención en salud mental y acompañamiento psicológico",
  },
  {
    icon: ClipboardList,
    name: "Directorio UGEL",
    desc: "Directorio de la Unidad de Gestión Educativa Local de Ambo",
    role: "Gestión y supervisión educativa local",
  },
];

const herramientas = [
  {
    perfil: "Directivos",
    icon: Briefcase,
    accent: "bg-[#1e3a5f]",
    items: [
      "Guía para elaborar el Reglamento Interno",
      "Protocolos de atención ante violencia escolar",
      "Formato de informe de casos SíseVe",
      "Guía de conformación del Comité de Tutoría",
    ],
  },
  {
    perfil: "Docentes",
    icon: GraduationCap,
    accent: "bg-primary",
    items: [
      "Guía de tutoría y orientación educativa",
      "Sesiones de educación socioemocional",
      "Estrategias para la prevención del bullying",
      "Guía de detección temprana de violencia",
    ],
  },
  {
    perfil: "No Docentes",
    icon: Handshake,
    accent: "bg-secondary",
    items: [
      "Pautas para el trato respetuoso al estudiante",
      "Protocolo de actuación ante emergencias",
      "Guía de comunicación asertiva",
      "Manual de convivencia institucional",
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
    actividades: [
      "Conformación de Comités de Tutoría en las II.EE.",
      "Elaboración del Reglamento Interno participativo",
    ],
  },
  {
    mes: "Abril",
    actividades: [
      "Campaña contra el Bullying",
      "Capacitación en protocolos de atención SíseVe",
    ],
  },
  {
    mes: "Mayo",
    actividades: [
      "Semana de la Convivencia Escolar",
      "Taller de habilidades socioemocionales para docentes",
    ],
  },
  {
    mes: "Junio",
    actividades: [
      "Día contra el Trabajo Infantil",
      "Monitoreo de casos registrados en SíseVe",
    ],
  },
];

export default function ConvivenciaEscolar() {
  return (
    <main className="min-h-screen bg-background">
      {/* ═══════ HERO COMPACTO ═══════ */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div
          className="relative w-full min-h-[50vh] lg:min-h-[55vh] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url(convivencia/convivencia_hero.jpeg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 sm:px-8 py-8 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white mb-6 border border-white/20">
              <Handshake className="w-4 h-4" />
              Convivencia Escolar
            </div>

            <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-white">
              CONVIVENCIA ESCOLAR{" "}
              <span className="text-primary">UGEL AMBO</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mb-10 leading-relaxed">
              Construyendo relaciones respetuosas, democráticas y pacíficas para
              el desarrollo integral de la comunidad educativa
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ ACCESOS RÁPIDOS ═══════ */}
      <section className="py-8 px-6 sm:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: Video,
                label: "Videos",
                href: "/convivencia/videos",
                color: "bg-primary",
              },
              {
                icon: FileImage,
                label: "Flyers",
                href: "/convivencia/flyers",
                color: "bg-secondary",
              },
              {
                icon: ClipboardList,
                label: "Protocolos",
                href: "/convivencia/protocolos",
                color: "bg-[#1e3a5f]",
              },
              {
                icon: ShieldAlert,
                label: "SíseVe",
                href: "https://siseve.minedu.gob.pe/web/App/Index",
                color: "bg-destructive",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              const isExternal = item.href.startsWith("http");
              const Wrapper = isExternal ? "a" : Link;
              const wrapperProps = isExternal
                ? {
                    href: item.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : { href: item.href };
              return (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                <Wrapper key={i} {...(wrapperProps as any)}>
                  <div className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-card border border-border hover:shadow-lg hover:border-primary transition-all duration-300 cursor-pointer">
                    <div
                      className={`w-12 h-12 rounded-full ${item.color} text-white flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-bold text-foreground">
                      {item.label}
                    </span>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ ALIADOS ESTRATÉGICOS ═══════ */}
      <section id="aliados" className="py-16 px-6 sm:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-4">
              <Heart className="w-4 h-4" /> Juntos por los estudiantes
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Aliados Estratégicos
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Instituciones comprometidas con la protección integral de nuestros
              estudiantes
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {aliados.map((aliado, i) => {
              const Icon = aliado.icon;
              return (
                <div
                  key={i}
                  className="group bg-card p-5 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary text-white flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1.5">
                    {aliado.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                    {aliado.desc}
                  </p>
                  <span className="inline-block text-[10px] font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {aliado.role}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ ACCESO DIRECTO SÍSEVE ═══════ */}
      <section className="py-16 px-6 sm:px-8 bg-foreground">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-destructive/15 border border-destructive/25 px-4 py-2 text-sm font-semibold text-destructive mb-6">
                <ShieldAlert className="w-4 h-4" /> Sistema de Reporte
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                SíseVe: Contra la Violencia Escolar
              </h2>
              <p className="text-white/60 text-lg mb-6 leading-relaxed">
                Reporta casos de violencia escolar de forma{" "}
                <strong className="text-white">confidencial y segura</strong>.
                El Sistema SíseVe garantiza el seguimiento y atención oportuna
                por parte de las autoridades educativas.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Reporte confidencial y gratuito",
                  "Seguimiento garantizado por el MINEDU",
                  "Protección integral del estudiante",
                  "Respuesta oportuna de la UGEL",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://siseve.minedu.gob.pe/web/App/Index"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-destructive hover:bg-destructive/90 text-white font-bold shadow-lg px-8"
                >
                  Acceder a SíseVe <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  ¿Cómo reportar un caso?
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      step: "1",
                      title: "Ingresa al portal SíseVe",
                      desc: "Accede con tu cuenta o crea una nueva",
                    },
                    {
                      step: "2",
                      title: "Selecciona el tipo de caso",
                      desc: "Violencia entre estudiantes o de adulto a estudiante",
                    },
                    {
                      step: "3",
                      title: "Completa el formulario",
                      desc: "Describe los hechos con precisión",
                    },
                    {
                      step: "4",
                      title: "Recibe seguimiento",
                      desc: "La IE y UGEL darán atención al caso",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center font-bold shrink-0 text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">
                          {item.title}
                        </h4>
                        <p className="text-xs text-white/50">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CAJA DE HERRAMIENTAS ═══════ */}
      <section id="herramientas" className="py-16 px-6 sm:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary mb-4">
              <BookOpen className="w-4 h-4" /> Recursos Educativos
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Caja de Herramientas
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Recursos y materiales para Directivos, Docentes y personal No
              Docente
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {herramientas.map((h, i) => {
              const Icon = h.icon;
              return (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 bg-card"
                >
                  <div className={`${h.accent} p-6 text-white text-center`}>
                    <Icon className="w-10 h-10 mx-auto mb-3" />
                    <h3 className="text-xl font-bold">{h.perfil}</h3>
                  </div>
                  <ul className="p-6 space-y-3">
                    {h.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="px-6 pb-6">
                    <Link href="/convivencia/protocolos">
                      <Button
                        variant="outline"
                        className="w-full border-border text-foreground hover:bg-primary/5 hover:border-primary font-medium"
                      >
                        Ver recursos <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ CALENDARIO DE ACTIVIDADES ═══════ */}
      <section className="py-16 px-6 sm:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              <CalendarDays className="w-8 h-8 inline-block mr-2 text-primary" />
              Calendario de Actividades
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Programación de actividades de la UGEL Ambo en materia de
              convivencia escolar
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {calendario.map((mes, i) => (
              <div
                key={i}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary transition-all duration-300"
              >
                <div className="bg-secondary px-5 py-3">
                  <h3 className="text-base font-bold text-white text-center">
                    {mes.mes}
                  </h3>
                </div>
                <ul className="p-5 space-y-3">
                  {mes.actividades.map((act, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <Circle className="w-2 h-2 fill-primary text-primary mt-1.5 shrink-0" />
                      <span className="text-sm leading-relaxed">{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PREGUNTAS FRECUENTES ═══════ */}
      <section className="py-16 px-6 sm:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              <HelpCircle className="w-8 h-8 inline-block mr-2 text-primary" />
              Preguntas Frecuentes
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Resolvemos tus dudas sobre convivencia escolar
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {faq.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-6 data-[state=open]:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ═══════ CONTÁCTANOS ═══════ */}
      <section className="py-16 px-6 sm:px-8 bg-foreground text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Necesitas ayuda o asesoría?
          </h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            El equipo de Convivencia Escolar de la UGEL Ambo está para apoyarte.
            Contáctanos para orientación, capacitación o atención de casos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:paoloz65@gmail.com">
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 font-bold shadow-md px-8"
              >
                <Mail className="w-4 h-4 mr-2" /> Contáctanos
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
                className="border-white/30 text-white hover:bg-white/10 font-bold px-8"
              >
                Ir a SíseVe <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
