"use client";


import { Button } from "@/components/ui/button";
import { HighlightText } from "@/components/ui/shadcn-io/highlight-text";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 max-h-1/5 w-full bg-linear-to-b  pointer-events-none z-10" />

        {/* Background Image */}
        <div
          className="relative w-full h-[70vh] sm:h-[75vh] md:h-[70vh] lg:h-[90vh] xl:h-[87vh] bg-cover bg-center"
          style={{
            backgroundImage: "url(/gp/secundaria/hero.png)",
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
          }}
        >
          {/* Content Container */}

          <div className="relative z-20 h-full flex flex-col items-center 2xl:items-end 2xl:pr-40 justify-start pt-10 sm:pt-10 md:pt-10 px-4 sm:px-6 md:px-8 lg:pt-0 xl:pt-24">

          {/* ✅ Badge centrado */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full uppercase bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-bold text-[#0b1f27] shadow-lg 2xl:self-center">
              <span className="text-xl ">📚</span>
              Educación Secundaria
            </div>

            {/* ✅ Contenedor del texto alineado a la izquierda */}
            <div className="flex flex-col w-full max-w-6xl items-center lg:items-end text-center md:pt-10 lg:pt-0 lg:text-right 2xl:pr-10 2xl:pt-5">

              {/* Title */}

              <h1 className="mb-8 text-3xl sm:text-4xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-[#028ec7] drop-shadow-lg text-center lg:text-right leading-snug sm:leading-snug lg:leading-relaxed">
                Fortaleciendo la
                <br />
                <HighlightText
                  text="Educación Secundaria"
                  inView={true}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="align-middle"
                />
              </h1>

              <p className="mb-8 max-w-lg text-base sm:text-lg md:text-xl text-[#028ec7] font-medium text-center lg:text-right">
                Portal de recursos pedagógicos y gestión para docentes
                del nivel Secundario. Acompañamiento permanente
                para la mejora de los aprendizajes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-[#049DD9] hover:bg-[#049DD9]/5 font-semibold text-base shadow-lg">
                  Fortalecimiento Pedagógico
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-[#049DD9] text-white border-2 border-white hover:bg-[#049DD9]/80 font-semibold text-base "
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

      {/* Servicios Section */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Servicios para Docentes de Secundaria</h2>
          <p className="text-lg text-gray-600 mb-12">
            Herramientas y recursos para fortalecer tu práctica pedagógica en Educación Secundaria
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "📋", title: "Programación Curricular", desc: "Modelos y formatos actualizados por áreas curriculares" },
              { icon: "🎓", title: "Capacitaciones Especializadas", desc: "Formación continua y actualización docente por especialidad" },
              { icon: "📊", title: "Evaluación Integral", desc: "Instrumentos y estrategias de evaluación formativa y sumativa" },
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
                Educación Secundaria Integral
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                La Educación Secundaria es una etapa crucial en la formación de adolescentes y jóvenes. En la UGEL Ambo, 
                nos enfocamos en brindar una educación integral que prepare a los estudiantes para la educación superior y la vida adulta.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Nuestro trabajo se centra en el desarrollo de competencias, habilidades investigativas, pensamiento crítico 
                y valores que permitan a los estudiantes enfrentar los desafíos del mundo actual con éxito.
              </p>
              <p className="text-lg text-gray-700">
                Contamos con especialistas en diferentes áreas curriculares que brindan acompañamiento y asesoramiento 
                especializado a los docentes para mejorar la calidad educativa.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "40+", label: "Instituciones Educativas" },
                { number: "150+", label: "Docentes Capacitados" },
                { number: "4000+", label: "Estudiantes Atendidos" },
                { number: "18+", label: "Especialistas Expertos" },
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

      {/* Áreas Curriculares Section */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Áreas Curriculares</h2>
            <p className="text-lg text-gray-600">
              Especialización por áreas para un acompañamiento pedagógico efectivo
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📐", title: "Matemática", desc: "Lógica matemática, álgebra, geometría y estadística" },
              { icon: "📝", title: "Comunicación", desc: "Comprensión lectora, producción textual y comunicación oral" },
              { icon: "🔬", title: "CTA", desc: "Ciencia, tecnología y ambiente con enfoque experimental" },
              { icon: "🌍", title: "Ciencias Sociales", desc: "Historia, geografía y economía" },
              { icon: "🎨", title: "Arte y Cultura", desc: "Expresión artística y valoración cultural" },
              { icon: "💻", title: "Educación para el Trabajo", desc: "Desarrollo de competencias laborales" },
              { icon: "🏃", title: "Educación Física", desc: "Deporte, recreación y vida saludable" },
              { icon: "🙏", title: "Religión", desc: "Formación en valores y espiritualidad" },
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
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Nuestros Compromisos</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: "🎯", 
                title: "Excelencia Académica", 
                desc: "Mejorar los niveles de logro en todas las áreas curriculares mediante metodologías innovadoras y efectivas." 
              },
              { 
                icon: "🚀", 
                title: "Preparación para el Futuro", 
                desc: "Desarrollar competencias que preparen a los estudiantes para la educación superior y el mundo laboral." 
              },
              { 
                icon: "💡", 
                title: "Innovación Pedagógica", 
                desc: "Promover el uso de tecnologías educativas y metodologías activas que enriquezcan el aprendizaje." 
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

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-8 bg-linear-to-r from-[#049DD9] to-[#028ec7] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Buscas Apoyo en Educación Secundaria?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Nuestro equipo de especialistas por áreas curriculares está disponible para brindarte 
            asesoramiento, recursos especializados y acompañamiento pedagógico en tu labor docente.
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
