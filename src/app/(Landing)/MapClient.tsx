'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const ugelData = {
  name: 'UGEL Ambo',
  address: 'Bl. Ayancocha Nro. 3 Ayancocha (Misma Plaza de Ayancocha), Ambo, Huánuco',
  phone: '(+51) 123-456-789',
  email: 'ugelambo308@gmail.com',
  schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
  position: [-10.109838, -76.208217] as [number, number],
};

// Marcador personalizado con color de marca y animación de pulso
const brandIcon = L.divIcon({
  className: 'ugel-marker',
  html: `
    <span class="ugel-marker__pulse"></span>
    <span class="ugel-marker__pin">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z" fill="#049dd9" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="12" cy="10" r="2.6" fill="#ffffff"/>
      </svg>
    </span>
  `,
  iconSize: [36, 36],
  iconAnchor: [18, 34],
  popupAnchor: [0, -30],
});

const contactItems = [
  {
    icon: MapPin,
    label: 'Dirección',
    value: ugelData.address,
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: ugelData.phone,
    href: `tel:${ugelData.phone.replace(/[^0-9+]/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Correo electrónico',
    value: ugelData.email,
    href: `mailto:${ugelData.email}`,
  },
  {
    icon: Clock,
    label: 'Horario de atención',
    value: ugelData.schedule,
  },
];

export default function MapClient() {
  const gmapsUrl = `https://www.google.com/maps?q=${ugelData.position[0]},${ugelData.position[1]}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${ugelData.position[0]},${ugelData.position[1]}`;

  return (
    <>
      <Card className="overflow-hidden border-border/60 p-0 shadow-sm">
        <div className="grid lg:grid-cols-[1fr_1.15fr]">
          {/* Información de contacto */}
          <div className="flex flex-col gap-6 p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="size-5" />
              </span>
              <div>
                <h3 className="text-xl font-bold leading-tight text-foreground">
                  {ugelData.name}
                </h3>
                <p className="text-sm text-muted-foreground">Unidad de Gestión Educativa Local</p>
              </div>
            </div>

            <Separator />

            <ul className="flex flex-col gap-5">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-primary">
                    <Icon className="size-[18px]" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="break-words text-sm font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="break-words text-sm font-medium text-foreground">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row">
              <Button asChild className="flex-1">
                <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="size-4" />
                  Cómo llegar
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <a href={gmapsUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="size-4" />
                  Ver en Google Maps
                </a>
              </Button>
            </div>
          </div>

          {/* Mapa */}
          <div className="relative h-[380px] lg:h-auto lg:min-h-[560px]">
            <MapContainer
              center={ugelData.position}
              zoom={17}
              maxZoom={19}
              scrollWheelZoom={false}
              zoomControl={true}
              className="absolute inset-0 z-0 h-full w-full"
            >
              {/* Capa base: imágenes satelitales (muestra casas y terreno real).
                  Esri solo tiene imágenes hasta ~z17 en esta zona rural; para
                  más acercamiento se escala la última disponible (maxNativeZoom). */}
              <TileLayer
                attribution='&copy; <a href="https://www.esri.com">Esri</a>, Maxar, Earthstar Geographics'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                maxNativeZoom={17}
                maxZoom={19}
              />
              {/* Etiquetas OSM: calles + puntos de interés (colegios, iglesias, plazas, etc.) */}
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png"
                maxZoom={19}
              />
              <Marker position={ugelData.position} icon={brandIcon}>
                <Popup>
                  <div className="p-1 text-center">
                    <p className="text-sm font-bold text-foreground">{ugelData.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{ugelData.address}</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>

            {/* Tarjeta flotante sobre el mapa */}
            <div className="pointer-events-none absolute right-4 top-4 z-[400] rounded-xl border border-border/60 bg-background/90 px-4 py-2.5 shadow-md backdrop-blur-sm">
              <p className="text-xs font-semibold text-foreground">UGEL Ambo</p>
              <p className="text-[11px] text-muted-foreground">Ayancocha, Ambo - Huánuco</p>
            </div>
          </div>
        </div>
      </Card>

      <style jsx global>{`
        .ugel-marker {
          background: transparent;
          border: none;
        }
        .ugel-marker__pin {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 36px;
          height: 36px;
          display: block;
          filter: drop-shadow(0 4px 6px rgba(2, 73, 122, 0.35));
          animation: ugel-marker-drop 0.5s ease-out;
        }
        .ugel-marker__pulse {
          position: absolute;
          left: 50%;
          top: 28px;
          width: 14px;
          height: 14px;
          transform: translate(-50%, -50%);
          border-radius: 9999px;
          background: rgba(4, 157, 217, 0.45);
          animation: ugel-marker-pulse 1.8s ease-out infinite;
        }
        @keyframes ugel-marker-pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.6);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.8);
            opacity: 0;
          }
        }
        @keyframes ugel-marker-drop {
          0% {
            transform: translateX(-50%) translateY(-10px);
            opacity: 0;
          }
          100% {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
        }
        .leaflet-popup-content-wrapper {
          border-radius: 12px;
        }
      `}</style>
    </>
  );
}
