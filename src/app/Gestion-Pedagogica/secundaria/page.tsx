"use client";


import { Button } from "@/components/ui/button";
import { ColourfulText } from "@/components/ui/shadcn-io/colourful-text";
import { HighlightText } from "@/components/ui/shadcn-io/highlight-text";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 max-h-1/5 w-full bg-linear-to-b  pointer-events-none z-10" />

        {/* Background Image */}
        <div
          className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[90vh] bg-cover bg-center"
          style={{
            backgroundImage: "url(/gp/secundaria/hero.png)",
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
          }}
        >
          {/* Content Container */}
          
          <div className="relative z-20 h-full flex flex-col items-center justify-start pt-10 sm:pt-32 md:pt-20 px-4 sm:px-6 md:px-8">

            {/* ✅ Badge centrado */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full uppercase bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-bold text-[#049DD9] shadow-lg">
              <span className="text-xl ">📚</span>
              Educación Secundaria
            </div>

            {/* ✅ Contenedor del texto alineado a la izquierda */}
            <div className="flex flex-col w-full max-w-6xl items-center lg:items-end ">

              {/* Title */}

              <h1 className="mb-8 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#028ec7] drop-shadow-lg text-center lg:text-right leading-snug sm:leading-snug lg:leading-relaxed">
              Fortaleciendo la
                <br />
                <HighlightText 
                  text="Educación Secundaria"
                  inView={true}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="align-middle"
                />
              </h1>

              {/* Subtitle */}
              <p className="mb-8 max-w-lg text-base sm:text-lg md:text-xl text-[#028ec7] font-medium text-center lg:text-right">
                Portal de recursos pedagógicos y gestión para docentes
                del nivel Secundario. Acompañamiento permanente
                para la mejora de los aprendizajes.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-[#049DD9] hover:bg-blue-50 font-semibold text-base shadow-lg">
                Fortalecimiento Pedagógico
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/20 text-white border-2 border-white hover:bg-white/30 font-semibold text-base backdrop-blur-sm"
                >
                  Monitoreo Pedagógico
                </Button>
              </div>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Servicios para Docentes de Inicial</h2>
          <p className="text-lg text-gray-600 mb-12">
            Herramientas y recursos para fortalecer tu práctica pedagógica
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              { icon: "📋", title: "Programación Curricular", desc: "Modelos y formatos actualizados" },
              { icon: "🎓", title: "Capacitaciones", desc: "Formación continua y actualización docente" },
              { icon: "📊", title: "Evaluación", desc: "Instrumentos y estrategias de evaluación" },
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
    </main>
  );
}
