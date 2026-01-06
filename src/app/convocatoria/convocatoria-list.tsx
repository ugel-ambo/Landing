"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Search, Download, FileText, ChevronDown, ChevronUp } from "lucide-react"
import { Convocatoria, ConvocatoriaArchivo } from "@/types/convocatoria.types"
import { motion, AnimatePresence } from "framer-motion"

interface ConvocatoriaListProps {
    initialConvocatorias: Convocatoria[]
}

export default function ConvocatoriaList({ initialConvocatorias }: ConvocatoriaListProps) {
    const [searchTerm, setSearchTerm] = useState("")
    const [expandedId, setExpandedId] = useState<number | null>(null)

    const filteredConvocatorias = initialConvocatorias.filter(conv =>
        conv.nom_proceso.toLowerCase().includes(searchTerm.toLowerCase()) ||
        conv.texto.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id)
    }

    const getStatusColor = (text: string) => {
        const status = text.toUpperCase()
        if (status.includes('VIGENTE') || status.includes('EN PROCESO')) return 'bg-green-500 hover:bg-green-600'
        if (status.includes('CONCLUIDO') || status.includes('FINALIZADO')) return 'bg-red-500 hover:bg-red-600'
        return 'bg-blue-500 hover:bg-blue-600'
    }

    const renderFiles = (files?: ConvocatoriaArchivo[], title?: string) => {
        if (!files || files.length === 0) return null
        return (
            <div className="mb-4 last:mb-0">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">{title}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {files.map((file, idx) => (
                        <a
                            key={idx}
                            href={file.url_archivo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-2 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors group"
                        >
                            <FileText className="w-4 h-4 text-red-500 mr-2" />
                            <span className="text-sm text-gray-600 group-hover:text-gray-900 truncate flex-1">
                                {file.nom_archivo}
                            </span>
                            <Download className="w-4 h-4 text-gray-400 group-hover:text-[#049DD9]" />
                        </a>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                    type="text"
                    placeholder="Buscar convocatoria..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 py-6 text-lg shadow-sm"
                />
            </div>

            <div className="space-y-4">
                {filteredConvocatorias.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                        No se encontraron convocatorias que coincidan con tu búsqueda.
                    </div>
                ) : (
                    filteredConvocatorias.map((conv, index) => (
                        <motion.div
                            key={conv.idproceso}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Card className={`overflow-hidden transition-all duration-300 ${expandedId === conv.idproceso ? 'ring-2 ring-[#049DD9] shadow-lg' : 'hover:shadow-md'}`}>
                                <div
                                    className="p-6 cursor-pointer"
                                    onClick={() => toggleExpand(conv.idproceso)}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Badge className={`${getStatusColor(conv.texto)} text-white border-none`}>
                                                    {conv.texto}
                                                </Badge>
                                                <span className="text-xs text-muted-foreground font-mono bg-gray-100 px-2 py-1 rounded-full">
                                                    CAS {conv.idproceso}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 leading-tight">
                                                {conv.nom_proceso}
                                            </h3>
                                            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                                                <div className="flex items-center">
                                                    <Calendar className="w-4 h-4 mr-1 text-[#049DD9]" />
                                                    <span>Inscripción: {conv.ini_insc} - {conv.fin_insc}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between md:justify-end w-full md:w-auto mt-2 md:mt-0">
                                            <Button variant="ghost" size="sm" className="ml-auto">
                                                {expandedId === conv.idproceso ? (
                                                    <>Menos detalles <ChevronUp className="ml-2 w-4 h-4" /></>
                                                ) : (
                                                    <>Ver documentos <ChevronDown className="ml-2 w-4 h-4" /></>
                                                )}
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {expandedId === conv.idproceso && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="px-6 pb-6 pt-0 border-t border-gray-100 bg-gray-50/50">
                                                <div className="pt-4 space-y-4">
                                                    {renderFiles(conv.detalle.inscripcion, "Bases e Inscripción")}
                                                    {renderFiles(conv.detalle.curricular, "Evaluación Curricular")}
                                                    {renderFiles(conv.detalle.entrevista, "Entrevista Personal")}
                                                    {renderFiles(conv.detalle.final, "Resultados Finales")}

                                                    {/* Render other keys if they exist and are not empty */}
                                                    {Object.entries(conv.detalle).map(([key, files]) => {
                                                        if (['inscripcion', 'curricular', 'entrevista', 'final'].includes(key)) return null;
                                                        if (!files || files.length === 0) return null;
                                                        return renderFiles(files, key.charAt(0).toUpperCase() + key.slice(1));
                                                    })}
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
    )
}
