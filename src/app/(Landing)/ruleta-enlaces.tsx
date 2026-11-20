"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ExternalLink } from "lucide-react";
import SectionHeader from "@/components/section-header";

interface EnlaceItem {
  nombre: string;
  siglas: string;
  logo: string;
  url: string;
  glowColor: string;
}

const enlacesInstitucionales: EnlaceItem[] = [
  {
    nombre: "Programa Nacional de Infraestructura Educativa",
    siglas: "PRONIED",
    logo: "/enlaces/pronied.png",
    url: "https://www.gob.pe/pronied",
    glowColor: "group-hover:border-slate-500/50 group-hover:shadow-[0_10px_25px_rgba(71,85,105,0.2)]",
  },
  {
    nombre: "Instituto Nacional de Defensa Civil",
    siglas: "INDECI",
    logo: "/enlaces/indeci.png",
    url: "https://www.gob.pe/indeci",
    glowColor: "group-hover:border-[#0070ba]/60 group-hover:shadow-[0_10px_25px_rgba(0,112,186,0.25)]",
  },
  {
    nombre: "Portal del Estado Peruano",
    siglas: "GOB.PE",
    logo: "/enlaces/escudo.png",
    url: "https://www.gob.pe",
    glowColor: "group-hover:border-[#d92d20]/60 group-hover:shadow-[0_10px_25px_rgba(217,45,32,0.25)]",
  },
  {
    nombre: "Instituto Nacional de Estadística e Informática",
    siglas: "INEI",
    logo: "/enlaces/inei.png",
    url: "https://www.inei.gob.pe",
    glowColor: "group-hover:border-[#0f4c81]/60 group-hover:shadow-[0_10px_25px_rgba(15,76,129,0.25)]",
  },
  {
    nombre: "Ministerio de Desarrollo e Inclusión Social",
    siglas: "MIDIS",
    logo: "/enlaces/midis.png",
    url: "https://www.gob.pe/midis",
    glowColor: "group-hover:border-[#e11d48]/60 group-hover:shadow-[0_10px_25px_rgba(225,29,72,0.25)]",
  },
  {
    nombre: "Autoridad Nacional del Servicio Civil",
    siglas: "SERVIR",
    logo: "/enlaces/servir.webp",
    url: "https://www.gob.pe/servir",
    glowColor: "group-hover:border-[#c92a2a]/60 group-hover:shadow-[0_10px_25px_rgba(201,42,42,0.25)]",
  },
];

export default function RuletaEnlaces() {
  // Duplicamos la lista para crear un carrusel infinito continuo y sin cortes
  const itemsMarquee = [
    ...enlacesInstitucionales,
    ...enlacesInstitucionales,
    ...enlacesInstitucionales,
    ...enlacesInstitucionales,
  ];

  return (
    <section
      aria-label="Enlaces de interés y entidades del Estado"
      className="relative py-12 bg-gradient-to-r from-[#edf7fc] via-[#f7fbfe] to-[#eef8fd] overflow-hidden border-t border-[#cde8f5]"
    >
      <div className="container mx-auto px-4 mb-8">
        <SectionHeader
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#049DD9]" />}
          badgeText="Instituciones Oficiales"
          title="Enlaces de Interés"
          titleHighlight="del Estado"
          description="Acceso directo a las plataformas y entidades públicas aliadas del sector educación y servicios ciudadanos."
        />
      </div>

      {/* Contenedor del Marquee con difuminados en los bordes */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Difuminado suave lateral izquierdo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 md:w-44 z-20 bg-gradient-to-r from-[#edf7fc] via-[#edf7fc]/80 to-transparent"
        />

        {/* Difuminado suave lateral derecho */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 md:w-44 z-20 bg-gradient-to-l from-[#eef8fd] via-[#eef8fd]/80 to-transparent"
        />

        {/* Cinta animada continua (pausa suave con hover) */}
        <div className="animate-marquee-infinite flex items-center gap-6 sm:gap-7 px-4">
          {itemsMarquee.map((item, index) => (
            <a
              key={`${item.siglas}-${index}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar portal oficial de ${item.siglas} (${item.nombre})`}
              title={`${item.siglas} - ${item.nombre}`}
              className={`group relative flex items-center justify-center w-52 sm:w-60 h-24 sm:h-28 px-6 py-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 shrink-0 select-none ${item.glowColor}`}
            >
              {/* Icono discreto de enlace externo en la esquina superior al pasar el mouse */}
              <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#049DD9]">
                <ExternalLink className="w-3.5 h-3.5" />
              </div>

              {/* Logo en colores originales completos y destacados */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={item.logo}
                  alt={`Logo de ${item.siglas}`}
                  width={220}
                  height={80}
                  priority={index < 6}
                  className="max-h-14 sm:max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-xs"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
