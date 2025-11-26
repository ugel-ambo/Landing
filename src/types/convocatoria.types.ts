export interface ConvocatoriaArchivo {
    nom_archivo: string;
    url_archivo: string;
}

export interface ConvocatoriaDetalle {
    inscripcion?: ConvocatoriaArchivo[];
    curricular?: ConvocatoriaArchivo[];
    entrevista?: ConvocatoriaArchivo[];
    final?: ConvocatoriaArchivo[];
    [key: string]: ConvocatoriaArchivo[] | undefined;
}

export interface Convocatoria {
    idproceso: number;
    nom_proceso: string;
    ini_insc: string;
    color_fondo: string;
    span: string;
    texto: string;
    fin_insc: string;
    fecha_res: string;
    detalle: ConvocatoriaDetalle;
}

export interface ConvocatoriasResponse {
    convocatorias: Convocatoria[];
}
