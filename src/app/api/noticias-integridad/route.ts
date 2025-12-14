import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodbConnection";
import NoticiaIntegridad from "@/models/NoticiaIntegridad";

export async function GET() {
    try {
        await connectMongoDB();

        const noticias = await NoticiaIntegridad.find({
            area: 'integridad',
            activo: true
        })
            .sort({ fecha: -1 })
            .limit(6);

        return NextResponse.json({
            success: true,
            data: noticias
        });
    } catch (error) {
        console.error("Error fetching noticias integridad:", error);
        return NextResponse.json(
            { success: false, error: "Error al obtener noticias" },
            { status: 500 }
        );
    }
}
