import { Schema, model, models } from "mongoose";

export interface ICertificado {
    _id?: string;
    codigo: string;
    titulo: string;
    nombreBeneficiario: string;
    dniBeneficiario?: string;
    fechaEmision: Date;
    descripcion?: string;
    pdfOriginalUrl?: string;
    pdfConQrUrl?: string;
    estado: 'activo' | 'anulado';
    createdAt?: Date;
    updatedAt?: Date;
}

const CertificadoSchema = new Schema<ICertificado>(
    {
        codigo: { type: String, required: true, unique: true },
        titulo: { type: String, required: true },
        nombreBeneficiario: { type: String, required: true },
        dniBeneficiario: { type: String },
        fechaEmision: { type: Date, required: true },
        descripcion: { type: String },
        pdfOriginalUrl: { type: String },
        pdfConQrUrl: { type: String },
        estado: { type: String, enum: ['activo', 'anulado'], default: 'activo' },
    },
    {
        timestamps: true,
    }
);

const Certificado = models.certificados || model<ICertificado>("certificados", CertificadoSchema);

export default Certificado;
