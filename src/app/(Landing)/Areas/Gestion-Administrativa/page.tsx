import { AreaSection } from "../components/area-section"


const areaData = {
  areaName: "  Área de Gestión Administrativa",
  areaImage: "/Directorio/aga/yonel.png",
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
      name: "Wilder Yonel Rojas Bardales",
      position: "Jefe de la Unidad de Gestión Administrativa",
      email: "irenmar0504@gmail.com",
      linkedinUrl: "https://linkedin.com/in/carmendelpilar",
      image: "/Directorio/aga/perfil.png",
    },
    {
      id: "2",
      name: "María Eugenia Maynicta León",
      position: "Secretaria de Dirección",
      email: "juan.rodriguez@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/juanrodriguez",
      image: "/Directorio/aga/perfil.png",
    },
    {
      id: "3",
      name: "Alfredo Ostos Miraval",
      position: "Analista de Abastecimientos",
      email: "maria.garcia@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/mariagarcia",
      image: "/Directorio/aga/Alfredo-Ostos.png",
    },
    {
      id: "4",
      name: "Angelica Janeth Fuster Quispe",
      position: "Técnico Administrativo I - Patrimonio y Almacén",
      email: "pedro.lopez@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/pedrolopez",
      image: "/Directorio/aga/Angelica-Janeth.png",
    },
    {
      id: "5",
      name: "José German Sanchez Bravo",
      position: "Asistente Administrativo",
      email: "maria.garcia@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/mariagarcia",
      image: "/Directorio/aga/Jose-German.png",
    },
  ],
}

export default function GAdministrativa() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <AreaSection {...areaData} />
      </div>
    </main>
  )
}
