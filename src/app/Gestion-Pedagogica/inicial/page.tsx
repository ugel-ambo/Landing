"use client";


import { Button } from "@/components/ui/button";
import { ColourfulText } from "@/components/ui/shadcn-io/colourful-text";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 h-1/5 w-full bg-linear-to-b  to-transparent pointer-events-none z-10" />

        {/* Background Image */}
        <div
          className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[80vh] xl:h-[85vh] bg-cover bg-center"
          style={{
            backgroundImage: "url(/gp/inicial/hero.png)",
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
          }}
        >
          {/* Content Container */}
          <div className="relative z-20 h-full flex flex-col items-center sm:items-start justify-start pt-10 sm:pt-32 md:pt-24 px-4 lg:pt-10 xl:pt-20 sm:px-6 md:px-8 ">

            {/* ✅ Badge centrado */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full uppercase bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-bold text-[#049DD9] shadow-lg mx-auto">
              <span className="text-xl xl:text-2xl ">📚</span>
              Educación Inicial
            </div>

            {/* ✅ Contenedor del texto alineado a la izquierda (mobile centrado) */}
            <div className="flex flex-col w-full max-w-6xl items-center sm:items-start xl:pt-12 2xl:pt-18 sm:pl-8 md:pt-20 md:pl-16 lg:pl-20 xl:pl-20 2xl:pl-42">
              {/* Title */}
              <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[80px] font-bold text-white drop-shadow-lg text-center sm:text-left md:text-center lg:text-left ">
                Fortaleciendo la
                <br />
                <ColourfulText
                  text="Educación Inicial"
                  interval={4000}
                  animationDuration={0.8}
                  colors={[
                    "#FF6B9D",  // Rosa vibrante
                    "#FFA500",  // Naranja brillante
                    "#FFD700",  // Dorado
                    "#00CED1",  // Turquesa
                    "#9370DB",  // Púrpura medio
                    "#FF69B4",  // Rosa fucsia
                    "#32CD32",  // Verde lima
                  ]}
                />
              </h1>

              {/* Subtitle */}
              <p className="mb-8 max-w-lg text-base sm:text-lg md:text-xl text-white drop-shadow-md  md:text-center lg:text-left font-medium text-center sm:text-left">
                Portal de recursos pedagógicos y gestión para docentes
                del nivel inicial. Acompañamiento permanente
                para la mejora de los aprendizajes.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start sm:justify-start">
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

      {/* Servicios Section */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Servicios para Docentes de Inicial</h2>
          <p className="text-lg text-gray-600 mb-12">
            Herramientas y recursos para fortalecer tu práctica pedagógica
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "📋", title: "Programación Curricular", desc: "Modelos y formatos actualizados para planificar tu año lectivo" },
              { icon: "🎓", title: "Capacitaciones", desc: "Formación continua y actualización docente" },
              { icon: "📊", title: "Evaluación", desc: "Instrumentos y estrategias de evaluación formativa" },
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
      <section className="py-20 px-6 sm:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
                Sobre la Educación Inicial
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                La Educación Inicial es el primer nivel del sistema educativo peruano y constituye el fundamento para el desarrollo integral de los niños y niñas.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                En la UGEL Ambo, nos enfocamos en brindar una educación de calidad que promueva el desarrollo de competencias, habilidades socioemocionales y valores desde los primeros años.
              </p>
              <p className="text-lg text-gray-700">
                Trabajamos de la mano con docentes y familias para garantizar que cada niño y niña reciba la atención y estimulación adecuada para su desarrollo óptimo.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "30+", label: "Instituciones Educativas" },
                { number: "100+", label: "Docentes Capacitados" },
                { number: "2000+", label: "Estudiantes Atendidos" },
                { number: "15+", label: "Especialistas Comprometidos" },
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
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Recursos y Materiales</h2>
            <p className="text-lg text-gray-600">
              Accede a herramientas y materiales diseñados especialmente para el nivel inicial
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📚", title: "Guías Didácticas", desc: "Materiales de apoyo para la planificación curricular" },
              { icon: "🎨", title: "Actividades Lúdicas", desc: "Estrategias de aprendizaje a través del juego" },
              { icon: "📖", title: "Biblioteca Virtual", desc: "Recursos bibliográficos y materiales de lectura" },
              { icon: "🎯", title: "Instrumentos de Evaluación", desc: "Herramientas para el seguimiento del aprendizaje" },
              { icon: "💡", title: "Proyectos Innovadores", desc: "Experiencias exitosas y buenas prácticas" },
              { icon: "👥", title: "Trabajo con Familias", desc: "Estrategias para involucrar a padres y madres" },
              { icon: "🌟", title: "Inclusión Educativa", desc: "Recursos para la atención a la diversidad" },
              { icon: "🔍", title: "Monitoreo y Acompañamiento", desc: "Herramientas de seguimiento pedagógico" },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-lg bg-gradient-to-br from-blue-50 to-white border border-blue-200 hover:shadow-lg transition hover:border-[#049DD9]">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-8 bg-gradient-to-r from-[#049DD9] to-[#028ec7] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Necesitas Apoyo Pedagógico?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Nuestro equipo de especialistas está listo para acompañarte en tu labor educativa. 
            Contacta con nosotros para recibir asesoramiento y recursos personalizados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#049DD9] hover:bg-blue-50 font-semibold shadow-lg">
              Solicitar Asesoramiento
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-2 border-white hover:bg-white/10 font-semibold"
            >
              Ver Especialistas
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
