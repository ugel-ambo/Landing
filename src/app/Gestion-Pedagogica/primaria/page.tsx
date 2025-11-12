"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 h-1/2 w-full bg-linear-to-b pointer-events-none z-10" />

        {/* Background Image */}
        <div
          className="relative w-full h-[70vh] sm:h-[75vh] md:h-[60vh] lg:h-[85vh] bg-cover bg-center"
          style={{
            backgroundImage: "url(/gp/primaria/fondo.png)",
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
          }}
        >
          {/* Badge centrado */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-30 inline-flex items-center gap-2 rounded-full uppercase bg-white/95 backdrop-blur-sm px-4 sm:px-5 py-2 text-xs sm:text-sm lg:text-base font-bold text-[#049DD9] shadow-xl border border-blue-100">
            <span className="text-sm lg:text-xl">📚</span>
            Educación Primaria
          </div>

          {/* Content Row → móvil (col) | desktop (row) */}
          <div className="relative z-20 h-full flex flex-col md:flex-row items-center justify-center px-6 sm:px-8 gap-8 pt-16 md:pt-0">

            {/* -------- IMAGE COLUMN (primero en desktop para que esté a la izquierda) -------- */}
            <div className="w-full md:w-1/2 relative h-80 sm:h-96 md:h-[500px] lg:h-[550px] order-2 md:order-1">
              <Image
                src="/gp/primaria/hero.png"
                alt="Unidad de Gestión Pedagógica"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </div>

            {/* -------- TEXT COLUMN (más a la derecha) -------- */}
            <div className="w-full md:w-1/2 flex flex-col items-centers text-center order-1 md:order-2 lg:text-right ">

              <h1 className="mb-4 max-w-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ">
                <span
                  className="inline-block bg-linear-to-r text-[#039DD8] "
                >
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

              <p className="mb-8 max-w-xl text-base sm:text-lg md:text-xl text-[#049DD9] font-medium ">
                Un espacio donde los niños descubren, aprenden y se desarrollan con alegría.
                Educación de calidad desde los primeros años.
              </p>

              <div className="flex  max-w-xl flex-col sm:flex-row gap-4">
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

      {/* Additional Content Section */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">¿Por qué elegir nuestro programa?</h2>
          <p className="text-lg text-gray-600 mb-12">
            Ofrecemos educación integral que desarrolla todas las dimensiones del niño.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🤝", title: "Desarrollo Social", desc: "Fomentamos valores y habilidades sociales" },
              { icon: "🧠", title: "Aprendizaje Integral", desc: "Cognitivo, emocional y físico" },
              { icon: "🎯", title: "Calidad Educativa", desc: "Docentes capacitados y metodologías modernas" },
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
