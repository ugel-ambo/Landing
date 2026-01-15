"use client";

import { useState, useImperativeHandle, forwardRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { School, GraduationCap, BookOpen, Eye } from "lucide-react";
import ieData from "@/data/ie.json";

// Colores consistentes con el mapa
const districtColors: Record<string, string> = {
  Ambo: "#049DD9",
  Cayna: "#F29F05",
  Colpas: "#8B5CF6",
  Conchamarca: "#10B981",
  Huacar: "#EF4444",
  "San Francisco": "#EC4899",
  "San Rafael": "#F59E0B",
  "Tomay Kichwa": "#6366F1",
};

interface DistritoData {
  inicial: string[];
  primaria: string[];
  secundaria: string[];
}

type IEDataType = Record<string, DistritoData>;

const typedIeData = ieData as IEDataType;

export interface DistritoAccordionHandle {
  openModal: (distrito: string) => void;
}

interface DistritoAccordionProps {
  externalDistrito?: string | null;
  onModalClose?: () => void;
}

const DistritoAccordion = forwardRef<
  DistritoAccordionHandle,
  DistritoAccordionProps
>(({ externalDistrito, onModalClose }, ref) => {
  const [selectedDistrito, setSelectedDistrito] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Exponer método para abrir modal desde el padre
  useImperativeHandle(ref, () => ({
    openModal: (distrito: string) => {
      setSelectedDistrito(distrito);
      setModalOpen(true);
    },
  }));

  // Efecto para abrir modal cuando viene de props externas
  if (externalDistrito && externalDistrito !== selectedDistrito && !modalOpen) {
    setSelectedDistrito(externalDistrito);
    setModalOpen(true);
  }

  const handleVerDetalles = (distrito: string) => {
    setSelectedDistrito(distrito);
    setModalOpen(true);
  };

  const handleModalClose = (open: boolean) => {
    setModalOpen(open);
    if (!open && onModalClose) {
      onModalClose();
    }
  };

  const getTotal = (distrito: string) => {
    const data = typedIeData[distrito];
    if (!data) return 0;
    return data.inicial.length + data.primaria.length + data.secundaria.length;
  };

  return (
    <>
      <Accordion type="single" collapsible className="w-full space-y-2">
        {Object.keys(typedIeData).map((distrito) => {
          const data = typedIeData[distrito];
          const color = districtColors[distrito] || "#6B7280";

          return (
            <AccordionItem
              key={distrito}
              value={distrito}
              className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="px-3 py-3 hover:no-underline hover:bg-gray-50">
                <div className="flex items-center gap-2 w-full">
                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <span className="font-semibold text-gray-800 text-left text-sm">
                    {distrito}
                  </span>
                  <span className="ml-auto text-xs text-gray-500 mr-2">
                    {getTotal(distrito)} IE
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-3 pb-3">
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="flex flex-col items-center p-2 bg-blue-50 rounded-lg">
                    <BookOpen className="w-4 h-4 text-blue-600 mb-1" />
                    <p className="text-xs text-gray-500">Inicial</p>
                    <p className="font-bold text-blue-600 text-sm">
                      {data.inicial.length}
                    </p>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-green-50 rounded-lg">
                    <School className="w-4 h-4 text-green-600 mb-1" />
                    <p className="text-xs text-gray-500">Primaria</p>
                    <p className="font-bold text-green-600 text-sm">
                      {data.primaria.length}
                    </p>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-purple-50 rounded-lg">
                    <GraduationCap className="w-4 h-4 text-purple-600 mb-1" />
                    <p className="text-xs text-gray-500">Secundaria</p>
                    <p className="font-bold text-purple-600 text-sm">
                      {data.secundaria.length}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() => handleVerDetalles(distrito)}
                  className="w-full text-sm"
                  size="sm"
                  style={{ backgroundColor: color }}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Ver todas las IE
                </Button>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      {/* Modal de detalles */}
      <Dialog open={modalOpen} onOpenChange={handleModalClose}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-xl">
              <div
                className="w-5 h-5 rounded-full"
                style={{
                  backgroundColor: selectedDistrito
                    ? districtColors[selectedDistrito]
                    : "#6B7280",
                }}
              />
              Instituciones Educativas de {selectedDistrito}
            </DialogTitle>
          </DialogHeader>

          {selectedDistrito && typedIeData[selectedDistrito] && (
            <div className="space-y-6 mt-4">
              {/* Inicial */}
              <div>
                <h3 className="flex items-center gap-2 font-semibold text-blue-600 mb-3">
                  <BookOpen className="w-5 h-5" />
                  Nivel Inicial ({typedIeData[selectedDistrito].inicial.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {typedIeData[selectedDistrito].inicial.map((ie, idx) => (
                    <div
                      key={idx}
                      className="p-2 bg-blue-50 rounded-lg text-sm text-gray-700 border border-blue-100"
                    >
                      {ie}
                    </div>
                  ))}
                </div>
              </div>

              {/* Primaria */}
              <div>
                <h3 className="flex items-center gap-2 font-semibold text-green-600 mb-3">
                  <School className="w-5 h-5" />
                  Nivel Primaria (
                  {typedIeData[selectedDistrito].primaria.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {typedIeData[selectedDistrito].primaria.map((ie, idx) => (
                    <div
                      key={idx}
                      className="p-2 bg-green-50 rounded-lg text-sm text-gray-700 border border-green-100"
                    >
                      {ie}
                    </div>
                  ))}
                </div>
              </div>

              {/* Secundaria */}
              <div>
                <h3 className="flex items-center gap-2 font-semibold text-purple-600 mb-3">
                  <GraduationCap className="w-5 h-5" />
                  Nivel Secundaria (
                  {typedIeData[selectedDistrito].secundaria.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {typedIeData[selectedDistrito].secundaria.map((ie, idx) => (
                    <div
                      key={idx}
                      className="p-2 bg-purple-50 rounded-lg text-sm text-gray-700 border border-purple-100"
                    >
                      {ie}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
});

DistritoAccordion.displayName = "DistritoAccordion";

export default DistritoAccordion;
