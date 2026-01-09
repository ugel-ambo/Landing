import { AreaSection } from "../components/area-section"
import connectMongoDB from "@/lib/mongodbConnection"
import { PersonalModel } from "@/models/Personal"

// Deshabilitar cache para obtener datos frescos
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const areaStaticData = {
  hero: {
    badge: "Talento y soporte",
    title: "Unidad de Gestión de Recursos Humanos",
    subtitle: "Acompañamiento al personal y servicios al docente",
    description: "Brindamos atención integral en escalafón, planillas, licencias y procesos administrativos.",
    image: "/Directorio/rrhh/general.jpeg",
  },
  functionsIntro: "Nuestras funciones aseguran el cumplimiento de las normativas laborales.",
  teamIntro: "Un equipo multidisciplinario que cuida los procesos de personal.",
  functions: [
    "Planificar, dirigir y evaluar las actividades asignadas al área de recursos humanos.",
    "Coordinar con Gestión Institucional la formulación del presupuesto.",
    "Revisar informes de ejecución presupuestaria y solicitudes de licencias.",
    "Supervisar adquisiciones e inventarios vinculados a recursos humanos.",
    "Visar resoluciones relacionadas a movimientos de personal.",
    "Verificar conciliaciones bancarias y gestión de planillas.",
  ],
}

const fallbackEmployees = [
  
  { id: "2", name: "Ethel German Camacho Robles", position: "Técnico Administrativo I - Escalafón y Nexus", image: "/Directorio/rrhh/Ethel-German.png" },
]

async function getEmployeesFromDB() {
  try {
    await connectMongoDB()
    const personal = await PersonalModel.find({ area: 'rrhh' }).populate('foto').sort({ orden: 1 }).lean()
    if (!personal || personal.length === 0) return null
    return personal.map((p: any) => ({ id: p._id.toString(), name: p.nombre, position: p.cargo, image: p.foto?.url }))
  } catch (error) {
    console.error('Error fetching employees:', error)
    return null
  }
}

export default async function RRHH() {
  const employees = await getEmployeesFromDB() || fallbackEmployees
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <AreaSection {...areaStaticData} employees={employees} />
      </div>
    </main>
  )
}
