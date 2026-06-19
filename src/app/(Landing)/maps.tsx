'use client';
import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
        <div className="mb-10 flex flex-col items-center text-center">
          <Badge
            variant="secondary"
            className="mb-4 gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-primary hover:bg-primary/10"
          >
            <MapPin className="size-3.5" />
            Ubicación
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Encuéntranos más fácil
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
            Estamos ubicados en Bl. Ayancocha Nro. 3 Ayancocha, Ambo - Huánuco.
            Visítanos o escríbenos, con gusto te atenderemos.
          </p>
        </div>

        <MapClient />
      </div>
    </section>
  );
}
