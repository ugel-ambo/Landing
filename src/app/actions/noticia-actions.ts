'use server'

import connectMongoDB from "@/lib/mongodbConnection";
import NoticiaModal from "@/models/NoticiaModal";
import Media from "@/models/Media";
void Media;

export async function getNoticiasModal() {
    try {
        await connectMongoDB();
        
        const noticias = await NoticiaModal.find({ activo: true })
            .populate('imagen')
            .sort({ orden: 1 })
            .lean();

        return noticias.map((n: any) => ({
            src: n.imagen?.url || "/modal/noticia.jpg",
            alt: n.titulo || "Noticia importante"
        }));
    } catch (error) {
        console.error("Error fetching noticias modal:", error);
        return [];
    }
}
