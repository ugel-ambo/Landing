import { AreaSection } from "../(Landing)/Areas/components/area-section"
import Hero from "./hero"



const areaData = {
  areaName: "Area de Gestión Pedagógica",
  areaImage: "/Directorio/agp/general.jpeg",
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
      name: "Jaly Homar Mallqui Durand",
      position: "Jefe de la Unidad de Gestión Pedagógica",
      email: "jaly.mallqui@ugel308.edu.pe",
      linkedinUrl: "https://www.linkedin.com/in/jaly-homar-mallqui-durand-25a3a065/?originalSubdomain=pe",
      image: "/Directorio/agp/Jaly-Homar.jpeg",
    },
    {
      id: "2",
      name: "Nelida del Pilar Albornoz Julca",
      position: "Secretaria",
      email: "nelida.albornoz@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/nelidaalbornoz",
      image: "/Directorio/agp/Nelida-del-Pilar.jpg",
    },
    {
      id: "3",
      name: "Lyz Sara Matos Cristobal",
      position: "Especialista en Educación Inicial",
      email: "lyz.matos@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/lyzmatos",
      image: "/Directorio/agp/Lyz-Sara.png",
    },
    {
      id: "4",
      name: "Maria Elena Meza Fernandez",
      position: "Especialista en Educación Inicial",
      email: "pedro.lopez@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/pedrolopez",
      image: "/Directorio/agp/perfil.png",
    },
    {
      id: "5",
      name: "Almida Lopez Espiritu",
      position: "Especialista en Educación Inicial",
      email: "pedro.lopez@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/pedrolopez",
      image: "/Directorio/agp/perfil.png",
    },
    {
      id: "6",
      name: "Maglorio Ortiz Rojas",
      position: "Especialista en Educación Inicial",
      email: "pedro.lopez@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/pedrolopez",
      image: "/Directorio/agp/Maglorio-Ortiz.jpeg",
    },
    {
      id: "7",
      name: "Esther Delia Diaz Acuña",
      position: "Especialista en Educación Primaria",
      email: "pedro.lopez@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/pedrolopez",
      image: "/Directorio/agp/perfil.png",
    },
    {
      id: "8",
      name: "Marcos Antonio Arqueño Garay",
      position: "Especialista en Educación Primaria",
      email: "pedro.lopez@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/pedrolopez",
      image: "/Directorio/agp/perfil.png",
    },
    {
      id: "9",
      name: "Noel Grover Alvarez Aldava",
      position: "Especialista en Educación Primaria",
      email: "pedro.lopez@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/pedrolopez",
      image: "/Directorio/agp/Noel-Grover.png",
    },
    {
      id: "10",
      name: "Marco Antonio Paredes Munguia",
      position: "Especialista en Educación Primaria",
      email: "pedro.lopez@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/pedrolopez",
      image: "/Directorio/agp/Marco-Antonio.png",
    },
    {
      id: "11",
      name: "Carmen Paulina Gomez Godoy",
      position: "Especialista en Educación Primaria",
      email: "pedro.lopez@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/pedrolopez",
      image: "/Directorio/agp/Carmen-Paulina.png",
    },
    {
      id: "12",
      name: "Walter Máximo Rivera Tadeo",
      position: "Especialista en Educación Primaria EIB",
      email: "pedro.lopez@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/pedrolopez",
      image: "/Directorio/agp/Walter-Maximo.png",
    },
    {
      id: "13",
      name: "Julio Cesar Vicencio Romero",
      position: "Especialista en Educación Secundaria CTA",
      email: "pedro.lopez@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/pedrolopez",
      image: "/Directorio/agp/perfil.png",
    },
    {
      id: "14",
      name: "Ramon Giovanni Figueredo Oneeglio",
      position: "Especialista en Educación Secundaria Matemática",
      email: "pedro.lopez@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/pedrolopez",
      image: "/Directorio/agp/Ramon-Giovanni.png",
    },
    {
      id: "15",
      name: "Victor Raul Albornoz Flores",
      position: "Especialista en Educación Secundaria Comunicación",
      email: "pedro.lopez@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/pedrolopez",
      image: "/Directorio/agp/perfil.png",
    },
    {
      id: "16",
      name: "Beatriz Jaramillo Coz",
      position: "Coordinadora De Religión",
      email: "pedro.lopez@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/pedrolopez",
      image: "/Directorio/agp/Beatriz-Jaramillo.png",
    },
    {
      id: "17",
      name: "Paolo Roberto zevallos Leon",
      position: "Especialista en Convivencia Escolar",
      email: "pedro.lopez@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/pedrolopez",
      image: "/Directorio/agp/Paolo-Roberto.png",
    },
    {
      id: "18",
      name: "Yasmin Beatriz Salvador Saldivar",
      position: "Itinerantes",
      email: "pedro.lopez@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/pedrolopez",
      image: "/Directorio/agp/Yasmin-Beatriz.png",
    },
    {
      id: "19",
      name: "Meliza Mercedes Verde Zevallos",
      position: "Itinerantes",
      email: "pedro.lopez@ugel308.edu.pe",
      linkedinUrl: "https://linkedin.com/in/pedrolopez",
      image: "/Directorio/agp/Meliza-Mercedes.png",
    },

  ],
}

function RRHH() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <Hero />
      <AreaSection {...areaData} />
      </div>
    </main>
  )
}

export default function GP() {
  return (
    <Hero />
  )
}
