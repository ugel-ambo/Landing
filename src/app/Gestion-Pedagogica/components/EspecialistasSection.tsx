"use client";
import { useState } from "react";
import EspecialistaCard from "./EspecialistaCard";
import EspecialistaModal from "./EspecialistaModal";
import { Especialista } from "../types";

type EspecialistasSectionProps = {
  data: Especialista[];
  title?: string;
  subtitle?: string;
  nivel?: string;
};

export default function EspecialistasSection({ 
    data, 
    title = "Directorio de Especialistas",
    subtitle = "Conoce a nuestro equipo de especialistas educativos",
    nivel = "Inicial" 
  }: EspecialistasSectionProps) {
    const [selectedEspecialista, setSelectedEspecialista] = useState<Especialista | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);
  
    const handleVerDetalles = (especialista: Especialista) => {
      setSelectedEspecialista(especialista);
      setDialogOpen(true);
    };
  
    return (
      <section className="py-10 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
  
          <div className="flex flex-wrap justify-center gap-8">
            {data.map((especialista, index) => (
              <EspecialistaCard
                key={index}
                especialista={especialista}
                nivel={nivel}
                onVerDetalles={handleVerDetalles}
              />
            ))}
          </div>
  
          <EspecialistaModal
            especialista={selectedEspecialista}
            open={dialogOpen}
            onOpenChange={setDialogOpen}
            nivel={nivel}
          />
        </div>
      </section>
    );
  }