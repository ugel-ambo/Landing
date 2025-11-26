import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodbConnection";
import Fortalecimiento from "@/models/Fortalecimiento";

export async function GET() {
    try {
        await connectMongoDB();

        const dummyData = [
            {
                titulo: "Curso de Estrategias Didácticas para Inicial",
                descripcion: "Aprende nuevas metodologías para la enseñanza en el nivel inicial, enfocadas en el juego y la exploración.",
                fecha: "2024-05-15",
                area: "inicial",
                tipo: "Curso",
                linkRecursos: "https://example.com/materiales-inicial"
            },
            {
                titulo: "Charla: Importancia del Juego Simbólico",
                descripcion: "Conversatorio sobre cómo el juego simbólico ayuda al desarrollo cognitivo y emocional de los niños.",
                fecha: "2024-06-10",
                area: "inicial",
                tipo: "Charla",
                linkRecursos: "https://example.com/charla-juego"
            },
            {
                titulo: "Taller de Evaluación Formativa en Primaria",
                descripcion: "Herramientas prácticas para implementar la evaluación formativa en el aula de primaria.",
                fecha: "2024-05-20",
                area: "primaria",
                tipo: "Curso",
                linkRecursos: "https://example.com/taller-primaria"
            },
            {
                titulo: "Seminario: Uso de TICs en Secundaria",
                descripcion: "Integración de tecnologías de la información en las sesiones de aprendizaje para nivel secundaria.",
                fecha: "2024-06-05",
                area: "secundaria",
                tipo: "Charla",
                linkRecursos: "https://example.com/seminario-tics"
            },
            {
                titulo: "Capacitación para Docentes PRONOI",
                descripcion: "Estrategias de atención comunitaria y trabajo con familias en programas no escolarizados.",
                fecha: "2024-05-25",
                area: "pronoi",
                tipo: "Curso",
                linkRecursos: "https://example.com/capacitacion-pronoi"
            },
            {
                titulo: "Andragogía: Estrategias para CEBA",
                descripcion: "Métodos de enseñanza para jóvenes y adultos en la educación básica alternativa.",
                fecha: "2024-06-15",
                area: "ceba",
                tipo: "Curso",
                linkRecursos: "https://example.com/andragogia-ceba"
            }
        ];

        // Clear existing data to avoid duplicates on multiple runs
        await Fortalecimiento.deleteMany({});

        await Fortalecimiento.insertMany(dummyData);

        return NextResponse.json({ message: "Datos de fortalecimiento sembrados correctamente" });
    } catch (error) {
        console.error("Error seeding data:", error);
        return NextResponse.json({ error: "Error seeding data" }, { status: 500 });
    }
}
