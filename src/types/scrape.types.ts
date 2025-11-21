export interface NormaLegal {
    categoria: string;
    titulo: string;
    tituloUrl: string;
    fecha: string;
    descripcion: string;
    imagenPortada: string;
    descargaIndividual: string;
    descargaCuadernillo: string;
}

export interface ScrapingCache {
    data: NormaLegal[];
    lastUpdated: string;
    nextUpdate: string;
}

export interface ScrapingResponse {
    success: boolean;
    data: NormaLegal[];
    cached: boolean;
    lastUpdated: string;
    nextUpdate: string;
    error?: string;
}
