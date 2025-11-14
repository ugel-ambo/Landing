import { Badge } from "@/components/ui/badge";
import { MapPin, School } from "lucide-react";
import { Colegio } from "../types";

type ColegioItemProps = {
  colegio: Colegio;
};

export default function ColegioItem({ colegio }: ColegioItemProps) {
    return (
      <div className="p-4 bg-muted/50 rounded-lg border hover:bg-muted transition-colors">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <School className="w-5 h-5 text-primary" />
              <h4 className="font-semibold">I.E. {colegio.colegio}</h4>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{colegio.ubicacion}</span>
            </div>
          </div>
          <Badge variant="secondary" className="ml-4">
            {colegio.nivel_modalidad}
          </Badge>
        </div>
      </div>
    );
  }