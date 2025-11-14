import { AreaSection } from "../components/area-section"


const areaData = {
  areaName: "DIRECCIÓN",
  areaImage: "/Directorio/direccion/image.png",
  functions: [
    "Planificar, dirigir, evaluar y hacer cumplir las actividades asignadas al ÁREA a su cargo.",
    "Coordinar con el Área de Gestión Institucional sobre la formulación del presupuesto de Bienes y Servicios de las Instituciones Educativas y de la Sede Institucional.",
    "Revisar y firmar los informes de ejecución presupuestaria y las propuestas de modificación, los calendarios de pagos, las solicitudes de giro, la relación de retenciones, la relación de cheques acumulados, los compromisos de pagos y constancias de pago de remuneraciones.",
    "Revisar y refrendar el Cuadro de adquisiciones y de Suministro de Bienes muebles y los inventarios de los bienes inmuebles de la UGEL 308.",
    "Disponer la formulación y visar y/o firmar proyectos de Resolución sobre aspectos de carácter financieros, contables y movimientos de personal que se procesan en el Área.",
    "Verificar las conciliaciones bancarias.",
  ],
  employees: [
    {
      id: "1",
      name: "Dr. Imelda Rios Castillo",
      position: "Directora de la UGEL AMBO",
      email: "irenmar0504@gmail.com",
      linkedinUrl: "https://linkedin.com/in/carmendelpilar",
      image: "/Directorio/direccion/Imelda-Rios.png",
    },
    {
      id: "2",
      name: "Jenny Esther Camiloaga Espinoza",
      position: "Especialista Administrativo I",
      email: "juan.rodriguez@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/juanrodriguez",
      image: "/Directorio/direccion/Jenny-Esther.png",
    },
    {
      id: "3",
      name: "Karen Jackeline Suarez Lopez",
      position: "Técnico Administrativo I",
      email: "maria.garcia@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/mariagarcia",
      image: "/Directorio/direccion/Karen-Jackeline.png",
    },
    {
      id: "4",
      name: "Emperatriz Savia Cristobal Ortiz",
      position: "Imagen Institucional",
      email: "pedro.lopez@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/pedrolopez",
      image: "/Directorio/direccion/perfil.png",
    },
    {
      id: "5",
      name: "Cesar Luis Ramos Rojas",
      position: "Asesor Jurídico",
      email: "maria.garcia@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/mariagarcia",
      image: "/Directorio/direccion/Cesar-Luis.png",
    },
  ],
}

export default function Direccion() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <AreaSection {...areaData} />
      </div>
    </main>
  )
}
