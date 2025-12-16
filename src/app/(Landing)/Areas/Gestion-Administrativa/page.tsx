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
    image: "/Directorio/aga/yonel.png",
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
  { id: "1", name: "Wilder Yonel Rojas Bardales", position: "Jefe de la Unidad de Gestión Administrativa", image: "/Directorio/aga/Wilder-Yonel.png" },
  { id: "2", name: "María Eugenia Maynicta León", position: "Secretaria de Dirección", image: "/Directorio/aga/Maria-Eugenia.png" },
  { id: "3", name: "Alfredo Ostos Miraval", position: "Analista de Abastecimientos", image: "/Directorio/aga/Alfredo-Ostos.png" },
  { id: "4", name: "Angelica Janeth Fuster Quispe", position: "Técnico - Patrimonio y Almacén", image: "/Directorio/aga/Angelica-Janeth.png" },
  { id: "5", name: "Mery Maritza Palomino Chavez", position: "Tesorero I", image: "/Directorio/aga/Mery-Maritza.png" },
  { id: "6", name: "Edgardo Omar Minaya Davila", position: "Especialista en Contabilidad", image: "/Directorio/aga/Edgardo-Omar.png" },
  { id: "7", name: "Anderson Henry Ponce Runco", position: "Soporte Informático", image: "/Directorio/aga/Anderson-Henry.png" },
  { id: "8", name: "Erik Diaz Chaucas", position: "Chofer", image: "/Directorio/aga/Erik-Diaz.png" },
  { id: "9", name: "William Martin Machaca Bravo", position: "Personal de Servicio 2", image: "/Directorio/aga/Williams-Martin.png" },
  { id: "10", name: "Gabriela Cyntya Ambrocio Celis", position: "Especialista en Adquisiciones", image: "/Directorio/aga/Gabriela-Cyntya.png" },
  { id: "11", name: "Jhonatan Anibal Julca Garcia", position: "Soporte Informático II", image: "/Directorio/aga/Jhonatan-Anibal.png" },
  { id: "12", name: "Anggie Haily Retis Falcon", position: "Apoyo en Patrimonio", image: "/Directorio/aga/Anggie-Haily.png" },
  { id: "13", name: "Maria Luisa Huerta Leandro", position: "Apoyo en Abastecimiento", image: "/Directorio/aga/Maria-Luisa.png" },
  { id: "14", name: "Vanessa Castro Figueroa", position: "Apoyo en Patrimonio", image: "/Directorio/aga/Vanessa-Castro.png" },
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
