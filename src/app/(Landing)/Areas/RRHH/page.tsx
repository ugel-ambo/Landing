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
  { id: "1", name: "Yudith Venturo Bravo", position: "Jefe de la Unidad de Gestión", image: "/Directorio/rrhh/Yudith-Venturo.png" },
  { id: "2", name: "Ethel German Camacho Robles", position: "Técnico Administrativo I - Escalafón y Nexus", image: "/Directorio/rrhh/Ethel-German.png" },
  { id: "3", name: "Diógenes Alberto Tello Montes", position: "Técnico - Constancia de Pagos y Licencias", image: "/Directorio/rrhh/Diogenes-Alberto.png" },
  { id: "4", name: "Susan Sherly Barrantes Villanueva", position: "Asistente Administrativo - Planillas", image: "/Directorio/rrhh/Susan-Sherly.png" },
  { id: "5", name: "Paul Anthony Figueroa Bravo", position: "Abogado II - Recursos Humanos", image: "/Directorio/rrhh/Paul-Anthony.png" },
  { id: "6", name: "Carmen del Pilar Bustamante Panduro", position: "Abogado - Procesos Administrativos", image: "/Directorio/rrhh/Carmen-del-Pilar.png" },
  { id: "7", name: "Luz Monica Hilario Ases", position: "Especialista en Escalafón", image: "/Directorio/rrhh/Luz-Monica.jpg" },
  { id: "8", name: "Victor Hugo Valderrama Bustamante", position: "Especialista - Planillas", image: "/Directorio/rrhh/Victor-Hugo.png" },
  { id: "9", name: "Nicasio Richard Julca Rojas", position: "Apoyo en PAD", image: "/Directorio/rrhh/Nicasio-Richard.png" },
  { id: "10", name: "Shyrle Celestino Paredes", position: "Apoyo en Escalafón y Nexus", image: "/Directorio/rrhh/Shyrle-Celestino.jpg" },
  { id: "11", name: "Hermes Gabriel Abanto Maldonado", position: "Apoyo en Recursos Humanos", image: "/Directorio/rrhh/Hermes-Gabriel.png" },
  { id: "12", name: "Maura Oriuela Tadeo", position: "Apoyo en Recursos Humanos", image: "/Directorio/rrhh/Maura-Oriuela.png" },
  { id: "13", name: "José German Sanchez Bravo", position: "Asistente Administrativo", image: "/Directorio/rrhh/Jose-German.png" },
  { id: "14", name: "Cynthia Katherine Espinoza Simeon", position: "Asistente Administrativo", image: "/Directorio/rrhh/Cynthia-Katherine.png" },
  { id: "15", name: "Lesly Flor Cardenas Chamarro", position: "Asistente Administrativo", image: "/Directorio/rrhh/Lesly-Flor.jpg" },
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
