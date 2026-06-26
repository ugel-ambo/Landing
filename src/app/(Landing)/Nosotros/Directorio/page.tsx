"use client";
import * as React from "react";
import Link from "next/link";
import { Search, X, Mail, Phone, ArrowLeft, Users, Building2, ChevronDown, ChevronUp } from "lucide-react";

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
    cargo: "Director de Ugel",
    area: "UD",
    email: "ud@ugelambo.edu.pe",
    telefono: "962600002",
    orden: 1
  },
  {
    id: "2",
    nombre: "Suarez Lopez, Karen Jackeline",
    cargo: "Técnico Administrativo I - Trámite Documentario",
    area: "UD",
    email: "dackeline4158@gmail.com",
    telefono: "985675850",
    orden: 2
  },
  {
    id: "3",
    nombre: "Camiloaga Espinoza, Jenny Esther",
    cargo: "Especialista Administrativo I - Archivo",
    area: "UD",
    email: "jennycaes24@gmail.com",
    telefono: "962828292",
    orden: 3
  },
  {
    id: "4",
    nombre: "Maynicta León, María Eugenia",
    cargo: "Secretaria I - UD",
    area: "UD",
    email: "mariaeug28@hotmail.com",
    telefono: "906034096",
    orden: 4
  },
  {
    id: "5",
    nombre: "Ramos Rojas, Cesar Luis",
    cargo: "Asesor Jurídico",
    area: "UD",
    email: "bienesraicespop23@hotmail.com",
    telefono: "954961080",
    orden: 5
  },
  {
    id: "6",
    nombre: "Cristobal Ortiz, Emperatriz Savi",
    cargo: "Especialista en Imagen",
    area: "UD",
    email: "crismperatriz@gmail.com",
    telefono: "935462408",
    orden: 6
  },

  // ==================== UNIDAD DE GESTIÓN ADMINISTRATIVA (UGA) ====================
  {
    id: "7",
    nombre: "Albornoz Irribarren, Joaquin",
    cargo: "Director del Sistema Administrativo III - UGA",
    area: "UGA",
    email: "uga@ugelambo.edu.pe",
    telefono: "996538694",
    orden: 7
  },
  {
    id: "8",
    nombre: "Ostos Miraval, Alfredo",
    cargo: "Analista de Abastecimientos",
    area: "UGA",
    email: "uga_abastecimiento@ugelambo.edu.pe",
    telefono: "962677916",
    orden: 8
  },
  {
    id: "9",
    nombre: "Albornoz Soto, Katterine Vanessa",
    cargo: "Tesoreo I",
    area: "UGA",
    email: "uga_tesoseria@ugelambo.edu.pe",
    telefono: "967020995",
    orden: 9
  },
  {
    id: "10",
    nombre: "Herrera Caballero, Liliam Cindy",
    cargo: "Contadora I",
    area: "UGA",
    email: "lili22891@hotmail.com",
    telefono: "962744871",
    orden: 10
  },
  {
    id: "11",
    nombre: "Fuster Quispe, Angelica Janeth",
    cargo: "Especialista de Almacén y Patrimonio",
    area: "UGA",
    email: "uga_almacen@ugelambo.edu.pe",
    telefono: "956910290",
    orden: 11
  },
  {
    id: "12",
    nombre: "Diaz Chauchas, Erick",
    cargo: "Chofer",
    area: "UGA",
    email: "",
    telefono: "958593695",
    orden: 12
  },
  {
    id: "13",
    nombre: "Trinidad Jaco, Ruben Josué",
    cargo: "Especialista Administrativo en Abastecimientos",
    area: "UGA",
    email: "joue7_1995@hotmail.com",
    telefono: "912910919",
    orden: 13
  },
  {
    id: "14",
    nombre: "Villarreal Morales, Delmer James",
    cargo: "Vigilante Sede Ugel",
    area: "UGA",
    email: "",
    telefono: "991936670",
    orden: 14
  },
  {
    id: "15",
    nombre: "Chavez Alcantara, Antonio Percy",
    cargo: "Vigilante Sede Ugel",
    area: "UGA",
    email: "antoniopercycy@gmail.com",
    telefono: "999786887",
    orden: 15
  },

  // ==================== UNIDAD DE GESTIÓN DE RECURSOS HUMANOS (UGRH) ====================
  {
    id: "16",
    nombre: "Zambrano Luycho, Matias",
    cargo: "Director del Sistema Administrativo III - UGRH",
    area: "UGRH",
    email: "ugrh@ugelambo.edu.pe",
    telefono: "931438414",
    orden: 16
  },
  {
    id: "17",
    nombre: "Sanchez Bravo, José German",
    cargo: "Asistente Administrativo",
    area: "UGRH",
    email: "josebe17@hotmail.com",
    telefono: "942081511",
    orden: 17
  },
  {
    id: "18",
    nombre: "Camacho Robles, Ethel German",
    cargo: "Técnico Administrativo I - Escalafón y Nexus",
    area: "UGRH",
    email: "xtzyamaha@hotmail.com",
    telefono: "962676665",
    orden: 18
  },
  {
    id: "19",
    nombre: "Tello Montes, Diógenes Alberto",
    cargo: "Técnico Administrativo - Constancia de Pagos y Licencias",
    area: "UGRH",
    email: "d.tellomontes@gmail.com",
    telefono: "950482663",
    orden: 19
  },
  {
    id: "20",
    nombre: "Hilario Leandro, Lenin Nino",
    cargo: "Especialista en Airsh y Escalafón",
    area: "UGRH",
    email: "leninmia2021@gmail.com",
    telefono: "950592326",
    orden: 20
  },
  {
    id: "21",
    nombre: "Barrantes Villanueva, Susan Sherly",
    cargo: "Asistente Administrativo - Planillas",
    area: "UGRH",
    email: "ugrh_planillas@ugelambo.edu.pe",
    telefono: "938179484",
    orden: 21
  },
  {
    id: "22",
    nombre: "Torres Perez, Sedrik Joau",
    cargo: "Especialista en Gestión de Procedimientos Administrativos Disciplinarios",
    area: "UGRH",
    email: "ugrh_cppadd_pad@ugelambo.edu.pe",
    telefono: "910149606",
    orden: 22
  },
  {
    id: "23",
    nombre: "Machaca Bravo, Williams Martin",
    cargo: "Personal de Servicio 2",
    area: "UGRH",
    email: "",
    telefono: "959288055",
    orden: 23
  },
  {
    id: "24",
    nombre: "Mendoza Salazar, Wilden Elmer",
    cargo: "Personal de Servicio",
    area: "UGRH",
    email: "wildenelmer2020@gmail.com",
    telefono: "962307875",
    orden: 24
  },

  // ==================== UNIDAD DE GESTIÓN PEDAGÓGICA (UGP) ====================
  {
    id: "25",
    nombre: "Mallqui Durand, Jaly H.",
    cargo: "Jefe del Área de Gestión Pedagógica",
    area: "UGP",
    email: "ugp@ugelambo.edu.pe",
    telefono: "971296226",
    orden: 25
  },
  {
    id: "26",
    nombre: "Sanchez Paniagua, Ana Gabriel",
    cargo: "Secretaria I - UGP",
    area: "UGP",
    email: "anitasanchez18.asp@gmail.com",
    telefono: "931079893",
    orden: 26
  },
  {
    id: "27",
    nombre: "Matos Cristobal, Lyz Sara",
    cargo: "Especialista en Inicial",
    area: "UGP",
    email: "lyzmatoscristobal@gmail.com",
    telefono: "96912880",
    orden: 27
  },
  {
    id: "28",
    nombre: "Meza Fernandez, Maria Elena",
    cargo: "Especialista en Inicial",
    area: "UGP",
    email: "elena_amada@hotmail.com",
    telefono: "965605966",
    orden: 28
  },
  {
    id: "29",
    nombre: "Mejia Huaranga, Leydi Edith",
    cargo: "Especialista en Inicial",
    area: "UGP",
    email: "leydimejiahuaranga176@gmail.com",
    telefono: "993717726",
    orden: 29
  },
  {
    id: "30",
    nombre: "Diaz Acuña, Esther Delia",
    cargo: "Especialista en Primaria",
    area: "UGP",
    email: "estherdelia.diaz1234@gmail.com",
    telefono: "990000117",
    orden: 30
  },
  {
    id: "31",
    nombre: "Olaza Albornoz, Meneses Javier",
    cargo: "Especialista en Primaria",
    area: "UGP",
    email: "javierolazaalvornoz@gmail.com",
    telefono: "956042529",
    orden: 31
  },
  {
    id: "32",
    nombre: "Alvarez Aldava, Noel Grover",
    cargo: "Especialista en Primaria",
    area: "UGP",
    email: "noelito_53@hotmail.com",
    telefono: "982181934",
    orden: 32
  },
  {
    id: "33",
    nombre: "Paredes Munguia, Marco Antonio",
    cargo: "Especialista en Primaria",
    area: "UGP",
    email: "mapamun125@gmail.com",
    telefono: "917776307",
    orden: 33
  },
  {
    id: "34",
    nombre: "Munguia Fuentes, Francisca",
    cargo: "Especialista en Primaria",
    area: "UGP",
    email: "panchi_40@hotmail.com",
    telefono: "987556648",
    orden: 34
  },
  {
    id: "35",
    nombre: "Rivera Tadeo, Walter Máximo",
    cargo: "Especialista en Primaria - CyT",
    area: "UGP",
    email: "ugp_esp_walter@ugelambo.edu.pe",
    telefono: "943765016",
    orden: 35
  },
  {
    id: "36",
    nombre: "Vicencio Romero, Julio Cesar",
    cargo: "Especialista en Secundaria - CTA",
    area: "UGP",
    email: "jcvicencior@hotmail.com",
    telefono: "990269911",
    orden: 36
  },
  {
    id: "37",
    nombre: "Figueredo Oneeglio, Ramon Giovanni",
    cargo: "Especialista en Secundaria - Matemática",
    area: "UGP",
    email: "rafo_671102@hotmail.com",
    telefono: "975163287",
    orden: 37
  },
  {
    id: "38",
    nombre: "Aliaga Cotrina, Leli Saiquina",
    cargo: "Especialista en Comunicación",
    area: "UGP",
    email: "lelialiaga16@gmail.com",
    telefono: "954224611",
    orden: 38
  },
  {
    id: "39",
    nombre: "Zevallos Leon, Paolo Roberto",
    cargo: "Especialista en Convivencia Escolar",
    area: "UGP",
    email: "paoloz65@gmail.com",
    telefono: "931240226",
    orden: 39
  },
  {
    id: "40",
    nombre: "Jaramillo Coz, Beatriz",
    cargo: "Coordinadora de Educación Religiosa",
    area: "UGP",
    email: "d22489114j@perueduca.edu.pe",
    telefono: "988800474",
    orden: 40
  },
  {
    id: "41",
    nombre: "Leon Colqui, Maryori Mishel",
    cargo: "Profesional III - Equipo Itinerante de Convivencia Escolar",
    area: "UGP",
    email: "Colquimishel9@gmail.com",
    telefono: "956229167",
    orden: 41
  },
  {
    id: "42",
    nombre: "Salvador Saldivar, Yasmine Beatriz",
    cargo: "Profesional III - Equipo Itinerante de Convivencia Escolar",
    area: "UGP",
    email: "Jasmin.betriz@gmail.com",
    telefono: "924990819",
    orden: 42
  },
  {
    id: "43",
    nombre: "Tolentino Cristobal, Sonia G.",
    cargo: "Coordinadora de Pronoei",
    area: "UGP",
    email: "gladicitasony19@gmail.com",
    telefono: "921633261",
    orden: 43
  },
  {
    id: "44",
    nombre: "Patricio Diaz, Madeleyne",
    cargo: "Coordinadora de Pronoei",
    area: "UGP",
    email: "madeleynepd@gmail.com",
    telefono: "999575464",
    orden: 44
  },
  {
    id: "45",
    nombre: "Martinez Bravo, Maria Rosa",
    cargo: "Coordinadora de Pronoei",
    area: "UGP",
    email: "mariarosamartinezbravo@gmail.com",
    telefono: "962536431",
    orden: 45
  },
  {
    id: "46",
    nombre: "Ramirez Liberato, Elizabeth",
    cargo: "Coordinadora de Pronoei",
    area: "UGP",
    email: "elibeth.rl.18@mail.com",
    telefono: "974424189",
    orden: 46
  },
  {
    id: "47",
    nombre: "Ramos Amancio, Jenny Elizabeth",
    cargo: "Coordinadora de Pronoei",
    area: "UGP",
    email: "Jennyramosamancio76@gmail.com",
    telefono: "901289877",
    orden: 47
  },
  {
    id: "48",
    nombre: "Barrantes, Jessika Rubina",
    cargo: "Coordinadora de Pronoei",
    area: "UGP",
    email: "rubinabarrantes1509@gmail.com",
    telefono: "941166257",
    orden: 48
  },
  {
    id: "49",
    nombre: "Espinoza Pre, Liliana Thalia",
    cargo: "Coordinadora de Pronoei",
    area: "UGP",
    email: "Lilithalia30@gmail.com",
    telefono: "917054741",
    orden: 49
  },
  {
    id: "50",
    nombre: "Zuñiga Rojas, Ana Maria",
    cargo: "Coordinadora de Pronoei",
    area: "UGP",
    email: "hopeandlove_17@hotmail.com",
    telefono: "962637586",
    orden: 50
  },
  {
    id: "51",
    nombre: "Saldaña Pardave, Ofelia Patricia",
    cargo: "Coordinadora de Pronoei",
    area: "UGP",
    email: "Osaldanapardave@gmail.com",
    telefono: "935380915",
    orden: 51
  },

  // ==================== UNIDAD DE PLANEAMIENTO Y DESARROLLO INSTITUCIONAL (UPDI) ====================
  {
    id: "52",
    nombre: "Eulogio Valenzuela, Kennedy Robinson",
    cargo: "Director del Sistema Administrativo III - UPDI",
    area: "UPDI",
    email: "updi@ugelambo.edu.pe",
    telefono: "901880368",
    orden: 52
  },
  {
    id: "53",
    nombre: "Martel Condezo, Irene",
    cargo: "Especialista en Finanzas I",
    area: "UPDI",
    email: "updi_finanzasi@ugelambo.edu.pe",
    telefono: "935785164",
    orden: 53
  },
  {
    id: "54",
    nombre: "Osorio Celis, Katherine Haydeé",
    cargo: "Técnico Administrativo I - Siagie y Estadística",
    area: "UPDI",
    email: "katherineosoriocelis@gmail.com",
    telefono: "948595648",
    orden: 54
  },
  {
    id: "55",
    nombre: "Jimenez Sotil, Norvin Smith",
    cargo: "Especialista en Infraestructura",
    area: "UPDI",
    email: "updi_infraestructura@ugelambo.edu.pe",
    telefono: "941212759",
    orden: 55
  },
  {
    id: "56",
    nombre: "Valverde Maccha, Gissel Stefanny",
    cargo: "Especialista de GRD - Prevaed",
    area: "UPDI",
    email: "gisselvalverde@gmail.com",
    telefono: "962348522",
    orden: 56
  },
  {
    id: "57",
    nombre: "Ortiz Rojas, Maglorio",
    cargo: "Especialista en Inicial",
    area: "UPDI",
    email: "yonifarfan@hotmail.com",
    telefono: "962813340",
    orden: 57
  },

  // ==================== PRACTICANTES ====================
  {
    id: "58",
    nombre: "Aguirre Alcedo, Kevin Jhino",
    cargo: "Asistente en Patrimonio - UPDI",
    area: "UPDI",
    email: "jhino_97@hotmail.com",
    telefono: "973031878",
    orden: 58
  },
  {
    id: "59",
    nombre: "Ayala Romero, Jordan Brandon",
    cargo: "Apoyo en Informática - UPDI",
    area: "UPDI",
    email: "ayalaromerojordanbrandon@gmail.com",
    telefono: "925523419",
    orden: 59
  },
  {
    id: "60",
    nombre: "Eduardo Santamaria, Yanet",
    cargo: "Asistente en Secretaría - UPDI",
    area: "UPDI",
    email: "jhanetheduardosantamaria@gmail.com",
    telefono: "955858720",
    orden: 60
  },
  {
    id: "61",
    nombre: "Solis Jimenez, Paolo Domingo",
    cargo: "Asistente en Dirección - UD",
    area: "UD",
    email: "jimenezzlawyer@gmail.com",
    telefono: "955079456",
    orden: 61
  },
  {
    id: "62",
    nombre: "Poma Chavez, Mirla",
    cargo: "Asistente en Planillas - UGRH",
    area: "UGRH",
    email: "mirlapomach@gmail.com",
    telefono: "979219015",
    orden: 62
  },
  {
    id: "63",
    nombre: "Tafur Villanueva, Andre Aurelio",
    cargo: "Asistente en Escalafón - UGRH",
    area: "UGRH",
    email: "aureliotafur169@gmail.com",
    telefono: "979713453",
    orden: 63
  },
  {
    id: "64",
    nombre: "Ortega Gomez, Nelson",
    cargo: "Asistente de Nexus - UGRH",
    area: "UGRH",
    email: "nilorjhi.04@outlook.com",
    telefono: "922106034",
    orden: 64
  },
  {
    id: "65",
    nombre: "Cardenas Chamorro, Lesly Flor",
    cargo: "Asistente de SCI - UGA",
    area: "UGA",
    email: "cardenaslesly18@gmail.com",
    telefono: "977134116",
    orden: 65
  },
  {
    id: "66",
    nombre: "Julca Garcia, Jhonatan Anibal",
    cargo: "Asistente de Operador Informático - UGP",
    area: "UGP",
    email: "an.jhonatan15@gmail.com",
    telefono: "962538149",
    orden: 66
  },
  {
    id: "67",
    nombre: "Lazaro Barrera, Hayle Josep",
    cargo: "Asistente en Apoyo en Abastecimiento",
    area: "UGA",
    email: "hayle1910@gmail.com",
    telefono: "926680237",
    orden: 67
  },
  {
    id: "68",
    nombre: "Palacin Tello, Carlos David",
    cargo: "Asistente de Almacén",
    area: "UGA",
    email: "tellocd09@gmail.com",
    telefono: "965701075",
    orden: 68
  },
  {
    id: "69",
    nombre: "Retis Falcon, Anggie Hayli",
    cargo: "Asistente en Contabilidad",
    area: "UGA",
    email: "anggieretisfalcon@gmail.com",
    telefono: "913270027",
    orden: 69
  },
  {
    id: "70",
    nombre: "Gago Villodas, Gerly",
    cargo: "Asistente en UGP",
    area: "UGP",
    email: "2014110785@udh.edu.pe",
    telefono: "940937561",
    orden: 70
  },
  {
    id: "71",
    nombre: "Avila Carhuamaca, Caren Yerali",
    cargo: "Asistente en UGA",
    area: "UGA",
    email: "yo355991@gmail.com",
    telefono: "907344044",
    orden: 71
  },
  {
    id: "72",
    nombre: "Jara Herrera, Arvic Kenedi",
    cargo: "Apoyo en Operador Informática",
    area: "UGP",
    email: "arvic2514@gmail.com",
    telefono: "918363299",
    orden: 72
  }
];

// ============================================
// 🖥️ COMPONENTE PRINCIPAL
// ============================================
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
    let filtered = directorioData
      .filter(item => {
        const matchesSearch = item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              item.cargo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              item.email?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesArea = !selectedArea || item.area === selectedArea;
        return matchesSearch && matchesArea;
      });

    filtered.sort((a, b) => {
      const aVal = a[sortField] || "";
      const bVal = b[sortField] || "";
      
      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortDirection === "asc" 
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }
      
      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
      }
      
      return 0;
    });

    return filtered;
  }, [searchTerm, selectedArea, sortField, sortDirection]);

  const handleSort = (field: keyof DirectorioItem) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const getSortIcon = (field: keyof DirectorioItem) => {
    if (sortField !== field) return null;
    return sortDirection === "asc" 
      ? <ChevronUp className="h-3 w-3" />
      : <ChevronDown className="h-3 w-3" />;
  };

  const getAreaBadgeColor = (area: string) => {
    const colors: { [key: string]: { bg: string; text: string; border: string } } = {
      'UD': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
      'UGA': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
      'UGRH': { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
      'UGP': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
      'UPDI': { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
    };
    return colors[area] || { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' };
  };

  const getUnitFullName = (area: string) => {
    const names: { [key: string]: string } = {
      'UD': 'Unidad de Dirección',
      'UGA': 'Unidad de Gestión Administrativa',
      'UGRH': 'Unidad de Gestión de Recursos Humanos',
      'UGP': 'Unidad de Gestión Pedagógica',
      'UPDI': 'Unidad de Planeamiento y Desarrollo Institucional'
    };
    return names[area] || area;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Header */}
      <br />
      

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Filtros */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-5 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar por nombre, cargo o email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-gray-50/80 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-gray-400"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X className="h-4 w-4 text-gray-400" />
                </button>
              )}
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedArea("")}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 whitespace-nowrap ${
                  selectedArea === "" 
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
                }`}
              >
                <Building2 className="inline-block h-4 w-4 mr-1.5" />
                Todos
              </button>
              {areas.map((area) => (
                <button
                  key={area}
                  onClick={() => setSelectedArea(area)}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 whitespace-nowrap ${
                    selectedArea === area 
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 pt-4">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-gray-500">
                Mostrando <strong className="text-gray-700">{filteredItems.length}</strong> de {directorioData.length} miembros
              </span>
              {selectedArea && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {getUnitFullName(selectedArea)}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Ordenado por: <strong className="text-gray-600">{sortField}</strong></span>
              <span className="text-gray-300">|</span>
              <span>{sortDirection === "asc" ? "↑ Asc" : "↓ Desc"}</span>
            </div>
          </div>
        </div>

        {/* Tabla */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100/80 border-b-2 border-gray-200">
                  <th 
                    className="px-4 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-200/50 transition-colors"
                    onClick={() => handleSort("orden")}
                  >
                    <div className="flex items-center gap-1"># {getSortIcon("orden")}</div>
                  </th>
                  <th 
                    className="px-4 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-200/50 transition-colors"
                    onClick={() => handleSort("nombre")}
                  >
                    <div className="flex items-center gap-1">Nombre {getSortIcon("nombre")}</div>
                  </th>
                  <th 
                    className="px-4 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-200/50 transition-colors"
                    onClick={() => handleSort("cargo")}
                  >
                    <div className="flex items-center gap-1">Cargo {getSortIcon("cargo")}</div>
                  </th>
                  <th 
                    className="px-4 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-200/50 transition-colors"
                    onClick={() => handleSort("area")}
                  >
                    <div className="flex items-center gap-1">Unidad {getSortIcon("area")}</div>
                  </th>
                  <th className="px-4 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Contacto
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => {
                    const colors = getAreaBadgeColor(item.area);
                    return (
                      <tr 
                        key={item.id}
                        className={`border-b border-gray-100 hover:bg-blue-50/40 transition-colors duration-150 ${
                          index % 2 === 0 ? 'bg-white' : 'bg-gray-50/20'
                        }`}
                      >
                        <td className="px-4 py-3.5 text-sm text-gray-400 font-mono">
                          {item.orden || index + 1}
                        </td>
                        <td className="px-4 py-3.5">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-semibold shadow-sm">
                              {item.nombre.split(',')[0].trim().split(' ').slice(0, 2).map(word => word[0]).join('').toUpperCase().slice(0, 2)}
                            </div>
                            <span className="font-medium text-gray-800">{item.nombre}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3.5 text-sm text-gray-600 max-w-xs">
                          <span className="line-clamp-2">{item.cargo}</span>
                        </td>
                        <td className="px-4 py-3.5">
                          <div className="flex flex-col items-start gap-0.5">
                            <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
                              {item.area}
                            </span>
                            <span className="text-[10px] text-gray-400 font-light">
                              {getUnitFullName(item.area)}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3.5">
                          <div className="flex flex-col gap-1">
                            {item.email && (
                              <a 
                                href={`mailto:${item.email}`}
                                className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1.5 text-xs transition-colors"
                              >
                                <Mail className="h-3 w-3 flex-shrink-0" />
                                <span className="truncate max-w-[150px]">{item.email}</span>
                              </a>
                            )}
                            {item.telefono && (
                              <span className="text-gray-500 flex items-center gap-1.5 text-xs">
                                <Phone className="h-3 w-3 flex-shrink-0" />
                                <span className="font-mono">{item.telefono}</span>
                              </span>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={5} className="px-4 py-16 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="text-5xl opacity-30">🔍</div>
                        <p className="text-gray-500 font-medium">No se encontraron resultados</p>
                        <p className="text-sm text-gray-400">Intenta con otros filtros de búsqueda</p>
                        <button 
                          className="mt-2 px-4 py-2 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                          onClick={() => {
                            setSearchTerm("");
                            setSelectedArea("");
                          }}
                        >
                          Limpiar filtros
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer de tabla */}
        {filteredItems.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm text-gray-500 bg-white/60 backdrop-blur-sm px-5 py-3 rounded-xl border border-gray-100">
            <span>
              Mostrando <strong className="text-gray-700">{filteredItems.length}</strong> registros
            </span>
            <div className="flex items-center gap-3 text-xs">
              <span className="text-gray-400">Orden: <strong className="text-gray-600">{sortField}</strong></span>
              <span className="w-px h-4 bg-gray-200" />
              <span className="text-gray-400">{sortDirection === "asc" ? "Ascendente" : "Descendente"}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}