import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, School } from "lucide-react";
import { Especialista } from "../types";

type EspecialistaCardProps = {
  especialista: Especialista;
  nivel: string;
  onVerDetalles: (especialista: Especialista) => void;
};

export default function EspecialistaCard({ especialista, nivel, onVerDetalles }: EspecialistaCardProps) {
    return (
      <div className="relative pt-16">
        {/* Foto sobresaliendo del card */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-background shadow-xl bg-white">
            <img
              src={especialista.image}
              alt={especialista.especialista_responsable}
              className="w-full h-full object-cover"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(especialista.especialista_responsable)}&background=0ea5e9&color=fff&size=200`;
              }}
            />
          </div>
        </div>
  
        <Card className="hover:shadow-lg transition-shadow pt-16 flex flex-col h-full">
          <CardHeader className="text-center pb-3">
            <CardTitle className="text-lg font-semibold">
              {especialista.especialista_responsable}
            </CardTitle>
            <Badge variant="secondary" className="mx-auto mt-2">
              Nivel {nivel}
            </Badge>
          </CardHeader>
  
          <CardContent className="flex flex-col grow space-y-4">
            <CardDescription className="text-center text-muted-foreground min-h-[60px] grow">
              {especialista.presentacion}
            </CardDescription>
  
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <School className="w-4 h-4 text-primary" />
              <span className="font-semibold text-foreground">
                {especialista.colegios.length}
              </span>
              <span>colegios asignados</span>
            </div>
  
            <Button 
              onClick={() => onVerDetalles(especialista)}
              variant="outline"
              className="w-full bg-transparent mt-auto"
            >
              <Eye className="w-4 h-4 mr-2" />
              Ver Detalles
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
  