export type Colegio = {
  ubicacion: string;
  colegio: string;
  nivel_modalidad: string;
};

export type Especialista = {
  especialista_responsable: string;
  image: string;
  presentacion: string;
  colegios: Colegio[];
};

