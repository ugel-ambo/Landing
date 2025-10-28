import { AreaSection } from "../components/area-section"


const areaData = {
    areaName: "Planeamiento y Desarrollo Institucional",
    areaImage: "/Directorio/agi/general.png",
    functions: [
        "Difundir, orientar y supervisar !a aplicación de !a política y normatividad educativa nacional, regional en materia de gestión institucional, así como evaluar sus resultados.",
        "Formular y evaluar el proyecto educativo local y los planes educativos en coordinación con el Consejo Participativo Local de Educación.",
        "Formular con la Dirección Regional de Educación de Huánuco, la creación, ampliación, modificación, traslado, clausura de instituciones educativas de Educación Básica, públicas y privadas.",
        "Coordinar con la Dirección Regional de Educación de Huánuco, el funcionamiento de las instituciones educativas de educación superior.",
        "Formular, aplicar y avaluar los instrumentos de gestión institucional : Reglamento interno, Manual de Organización y funciones, Manual de Procedimientos y otros.",
    ],
    employees: [
        {
            id: "1",
            name: "Rider Ortega Tucto",
            position: "Jefe de la Unidad de Planeamiento y Desarrollo Institucional",
            email: "rider.ortega@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/riderortega",
            image: "/Directorio/agi/Rider-Ortega.png",
        },
        {
            id: "2",
            name: "José Luis Chávez Valerio",
            position: "Secretario Técnico",
            email: "juan.rodriguez@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/juanrodriguez",
            image: "/Directorio/agi/Jose-Luis.png",
        },
        {
            id: "3",
            name: "Yonatan Gustavo Tafur Rodriguez",
            position: "Planificador Institucional",
            email: "yonatan.tafur@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/yonatantafur",
            image: "/Directorio/agi/Yonatan-Gustavo.jpeg",
        },
        {
            id: "4",
            name: "Maryori Mishel Leon Colqui",
            position: "Coordinador de Proyectos",
            email: "maryori.leon@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/maryorileon",
            image: "/Directorio/agi/Maryori-Mishel.jpeg",
        },
        {
            id: "4",
            name: "Antonio Percy Chavez Alcantara",
            position: "Coordinador de Proyectos",
            email: "antonio.chavez@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/antoniopercy",
            image: "/Directorio/agi/Antonio-Percy.png",
        },
        {
            id: "4",
            name: "Delmer Jmes Villareal Morales",
            position: "Coordinador de Proyectos",
            email: "delmer.villareal@ugel308.edu.pe",
            linkedinUrl: "https://linkedin.com/in/delmerjmes",
            image: "/Directorio/agi/Delmer-Jmes.png",
        },
    ],
}

export default function RRHH() {
    return (
        <main className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <AreaSection {...areaData} />
            </div>
        </main>
    )
}
