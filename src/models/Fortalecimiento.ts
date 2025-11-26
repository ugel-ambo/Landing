import { Schema, model, models } from "mongoose";

export interface IFortalecimiento {
    titulo: string;
    descripcion?: string;
    fecha: string;
    area: 'inicial' | 'primaria' | 'secundaria' | 'pronoi' | 'ceba';
    linkRecursos?: string;
    tipo: string; // 'Curso', 'Charla', etc.
    createdAt?: Date;
    updatedAt?: Date;
}

const FortalecimientoSchema = new Schema<IFortalecimiento>(
    {
        titulo: { type: String, required: true },
        descripcion: { type: String },
        fecha: { type: String, required: true },
        area: {
            type: String,
            required: true,
            enum: ['inicial', 'primaria', 'secundaria', 'pronoi', 'ceba']
        },
        linkRecursos: { type: String },
        tipo: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Fortalecimiento = models.Fortalecimiento || model<IFortalecimiento>("Fortalecimiento", FortalecimientoSchema);

export default Fortalecimiento;
