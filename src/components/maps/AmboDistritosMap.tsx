"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import distritosData from "@/data/distritos.json";

// Colores para cada distrito
const districtColors: Record<string, string> = {
  AMBO: "#049DD9",
  CAYNA: "#F29F05",
  COLPAS: "#8B5CF6",
  CONCHAMARCA: "#10B981",
  HUACAR: "#EF4444",
  "SAN FRANCISCO": "#EC4899",
  "SAN RAFAEL": "#F59E0B",
  TOMAYKICHWA: "#6366F1",
};

// Mapeo de nombres de distritos del mapa a nombres en ie.json
const districtNameMap: Record<string, string> = {
  AMBO: "Ambo",
  CAYNA: "Cayna",
  COLPAS: "Colpas",
  CONCHAMARCA: "Conchamarca",
  HUACAR: "Huacar",
  "SAN FRANCISCO": "San Francisco",
  "SAN RAFAEL": "San Rafael",
  TOMAYKICHWA: "Tomay Kichwa",
};

interface AmboDistritosMapProps {
  onDistrictClick?: (distrito: string) => void;
}

export default function AmboDistritosMap({
  onDistrictClick,
}: AmboDistritosMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Crear el mapa centrado en Ambo con límites de Huánuco
    const map = L.map(mapRef.current, {
      center: [-10.15, -76.2],
      zoom: 10,
      scrollWheelZoom: true,
      maxBounds: [
        [-9.5, -77.0], // Esquina noroeste
        [-10.8, -75.5], // Esquina sureste
      ],
      maxBoundsViscosity: 1.0,
      minZoom: 9,
      maxZoom: 14,
    });

    mapInstanceRef.current = map;

    // Capa base de OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    // Agregar GeoJSON de distritos
    const geoJsonLayer = L.geoJSON(distritosData as GeoJSON.FeatureCollection, {
      style: (feature) => {
        const districtName = feature?.properties?.NOMBDIST || "";
        return {
          fillColor: districtColors[districtName] || "#3B82F6",
          weight: 2,
          opacity: 1,
          color: "#ffffff",
          fillOpacity: 0.6,
        };
      },
      onEachFeature: (feature, layer) => {
        const props = feature.properties;
        const popupContent = `
          <div class="p-2">
            <h3 class="font-bold text-lg text-gray-800">${props.NOMBDIST}</h3>
            <p class="text-sm text-gray-600">Capital: ${props.NOM_CAP}</p>
            <p class="text-sm text-gray-600">Provincia: ${props.NOMBPROV}</p>
            <p class="text-sm text-gray-600">Área: ${props.AREA_MINAM?.toLocaleString()} km²</p>
            <button 
              class="mt-2 w-full px-3 py-1.5 bg-[#049DD9] text-white text-sm font-medium rounded-md hover:bg-[#0387bd] transition-colors"
              onclick="window.dispatchEvent(new CustomEvent('districtClick', { detail: '${
                props.NOMBDIST
              }' }))"
            >
              Ver Instituciones Educativas
            </button>
          </div>
        `;
        layer.bindPopup(popupContent);

        // Hover effects
        layer.on({
          mouseover: (e) => {
            const l = e.target;
            l.setStyle({
              weight: 3,
              fillOpacity: 0.8,
            });
            l.bringToFront();
          },
          mouseout: (e) => {
            geoJsonLayer.resetStyle(e.target);
          },
        });
      },
    }).addTo(map);

    // Ajustar vista al GeoJSON
    map.fitBounds(geoJsonLayer.getBounds(), { padding: [20, 20] });

    // Listener para clicks de distrito
    const handleDistrictClick = (e: CustomEvent) => {
      const districtName = e.detail as string;
      const mappedName = districtNameMap[districtName];
      if (mappedName && onDistrictClick) {
        onDistrictClick(mappedName);
      }
    };

    window.addEventListener(
      "districtClick",
      handleDistrictClick as EventListener
    );

    return () => {
      window.removeEventListener(
        "districtClick",
        handleDistrictClick as EventListener
      );
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [onDistrictClick]);

  return (
    <div className="relative w-full">
      <div
        ref={mapRef}
        className="w-full h-[400px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg z-0"
      />

      {/* Leyenda */}
      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg z-[1000]">
        <h4 className="font-semibold text-gray-800 mb-2 text-xs">
          Distritos de Ambo
        </h4>
        <div className="space-y-1">
          {Object.entries(districtColors).map(([name, color]) => (
            <div key={name} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded"
                style={{ backgroundColor: color }}
              />
              <span className="text-[10px] text-gray-700">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
