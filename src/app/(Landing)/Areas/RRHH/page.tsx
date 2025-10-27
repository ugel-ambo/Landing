import { AreaSection } from "../components/area-section"


const areaData = {
    areaName: "Unidad de Gestión de Recursos Humanos",
    areaImage: "/Directorio/rrhh/general.jpeg",
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
            name: "Yudith Venturo Bravo",
            position: "Jefe de la Unidad de Gestión de Recursos Humanos",
            email: "yudith.venturo@ugel308.edu.pe",
            linkedinUrl: "https://www.linkedin.com/in/yudith-venturo-bravo-123456789/?originalSubdomain=pe",
            image: "/Directorio/rrhh/Yudith-Venturo.png",
        },
        {
            id: "2",
            name: "Ethel German Camacho Robles",
            position: "Técnico Administrativo I - Escalafón y Nexus",
            email: "nelida.albornoz@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/nelidaalbornoz",
            image: "/Directorio/rrhh/Ethel-German.png",
        },
        {
            id: "3",
            name: "Diógenes Alberto Tello Montes",
            position: "Técnico Administrativo - Constancia de Pagos y Licencias",
            email: "lyz.matos@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/lyzmatos",
            image: "/Directorio/rrhh/Diogenes-Alberto.png",
        },
        {
            id: "4",
            name: "Susan Sherly Barrantes Villanueva",
            position: "Asistente Administrativo - Planillas",
            email: "pedro.lopez@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/pedrolopez",
            image: "/Directorio/rrhh/Susan-Sherly.png",
        },
        {
            id: "5",
            name: "Erick Diaz Chaucas",
            position: "Chofer",
            email: "pedro.lopez@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/pedrolopez",
            image: "/Directorio/rrhh/perfil.png",
        },
        {
            id: "6",
            name: "Williams Martin Machaca Bravo",
            position: "Personal de Servicio 2",
            email: "pedro.lopez@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/pedrolopez",
            image: "/Directorio/rrhh/perfil.png",
        },
        {
            id: "7",
            name: "Paul Anthony Figueroa Bravo",
            position: "Abogado 2",
            email: "pedro.lopez@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/pedrolopez",
            image: "/Directorio/rrhh/Paul-Anthony.png",
        },
        {
            id: "8",
            name: "Carmen del Pilar Bustamante Panduro",
            position: "Abogado - Especialista En Procesos Administrativo Disciplinarios",
            email: "pedro.lopez@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/pedrolopez",
            image: "/Directorio/rrhh/Carmen-del-Pilar.png",
        },
        {
            id: "9",
            name: "Luz Monica Hilario Ases",
            position: "Especialista en Escalafón",
            email: "pedro.lopez@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/pedrolopez",
            image: "/Directorio/rrhh/Luz-Monica.png",
        },
        {
            id: "10",
            name: "Anderson Henry Ponce Runco",
            position: "Operador Informático",
            email: "pedro.lopez@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/pedrolopez",
            image: "/Directorio/rrhh/Anderson-Henry.png",
        },
        {
            id: "11",
            name: "Victor Hugo Valderrama Bustamante",
            position: "Apoyo Planillas",
            email: "pedro.lopez@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/pedrolopez",
            image: "/Directorio/rrhh/Victor-Hugo.png",
        },
        {
            id: "12",
            name: "Edgardo Omar Minaya Davila",
            position: "Contador I",
            email: "pedro.lopez@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/pedrolopez",
            image: "/Directorio/rrhh/perfil.png",
        },
        {
            id: "13",
            name: "Mery Maritza Palomino Chavez",
            position: "Tesorero I",
            email: "pedro.lopez@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/pedrolopez",
            image: "/Directorio/rrhh/Mery-Maritza.jpeg",
        },
        {
            id: "14",
            name: "Nicasio Richard Julca Rojas",
            position: "Especialista en Educación Secundaria Matemática",
            email: "pedro.lopez@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/pedrolopez",
            image: "/Directorio/rrhh/Nicasio-Richard.png",
        },
        {
            id: "15",
            name: "Vanessa Castro Figueredo",
            position: "Especialista en Educación Secundaria Comunicación",
            email: "pedro.lopez@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/pedrolopez",
            image: "/Directorio/rrhh/Vanessa-Castro.png",
        },
        {
            id: "16",
            name: "Maria Luisa Huerta Leandro",
            position: "Apoyo en Abastecimiento",
            email: "pedro.lopez@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/pedrolopez",
            image: "/Directorio/rrhh/Maria-Luisa.png",
        },
        {
            id: "17",
            name: "Shyrle Celestino Paredes",
            position: "Apoyo en Escalafón Y Nexus",
            email: "pedro.lopez@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/pedrolopez",
            image: "/Directorio/rrhh/Shyrle-Celestino.png",
        },
        {
            id: "18",
            name: "Hermes Gabriel Abanto Maldonado",
            position: "Especialista en Educación Secundaria Comunicación",
            email: "pedro.lopez@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/pedrolopez",
            image: "/Directorio/rrhh/Hermes-Gabriel.png",
        },
        {
            id: "19",
            name: "Luis Fernando Bejarano Asca",
            position: "Apoyo en Soporte Informático",
            email: "pedro.lopez@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/pedrolopez",
            image: "/Directorio/rrhh/Luis-Fernando.jpeg",
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
