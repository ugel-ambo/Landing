"use server";

import connectMongoDB from "@/lib/mongodbConnection";
import Fortalecimiento from "@/models/Fortalecimiento";
import { EspecialistaModel, MediaModel } from "@/models/Especialista";
void MediaModel;

export async function getFortalecimientos(area: string) {
    try {
        await connectMongoDB();
        const fortalecimientos = await Fortalecimiento.find({ area }).sort({ fecha: -1 }).lean();

        return JSON.parse(JSON.stringify(fortalecimientos));
    } catch (error) {
        console.error("Error fetching fortalecimientos:", error);
        return [];
    }
}

export async function getEspecialistas(nivel: string) {
    try {
        await connectMongoDB();
        const especialistas = await EspecialistaModel.find({ nivel })
            .populate('foto')
            .lean();

        return especialistas.map((esp: any) => ({
            especialista_responsable: esp.nombre,
            image: esp.foto?.url || `/Directorio/agp/placeholder.png`,
            presentacion: esp.presentacion || "Especialista comprometido con el desarrollo educativo.",
            colegios: esp.colegios || [],
        }));
    } catch (error) {
        console.error("Error fetching especialistas:", error);
        return [];
    }
}
