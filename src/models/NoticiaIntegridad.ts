import { Schema, model, models } from "mongoose";

export interface INoticiaIntegridad {
    _id?: string;
    titulo: string;
    descripcion: string;
    fecha: Date;
    imagen?: string;
    area: 'integridad' | 'general'; // Extensible para futuras áreas
    activo: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

const NoticiaIntegridadSchema = new Schema<INoticiaIntegridad>(
    {
        titulo: { type: String, required: true },
        descripcion: { type: String, required: true },
        fecha: { type: Date, required: true },
        imagen: { type: String },
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
