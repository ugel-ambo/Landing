// Tipos internos (compatibles con el modelo de Mongoose/Payload)
export interface ConvocatoriaDocumento {
  nombreArchivo: string;
  urlDrive: string;
}

export interface ConvocatoriaArchivo {
  id?: string;
  etapa: "inscripcion" | "curricular" | "entrevista" | "final" | "otros";
  documentos: ConvocatoriaDocumento[];
}

export interface Convocatoria {
  _id: string;
  nombre: string;
  estado: "vigente" | "en_proceso" | "concluido" | "cancelado";
  fechaInicioInscripcion: string;
  fechaFinInscripcion: string;
  fechaResultados?: string;
  archivos: ConvocatoriaArchivo[];
  activo: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ConvocatoriasResponse {
  convocatorias: Convocatoria[];
}

// Helpers para obtener texto y colores de estado
export function getEstadoTexto(
  estado: Convocatoria["estado"]
): string {
  const estados: Record<Convocatoria["estado"], string> = {
    vigente: "VIGENTE",
    en_proceso: "EN PROCESO",
    concluido: "CONCLUIDO",
    cancelado: "CANCELADO",
  };
  return estados[estado] || estado.toUpperCase();
}

export function getEstadoColor(estado: Convocatoria["estado"]): string {
  const colores: Record<Convocatoria["estado"], string> = {
    vigente: "bg-green-500 hover:bg-green-600",
    en_proceso: "bg-blue-500 hover:bg-blue-600",
    concluido: "bg-red-500 hover:bg-red-600",
    cancelado: "bg-gray-500 hover:bg-gray-600",
  };
  return colores[estado] || "bg-blue-500 hover:bg-blue-600";
}

// Mapeo de etapas para mostrar en UI
export const ETAPA_LABELS: Record<ConvocatoriaArchivo["etapa"], string> = {
  inscripcion: "Bases e Inscripción",
  curricular: "Evaluación Curricular",
  entrevista: "Entrevista Personal",
  final: "Resultados Finales",
  otros: "Otros Documentos",
};
