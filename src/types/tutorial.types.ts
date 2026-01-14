// Helper para extraer ID de YouTube
export function getYoutubeID(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : url;
}

// Tipos para tutoriales (compartidos entre frontend y backend)
export type CategoriaKey = "docentes" | "directivos" | "otros";

export interface Tutorial {
  _id: string;
  titulo: string;
  descripcion: string;
  youtubeUrl: string;
  categoria: CategoriaKey;
  orden?: number;
  activo?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface TutorialesApiResponse {
  success: boolean;
  data: Tutorial[];
  error?: string;
}

export const CATEGORIAS: Record<"all" | CategoriaKey, string> = {
  all: "Todos",
  docentes: "Docentes",
  directivos: "Directivos",
  otros: "Otros",
};
