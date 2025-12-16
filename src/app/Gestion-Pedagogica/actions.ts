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

        const ADMIN_URL = process.env.ADMIN_URL || 'http://localhost:3001';

        return especialistas.map((esp: any) => {
            let imageUrl = `/Directorio/agp/placeholder.png`;
            
            if (esp.foto) {
                if (esp.foto.url) {
                    imageUrl = esp.foto.url;
                } else if (esp.foto._id) {
                    imageUrl = `${ADMIN_URL}/api/media/file/${esp.foto.filename}`;
                }
            }
            
            return {
                especialista_responsable: esp.nombre,
                image: imageUrl,
                presentacion: esp.presentacion || "Especialista comprometido con el desarrollo educativo.",
                colegios: esp.colegios || [],
            };
        });
    } catch (error) {
        console.error("Error fetching especialistas:", error);
        return [];
    }
}
