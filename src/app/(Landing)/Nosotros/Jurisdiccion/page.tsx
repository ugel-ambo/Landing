"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { MapPin, School, Users, Building2 } from "lucide-react";

// Importar componentes dinámicamente
const AmboDistritosMap = dynamic(
  () => import("@/components/maps/AmboDistritosMap"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] lg:h-[600px] rounded-xl bg-gray-200 animate-pulse flex items-center justify-center">
        <span className="text-gray-500">Cargando mapa...</span>
      </div>
    ),
  }
);

const DistritoAccordion = dynamic(
  () => import("@/components/jurisdiccion/DistritoAccordion"),
  {
    ssr: false,
    loading: () => (
      <div className="space-y-2">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-14 rounded-xl bg-gray-200 animate-pulse" />
        ))}
      </div>
    ),
  }
);

const stats = [
  {
    icon: Building2,
    value: "8",
    label: "Distritos",
    description: "En la provincia de Ambo",
  },
  {
    icon: School,
    value: "300+",
    label: "Instituciones Educativas",
    description: "Inicial, Primaria y Secundaria",
  },
  {
    icon: Users,
    value: "15,000+",
    label: "Estudiantes",
    description: "En toda la jurisdicción",
  },
  {
    icon: MapPin,
    value: "1,581",
    label: "km² de Extensión",
    description: "Territorio de la provincia",
  },
];

export default function JurisdiccionPage() {
  const [selectedDistritoFromMap, setSelectedDistritoFromMap] = useState<
    string | null
  >(null);

  const handleDistrictClick = (distrito: string) => {
    setSelectedDistritoFromMap(distrito);
  };

  const handleModalClose = () => {
    setSelectedDistritoFromMap(null);
  };

  return (
    <main className="min-h-screen bg-gray-50/50">
      {/* Header - Sin degradado */}
      <div className="w-full bg-[#049DD9] py-12 md:py-16 text-center justify-center items-center">
        <div className="container mx-auto px-4 text-center justify-center items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Jurisdicción
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto text-center">
            Conoce el territorio y las Instituciones Educativas de la Provincia
            de Ambo, departamento de Huánuco.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-3 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-2">
                <div className="p-1.5 md:p-2 bg-[#049DD9]/10 rounded-lg">
                  <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-[#049DD9]" />
                </div>
                <span className="text-xl md:text-3xl font-bold text-gray-800">
                  {stat.value}
                </span>
              </div>
              <p className="font-semibold text-gray-700 text-sm md:text-base">
                {stat.label}
              </p>
              <p className="text-xs md:text-sm text-gray-500 hidden sm:block">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mapa y Accordion - Layout lado a lado en pantallas grandes */}
      <section className="container mx-auto px-4 py-10 md:py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Mapa e Instituciones Educativas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Explora los 8 distritos de Ambo. Haz clic en el mapa o en los
            acordeones para ver las instituciones educativas.
          </p>
        </div>

        {/* Grid: Mapa a la izquierda, Accordion a la derecha en pantallas grandes */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Mapa - 3/5 del ancho en pantallas grandes */}
          <div className="lg:col-span-3">
            <AmboDistritosMap onDistrictClick={handleDistrictClick} />
          </div>

          {/* Accordion - 2/5 del ancho en pantallas grandes */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 h-full">
              <h3 className="font-bold text-gray-800 mb-4 text-lg">
                Instituciones por Distrito
              </h3>
              <div className="max-h-[500px] lg:max-h-[550px] overflow-y-auto pr-1">
                <DistritoAccordion
                  externalDistrito={selectedDistritoFromMap}
                  onModalClose={handleModalClose}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
