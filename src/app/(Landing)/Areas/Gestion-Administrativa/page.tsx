import { AreaSection } from "../components/area-section"
import connectMongoDB from "@/lib/mongodbConnection"
import { PersonalModel } from "@/models/Personal"

// Deshabilitar cache para obtener datos frescos
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const areaStaticData = {
  hero: {
    badge: "Gestión administrativa",
    title: "Área de Gestión Administrativa",
    subtitle: "Recursos, logística y soporte institucional",
    description: "Gestionamos los recursos humanos, materiales y financieros para el funcionamiento de la UGEL.",
    image: "/Directorio/aga/jefe.JPG",
  },
  functionsIntro: "Aseguramos procesos administrativos transparentes para la labor pedagógica.",
  teamIntro: "Equipo especializado en abastecimiento, patrimonio y atención administrativa.",
  functions: [
    "Administrar y evaluar el potencial humano y recursos de la UGEL.",
    "Administrar los servicios de transporte, mantenimiento y seguridad.",
    "Asesorar a las Instituciones Educativas en procesos técnicos de personal.",
    "Elaborar y mantener actualizado el registro escalafonario e inventario.",
    "Cumplir con los procesos técnicos de abastecimiento, contabilidad y tesorería.",
    "Ejecutar el presupuesto de la UGEL y proporcionar recursos.",
    "Proporcionar los bienes y servicios para el servicio educativo.",
  ],
}

const fallbackEmployees = [
  { id: "1", name: "Joaquín Albornoz Irribaren", position: "Jefe de la Unidad de Gestión Administrativa", image: "/Directorio/aga/Wilder-Yonel.png" },
  
]

async function getEmployeesFromDB() {
  try {
    await connectMongoDB()
    const personal = await PersonalModel.find({ area: 'aga' }).populate('foto').sort({ orden: 1 }).lean()
    if (!personal || personal.length === 0) return null
    return personal.map((p: any) => ({ id: p._id.toString(), name: p.nombre, position: p.cargo, image: p.foto?.url }))
  } catch (error) {
    console.error('Error fetching employees:', error)
    return null
  }
}

export default async function GestionAdministrativa() {
  const employees = await getEmployeesFromDB() || fallbackEmployees
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <AreaSection {...areaStaticData} employees={employees} />
      </div>
    </main>
  )
}
