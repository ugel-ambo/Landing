"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 h-1/2 w-full bg-linear-to-b pointer-events-none z-10" />

        {/* Background Image */}
        <div
          className="relative w-full h-[70vh] sm:h-[75vh] md:h-[60vh] lg:h-[85vh] 2xl:h-[85vh] bg-cover bg-center"
          style={{
            backgroundImage: "url(/gp/primaria/fondo.png)",
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
          }}
        >
          {/* Badge centrado */}
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 z-30 inline-flex items-center gap-2 rounded-full uppercase bg-white/95 backdrop-blur-sm px-4 sm:px-5 py-2 text-xs sm:text-sm lg:text-base font-bold text-[#0b1f27] shadow-xl border border-blue-100">
            <span className="text-sm lg:text-xl">📚</span>
            Educación Primaria
          </div>

          <div className="relative z-20 h-full flex flex-col md:flex-row items-center justify-center px-6 sm:px-8 gap-8 pt-8 md:pt-0">

            <div className="w-full md:w-1/2 lg:w-6/12 2xl:w-7/12 relative h-80 sm:h-96 md:h-[500px] lg:h-[750px] 2xl:h-[850px] order-2 md:order-1 hidden sm:block">
              <Image
                src="/gp/primaria/hero.png"
                alt="Unidad de Gestión Pedagógica"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center text-center order-1 md:order-2 md:text-left lg:text-left 2xl:text-left px-2 lg:px-6">

              <h1 className="mb-4 max-w-3xl text-3xl sm:text-4xl md:text-4xl lg:text-6xl 2xl:text-[80px] text-center lg:text-right font-bold leading-tight">
                <span className="inline-block bg-linear-to-r text-[#039DD8]">
                  Fortaleciendo la
                </span>
                <br />
                <span
                  className="inline-block bg-linear-to-r text-[#039DD8]"
                  style={{ animation: "pulse 2s infinite", display: "inline-block", animationDelay: "0.12s" }}
                >
                  Educación Primaria
                </span>
              </h1>
              <style>{`
                @keyframes bounce {
                  0%,100% { transform: translateY(0); }
                  50% { transform: translateY(-8px); }
                }
                @keyframes pulse {
                  0% { transform: scale(1); opacity: 1; }
                  50% { transform: scale(1.03); opacity: 0.95; }
                  100% { transform: scale(1); opacity: 1; }
                }
                @keyframes float {
                  0% { transform: translateY(0); }
                  50% { transform: translateY(-6px); }
                  100% { transform: translateY(0); }
                }
              `}</style>

              <p className="mb-8 max-w-3xl text-base sm:text-lg md:text-lg text-center lg:text-right 2xl:text-2xl text-[#049DD9] font-medium xl:pr-6">
                Un espacio seguro y estimulante donde niñas y niños desarrollan habilidades cognitivas, socioemocionales y físicas a través de actividades lúdicas, proyectos integradores y prácticas inclusivas.
              </p>

              <div className="flex max-w-xl flex-col sm:flex-row gap-4 md:justify-start">
                <Link href="/Gestion-Pedagogica/primaria/fortalecimiento">
                  <Button size="lg" className="bg-white text-[#049DD9] hover:bg-blue-50 font-semibold text-base shadow-lg">
                    Fortalecimiento pedagógico
                  </Button>
                </Link>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/20 text-white border-2 border-white hover:bg-white/30 font-semibold text-base backdrop-blur-sm"
                >
                  Monitoreo pedagógico
                </Button>*/}
              </div>

            </div>

            {/* Floating Elements */}
            <div className="hidden sm:block absolute top-20 left-8 md:left-12 text-2xl md:text-3xl animate-bounce opacity-70">🏐</div>
            <div
              className="hidden sm:block absolute top-24 right-8 md:right-16 text-2xl md:text-3xl opacity-70"
              style={{ animation: "bounce 2s infinite 0.2s" }}
            >
              🎨
            </div>

          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-white">
            <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">¿Por qué elegir nuestro programa?</h2>
          <p className="text-lg text-gray-600 mb-12">
            Brindamos una formación integral que potencia todas las dimensiones del desarrollo infantil.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🤝", title: "Desarrollo socioemocional", desc: "Promovemos la convivencia, la empatía y habilidades sociales en el aula." },
              { icon: "🧠", title: "Aprendizaje significativo", desc: "Métodos activos y proyectos que conectan el aprendizaje con la vida real." },
              { icon: "🎯", title: "Excelencia docente", desc: "Docentes en formación continua y materiales pedagógicos actualizados." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-lg bg-blue-50 border-2 border-blue-200 hover:shadow-lg transition">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 sm:px-8 bg-linear-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
                Educación Primaria de Calidad
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                La Educación Primaria es fundamental en el desarrollo integral de los estudiantes. En la UGEL Ambo, trabajamos para garantizar una educación de calidad que fortalezca las competencias y habilidades de nuestros estudiantes.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Nuestro enfoque se centra en promover el aprendizaje activo, la resolución de problemas y el desarrollo de habilidades para la vida, preparando a los estudiantes para los desafíos del futuro.
              </p>
              <p className="text-lg text-gray-700">
                Trabajamos en estrecha colaboración con docentes, directores y familias para crear entornos de aprendizaje positivos y enriquecedores.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "150+", label: "Instituciones Educativas" },
                { number: "100%", label: "Docentes Capacitados" },
                { number: "6250+", label: "Estudiantes Atendidos" },
                { number: "6+", label: "Especialistas Dedicados" },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center border-2 border-blue-100">
                  <div className="text-4xl font-bold text-[#049DD9] mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recursos Section */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Recursos y Herramientas Pedagógicas</h2>
            <p className="text-lg text-gray-600">
              Materiales especializados para fortalecer la práctica docente en Educación Primaria
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📚", title: "Planificación Curricular", desc: "Sesiones de aprendizaje y unidades didácticas" },
              { icon: "📝", title: "Evaluación Formativa", desc: "Instrumentos y técnicas de evaluación continua" },
              { icon: "🎮", title: "Aprendizaje Lúdico", desc: "Estrategias gamificadas y actividades recreativas" },
              { icon: "📖", title: "Lectura y Escritura", desc: "Programas de fomento lector y producción textual" },
              { icon: "🔢", title: "Matemática Divertida", desc: "Metodologías para enseñar matemáticas de forma práctica" },
              { icon: "🌍", title: "Ciencias y Ambiente", desc: "Experimentos y proyectos científicos" },
              { icon: "🎨", title: "Arte y Cultura", desc: "Expresión artística y valoración del patrimonio" },
              { icon: "🏃", title: "Educación Física", desc: "Actividades físicas y deportivas" },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-lg bg-linear-to-br from-blue-50 to-white border border-blue-200 hover:shadow-lg transition hover:border-[#049DD9]">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objetivos Section */}
      <section className="py-20 px-6 sm:px-8 bg-linear-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Nuestros Objetivos Estratégicos</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Mejora del Aprendizaje",
                desc: "Elevar los niveles de logro en comprensión lectora y matemática mediante estrategias innovadoras y efectivas."
              },
              {
                icon: "👨‍🏫",
                title: "Desarrollo Docente",
                desc: "Fortalecer las competencias pedagógicas de los docentes a través de capacitación continua y acompañamiento especializado."
              },
              {
                icon: "🤝",
                title: "Participación Comunitaria",
                desc: "Involucrar a padres, madres y comunidad en el proceso educativo para crear alianzas estratégicas."
              },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-lg bg-white border-2 border-blue-200 hover:shadow-xl transition">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}
