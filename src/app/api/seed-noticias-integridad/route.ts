import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodbConnection";
import NoticiaIntegridad from "@/models/NoticiaIntegridad";

export async function GET() {
    try {
        await connectMongoDB();

        const noticiasData = [
            {
                titulo: "Capacitación en Ética Pública para Servidores",
                descripcion: "Se llevó a cabo la capacitación sobre el Código de Ética de la Función Pública dirigida a todos los servidores de la UGEL Ambo, fortaleciendo los valores de integridad y transparencia en la gestión.",
                fecha: new Date("2024-12-01"),
                imagen: "/Logo1.jpg",
                area: "integridad",
                activo: true
            },
            {
                titulo: "Implementación del Canal de Denuncias",
                descripcion: "La UGEL Ambo pone en funcionamiento el canal de denuncias confidencial para reportar actos de corrupción. Los ciudadanos pueden realizar sus denuncias de manera segura y anónima.",
                fecha: new Date("2024-11-15"),
                imagen: "/Logo1.jpg",
                area: "integridad",
                activo: true
            },
            {
                titulo: "Firma del Pacto de Integridad",
                descripcion: "Autoridades y funcionarios de la UGEL Ambo suscribieron el Pacto de Integridad, comprometiéndose a actuar con transparencia, honestidad y en estricto cumplimiento de la normatividad vigente.",
                fecha: new Date("2024-11-01"),
                imagen: "/Logo1.jpg",
                area: "integridad",
                activo: true
            },
            {
                titulo: "Jornada de Sensibilización Anticorrupción",
                descripcion: "Se desarrolló la jornada de sensibilización sobre la lucha contra la corrupción dirigida a directores de instituciones educativas de la provincia de Ambo.",
                fecha: new Date("2024-10-20"),
                imagen: "/Logo1.jpg",
                area: "integridad",
                activo: true
            },
            {
                titulo: "Publicación del Plan de Integridad 2024",
                descripcion: "La UGEL Ambo hace pública su Plan de Integridad y Lucha contra la Corrupción para el año 2024, estableciendo las líneas de acción y compromisos institucionales.",
                fecha: new Date("2024-10-05"),
                imagen: "/Logo1.jpg",
                area: "integridad",
                activo: true
            },
            {
                titulo: "Conformación del Comité de Integridad",
                descripcion: "Se conformó oficialmente el Comité de Integridad de la UGEL Ambo, integrado por representantes de las diferentes áreas, con el objetivo de promover la cultura de integridad institucional.",
                fecha: new Date("2024-09-15"),
                imagen: "/Logo1.jpg",
                area: "integridad",
                activo: true
            }
        ];

        // Limpiar datos existentes para evitar duplicados
        await NoticiaIntegridad.deleteMany({ area: "integridad" });

        await NoticiaIntegridad.insertMany(noticiasData);

        return NextResponse.json({
            success: true,
            message: "Noticias de integridad sembradas correctamente",
            count: noticiasData.length
        });
    } catch (error) {
        console.error("Error seeding noticias integridad:", error);
        return NextResponse.json(
            { success: false, error: "Error al sembrar datos" },
            { status: 500 }
        );
    }
}
