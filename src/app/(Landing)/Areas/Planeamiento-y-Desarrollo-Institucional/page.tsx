import { AreaSection } from "../components/area-section"
import connectMongoDB from "@/lib/mongodbConnection"
import { PersonalModel } from "@/models/Personal"

// Deshabilitar cache para obtener datos frescos
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const areaStaticData = {
  hero: {
    badge: "Planeamiento y proyectos",
    title: "Área de Planeamiento y Desarrollo Institucional",
    subtitle: "Planificación educativa y gestión de calidad",
    description: "Conducimos la formulación del Proyecto Educativo Local y acompañamos los procesos de innovación.",
    image: "/Directorio/agi/general.JPG",
  },
  functionsIntro: "Diseñamos estrategias e instrumentos para el crecimiento educativo de la provincia.",
  teamIntro: "Equipo multidisciplinario que impulsa proyectos y evalúa la gestión institucional.",
  functions: [
    "Difundir, orientar y supervisar la aplicación de la política educativa.",
    "Formular y evaluar el proyecto educativo local.",
    "Formular con la DRE la creación y modificación de instituciones educativas.",
    "Coordinar el funcionamiento de instituciones de educación superior.",
    "Formular y evaluar los instrumentos de gestión institucional.",
    "Asesorar a instituciones educativas en PEI, RI, Memoria de Gestión y PAT.",
    "Orientar a los Consejos Directivos de las APAFA.",
    "Promover redes educativas en áreas rurales y urbano marginales.",
    "Evaluar instituciones educativas con criterios de calidad.",
    "Racionalizar personal, materiales y recursos financieros.",
    "Organizar programas de formación continua en gestión institucional.",
    "Formular y evaluar el presupuesto anual de la UGEL.",
  ],
}

const fallbackEmployees = [
  { id: "1", name: "Kennedy Robinson Eulogio Valenzuela", position: "Jefe de Planeamiento y Desarrollo Institucional", image: "/Directorio/agi/Rider-Ortega.png" },
  
]

async function getEmployeesFromDB() {
  try {
    await connectMongoDB()
    const personal = await PersonalModel.find({ area: 'agi' }).populate('foto').sort({ orden: 1 }).lean()
    if (!personal || personal.length === 0) return null
    return personal.map((p: any) => ({ id: p._id.toString(), name: p.nombre, position: p.cargo, image: p.foto?.url }))
  } catch (error) {
    console.error('Error fetching employees:', error)
    return null
  }
}

export default async function PlaneamientoDesarrollo() {
  const employees = await getEmployeesFromDB() || fallbackEmployees
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <AreaSection {...areaStaticData} employees={employees} />
      </div>
    </main>
  )
}
