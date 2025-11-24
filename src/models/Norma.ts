import { Schema, model, models } from "mongoose";
import { NormaLegal } from "@/types/scrape.types";

const NormaSchema = new Schema<NormaLegal>(
    {
        categoria: { type: String, required: true },
        titulo: { type: String, required: true },
        tituloUrl: { type: String, required: true, unique: true },
        fecha: { type: String, required: true },
        descripcion: { type: String },
        imagenPortada: { type: String },
        descargaIndividual: { type: String },
        descargaCuadernillo: { type: String },
    },
    {
        timestamps: true,
    }
);

const Norma = models.Norma || model<NormaLegal>("Norma", NormaSchema);

export default Norma;
