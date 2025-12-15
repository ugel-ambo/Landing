import { Schema, model, models, Types } from "mongoose";

// Interface para el objeto Media de Cloudinary
export interface IMediaImage {
    _id?: string;
    alt: string;
    url: string;
    cloudinaryPublicId?: string;
    width?: number;
    height?: number;
    mimeType?: string;
    filesize?: number;
    filename?: string;
}

export interface INoticiaIntegridad {
    _id?: string;
    titulo: string;
    descripcion: string;
    fecha: Date;
    imagen?: string | Types.ObjectId | IMediaImage; // Puede ser string (legacy), ObjectId o objeto poblado
    area: 'integridad' | 'general';
    activo: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

const NoticiaIntegridadSchema = new Schema<INoticiaIntegridad>(
    {
        titulo: { type: String, required: true },
        descripcion: { type: String, required: true },
        fecha: { type: Date, required: true },
        imagen: { 
            type: Schema.Types.Mixed, // Acepta tanto string como ObjectId para compatibilidad
        },
        area: {
            type: String,
            required: true,
            enum: ['integridad', 'general'],
            default: 'integridad'
        },
        activo: { type: Boolean, default: true },
    },
    {
        timestamps: true,
    }
);

const NoticiaIntegridad = models.NoticiaIntegridad || model<INoticiaIntegridad>("NoticiaIntegridad", NoticiaIntegridadSchema);

export default NoticiaIntegridad;

// Helper para obtener la URL de imagen de forma segura
export function getImageUrl(imagen: string | Types.ObjectId | IMediaImage | null | undefined): string {
    if (!imagen) return '/Logo1.jpg';
    
    // Si es un string (URL legacy o directa)
    if (typeof imagen === 'string') {
        return imagen;
    }
    
    // Si es un objeto con URL (imagen poblada desde Media)
    if (typeof imagen === 'object' && 'url' in imagen && imagen.url) {
        return imagen.url;
    }
    
    // Valor por defecto
    return '/Logo.jpg';
}
