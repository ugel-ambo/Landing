export interface InstitucionEducativa {
  id: string;
  nombre: string;
  descripcion?: string;
  enlace: string;
  tipo?: "facebook" | "web";
}

export const INSTITUCIONES_EDUCATIVAS: InstitucionEducativa[] = [
  {
    id: "juan-jose-crespo-castillo",
    nombre: "I.E. Juan José Crespo y Castillo",
    descripcion: "",
    enlace: "https://web.facebook.com/juanjose.crespocastillo.50?_rdc=1&_rdr#",
    tipo: "facebook",
  },
  {
    id: "ricardo-florez-gutierrez",
    nombre: "I.E. Ricardo Flórez Gutiérrez",
    descripcion: "",
    enlace: "https://web.facebook.com/profile.php?id=61556284379162&_rdc=1&_rdr#",
    tipo: "facebook",
  },
  {
    id: "gregorio-cartegena",
    nombre: "I.E. Gregorio Cartagena",
    descripcion: "",
    enlace: "https://web.facebook.com/profile.php?id=61577651150853&_rdc=1&_rdr#",
    tipo: "facebook",
  },
  {
    id: "julio-benavides-sanguinetti",
    nombre: "I.E. Julio Benavides Sanguinetti",
    descripcion: "",
    enlace: "https://web.facebook.com/iejuliobenavidessanguinetti?_rdc=1&_rdr#",
    tipo: "facebook",
  },

];
