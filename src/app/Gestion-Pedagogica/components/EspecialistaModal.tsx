import { Badge } from "@/components/ui/badge";

import ColegioItem from "./ColegioItem";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Especialista } from "../types";

type EspecialistaModalProps = {
  especialista: Especialista | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  nivel: string;
};

export default function EspecialistaModal({ especialista, open, onOpenChange, nivel }: EspecialistaModalProps) {
  if (!especialista) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] flex flex-col overflow-hidden">
        <DialogHeader className="shrink-0">
          <div className="flex items-center gap-6 mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-md flex-shrink-0 bg-white">
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
            <div>
              <DialogTitle className="text-2xl mb-2">
                {especialista.especialista_responsable}
              </DialogTitle>
              <Badge variant="secondary">Nivel {nivel}</Badge>
            </div>
          </div>
          <DialogDescription className="text-base text-muted-foreground">
            {especialista.presentacion}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 flex flex-col flex-1 min-h-0">
          <div className="flex items-center justify-between mb-4 flex-shrink-0">
            <h3 className="text-lg font-semibold">Colegios a Cargo</h3>
            <Badge variant="outline" className="text-sm">
              {especialista.colegios.length} instituciones
            </Badge>
          </div>

          <div className="overflow-y-auto pr-4 flex-1">
            <div className="space-y-3 pb-4">
              {especialista.colegios.map((colegio, idx) => (
                <ColegioItem key={idx} colegio={colegio} />
              ))}
            </div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}