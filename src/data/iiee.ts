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
  {
    id: "antonio-brack-egg",
    nombre: "I.E. Antonio Brack Egg",
    enlace: "https://www.facebook.com/profile.php?id=100060474985605",
    tipo: "facebook",
  },
  {
    id: "luisa-maria-cuculiza-33388",
    nombre: "I.E. N.° 33388 Luisa María Cuculiza",
    enlace: "https://www.facebook.com/share/1Ep7BordnB/",
    tipo: "facebook",
  },
  {
    id: "everardo-zevallos-avila-estancia-pata",
    nombre: "I.E. Everardo Zevallos Avila Estancia Pata",
    enlace: "https://www.facebook.com/people/Everardo-Zevallos-Avila-Estancia-Pata/pfbid02iJRDV16FcQNA8QgYJr2GeWpBaVraYtSnKkzi12YHmXdKLUD8h4hkBLtQGeaJMzYLl/",
    tipo: "facebook",
  },
];

export const MAX_PLANCK_ENLACES = [
  { nombre: "Facebook", enlace: "https://www.facebook.com/share/1DFwLYSrFL/", tipo: "facebook" },
  { nombre: "Página web", enlace: "https://iestpmaxplanck.edu.pe/", tipo: "web" },
] as const;
