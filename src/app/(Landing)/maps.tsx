'use client';
import dynamic from "next/dynamic";

const MapClient = dynamic(() => import("./MapClient"), {
  ssr: false,
  loading: () => <div className="w-full flex justify-center p-6">Cargando mapa...</div>,
});

export default function MapsPage() {
  return (
    <section className="flex flex-col items-center gap-6 p-2 ">
      <div className="text-center mb-2">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Encuentranos más Facil</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Nos encontramos en BL. Ayancocha Nro. 3 Ayancocha, Ambo - Huánuco
        </p>
      </div>
      <MapClient />
    </section>
  );
}