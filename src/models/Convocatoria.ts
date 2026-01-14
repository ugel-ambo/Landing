import mongoose, { Schema, Document, Model } from "mongoose";

// Interfaces para el documento de convocatoria
export interface IConvocatoriaDocumento {
  nombreArchivo: string;
  urlDrive: string;
}

export interface IConvocatoriaArchivo {
  etapa: "inscripcion" | "curricular" | "entrevista" | "final" | "otros";
  documentos: IConvocatoriaDocumento[];
}

export interface IConvocatoria extends Document {
  _id: string;
  nombre: string;
  estado: "vigente" | "en_proceso" | "concluido" | "cancelado";
  fechaInicioInscripcion: Date;
  fechaFinInscripcion: Date;
  fechaResultados?: Date;
  archivos: IConvocatoriaArchivo[];
  activo: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Schema para Mongoose (compatible con Payload CMS)
const ConvocatoriaDocumentoSchema = new Schema<IConvocatoriaDocumento>(
  {
    nombreArchivo: { type: String, required: true },
    urlDrive: { type: String, required: true },
  },
  { _id: false }
);

const ConvocatoriaArchivoSchema = new Schema<IConvocatoriaArchivo>(
  {
    etapa: {
      type: String,
      enum: ["inscripcion", "curricular", "entrevista", "final", "otros"],
      required: true,
    },
    documentos: [ConvocatoriaDocumentoSchema],
  },
  { _id: true }
);

const ConvocatoriaSchema = new Schema<IConvocatoria>(
  {
    nombre: { type: String, required: true },
    estado: {
      type: String,
      enum: ["vigente", "en_proceso", "concluido", "cancelado"],
      default: "vigente",
    },
    fechaInicioInscripcion: { type: Date, required: true },
    fechaFinInscripcion: { type: Date, required: true },
    fechaResultados: { type: Date },
    archivos: [ConvocatoriaArchivoSchema],
    activo: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// Nombre de la colección en MongoDB (debe coincidir con Payload)
const Convocatoria: Model<IConvocatoria> =
  mongoose.models.convocatorias ||
  mongoose.model<IConvocatoria>("convocatorias", ConvocatoriaSchema);

export default Convocatoria;

// Helper para formatear fechas
export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("es-PE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// Helper para obtener el texto de estado
export function getEstadoTexto(estado: IConvocatoria["estado"]): string {
  const estados: Record<IConvocatoria["estado"], string> = {
    vigente: "VIGENTE",
    en_proceso: "EN PROCESO",
    concluido: "CONCLUIDO",
    cancelado: "CANCELADO",
  };
  return estados[estado] || estado.toUpperCase();
}
