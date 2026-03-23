"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Users,
  UserCog,
  Smartphone,
  Briefcase,
  GraduationCap,
  Handshake,
  ArrowRight,
  FileText,
  BookOpen,
  Shield,
  Scale,
  Baby,
  School,
  Mail,
  ClipboardList,
} from "lucide-react";

const protocolos = [
  {
    tipo: "Entre Estudiantes",
    icon: Users,
    colorClass: "bg-secondary",
    descripcion:
      "Protocolo para atender situaciones de violencia física, psicológica, sexual o por medios tecnológicos entre estudiantes.",
    pasos: [
      {
        titulo: "Acción Inmediata",
        desc: "El personal de la IE que detecta el hecho debe comunicar al director y responsable de convivencia. Garantizar la seguridad del estudiante afectado.",
      },
      {
        titulo: "Registro en SíseVe",
        desc: "El responsable de convivencia registra el caso en el portal SíseVe dentro de las 24 horas de conocido el hecho.",
      },
      {
        titulo: "Comunicación a Familias",
        desc: "Citar a los padres de familia o apoderados de los estudiantes involucrados para informar sobre la situación.",
      },
      {
        titulo: "Medidas Correctivas",
        desc: "Aplicar las medidas correctivas establecidas en el Reglamento Interno, orientadas a la reflexión y cambio de conducta.",
      },
      {
        titulo: "Seguimiento",
        desc: "Realizar el seguimiento del caso y registrar las acciones en el SíseVe. Derivar a aliados si es necesario.",
      },
    ],
  },
  {
    tipo: "De Personal de la IE a Estudiante",
    icon: UserCog,
    colorClass: "bg-destructive",
    descripcion:
      "Protocolo para atender casos de violencia ejercida por personal docente o no docente hacia un estudiante.",
    pasos: [
      {
        titulo: "Acción Inmediata",
        desc: "Separar al presunto agresor del estudiante. El director de la IE debe tomar conocimiento de inmediato.",
      },
      {
        titulo: "Registro en SíseVe",
        desc: "Registrar el caso en el portal SíseVe y comunicar a la UGEL dentro de las 24 horas.",
      },
      {
        titulo: "Denuncia",
        desc: "Denunciar ante la Policía Nacional o Fiscalía cuando los hechos constituyan un presunto delito.",
      },
      {
        titulo: "Medidas Administrativas",
        desc: "La UGEL inicia el proceso administrativo correspondiente contra el personal involucrado.",
      },
      {
        titulo: "Atención al Estudiante",
        desc: "Derivar al estudiante afectado a los servicios de salud y apoyo psicológico. Realizar seguimiento.",
      },
    ],
  },
  {
    tipo: "Por Medios Tecnológicos (Ciberbullying)",
    icon: Smartphone,
    colorClass: "bg-muted-foreground",
    descripcion:
      "Protocolo para atender situaciones de violencia ejercida a través de redes sociales, mensajería o plataformas digitales.",
    pasos: [
      {
        titulo: "Detección y Registro",
        desc: "Guardar las evidencias (capturas de pantalla, enlaces) y registrar el caso en el SíseVe.",
      },
      {
        titulo: "Protección del Estudiante",
        desc: "Bloquear al agresor en las plataformas, orientar al estudiante y familia sobre seguridad digital.",
      },
      {
        titulo: "Comunicación",
        desc: "Informar a los padres de familia y coordinarse con las autoridades de la IE.",
      },
      {
        titulo: "Intervención",
        desc: "Aplicar medidas correctivas e involucrar a los aliados estratégicos según la gravedad del caso.",
      },
      {
        titulo: "Prevención",
        desc: "Desarrollar sesiones de sensibilización sobre uso responsable de la tecnología.",
      },
    ],
  },
];

const recursosDirectivos = [
  "Guía para elaborar el Reglamento Interno con enfoque de convivencia",
  "Manual de conformación del Comité de Tutoría y Orientación Educativa",
  "Formatos de registro y seguimiento de casos",
  "Guía de aplicación de medidas correctivas",
  "Informe modelo para la UGEL",
];

const recursosDocentes = [
  "Guía de tutoría individual y grupal",
  "Sesiones de aprendizaje sobre convivencia",
  "Estrategias de educación socioemocional",
  "Guía de detección temprana de violencia",
  "Técnicas de resolución de conflictos en el aula",
];

const recursosNoDocentes = [
  "Manual de trato respetuoso al estudiante",
  "Protocolo de actuación ante emergencias",
  "Guía de comunicación asertiva",
  "Pautas de vigilancia y seguridad escolar",
];

const normativas = [
  {
    icon: FileText,
    title: "Ley N° 29719",
    desc: "Ley que promueve la convivencia sin violencia en las instituciones educativas",
  },
  {
    icon: ClipboardList,
    title: "D.S. N° 004-2018-MINEDU",
    desc: "Lineamientos para la Gestión de la Convivencia Escolar",
  },
  {
    icon: BookOpen,
    title: "R.M. N° 274-2020-MINEDU",
    desc: "Actualización de protocolos de atención frente a la violencia",
  },
  {
    icon: Shield,
    title: "Ley N° 30364",
    desc: "Ley para prevenir, sancionar y erradicar la violencia",
  },
  {
    icon: Baby,
    title: "Código del Niño y Adolescente",
    desc: "Marco de protección integral de niños, niñas y adolescentes",
  },
  {
    icon: School,
    title: "Reglamento Interno",
    desc: "Normas específicas de convivencia de cada institución educativa",
  },
];

export default function ProtocolosPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary py-16 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 border border-white/30 px-4 py-2 text-sm font-semibold text-white mb-6">
            <Scale className="w-4 h-4" /> Documentos Normativos
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Protocolos de Atención
          </h1>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Protocolos de actuación ante casos de violencia escolar según los
            lineamientos del MINEDU
          </p>
        </div>
      </section>

      {/* Protocolos */}
      <section className="py-16 px-6 sm:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Tipos de Violencia y Protocolos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada tipo de violencia escolar tiene un protocolo de atención
              específico establecido por el MINEDU
            </p>
          </div>

          <div className="space-y-8">
            {protocolos.map((protocolo, i) => {
              const Icon = protocolo.icon;
              return (
                <div
                  key={i}
                  className="bg-card rounded-xl border border-border overflow-hidden"
                >
                  <div
                    className={`${protocolo.colorClass} p-6 text-white flex items-center gap-4`}
                  >
                    <Icon className="w-8 h-8 shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">
                        Violencia {protocolo.tipo}
                      </h3>
                      <p className="text-white/80 text-sm mt-1">
                        {protocolo.descripcion}
                      </p>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">
                      Pasos del Protocolo
                    </h4>
                    <div className="space-y-4">
                      {protocolo.pasos.map((paso, j) => (
                        <div key={j} className="flex gap-4 items-start">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0 border border-primary/20">
                            {j + 1}
                          </div>
                          <div>
                            <h5 className="font-semibold text-foreground text-sm">
                              {paso.titulo}
                            </h5>
                            <p className="text-muted-foreground text-sm mt-0.5 leading-relaxed">
                              {paso.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Caja de Herramientas por perfil */}
      <section className="py-16 px-6 sm:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Caja de Herramientas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recursos y materiales organizados por perfil profesional
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="directivos"
              className="border border-border rounded-xl px-6 data-[state=open]:border-secondary transition-colors"
            >
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-secondary" />
                  <span>Recursos para Directivos</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <ul className="space-y-3">
                  {recursosDirectivos.map((r, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{r}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="docentes"
              className="border border-border rounded-xl px-6 data-[state=open]:border-primary transition-colors"
            >
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <span>Recursos para Docentes</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <ul className="space-y-3">
                  {recursosDocentes.map((r, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{r}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="no-docentes"
              className="border border-border rounded-xl px-6 data-[state=open]:border-muted-foreground transition-colors"
            >
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
                <div className="flex items-center gap-3">
                  <Handshake className="w-6 h-6 text-muted-foreground" />
                  <span>Recursos para No Docentes</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <ul className="space-y-3">
                  {recursosNoDocentes.map((r, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{r}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Marco Normativo */}
      <section className="py-16 px-6 sm:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Marco Normativo
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {normativas.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-card border border-border hover:shadow-lg hover:border-primary transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-base font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 sm:px-8 bg-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Necesitas los protocolos en formato físico?
          </h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Contacta al equipo de Convivencia Escolar de la UGEL Ambo para
            obtener los documentos oficiales
          </p>
          <a href="mailto:paoloz65@gmail.com">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-muted font-semibold px-8"
            >
              <Mail className="w-4 h-4 mr-2" /> Contactar Equipo
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
}
