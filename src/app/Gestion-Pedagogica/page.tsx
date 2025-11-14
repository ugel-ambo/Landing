"use client"

import Hero from "./hero"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function GP() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Niveles Educativos Section */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Niveles Educativos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conoce nuestro trabajo en los diferentes niveles educativos de la provincia de Ambo
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Educación Inicial",
                description: "Acompañamiento pedagógico especializado para el desarrollo integral de niños y niñas desde los primeros años.",
                href: "/Gestion-Pedagogica/inicial",
                icon: "🎨",
                stats: "30+ instituciones"
              },
              {
                title: "Educación Primaria",
                description: "Fortalecimiento de competencias y habilidades para estudiantes de primaria a través de metodologías innovadoras.",
                href: "/Gestion-Pedagogica/primaria",
                icon: "📚",
                stats: "50+ instituciones"
              },
              {
                title: "Educación Secundaria",
                description: "Preparación integral de adolescentes para la educación superior y el mundo laboral con especialización por áreas.",
                href: "/Gestion-Pedagogica/secundaria",
                icon: "🎓",
                stats: "40+ instituciones"
              },
            ].map((nivel, i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow border-2 border-blue-100 hover:border-[#049DD9]">
                <CardHeader>
                  <div className="text-5xl mb-4">{nivel.icon}</div>
                  <CardTitle className="text-2xl text-blue-900">{nivel.title}</CardTitle>
                  <CardDescription className="text-gray-600 pt-2">
                    {nivel.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{nivel.stats}</span>
                    <Link href={nivel.href}>
                      <Button variant="outline" className="border-[#049DD9] text-[#049DD9] hover:bg-[#049DD9] hover:text-white">
                        Ver más
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Funciones Section */}
      <section className="py-20 px-6 sm:px-8 bg-linear-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Nuestras Funciones
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Responsabilidades y compromisos de la Unidad de Gestión Pedagógica
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "📋",
                title: "Planificación y Evaluación",
                description: "Planificar, dirigir, evaluar y hacer cumplir las actividades asignadas al área de gestión pedagógica."
              },
              {
                icon: "🤝",
                title: "Coordinación Interinstitucional",
                description: "Coordinar con otras áreas sobre la formulación de presupuestos y recursos educativos."
              },
              {
                icon: "📊",
                title: "Gestión Administrativa",
                description: "Revisar y firmar informes de ejecución presupuestaria, propuestas de modificación y documentación relacionada."
              },
              {
                icon: "📚",
                title: "Acompañamiento Pedagógico",
                description: "Brindar acompañamiento técnico-pedagógico a docentes y directores de instituciones educativas."
              },
              {
                icon: "🎓",
                title: "Capacitación Docente",
                description: "Organizar y desarrollar programas de capacitación y actualización para el personal docente."
              },
              {
                icon: "📈",
                title: "Monitoreo y Supervisión",
                description: "Monitorear y supervisar el cumplimiento de las actividades pedagógicas en las instituciones educativas."
              },
            ].map((funcion, i) => (
              <div key={i} className="p-6 bg-white rounded-lg border-2 border-blue-100 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="text-4xl shrink-0">{funcion.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{funcion.title}</h3>
                    <p className="text-gray-600">{funcion.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estadísticas Section */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Nuestro Impacto
            </h2>
            <p className="text-lg text-gray-600">
              Cifras que demuestran nuestro compromiso con la educación en Ambo
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Instituciones Educativas" },
              { number: "1000+", label: "Docentes Capacitados" },
              { number: "11000+", label: "Estudiantes Atendidos" },
              { number: "13", label: "Especialistas Dedicados" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#049DD9] mb-3">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-20 px-6 sm:px-8 bg-linear-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              Servicios que Ofrecemos
            </h2>
            <p className="text-lg text-gray-600">
              Herramientas y recursos para fortalecer la práctica pedagógica
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📋",
                title: "Planificación Curricular",
                description: "Asesoramiento en la elaboración de programaciones curriculares, sesiones de aprendizaje y unidades didácticas."
              },
              {
                icon: "🎓",
                title: "Capacitación Docente",
                description: "Programas de formación continua y actualización pedagógica para docentes de todos los niveles."
              },
              {
                icon: "📊",
                title: "Evaluación Educativa",
                description: "Asesoramiento en instrumentos y estrategias de evaluación formativa y sumativa."
              },
              {
                icon: "🤝",
                title: "Acompañamiento Pedagógico",
                description: "Seguimiento y apoyo personalizado a docentes y directores en su práctica pedagógica."
              },
              {
                icon: "📚",
                title: "Recursos Educativos",
                description: "Materiales, guías didácticas y recursos bibliográficos para fortalecer el aprendizaje."
              },
              {
                icon: "🔍",
                title: "Monitoreo Escolar",
                description: "Supervisión y monitoreo del cumplimiento de actividades pedagógicas en las instituciones educativas."
              },
            ].map((servicio, i) => (
              <Card key={i} className="bg-white border-2 border-blue-100 hover:shadow-xl transition hover:border-[#049DD9]">
                <CardHeader>
                  <div className="text-4xl mb-3">{servicio.icon}</div>
                  <CardTitle className="text-xl text-blue-900">{servicio.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {servicio.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-8 bg-linear-to-r from-[#049DD9] to-[#028ec7] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Necesitas Apoyo Pedagógico?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Nuestro equipo de especialistas está disponible para brindarte asesoramiento, 
            recursos y acompañamiento en tu labor educativa. Contáctanos y trabajemos juntos 
            por una educación de calidad en Ambo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#049DD9] hover:bg-blue-50 font-semibold shadow-lg">
              Contactar Especialistas
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-2 border-white hover:bg-white/10 font-semibold"
            >
              Ver Niveles Educativos
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
