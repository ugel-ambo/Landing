"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ConvivenciaEscolar() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Centrado */}
      <section className="relative w-full overflow-hidden">
        {/* Overlay oscuro para mejor legibilidad */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/60 z-10" />

        {/* Background Image */}
        <div
          className="relative w-full min-h-[85vh] lg:min-h-[90vh] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url(/gp/convivencia/hero.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {/* Contenido centrado */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 sm:px-8 py-16 max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full uppercase bg-white/95 backdrop-blur-sm px-5 py-2.5 text-sm lg:text-base font-bold text-[#0b1f27] shadow-xl border border-blue-100 mb-8">
              <span className="text-xl lg:text-2xl">🤝</span>
              Convivencia Escolar
            </div>

            {/* Título principal */}
            <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-lg">
              <span className="block">Convivencia Escolar</span>
              <span
                className="block text-[#1cb6f4] mt-2"
                style={{
                  animation: "pulse 2s infinite",
                }}
              >
                UGEL AMBO
              </span>
            </h1>

            {/* Descripción principal */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/95 max-w-4xl mb-8 leading-relaxed drop-shadow-md font-medium">
              Construyendo relaciones respetuosas, democráticas y pacíficas para
              el desarrollo integral y bienestar de toda la comunidad educativa
            </p>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#que-es">
                <Button
                  size="lg"
                  className="bg-white text-[#049DD9] hover:bg-blue-50 font-semibold text-base shadow-lg px-8"
                >
                  ¿Qué es la Convivencia Escolar?
                </Button>
              </Link>
              <Link href="#pilares">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/20 text-white border-2 border-white hover:bg-white/30 font-semibold text-base backdrop-blur-sm px-8"
                >
                  Nuestros Pilares
                </Button>
              </Link>
            </div>
          </div>

          {/* Elementos decorativos flotantes */}
          <div className="hidden sm:block absolute top-20 left-8 md:left-16 text-3xl md:text-4xl animate-bounce opacity-80">
            ❤️
          </div>
          <div
            className="hidden sm:block absolute top-32 right-8 md:right-20 text-3xl md:text-4xl opacity-80"
            style={{ animation: "bounce 2s infinite 0.3s" }}
          >
            🕊️
          </div>
          <div
            className="hidden sm:block absolute bottom-32 left-12 md:left-24 text-3xl md:text-4xl opacity-80"
            style={{ animation: "bounce 2s infinite 0.5s" }}
          >
            🌟
          </div>
          <div
            className="hidden sm:block absolute bottom-40 right-12 md:right-28 text-3xl md:text-4xl opacity-80"
            style={{ animation: "bounce 2s infinite 0.7s" }}
          >
            📚
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16 fill-white"
          >
            <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"></path>
          </svg>
        </div>

        <style>{`
          @keyframes bounce {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.02); opacity: 0.95; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}</style>
      </section>

      {/* ¿Qué es la Convivencia Escolar? */}
      <section id="que-es" className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
              ¿Qué es la Convivencia Escolar?
            </h2>
            <div className="w-24 h-1 bg-[#049DD9] mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="bg-linear-to-br from-blue-50 to-white p-8 sm:p-12 rounded-2xl border-2 border-blue-100 shadow-lg">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              La <strong className="text-[#049DD9]">Convivencia Escolar</strong>{" "}
              es el conjunto de{" "}
              <strong>relaciones respetuosas y pacíficas</strong> que se dan en
              la comunidad educativa, construidas{" "}
              <strong>democráticamente</strong> para promover el{" "}
              <strong className="text-blue-900">desarrollo integral</strong> y
              el <strong className="text-blue-900">bienestar de todos</strong>,
              enfocándose en:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {[
                {
                  icon: "🤝",
                  title: "Buen Trato",
                  desc: "Promovemos relaciones basadas en el respeto mutuo y la empatía.",
                  color: "from-green-400 to-green-600",
                },
                {
                  icon: "🌈",
                  title: "Inclusión",
                  desc: "Garantizamos la participación de todos sin distinción alguna.",
                  color: "from-purple-400 to-purple-600",
                },
                {
                  icon: "🛡️",
                  title: "Prevención de Violencia",
                  desc: "Implementamos estrategias para prevenir cualquier forma de violencia.",
                  color: "from-orange-400 to-orange-600",
                },
                {
                  icon: "⚖️",
                  title: "Atención de Conflictos",
                  desc: "Brindamos atención oportuna y efectiva ante situaciones de conflicto.",
                  color: "from-blue-400 to-blue-600",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group p-6 rounded-xl bg-white border-2 border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`w-16 h-16 rounded-full bg-linear-to-br ${item.color} flex items-center justify-center text-3xl mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pilares de la Convivencia Escolar */}
      <section
        id="pilares"
        className="py-20 px-6 sm:px-8 bg-linear-to-b from-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
              Pilares de la Convivencia Escolar
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              La UGEL Ambo promueve una convivencia escolar basada en estos
              pilares fundamentales establecidos por el MINEDU
            </p>
            <div className="w-24 h-1 bg-[#049DD9] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏛️",
                title: "Gestión de la Convivencia",
                items: [
                  "Elaboración del Reglamento Interno participativo",
                  "Normas de convivencia acordadas democráticamente",
                  "Comités de tutoría y orientación educativa",
                  "Espacios de participación estudiantil",
                ],
                color: "bg-linear-to-br from-[#049DD9] to-blue-600",
              },
              {
                icon: "🎓",
                title: "Promoción de la Convivencia",
                items: [
                  "Tutoría y orientación educativa",
                  "Educación socioemocional",
                  "Participación de la familia",
                  "Desarrollo de habilidades sociales",
                ],
                color: "bg-linear-to-br from-green-500 to-green-700",
              },
              {
                icon: "🔔",
                title: "Prevención y Atención",
                items: [
                  "Protocolos de atención ante violencia escolar",
                  "Sistema SíseVe para reportes",
                  "Red de aliados estratégicos",
                  "Acompañamiento psicológico",
                ],
                color: "bg-linear-to-br from-orange-500 to-orange-700",
              },
            ].map((pilar, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-blue-100"
              >
                <div className={`${pilar.color} p-6 text-white text-center`}>
                  <div className="text-5xl mb-3">{pilar.icon}</div>
                  <h3 className="text-xl font-bold">{pilar.title}</h3>
                </div>
                <ul className="p-6 space-y-3">
                  {pilar.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="text-[#049DD9] font-bold mt-0.5">✓</span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acciones desde la UGEL */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
              Acciones desde la UGEL Ambo
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trabajamos articuladamente para garantizar espacios educativos
              seguros, inclusivos y libres de violencia
            </p>
            <div className="w-24 h-1 bg-[#049DD9] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "📋",
                title: "Asistencia Técnica",
                desc: "Acompañamiento a las instituciones educativas en la implementación de la convivencia escolar, elaboración del Reglamento Interno y normas de convivencia.",
                highlight: "blue",
              },
              {
                icon: "🎯",
                title: "Capacitación Docente",
                desc: "Formación continua a docentes, tutores y directivos en estrategias de prevención, detección y atención de casos de violencia escolar.",
                highlight: "green",
              },
              {
                icon: "📊",
                title: "Monitoreo y Seguimiento",
                desc: "Supervisión del reporte y atención oportuna de casos en el Sistema SíseVe, garantizando el cumplimiento de los protocolos establecidos.",
                highlight: "purple",
              },
              {
                icon: "🤝",
                title: "Articulación Interinstitucional",
                desc: "Coordinación con aliados estratégicos: DEMUNA, CEM, Policía Nacional, Ministerio de Salud y otras instituciones para la protección integral.",
                highlight: "orange",
              },
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Participación de Familias",
                desc: "Promoción de la participación activa de padres y madres de familia a través de las APAFA y comités de aula en la gestión de la convivencia.",
                highlight: "pink",
              },
              {
                icon: "📢",
                title: "Campañas de Sensibilización",
                desc: "Desarrollo de campañas y actividades para promover el buen trato, la cultura de paz y la sana convivencia en la comunidad educativa.",
                highlight: "cyan",
              },
            ].map((item, i) => {
              const colors: Record<string, string> = {
                blue: "border-l-blue-500 hover:bg-blue-50",
                green: "border-l-green-500 hover:bg-green-50",
                purple: "border-l-purple-500 hover:bg-purple-50",
                orange: "border-l-orange-500 hover:bg-orange-50",
                pink: "border-l-pink-500 hover:bg-pink-50",
                cyan: "border-l-cyan-500 hover:bg-cyan-50",
              };
              return (
                <div
                  key={i}
                  className={`p-6 rounded-lg bg-white border-l-4 ${colors[item.highlight]} shadow-md hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SíseVe - Sistema de Reporte */}
      <section className="py-20 px-6 sm:px-8 bg-linear-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 mb-6">
                <span>🚨</span> Sistema de Reporte
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
                SíseVe: Contra la Violencia Escolar
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                El <strong>SíseVe</strong> es el Sistema Especializado en
                Reporte de Casos sobre Violencia Escolar del Ministerio de
                Educación. Permite reportar casos de violencia que afecten a
                estudiantes en las instituciones educativas.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Reporta casos de violencia escolar de forma confidencial",
                  "Seguimiento y atención garantizada por el MINEDU",
                  "Respuesta oportuna de las autoridades educativas",
                  "Protección integral del estudiante afectado",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                      ✓
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://siseve.pe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg"
                >
                  Acceder a SíseVe →
                </Button>
              </a>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-orange-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                ¿Cómo reportar un caso?
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Ingresa a siseve.pe",
                    desc: "Accede a la plataforma con tu cuenta o crea una nueva",
                  },
                  {
                    step: "2",
                    title: "Selecciona el tipo de caso",
                    desc: "Indica si es violencia entre estudiantes o de adulto a estudiante",
                  },
                  {
                    step: "3",
                    title: "Completa el formulario",
                    desc: "Describe los hechos con la mayor precisión posible",
                  },
                  {
                    step: "4",
                    title: "Recibe seguimiento",
                    desc: "La IE y UGEL darán atención oportuna al caso reportado",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#049DD9] text-white flex items-center justify-center font-bold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Normativa */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Marco Normativo
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lineamientos del Ministerio de Educación para la gestión de la
              convivencia escolar
            </p>
            <div className="w-24 h-1 bg-[#049DD9] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📜",
                title: "Ley N° 29719",
                desc: "Ley que promueve la convivencia sin violencia en las instituciones educativas",
              },
              {
                icon: "📋",
                title: "D.S. N° 004-2018-MINEDU",
                desc: "Lineamientos para la Gestión de la Convivencia Escolar",
              },
              {
                icon: "📖",
                title: "R.M. N° 274-2020-MINEDU",
                desc: "Actualización de protocolos de atención frente a la violencia",
              },
              {
                icon: "🔒",
                title: "Ley N° 30364",
                desc: "Ley para prevenir, sancionar y erradicar la violencia",
              },
              {
                icon: "👶",
                title: "Código de los Niños y Adolescentes",
                desc: "Marco de protección integral de niños, niñas y adolescentes",
              },
              {
                icon: "🏫",
                title: "Reglamento Interno de cada IE",
                desc: "Normas específicas de convivencia de cada institución educativa",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-lg bg-linear-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-all hover:border-[#049DD9]"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-20 px-6 sm:px-8 bg-linear-to-b from-blue-900 to-blue-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Necesitas ayuda o asesoría?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            El equipo de Convivencia Escolar de la UGEL Ambo está para apoyarte.
            Contáctanos para orientación, capacitación o atención de casos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="paoloz65@gmail.com">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-lg"
              >
                📧 Contáctanos
              </Button>
            </a>
            <a
              href="https://siseve.pe"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
      </section>
    </main>
  );
}
