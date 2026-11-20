"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Search,
  Download,
  FileText,
  ChevronDown,
  ChevronUp,
  BriefcaseBusiness,
} from "lucide-react";
import {
  Convocatoria,
  ConvocatoriaArchivo,
  getEstadoTexto,
  getEstadoColor,
  ETAPA_LABELS,
} from "@/types/convocatoria.types";
import { motion, AnimatePresence } from "framer-motion";

interface ConvocatoriaListProps {
  initialConvocatorias: Convocatoria[];
}

export default function ConvocatoriaList({
  initialConvocatorias,
}: ConvocatoriaListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredConvocatorias = initialConvocatorias.filter(
    (conv) =>
      conv.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      getEstadoTexto(conv.estado)
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("es-PE", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const renderArchivosEtapa = (archivo: ConvocatoriaArchivo) => {
    if (!archivo.documentos || archivo.documentos.length === 0) return null;

    return (
      <div key={archivo.id || archivo.etapa} className="min-w-0 rounded-xl border border-[#dcebf2] bg-white p-4 shadow-sm">
        <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38677c]">
          <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-[#049DD9]" />
          {ETAPA_LABELS[archivo.etapa] || archivo.etapa}
        </h4>
        <div className="grid gap-2">
          {archivo.documentos.map((doc, idx) => (
            <a
              key={idx}
              href={doc.urlDrive}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-w-0 items-center gap-3 rounded-lg bg-[#f4fafd] p-3 transition-colors hover:bg-[#e7f5fb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#049DD9]"
            >
              <FileText className="h-4 w-4 shrink-0 text-[#049DD9]" aria-hidden="true" />
              <span className="min-w-0 flex-1 break-words text-sm text-[#23445b]">
                {doc.nombreArchivo}
              </span>
              <Download className="h-4 w-4 shrink-0 text-[#83a6b5] group-hover:text-[#049DD9]" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[#dcecf3] bg-white p-4 shadow-[0_10px_30px_-24px_rgba(15,58,84,0.35)] sm:p-5">
        <label htmlFor="buscar-convocatoria" className="mb-2 block text-sm font-bold text-[#223F59]">Encuentra una convocatoria</label>
        <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#66a2b9]" aria-hidden="true" />
        <Input
          id="buscar-convocatoria"
          type="text"
          placeholder="Buscar convocatoria..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="h-12 rounded-xl border-[#d9e9f0] bg-[#f7fbfd] pl-12 text-sm shadow-none focus-visible:ring-[#049DD9]/30"
        />
        </div>
        <p role="status" className="mt-3 text-sm text-slate-500"><strong className="text-[#087da9]">{filteredConvocatorias.length}</strong> {filteredConvocatorias.length === 1 ? "proceso encontrado" : "procesos encontrados"}</p>
      </div>

      <div className="space-y-4">
        {filteredConvocatorias.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#c4dfe9] bg-white px-6 py-16 text-center">
            <Search className="mx-auto h-8 w-8 text-[#83b6c9]" aria-hidden="true" />
            <p className="mt-4 font-bold text-[#23445b]">{searchTerm ? "No encontramos convocatorias" : "No hay convocatorias disponibles"}</p>
            <p className="mt-1 text-sm text-slate-500">{searchTerm ? "Prueba con otra búsqueda." : "Vuelve a consultar más adelante."}</p>
          </div>
        ) : (
          filteredConvocatorias.map((conv, index) => (
            <motion.div
              key={conv._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card
                className={`overflow-hidden rounded-2xl border bg-white py-0 transition-all duration-300 ${
                  expandedId === conv._id
                    ? "border-[#9dd8ea] shadow-[0_12px_30px_-20px_rgba(4,125,169,0.4)]"
                    : "border-[#dfedf3] shadow-[0_6px_24px_-20px_rgba(19,57,79,0.35)] hover:border-[#b8dfe9] hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={expandedId === conv._id}
                  className="w-full p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#049DD9] sm:p-6"
                  onClick={() => toggleExpand(conv._id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex min-w-0 flex-1 gap-4">
                      <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eaf7fc] text-[#049DD9] sm:flex"><BriefcaseBusiness className="h-6 w-6" aria-hidden="true" /></span>
                      <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge
                          className={`${getEstadoColor(
                            conv.estado
                          )} text-white border-none`}
                        >
                          {getEstadoTexto(conv.estado)}
                        </Badge>
                      </div>
                      <h3 className="text-base font-bold leading-snug text-[#223F59] sm:text-lg">
                        {conv.nombre}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1 text-[#049DD9]" />
                          <span>
                            Inscripción:{" "}
                            {formatDate(conv.fechaInicioInscripcion)} -{" "}
                            {formatDate(conv.fechaFinInscripcion)}
                          </span>
                        </div>
                      </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      <span className="inline-flex items-center rounded-full bg-[#eaf7fc] px-4 py-2 text-sm font-semibold text-[#087da9]">
                        {expandedId === conv._id ? (
                          <>
                            Menos detalles{" "}
                            <ChevronUp className="ml-2 w-4 h-4" />
                          </>
                        ) : (
                          <>
                            Ver documentos{" "}
                            <ChevronDown className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {expandedId === conv._id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="border-t border-[#e3eff4] bg-[#f3f9fc] px-5 py-5 sm:px-6">
                        <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-[#223F59]"><FileText className="h-4 w-4 text-[#049DD9]" aria-hidden="true" /> Documentos de la convocatoria</h4>
                        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                          {conv.archivos?.some((archivo) => archivo.documentos?.length > 0) ? (
                            conv.archivos.map((archivo) =>
                              renderArchivosEtapa(archivo)
                            )
                          ) : (
                            <p className="text-muted-foreground text-sm">
                              No hay documentos disponibles para esta
                              convocatoria.
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
