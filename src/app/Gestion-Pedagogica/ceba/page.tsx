"use client";


import { Button } from "@/components/ui/button";
import { HighlightText } from "@/components/ui/shadcn-io/highlight-text";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 h-1/5 w-full bg-linear-to-b from-[#223f59]/50 to-transparent pointer-events-none z-10" />

        {/* Background Image */}
        <div
          className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[90vh] xl:h-[85vh] bg-cover bg-center"
          style={{
            backgroundImage: "url(/gp/ceba/hero.png)",
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
          }}
        >
          {/* Content Container */}
          <div className="relative z-20 h-full flex flex-col items-center justify-start pt-10 sm:pt-32 md:pt-24 px-4 lg:pt-10 xl:pt-24 sm:px-6 md:px-8">
 
            {/* ✅ Badge centrado */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full uppercase bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-bold text-[#0b1f27] shadow-lg mx-auto">
              <span className="text-xl ">📚</span>
              Educación Basica Alternativa
            </div>


            {/* ✅ Contenedor del texto alineado a la izquierda */}
            <div className="flex flex-col w-full max-w-6xl items-center lg:items-start xl:pt-10 2xl:pt-5 2xl:items-start lg:mr-20 2xl:mr-72">

              {/* Title */}
              <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl  lg:text-6xl xl:text-6xl 2xl:text-[65px] text-center font-bold text-white drop-shadow-2xl lg:text-left leading-snug ">
              Centro de Educación
                <br />
                <HighlightText
                  text="Básica Alternativa"
                  inView={true}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="align-middle from-[#049dd9] via-[#3873a6] to-[#7cb9e8]"
                />
              </h1>

              {/* Subtitle */}
              <p className="mb-8 max-w-lg text-base sm:text-lg md:text-xl text-white drop-shadow-lg font-medium text-left">
                Portal de recursos pedagógicos y gestión para docentes
                del nivel inicial. Acompañamiento permanente
                para la mejora de los aprendizajes.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-linear-to-r from-[#049dd9] to-[#3873a6] text-white hover:from-[#038bc2] hover:to-[#2f6490] font-semibold text-base shadow-xl">
                  Fortalecimiento Pedagógico
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/90 text-[#223f59] border-2 border-[#049dd9] hover:bg-white hover:border-[#3873a6] font-semibold text-base backdrop-blur-sm shadow-lg"
                >
                  Monitoreo Pedagógico
                </Button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="hidden sm:block absolute top-8 left-8 md:left-12 text-2xl md:text-3xl animate-bounce opacity-80">✏️</div>
            <div
              className="hidden sm:block absolute top-16 right-8 md:right-12 text-2xl md:text-3xl opacity-80"
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

      {/* Additional Content Section */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#223f59] mb-4">Servicios para Docentes de CEBA</h2>
          <p className="text-lg text-[#666666] mb-12">
            Herramientas y recursos para fortalecer tu práctica pedagógica
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              { icon: "📋", title: "Programación Curricular", desc: "Modelos y formatos actualizados" },
              { icon: "🎓", title: "Capacitaciones", desc: "Formación continua y actualización docente" },
              { icon: "📊", title: "Evaluación", desc: "Instrumentos y estrategias de evaluación" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-lg bg-[#f2f2f2] border-2 border-[#e5e7eb] hover:shadow-lg hover:border-[#049dd9] transition">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#223f59] mb-2">{item.title}</h3>
                <p className="text-[#666666]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalidades CEBA */}
      <section className="py-20 px-6 sm:px-8 bg-linear-to-br from-[#f2f2f2] to-[#b8d4e8]/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#223f59] mb-4">Modalidades de Atención</h2>
            <p className="text-lg text-[#666666]">Flexibilidad educativa para jóvenes y adultos</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition border-t-4 border-[#049dd9]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#b8d4e8] p-4 rounded-full">
                  <span className="text-3xl">🌅</span>
                </div>
                <h3 className="text-2xl font-bold text-[#223f59]">Presencial</h3>
              </div>
              <p className="text-[#666666] mb-4">Clases presenciales con horarios flexibles adaptados a las necesidades de estudiantes que trabajan.</p>
              <ul className="space-y-2 text-[#223f59]">
                <li className="flex items-center gap-2">
                  <span className="text-[#049dd9]">✓</span> Interacción directa con docentes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#049dd9]">✓</span> Trabajo colaborativo
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#049dd9]">✓</span> Horarios vespertinos y nocturnos
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition border-t-4 border-[#3873a6]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#7cb9e8]/30 p-4 rounded-full">
                  <span className="text-3xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-[#223f59]">Semipresencial</h3>
              </div>
              <p className="text-[#666666] mb-4">Combinación de sesiones presenciales con aprendizaje autónomo mediado por tecnología.</p>
              <ul className="space-y-2 text-[#223f59]">
                <li className="flex items-center gap-2">
                  <span className="text-[#3873a6]">✓</span> Flexibilidad de tiempo
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#3873a6]">✓</span> Recursos digitales
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#3873a6]">✓</span> Tutorías personalizadas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programas Especializados */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#223f59] mb-4">Programas Especializados</h2>
            <p className="text-lg text-[#666666]">Educación inclusiva y diversificada</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-6 rounded-xl bg-linear-to-br from-[#7cb9e8]/20 to-[#b8d4e8]/30 hover:shadow-xl transition-all border border-[#e5e7eb]">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">👥</div>
              <h3 className="text-xl font-bold text-[#223f59] mb-3">PEBANA</h3>
              <p className="text-[#666666]">Programa de Educación Básica Alternativa de Niños y Adolescentes</p>
            </div>

            <div className="group p-6 rounded-xl bg-linear-to-br from-[#049dd9]/10 to-[#3873a6]/10 hover:shadow-xl transition-all border border-[#e5e7eb]">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏥</div>
              <h3 className="text-xl font-bold text-[#223f59] mb-3">PEBAJA</h3>
              <p className="text-[#666666]">Programa de Educación Básica Alternativa de Jóvenes y Adultos</p>
            </div>

            <div className="group p-6 rounded-xl bg-linear-to-br from-[#3873a6]/10 to-[#7cb9e8]/20 hover:shadow-xl transition-all border border-[#e5e7eb]">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🌾</div>
              <h3 className="text-xl font-bold text-[#223f59] mb-3">Alfabetización</h3>
              <p className="text-[#666666]">Programa de alfabetización para jóvenes y adultos sin escolaridad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-20 px-6 sm:px-8 bg-linear-to-r from-[#223f59] to-[#3873a6] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Impacto Educativo</h2>
            <p className="text-lg text-[#b8d4e8]">Transformando vidas a través de la educación</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "1,200+", label: "Estudiantes" },
              { number: "85", label: "Docentes" },
              { number: "12", label: "CEBA Activos" },
              { number: "95%", label: "Tasa de Culminación" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white ] mb-2">{stat.number}</div>
                <div className="text-white text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
