import { AreaSection } from "../components/area-section"
import connectMongoDB from "@/lib/mongodbConnection"
import { PersonalModel } from "@/models/Personal"

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const areaStaticData = {
  hero: {
    badge: "Gestión estratégica",
    title: "Dirección de la UGEL Ambo",
    subtitle: "Conducción institucional y articulación territorial",
    description:
      "Lideramos la planificación, supervisión y acompañamiento de todas las áreas de la UGEL para asegurar una gestión eficiente, transparente y cercana a la comunidad educativa.",
    image: "/Directorio/direccion/herodireccion.jpeg",
  },
  functionsIntro:
    "Aseguramos la conducción administrativa, presupuestal y operativa de la UGEL en coordinación permanente con cada unidad orgánica.",
  teamIntro: "Nuestro equipo directivo coordina estrategias y brinda soporte a toda la provincia de Ambo.",
  functions: [
    "Formular y contribuir en los lineamientos de la politica educativa y asistir a la formulación de la politica educativa local",
    "Aplicar y concertar la aplicación de la normatividad educativa local. nacional y emitir normas complementarias",
    "Conducir la formulación, ejecución y evaluación del Proyecto Educativo Local y los Planes Operativos Anuales, en concordancia con el Consejo Participativo Local (COPALE).",
    "Impulsar el proceso de descentralización de la gestión en las instituciones educativas, fortaleciendo su autonomía y participación.",
    "Delinear estrategias para disminuir el analfabetismo y promover la ejecucion de los programas estratégicos multisectoriales.",
    "Identificar necesidades de capacitación de personal de la Sede y las instituciones educativas y desarrollar programas de formación continua.",
    "Suscribir convenios, contratos y acuerdos con entidades públicas y privadas, nacionales e internacionales, encaminadas a mejorar la calidad de la educación.",
    "Impulsar el funcionamiento del Consejo Participativo Local de Educación en coordinación con el gobierno local.",
    "Orientar la formulación, ejecución y evaluación del presupuesto participativo de la sede institucional.",
    "Evaluar la gestión educativa de su ámbito adoptando las acciones preventivas y correctivas pertinentes.",
    "Asesorar y asegurar que las Instituciones Educativas cuenten con su PEI, PAT, RI e Informe Ejecutivo de Gestión Anual."
  ],
}

// Datos de fallback (cuando no hay datos en BD)
const fallbackEmployees = [
  { id: "1", name: "Dr. Hugo Eduardo Palomino Estaban", position: "Directora de la UGEL Ambo", image: "/Directorio/direccion/Hugo" },
 
]

async function getEmployeesFromDB() {
  try {
    await connectMongoDB()
    
    const personal = await PersonalModel.find({ area: 'direccion' })
      .populate('foto')
      .sort({ orden: 1 })
      .lean()
    
    if (!personal || personal.length === 0) {
      return null
    }
    
    return personal.map((p: any) => ({
      id: p._id.toString(),
      name: p.nombre,
      position: p.cargo,
      image: p.foto?.url || undefined,
    }))
  } catch (error) {
    console.error('Error fetching employees:', error)
    return null
  }
}

export default async function Direccion() {
  const employees = await getEmployeesFromDB() || fallbackEmployees

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <AreaSection {...areaStaticData} employees={employees} />
      </div>
    </main>
  )
}
