'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

// iconos
import iconMarker from 'leaflet/dist/images/marker-icon.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: iconMarker,
  shadowUrl: iconShadow,
});

export default function MapClient() {
  const ugelData = {
    name: 'UGEL AMBO',
    address: 'Bl. Ayancocha Nro. 3 Ayancocha (Misma Plaza de Ayancocha), Ambo, Huánuco',
    phone: '(+51) 123-456-789',
    email: 'ugelambo308@gmail.com',
    schedule: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
    position: [-10.109838, -76.208217] as [number, number]
  };

  return (
    <div className="w-full py-4 px-4 mb-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Información de contacto */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-[500px]">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{ugelData.name}</h3>

            <div className="space-y-4 flex-1">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Dirección</p>
                  <p className="text-gray-600">{ugelData.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Teléfono</p>
                  <p className="text-gray-600">{ugelData.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Correo Electrónico</p>
                  <p className="text-gray-600">{ugelData.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Horario de Atención</p>
                  <p className="text-gray-600">{ugelData.schedule}</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 mt-auto justify-center flex ">
              <a
                href={`https://www.google.com/maps?q=${ugelData.position[0]},${ugelData.position[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[500px]">
            <MapContainer
              center={ugelData.position}
              zoom={17}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
              className="z-0"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={ugelData.position}>
                <Popup>
                  <div className="text-center p-2">
                    <p className="font-bold text-lg">{ugelData.name}</p>
                    <p className="text-sm text-gray-600 mt-1">{ugelData.address}</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}