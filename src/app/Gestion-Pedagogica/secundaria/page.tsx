"use client"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 h-1/2 w-full bg-linear-to-b from-white via-white/90 via-30% to-transparent pointer-events-none z-10" />

        {/* Background Image */}
        <div
          className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[90vh] bg-cover bg-center"
          style={{
            backgroundImage: "url(/gp/inicial/hero.png)",
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
          }}
        >
          {/* Content Container */}
          <div className="relative z-20 h-full flex flex-col items-center justify-start pt-10 sm:pt-32 md:pt-20 px-4 sm:px-6 md:px-8">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full uppercase bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-bold text-[#049DD9] shadow-lg">
              <span className="text-xl ">📚</span>
              Educación Inicial
            </div>

            {/* Title */}
            <h1 className="text-center  mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg" >
              Creciendo juntos en la
              <br />
              <span className="text-white">Educación Inicial</span>
            </h1>

            {/* Subtitle */}
            <p className="text-center mb-8 max-w-2xl text-base sm:text-lg md:text-xl text-white drop-shadow-md font-medium px-2">
              Un espacio donde los niños descubren, aprenden y se desarrollan con alegría. Educación de calidad desde
              los primeros años.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold text-base shadow-lg">
                Conocer Más
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/20 text-white border-2 border-white hover:bg-white/30 font-semibold text-base backdrop-blur-sm"
              >
                Contáctanos
              </Button>
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
  )
}