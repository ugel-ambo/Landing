'use client';
import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";
import SectionHeader from "@/components/section-header";

const MapClient = dynamic(() => import("./MapClient"), {
  ssr: false,
  loading: () => (
    <div className="mx-auto max-w-7xl px-4">
      <div className="h-[480px] w-full animate-pulse rounded-2xl bg-muted" />
    </div>
  ),
});

export default function MapsPage() {
  return (
    <section className="w-full py-16 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <SectionHeader
          badgeIcon={<MapPin className="w-3.5 h-3.5 text-[#049DD9]" />}
          badgeText="Sede Institucional"
          title="Encuentranos"
          titleHighlight="en Ambo"
          description="Estamos ubicados en Bl. Ayancocha Nro. 3 Ayancocha, Ambo - Huanuco. Visitanos en nuestro horario de atencion presencial o comunicate con nosotros."
        />

        <MapClient />
      </div>
    </section>
  );
}

