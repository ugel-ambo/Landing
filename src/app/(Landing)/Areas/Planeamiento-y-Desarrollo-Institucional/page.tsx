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
    image: "/Directorio/agi/general.png",
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
  { id: "1", name: "Rider Ortega Tucto", position: "Jefe de Planeamiento y Desarrollo Institucional", image: "/Directorio/agi/Rider-Ortega.png" },
  { id: "2", name: "José Luis Chávez Valerio", position: "Secretario Técnico", image: "/Directorio/agi/Jose-Luis.png" },
  { id: "3", name: "Yonatan Gustavo Tafur Rodriguez", position: "Planificador Institucional", image: "/Directorio/agi/Yonatan-Gustavo.jpeg" },
  { id: "4", name: "Maryori Mishel Leon Colqui", position: "Especialista en PREVAED", image: "/Directorio/agi/Maryori-Mishel.jpeg" },
  { id: "5", name: "Antonio Percy Chavez Alcantara", position: "Vigilante de la UGEL", image: "/Directorio/agi/Antonio-Percy.png" },
  { id: "6", name: "Delmer Jmes Villareal Morales", position: "Vigilante de la UGEL", image: "/Directorio/agi/Delmer-Jmes.png" },
  { id: "7", name: "Irene Martel Condezo", position: "Especialista de Finanzas", image: "/Directorio/agi/Irene-Martel.png" },
  { id: "8", name: "Katherine Haydeé Osorio Celis", position: "Técnico en SIAGIE y Estadistica", image: "/Directorio/agi/Katherine-Haydee.png" },
  { id: "9", name: "Mayck Christian Bardon Dionicio", position: "Especialista en Infraestructura", image: "/Directorio/agi/Mayck-Christian.png" },
  { id: "10", name: "Indira Venecia Davila del Valle", position: "Apoyo en Infraestructura", image: "/Directorio/agi/Indira-Venecia.png" },
  { id: "11", name: "Ruth Gieze Zuñiga Quinto", position: "Apoyo en Infraestructura", image: "/Directorio/agi/Ruth-Gieze.png" },
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
