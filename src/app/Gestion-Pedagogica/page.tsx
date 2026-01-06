import Hero from "./hero"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PersonalSection } from "./personal"
import connectMongoDB from "@/lib/mongodbConnection"
import { PersonalModel } from "@/models/Personal"

// Datos de fallback para personal de AGP
const fallbackEmployees = [
  { id: "1", name: "Jaly H. Mallqui Durand", position: "Jefe del Área de Gestión Pedagógica", image: "/Directorio/agp/Jaly-H.png" },
  { id: "2", name: "Nelida del Pilar Albornoz Julca", position: "Secretaria I - AGP", image: "/Directorio/agp/Nelida-del-Pilar.jpg" },
  { id: "3", name: "Maglorio Ortiz Rojas", position: "Especialista Ed. Inicial", image: "/Directorio/agp/Maglorio-Ortiz.jpeg" },
  { id: "4", name: "Lyz Sara Matos Cristobal", position: "Especialista Ed. Inicial", image: "/Directorio/agp/Lyz-Sara.png" },
  { id: "5", name: "Maria Elena Meza Fernandez", position: "Especialista Ed. Inicial", image: "/Directorio/agp/Maria-Elena.png" },
  { id: "6", name: "Amilda Lopez Espiritu", position: "Especialista Ed. Inicial", image: "/Directorio/agp/Almida-Lopez.png" },
  { id: "7", name: "Esther Delia Diaz Acuña", position: "Especialista Ed. Primaria", image: "/Directorio/agp/Esther-Delia.jpg" },
  { id: "8", name: "Marcos Antonio Arqueño Garay", position: "Especialista Ed. Primaria", image: "/Directorio/agp/Marcos-Antonio-Arqueño.png" },
  { id: "9", name: "Noel Grover Alvarez Aldava", position: "Especialista Ed. Primaria", image: "/Directorio/agp/Noel-Grover.png" },
  { id: "10", name: "Marco Antonio Paredes Munguia", position: "Especialista Ed. Primaria", image: "/Directorio/agp/Marco-Antonio-Paredes.png" },
  { id: "11", name: "Carmen Paulina Gomez Godoy", position: "Especialista Ed. Primaria", image: "/Directorio/agp/Carmen-Paulina.png" },
  { id: "12", name: "Walter Máximo Rivera Tadeo", position: "Especialista Ed. Primaria EIB", image: "/Directorio/agp/Walter-Maximo.png" },
  { id: "13", name: "Julio Cesar Vicencio Romero", position: "Especialista Ed. Secundaria CTA", image: "/Directorio/agp/Julio-Cesar.png" },
  { id: "14", name: "Ramon Giovanni Figueredo Oneeglio", position: "Especialista Ed. Secundaria Matemática", image: "/Directorio/agp/Ramon-Giovanni.png" },
  { id: "15", name: "Victor Raul Albornoz Flores", position: "Especialista Ed. Secundaria Comunicación", image: "/Directorio/agp/Victor-Raul.png" },
  { id: "16", name: "Beatriz Jaramillo Coz", position: "Coordinadora de Religión", image: "/Directorio/agp/Beatriz-Jaramillo.png" },
  { id: "17", name: "Paolo Roberto Zevallos Leon", position: "Especialista en Convivencia Escolar", image: "/Directorio/agp/Paolo-Roberto.png" },
  { id: "18", name: "Yasmin Beatriz Salvador Saldivar", position: "Profesional II Convivencia Escolar", image: "/Directorio/agp/Yasmin-Beatriz.png" },
  { id: "19", name: "Meliza Mercedes Verde Zevallos", position: "Profesional III Convivencia Escolar", image: "/Directorio/agp/Meliza-Mercedes.png" },
]

async function getEmployeesFromDB() {
  try {
    await connectMongoDB()
    const personal = await PersonalModel.find({ area: 'agp' }).populate('foto').sort({ orden: 1 }).lean()
    if (!personal || personal.length === 0) return null
    return personal.map((p: any) => ({ id: p._id.toString(), name: p.nombre, position: p.cargo, image: p.foto?.url }))
  } catch (error) {
    console.error('Error fetching employees:', error)
    return null
  }
}

export default async function GP() {
  const employees = await getEmployeesFromDB() || fallbackEmployees

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
                stats: "90 + instituciones"
              },
              {
                title: "Educación Primaria",
                description: "Fortalecimiento de competencias y habilidades para estudiantes de primaria a través de metodologías innovadoras.",
                href: "/Gestion-Pedagogica/primaria",
                icon: "📚",
                stats: "150 + instituciones"
              },
              {
                title: "Educación Secundaria",
                description: "Preparación integral de adolescentes para la educación superior y el mundo laboral con especialización por áreas.",
                href: "/Gestion-Pedagogica/secundaria",
                icon: "🎓",
                stats: "49 + instituciones"
              },
              {
                title: "PRONOI (Programa de Educación No Escolarizada) ",
                description: "Programa No Escolarizado de Educación Inicial que atiende a niños y niñas menores de 6 años en zonas rurales y de difícil acceso.",
                href: "/Gestion-Pedagogica/pronoi",
                icon: "🏫",
                stats: "40 + instituciones"
              },
              {
                title: "CEBA (Centro de Educación Básica Alternativa)",
                description: "Modalidad educativa flexible que ofrece oportunidades de formación a jóvenes y adultos que no pudieron acceder a la educación regular.",
                href: "/Gestion-Pedagogica/ceba",
                icon: "📖",
                stats: "5 + instituciones"
              },
              {
                title: "PRITE (Programa de Intervención Temprana)",
                description: "Atención especializada para niños menores de 3 años con discapacidad o en riesgo de adquirirla, promoviendo su desarrollo integral.",
                href: "/Gestion-Pedagogica/prite",
                icon: "🧸",
                stats: "1 institución"
              },
            ].map((nivel, i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow border-2 border-blue-100 hover:border-[#049DD9]">
                <CardHeader>
                  <div className="text-5xl mb-4 ">{nivel.icon}</div>
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
                title: "Políticas y Normativas Educativas",
                description: "Difundir, orientar y supervisar la aplicación de políticas educativas nacionales y regionales, evaluando sus resultados y garantizando la mejora continua del servicio educativo."
              },
              {
                icon: "📚",
                title: "Diversificación y Desarrollo Curricular",
                description: "Facilitar procesos de diversificación curricular, uso de materiales educativos y desarrollo de recursos pedagógicos adaptados a cada contexto sociocultural."
              },
              {
                icon: "🎓",
                title: "Formación y Actualización Docente",
                description: "Ejecutar programas de capacitación continua para personal directivo, docente y administrativo, fortaleciendo sus competencias pedagógicas y profesionales."
              },
              {
                icon: "💻",
                title: "Innovación y Tecnología Educativa",
                description: "Desarrollar nuevas tecnologías de comunicación, implementar centros de recursos educativos y ejecutar proyectos de investigación e innovación pedagógica."
              },
              {
                icon: "🌍",
                title: "Programas Estratégicos e Inclusión",
                description: "Promover estrategias de alfabetización, educación intercultural, bienestar estudiantil y programas de prevención social en coordinación con gobiernos locales."
              },
              {
                icon: "🤝",
                title: "Articulación Productiva y Cultural",
                description: "Orientar centros de educación técnico-productiva, fortalecer centros culturales, gestionar cooperación técnica-financiera y vincular educación con desarrollo regional."
              },
            ].map((funcion, i) => (
              <div key={i} className="p-6 bg-white rounded-lg border-2 border-blue-100 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="text-4xl shrink-0 justify-center text-center">{funcion.icon}</div>
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

      {/* Personal Section */}
      <PersonalSection employees={employees} />

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
              { number: "220+", label: "Instituciones Educativas" },
              { number: "100%", label: "Docentes Capacitados" },
              { number: "13870+", label: "Estudiantes Atendidos" },
              { number: "13+", label: "Especialistas Dedicados" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#049DD9] mb-3">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  )
}
