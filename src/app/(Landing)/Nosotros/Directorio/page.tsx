"use client";
import * as React from "react";
import { Search, X, Building2, Users, ArrowUpRight, SlidersHorizontal } from "lucide-react";

function GmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path fill="#4285F4" d="M1.5 6.2v12.3c0 .8.7 1.5 1.5 1.5h2.7V9.7z" />
      <path fill="#34A853" d="M18.3 9.7V20H21c.8 0 1.5-.7 1.5-1.5V6.2z" />
      <path fill="#EA4335" d="M5.7 9.7V4.3L12 9l6.3-4.7v5.4L12 14.4z" />
      <path fill="#C5221F" d="M1.5 6.2V5.4c0-1.2 1.4-1.9 2.4-1.2l1.8 1.3v4.2z" />
      <path fill="#FBBC04" d="M18.3 5.5l1.8-1.3c1-.7 2.4 0 2.4 1.2v.8l-4.2 3.5z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="#25D366" aria-hidden="true">
      <path d="M12.04 2a9.94 9.94 0 0 0-8.6 14.94L2 22l5.2-1.37A9.98 9.98 0 1 0 12.04 2Zm0 18.25a8.3 8.3 0 0 1-4.24-1.16l-.3-.18-3.08.81.82-3-.2-.31a8.27 8.27 0 1 1 7 3.84Zm4.54-6.2c-.25-.12-1.47-.72-1.7-.8-.22-.09-.38-.13-.55.12-.16.25-.64.8-.78.97-.15.16-.3.18-.55.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.14-.24-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.55-1.35-.75-1.85-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.23.25-.87.85-.87 2.07s.9 2.39 1.02 2.55c.12.17 1.77 2.7 4.3 3.8.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.47-.29Z" />
    </svg>
  );
}

// ============================================
// 📊 DATOS DEL DIRECTORIO - UGEL AMBO 2026
// ============================================
interface DirectorioItem {
  id: string;
  nombre: string;
  cargo: string;
  area: string;
  email?: string;
  telefono?: string;
  orden?: number;
}

const directorioData: DirectorioItem[] = [
  // ==================== UNIDAD DE DIRECCIÓN (UD) ====================
  {
    id: "1",
    nombre: "Palomino Esteban, Hugo Eduardo",
    cargo: "Director de UGEL",
    area: "UD",
    email: "hugodrehco1@gmail.com",
    telefono: "962600002",
    orden: 1,
  },
  {
    id: "2",
    nombre: "Suarez Lopez, Karen Jackeline",
    cargo: "Técnico Administrativo I – Trámite Documentario",
    area: "UD",
    email: "karen1_2@hotmail.com",
    telefono: "985675850",
    orden: 2,
  },
  {
    id: "3",
    nombre: "Camiloaga Espinoza, Jenny Esther",
    cargo: "Especialista Administrativo I – Archivo",
    area: "UD",
    email: "jennycaes24@gmail.com",
    telefono: "962828292",
    orden: 3,
  },
  {
    id: "4",
    nombre: "Maynicta León, María Eugenia",
    cargo: "Secretaria I – UD",
    area: "UD",
    email: "mariaeug28@hotmail.com",
    telefono: "931561985",
    orden: 4,
  },
  {
    id: "5",
    nombre: "Ramos Rojas, Cesar Luis",
    cargo: "Asesor Jurídico",
    area: "UD",
    email: "bienesraicespop23@hotmail.com",
    telefono: "954961080",
    orden: 5,
  },
  {
    id: "6",
    nombre: "Torres Santos, Dimas",
    cargo: "Apoyo en Archivo",
    area: "UD",
    email: "dimastorressantos5@gmail.com",
    telefono: "910893080",
    orden: 6,
  },
  {
    id: "7",
    nombre: "Cristobal Ortiz, Emperatriz Savi",
    cargo: "Especialista en Imagen",
    area: "UD",
    email: "crismperatriz@gmail.com",
    telefono: "935462408",
    orden: 7,
  },
  {
    id: "59",
    nombre: "Solis Jimenez, Paolo Domingo",
    cargo: "Practicante – Asistente en Dirección (UD)",
    area: "UD",
    email: "jimenezzlawyer@gmail.com",
    telefono: "955079456",
    orden: 8,
  },

  // ==================== UNIDAD DE GESTIÓN ADMINISTRATIVA (UGA) ====================
  {
    id: "8",
    nombre: "Albornoz Irribarren, Joaquin",
    cargo: "Director del Sistema Administrativo III – UGA",
    area: "UGA",
    email: "albornozirribarrenj21@gmail.com",
    telefono: "996538694",
    orden: 9,
  },
  {
    id: "9",
    nombre: "Ostos Miraval, Alfredo",
    cargo: "Analista de Abastecimientos",
    area: "UGA",
    email: "alosmi@hotmail.com",
    telefono: "962677916",
    orden: 10,
  },
  {
    id: "10",
    nombre: "Albornoz Soto, Katterine Vanessa",
    cargo: "Tesorero I",
    area: "UGA",
    email: "albornozsotok@gmail.com",
    telefono: "967020995",
    orden: 11,
  },
  {
    id: "11",
    nombre: "Herrera Caballero, Liliam Cindy",
    cargo: "Contadora I",
    area: "UGA",
    email: "lili22891@hotmail.com",
    telefono: "962744871",
    orden: 12,
  },
  {
    id: "12",
    nombre: "Fuster Quispe, Angelica Janeth",
    cargo: "Técnico Administrativo I – Patrimonio y Almacén",
    area: "UGA",
    email: "fuster100@hotmail.com",
    telefono: "956910290",
    orden: 13,
  },
  {
    id: "13",
    nombre: "Diaz Chauca, Erick",
    cargo: "Chofer",
    area: "UGA",
    telefono: "958593695",
    orden: 14,
  },
  {
    id: "14",
    nombre: "Machaca Bravo, Williams Martin",
    cargo: "Personal de Servicio 2",
    area: "UGA",
    telefono: "959288055",
    orden: 15,
  },
  {
    id: "15",
    nombre: "Trinidad Jaco, Ruben Josué",
    cargo: "Especialista Administrativo en Abastecimientos",
    area: "UGA",
    email: "joue7_1995@hotmail.com",
    telefono: "912910919",
    orden: 16,
  },
  {
    id: "16",
    nombre: "Mendoza Salazar, Wilden Elmer",
    cargo: "Vigilante Sede UGEL",
    area: "UGA",
    orden: 17,
  },
  // --- CAS UGA ---
  {
    id: "77",
    nombre: "Chavez Valario, Jose Luis",
    cargo: "Secretario UGA",
    area: "UGA",
    telefono: "995421731",
    orden: 18,
  },
  // --- Practicantes UGA ---
  {
    id: "64",
    nombre: "Lazaro Barrera, Hayle Josep",
    cargo: "Practicante – Apoyo en Abastecimiento (UGA)",
    area: "UGA",
    email: "hayle1910@gmail.com",
    telefono: "926680237",
    orden: 19,
  },
  {
    id: "65",
    nombre: "Palacin Tello, Carlos David",
    cargo: "Practicante – Asistente de Almacén (UGA)",
    area: "UGA",
    email: "tellocd09@gmail.com",
    telefono: "965701075",
    orden: 20,
  },
  {
    id: "66",
    nombre: "Retis Falcon, Anggie Hayli",
    cargo: "Practicante – Asistente en Contabilidad (UGA)",
    area: "UGA",
    email: "anggieretisfalcon@gmail.com",
    telefono: "913270027",
    orden: 21,
  },
  {
    id: "72",
    nombre: "Diaz Torres, Guiseupe Andreuw",
    cargo: "Practicante – Asistente en Control Interno (UGA)",
    area: "UGA",
    email: "andreuwdiaz23@gmail.com",
    telefono: "999782929",
    orden: 22,
  },
  {
    id: "73",
    nombre: "Yapias Ayala, Susana Victoria",
    cargo: "Practicante – Asistente en Secretaría (UGA)",
    area: "UGA",
    email: "vikyapias@gmail.com",
    telefono: "919468839",
    orden: 23,
  },

  // ==================== UNIDAD DE RECURSOS HUMANOS (UGRH) ====================
  {
    id: "17",
    nombre: "Zambrano Luycho, Matias",
    cargo: "Director del Sistema Administrativo III – UGRH",
    area: "UGRH",
    email: "matiaszam16@gmail.com",
    telefono: "931438414",
    orden: 24,
  },
  {
    id: "18",
    nombre: "Sanchez Bravo, José German",
    cargo: "Asistente Administrativo",
    area: "UGRH",
    email: "josebe17@hotmail.com",
    telefono: "942081511",
    orden: 25,
  },
  {
    id: "19",
    nombre: "Camacho Robles, Ethel German",
    cargo: "Apoyo Escalafón",
    area: "UGRH",
    email: "xtzyamaha@hotmail.com",
    telefono: "962676665",
    orden: 26,
  },
  {
    id: "20",
    nombre: "Tello Montes, Diógenes Alberto",
    cargo: "Técnico Administrativo – Constancia de Pagos y Licencias",
    area: "UGRH",
    email: "d.tellomontes@gmail.com",
    telefono: "950482663",
    orden: 27,
  },
  {
    id: "21",
    nombre: "Mejia Silvestre, Cristian Brandon",
    cargo: "Especialista AIRSH",
    area: "UGRH",
    email: "brandonmeji@gmail.com",
    orden: 28,
  },
  {
    id: "22",
    nombre: "Barrantes Villanueva, Susan Sherly",
    cargo: "Especialista NEXUS",
    area: "UGRH",
    email: "sherly1991@hotmail.com",
    telefono: "938179484",
    orden: 29,
  },
  {
    id: "23",
    nombre: "Torres Perez, Sedrik Joau",
    cargo: "Especialista en Gestión de Procedimientos Administrativos Disciplinarios (CPPADD y PAD)",
    area: "UGRH",
    email: "sedriktorres2@gmail.com",
    telefono: "910149606",
    orden: 30,
  },
  // --- CAS UGRH ---
  {
    id: "62",
    nombre: "Poma Chávez, Mirla",
    cargo: "Analista Secretaria",
    area: "UGRH",
    email: "mirlapomach@gmail.com",
    telefono: "979219015",
    orden: 31,
  },
  // --- Practicantes UGRH ---
  {
    id: "70",
    nombre: "Fano Mendoza, Cristina Alesandra",
    cargo: "Practicante – Asistente en Recursos Humanos (UGRH)",
    area: "UGRH",
    email: "crisfano29@gmail.com",
    telefono: "981169331",
    orden: 32,
  },
  {
    id: "71",
    nombre: "Urbano Niño, Luis Arturo",
    cargo: "Practicante – Asistente en Planillas (UGRH)",
    area: "UGRH",
    email: "luisarturourbanonino@gmail.com",
    telefono: "918495679",
    orden: 33,
  },
  {
    id: "74",
    nombre: "Florez Diaz, Stevens Golfer",
    cargo: "Practicante – Apoyo en Planillas (UGRH)",
    area: "UGRH",
    email: "FLORESDIAZSTEVENSGOLFER@GMAIL.COM",
    telefono: "901991596",
    orden: 34,
  },
  {
    id: "78",
    nombre: "Chavez Ariza, Britany Jomira",
    cargo: "Practicante – Apoyo Administrativo (UGRH)",
    area: "UGRH",
    email: "jomira.chavez@gmail.com",
    telefono: "917248254",
    orden: 35,
  },

  // ==================== UNIDAD DE GESTIÓN PEDAGÓGICA (UGP) ====================
  {
    id: "24",
    nombre: "Mallqui Durand, Jaly H.",
    cargo: "Jefe del Área de Gestión Pedagógica",
    area: "UGP",
    email: "mallqui.durand@ug.uchile.cl",
    telefono: "971296226",
    orden: 36,
  },
  {
    id: "25",
    nombre: "Sanchez Paniagua, Ana Gabriel",
    cargo: "Secretaria I – UGP",
    area: "UGP",
    email: "anitasanchez18.asp@gmail.com",
    telefono: "931079893",
    orden: 37,
  },
  {
    id: "26",
    nombre: "Matos Cristobal, Lyz Sara",
    cargo: "Especialista de Inicial",
    area: "UGP",
    email: "lyzmatoscristobal@gmail.com",
    telefono: "969128840",
    orden: 38,
  },
  {
    id: "27",
    nombre: "Meza Fernandez, Maria Elena",
    cargo: "Especialista de Inicial",
    area: "UGP",
    email: "elena_amada@hotmail.com",
    telefono: "965605966",
    orden: 39,
  },
  {
    id: "28",
    nombre: "Mejia Huaranga, Leydi Edith",
    cargo: "Especialista de Inicial",
    area: "UGP",
    email: "leydimejiahuaranga176@gmail.com",
    telefono: "993717726",
    orden: 40,
  },
  {
    id: "29",
    nombre: "Diaz Acuña, Esther Delia",
    cargo: "Especialista de Primaria",
    area: "UGP",
    email: "estherdelia.diaz1234@gmail.com",
    telefono: "990000117",
    orden: 41,
  },
  {
    id: "30",
    nombre: "Olaza Albornoz, Meneses Javier",
    cargo: "Especialista de Primaria",
    area: "UGP",
    email: "javierolazaalbornoz@gmail.com",
    telefono: "956042529",
    orden: 42,
  },
  {
    id: "31",
    nombre: "Alvarez Aldava, Noel Grover",
    cargo: "Especialista de Primaria",
    area: "UGP",
    email: "noelito_53@hotmail.com",
    telefono: "982181934",
    orden: 43,
  },
  {
    id: "32",
    nombre: "Paredes Munguia, Marco Antonio",
    cargo: "Especialista de Primaria",
    area: "UGP",
    email: "mapamun125@gmail.com",
    telefono: "917776307",
    orden: 44,
  },
  {
    id: "33",
    nombre: "Munguia Fuentes, Francisca",
    cargo: "Especialista de Primaria",
    area: "UGP",
    email: "panchi_40@hotmail.com",
    telefono: "987556648",
    orden: 45,
  },
  {
    id: "34",
    nombre: "Rivera Tadeo, Walter Máximo",
    cargo: "Especialista de Primaria EIB",
    area: "UGP",
    email: "waltermaximo2010@hotmail.com",
    telefono: "943765016",
    orden: 46,
  },
  {
    id: "35",
    nombre: "Vicencio Romero, Julio Cesar",
    cargo: "Especialista de Secundaria – CTA",
    area: "UGP",
    email: "jcvicencior@hotmail.com",
    telefono: "990269911",
    orden: 47,
  },
  {
    id: "36",
    nombre: "Figueredo Oneeglio, Ramon Giovanni",
    cargo: "Especialista de Secundaria – Matemática",
    area: "UGP",
    email: "rafo_671102@hotmail.com",
    telefono: "975163287",
    orden: 48,
  },
  {
    id: "37",
    nombre: "Albornoz Flores, Victor Raul",
    cargo: "Especialista de Comunicación",
    area: "UGP",
    email: "elosado.vraf@hotmail.com",
    telefono: "954224611",
    orden: 49,
  },
  {
    id: "38",
    nombre: "Zevallos Leon, Paolo Roberto",
    cargo: "Especialista en Convivencia Escolar",
    area: "UGP",
    email: "paoloz65@gmail.com",
    telefono: "931240226",
    orden: 50,
  },
  {
    id: "39",
    nombre: "Jaramillo Coz, Beatriz",
    cargo: "Coordinadora de Religión",
    area: "UGP",
    email: "d22489114j@perueduca.edu.pe",
    telefono: "988800474",
    orden: 51,
  },
  {
    id: "40",
    nombre: "Leon Colqui, Maryori Mishel",
    cargo: "Profesional III del Equipo Itinerante de Convivencia Escolar",
    area: "UGP",
    email: "colquimishel9@gmail.com",
    telefono: "956229167",
    orden: 52,
  },
  {
    id: "41",
    nombre: "Salvador Saldivar, Yasmine Beatriz",
    cargo: "Profesional III del Equipo Itinerante de Convivencia Escolar",
    area: "UGP",
    email: "jasmin.betriz@gmail.com",
    telefono: "924990819",
    orden: 53,
  },
  {
    id: "42",
    nombre: "Culantes Blas, Liz",
    cargo: "Coordinadora PRONOEI",
    area: "UGP",
    email: "mishel-ic@hotmail.com",
    telefono: "960087425",
    orden: 54,
  },
  {
    id: "43",
    nombre: "Patricio Diaz, Madeleyne",
    cargo: "Coordinadora PRONOEI",
    area: "UGP",
    email: "madeleynepd@gmail.com",
    telefono: "999575464",
    orden: 55,
  },
  {
    id: "44",
    nombre: "Martinez Bravo, Maria Rosa",
    cargo: "Coordinadora PRONOEI",
    area: "UGP",
    email: "mariarosamartinezbravo@gmail.com",
    telefono: "962536431",
    orden: 56,
  },
  {
    id: "45",
    nombre: "Ramirez Liberato, Elizabeth",
    cargo: "Coordinadora PRONOEI",
    area: "UGP",
    email: "elibeth.rl.18@mail.com",
    telefono: "974424189",
    orden: 57,
  },
  {
    id: "46",
    nombre: "Ramos Amancio, Jenny Elizabeth",
    cargo: "Coordinadora PRONOEI",
    area: "UGP",
    email: "jennyramosamancio76@gmail.com",
    telefono: "901289877",
    orden: 58,
  },
  {
    id: "47",
    nombre: "Rubina Barrantes, Jessika",
    cargo: "Coordinadora PRONOEI",
    area: "UGP",
    email: "rubinabarrantes1509@gmail.com",
    telefono: "941166257",
    orden: 59,
  },
  {
    id: "48",
    nombre: "Espinoza Pre, Liliana Thalia",
    cargo: "Coordinadora PRONOEI",
    area: "UGP",
    email: "lilithalia30@gmail.com",
    telefono: "917054741",
    orden: 60,
  },
  {
    id: "49",
    nombre: "Zuñiga Rojas, Ana Maria",
    cargo: "Coordinadora PRONOEI",
    area: "UGP",
    email: "hopeandlove_17@hotmail.com",
    telefono: "962637586",
    orden: 61,
  },
  {
    id: "50",
    nombre: "Saldaña Pardave, Ofelia Patricia",
    cargo: "Coordinadora PRONOEI",
    area: "UGP",
    email: "osaldanapardave@gmail.com",
    telefono: "935380915",
    orden: 62,
  },
  // --- Practicante UGP ---
  {
    id: "68",
    nombre: "Jara Herrera, Arvic Kenedi",
    cargo: "Practicante – Asistente en UGP",
    area: "UGP",
    email: "arvic2514@gmail.com",
    telefono: "918363299",
    orden: 63,
  },

  // ==================== UNIDAD DE GESTIÓN INSTITUCIONAL (UPDI) ====================
  {
    id: "51",
    nombre: "Eulogio Valenzuela, Kennedy Robinson",
    cargo: "Director del Sistema Administrativo III – UPDI",
    area: "UPDI",
    email: "kennedyeulogio@gmail.com",
    telefono: "901880368",
    orden: 64,
  },
  {
    id: "52",
    nombre: "Martel Condezo, Irene",
    cargo: "Especialista en Finanzas I",
    area: "UPDI",
    email: "irenmar0504@gmail.com",
    telefono: "935785164",
    orden: 65,
  },
  {
    id: "54",
    nombre: "Villarreal Morales, Delmer James",
    cargo: "Vigilante Sede UGEL",
    area: "UPDI",
    telefono: "991936670",
    orden: 66,
  },
  {
    id: "55",
    nombre: "Chavez Alcantara, Antonio Percy",
    cargo: "Vigilante Sede UGEL",
    area: "UPDI",
    telefono: "999786887",
    orden: 67,
  },
  {
    id: "56",
    nombre: "Jimenez Sotil, Norvin Smith",
    cargo: "Especialista en Infraestructura",
    area: "UPDI",
    email: "smith.arq2@gmail.com",
    telefono: "941212759",
    orden: 68,
  },
  {
    id: "57",
    nombre: "Valverde Maccha, Gissel Stefanny",
    cargo: "Especialista GRD – UGEL Ambo",
    area: "UPDI",
    email: "gisselvalverde@gmail.com",
    telefono: "962348522",
    orden: 69,
  },
  {
    id: "58",
    nombre: "Ortiz Rojas, Maglorio",
    cargo: "Especialista de Inicial",
    area: "UPDI",
    email: "yonifarfan@hotmail.com",
    telefono: "962813340",
    orden: 70,
  },
  // --- CAS UPDI ---
  {
    id: "75",
    nombre: "Martel Espinoza, Elcira Jossety",
    cargo: "Analista de Modernización de la Gestión Pública",
    email: "jossety2201@gmail.com",
    telefono: "971386109",
    area: "UPDI",
    orden: 71,
  },
  {
    id: "76",
    nombre: "Eduardo Santamaria, Yanet",
    cargo: "Analista Secretaria",
    email: "jhanetheduardosantamaria@gmail.com",
    telefono: "955858720",
    area: "UPDI",
    orden: 72,
  },
  {
    id: "79",
    nombre: "Perez Trinidad, Diego David",
    cargo: "Especialista Informático",
    area: "UPDI",
    email: "Diego120896@gmail.com",
    telefono: "935934122",
    orden: 73,
  },
  {
    id: "80",
    nombre: "Gutierrez Mallqui, Maria Cristina",
    cargo: "Responsable de SIAGIE",
    area: "UPDI",
    email: "Crismallqui26@gmail.com",
    telefono: "934842152",
    orden: 74,
  },
  // --- Practicantes UPDI ---
  {
    id: "60",
    nombre: "Ayala Romero, Jordan Brandon",
    cargo: "Practicante – Apoyo en Informática (UPDI)",
    area: "UPDI",
    email: "ayalaromerojordanbrandon@gmail.com",
    telefono: "925523419",
    orden: 75,
  },
  {
    id: "69",
    nombre: "Aguirre Alcedo, Kevin Jhino",
    cargo: "Practicante – Asistente en Infraestructura (UPDI)",
    area: "UPDI",
    email: "jhino_97@hotmail.com",
    telefono: "973031878",
    orden: 76,
  },
];

export default function DirectorioPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedArea, setSelectedArea] = React.useState("");
  const [sortField, setSortField] = React.useState<keyof DirectorioItem>("orden");
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">("asc");

  const areas = React.useMemo(() => {
    const uniqueAreas = new Set(directorioData.map(item => item.area));
    return Array.from(uniqueAreas);
  }, []);

  const filteredItems = React.useMemo(() => {
    const filtered = directorioData.filter(item => {
      const matchesSearch = item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.cargo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.email?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesArea = !selectedArea || item.area === selectedArea;
      return matchesSearch && matchesArea;
    });

    filtered.sort((a, b) => {
      const aVal = a[sortField] ?? (typeof directorioData[0][sortField] === "number" ? 0 : "");
      const bVal = b[sortField] ?? (typeof directorioData[0][sortField] === "number" ? 0 : "");
      
      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
      }
      
      return sortDirection === "asc" 
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });

    return filtered;
  }, [searchTerm, selectedArea, sortField, sortDirection]);

  const getUnitFullName = (area: string) => {
    const names: { [key: string]: string } = {
      'UD': 'Unidad de Dirección',
      'UGA': 'Unidad de Gestión Administrativa',
      'UGRH': 'Unidad de Gestión de Recursos Humanos',
      'UGP': 'Unidad de Gestión Pedagógica',
      'UPDI': 'Unidad de Gestión Institucional'
    };
    return names[area] || area;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f0faff] via-white to-[#f8fcfe] pb-16">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf7fc] to-[#f8fcfe] text-[#223F59]">
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-32 h-80 w-80 rounded-full bg-[#049DD9]/10 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-[#f4bc32]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-7 sm:px-6 md:pb-10 md:pt-9">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#049DD9]/20 bg-[#049DD9]/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-[#087da9]"><Building2 className="h-3.5 w-3.5" aria-hidden="true" /> UGEL AMBO</span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Directorio <span className="text-[#049DD9]">institucional</span></h1>
            <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#49d1ed] to-[#f4c34d]" />
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">Encuentra a nuestro equipo y contacta con las unidades de la UGEL Ambo.</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <span className="inline-flex items-center gap-2 rounded-xl border border-[#d6eaf3] bg-white/80 px-4 py-2.5"><Users className="h-4 w-4 text-[#049DD9]" aria-hidden="true" /><strong>{directorioData.length}</strong> contactos</span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-[#d6eaf3] bg-white/80 px-4 py-2.5"><Building2 className="h-4 w-4 text-[#049DD9]" aria-hidden="true" /><strong>{areas.length}</strong> unidades</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <section aria-label="Buscar en el directorio" className="relative -mt-4 rounded-2xl border border-[#dcecf3] bg-white p-4 shadow-[0_14px_40px_-24px_rgba(15,58,84,0.35)] sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
            <div className="min-w-0 flex-1">
              <label htmlFor="directorio-busqueda" className="mb-2 block text-sm font-bold text-[#23445b]">Buscar contacto</label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4a8ba5]" aria-hidden="true" />
                <input id="directorio-busqueda" type="search" placeholder="Nombre, cargo o correo..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="h-12 w-full rounded-xl border border-[#d9e9f0] bg-[#f7fbfd] pl-11 pr-10 text-sm text-[#173b56] outline-none transition focus:border-[#049DD9] focus:ring-2 focus:ring-[#049DD9]/20" />
                {searchTerm && <button type="button" aria-label="Limpiar búsqueda" onClick={() => setSearchTerm("")} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-500 hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-[#049DD9]"><X className="h-4 w-4" /></button>}
              </div>
            </div>
            <div>
              <label htmlFor="directorio-orden" className="mb-2 flex items-center gap-1.5 text-sm font-bold text-[#23445b]"><SlidersHorizontal className="h-4 w-4" aria-hidden="true" /> Ordenar por</label>
              <div className="flex gap-2">
                <select id="directorio-orden" value={sortField} onChange={(e) => { setSortField(e.target.value as keyof DirectorioItem); setSortDirection("asc"); }} className="h-12 rounded-xl border border-[#d9e9f0] bg-[#f7fbfd] px-3 text-sm text-[#23445b] outline-none focus:border-[#049DD9] focus:ring-2 focus:ring-[#049DD9]/20">
                  <option value="orden">Orden institucional</option><option value="nombre">Nombre</option><option value="cargo">Cargo</option><option value="area">Unidad</option>
                </select>
                <button type="button" onClick={() => setSortDirection(sortDirection === "asc" ? "desc" : "asc")} aria-label={sortDirection === "asc" ? "Cambiar a orden descendente" : "Cambiar a orden ascendente"} className="h-12 rounded-xl border border-[#d9e9f0] bg-[#f7fbfd] px-3 text-sm font-semibold text-[#23445b] hover:bg-[#e9f6fb] focus-visible:outline-2 focus-visible:outline-[#049DD9]">{sortDirection === "asc" ? "↑ Asc" : "↓ Desc"}</button>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-[#e9f1f5] pt-3" aria-label="Filtrar por unidad">
            <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-slate-500">Unidad</span>
            {["", ...areas].map((area) => (
              <button key={area || "todos"} type="button" onClick={() => setSelectedArea(area)} aria-pressed={selectedArea === area} title={area ? getUnitFullName(area) : "Todas las unidades"} className={`rounded-full px-4 py-2 text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#049DD9] ${selectedArea === area ? "bg-[#087da9] text-white shadow-sm shadow-[#087da9]/25" : "bg-[#edf6fa] text-[#38677c] hover:bg-[#dceff6]"}`}>{area || "Todas"}</button>
            ))}
          </div>
        </section>

        <div className="mb-4 mt-6 flex flex-wrap items-end justify-between gap-2">
          <div><h2 className="text-xl font-bold text-[#173b56]">Nuestro equipo</h2><p className="mt-1 text-sm text-slate-500">{selectedArea ? getUnitFullName(selectedArea) : "Todas las unidades"}</p></div>
          <p role="status" className="text-sm text-slate-500"><strong className="text-[#087da9]">{filteredItems.length}</strong> {filteredItems.length === 1 ? "contacto" : "contactos"}</p>
        </div>

        {filteredItems.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => {
              const partes = item.nombre.replace(',', '').trim().split(/\s+/);
              const initials = ((partes[2]?.[0] || partes[1]?.[0] || '') + (partes[0]?.[0] || '')).toUpperCase();
              return (
                <article key={item.id} className="group flex min-w-0 flex-col rounded-2xl border border-[#dfedf3] bg-white p-5 shadow-[0_6px_24px_-18px_rgba(19,57,79,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#a9dcea] hover:shadow-[0_16px_30px_-18px_rgba(4,125,169,0.35)] motion-reduce:transform-none motion-reduce:transition-none">
                  <div className="flex items-start justify-between gap-3">
                    <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0b81b0] to-[#164c70] text-sm font-bold text-white shadow-sm">{initials}</span>
                    <span className="rounded-full border border-[#d7edf5] bg-[#eff9fc] px-2.5 py-1 text-xs font-bold text-[#087da9]">{item.area}</span>
                  </div>
                  <h3 className="mt-4 text-base font-bold leading-snug text-[#173b56]">{item.nombre}</h3>
                  <p className="mt-1.5 min-h-[2.5rem] text-sm leading-5 text-slate-600">{item.cargo}</p>
                  <p className="mt-3 text-xs font-medium text-[#5d899a]">{getUnitFullName(item.area)}</p>
                  <div className="mt-4 flex flex-1 flex-col gap-2 border-t border-[#edf3f6] pt-4 text-sm">
                    {item.email && <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(item.email)}`} target="_blank" rel="noopener noreferrer" aria-label={`Escribir a ${item.nombre} en Gmail (abre una nueva pestaña)`} className="group/contact flex min-w-0 items-center gap-3 rounded-xl border border-[#e4edf2] bg-[#f9fcfd] px-3 py-2.5 transition-colors hover:border-[#b8dce9] hover:bg-[#f0f9fc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#049DD9]"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm"><GmailIcon /></span><span className="min-w-0 flex-1"><span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Escribir por Gmail</span><span className="block break-all text-xs font-medium text-[#23445b]">{item.email}</span></span><ArrowUpRight className="h-4 w-4 shrink-0 text-[#94b5c2] transition-transform group-hover/contact:-translate-y-0.5 group-hover/contact:translate-x-0.5" aria-hidden="true" /></a>}
                    {item.telefono && <a href={`https://wa.me/51${item.telefono.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" aria-label={`Contactar a ${item.nombre} por WhatsApp (abre una nueva pestaña)`} className="group/contact flex min-w-0 items-center gap-3 rounded-xl border border-[#e4edf2] bg-[#f9fcfd] px-3 py-2.5 transition-colors hover:border-[#b8e5c9] hover:bg-[#f1fbf4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#049DD9]"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm"><WhatsAppIcon /></span><span className="min-w-0 flex-1"><span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Conversar por WhatsApp</span><span className="block text-xs font-medium text-[#23445b]">{item.telefono}</span></span><ArrowUpRight className="h-4 w-4 shrink-0 text-[#94b5c2] transition-transform group-hover/contact:-translate-y-0.5 group-hover/contact:translate-x-0.5" aria-hidden="true" /></a>}
                    {!item.email && !item.telefono && <span className="text-xs text-slate-400">Contacto no disponible</span>}
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#c4dfe9] bg-white px-6 py-16 text-center">
            <Search className="mx-auto h-8 w-8 text-[#83b6c9]" aria-hidden="true" />
            <p className="mt-4 font-bold text-[#23445b]">No encontramos contactos</p>
            <p className="mt-1 text-sm text-slate-500">Prueba con otro nombre, cargo o unidad.</p>
            <button type="button" onClick={() => { setSearchTerm(""); setSelectedArea(""); }} className="mt-4 rounded-full bg-[#eaf7fc] px-4 py-2 text-sm font-semibold text-[#087da9] hover:bg-[#d7eef7]">Limpiar filtros</button>
          </div>
        )}
      </div>
    </main>
  );
}
