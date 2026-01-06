"use client";

import { useState } from "react";
import { IFortalecimiento } from "@/models/Fortalecimiento";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, Search, FileText } from "lucide-react";
import { motion } from "framer-motion";

interface FortalecimientoViewProps {
    initialData: IFortalecimiento[];
    area: string;
}

export default function FortalecimientoView({ initialData, area }: FortalecimientoViewProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = initialData.filter((item) =>
        item.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.descripcion?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="space-y-1">
                    <h2 className="text-2xl font-bold text-gray-800">Recursos de Fortalecimiento</h2>
                    <p className="text-gray-500 text-sm">Encuentra materiales de cursos y charlas para {area}</p>
                </div>
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                        placeholder="Buscar por título o descripción..."
                        className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {filteredData.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                    <FileText className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                    <p className="text-gray-500 font-medium">No se encontraron recursos disponibles.</p>
                    <p className="text-gray-400 text-sm mt-1">Intenta con otros términos de búsqueda.</p>
                </div>
            ) : (
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredData.map((recurso, index) => (
                        <motion.div key={index} variants={item}>
                            <Card className="h-full hover:shadow-lg transition-all duration-300 border-gray-200 group overflow-hidden">
                                <CardHeader className="pb-3 relative">
                                    <div className="absolute top-0 right-0 p-4">
                                        <Badge variant={recurso.tipo === 'Curso' ? 'default' : 'secondary'} className="capitalize">
                                            {recurso.tipo}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-xl font-bold text-gray-800 line-clamp-2 pr-16 mt-2">
                                        {recurso.titulo}
                                    </CardTitle>
                                    <CardDescription className="flex items-center gap-2 text-sm mt-2">
                                        <Calendar className="h-4 w-4 text-[#049DD9]" />
                                        <span className="font-medium text-gray-600">{recurso.fecha}</span>
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pb-4">
                                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                                        {recurso.descripcion || "Sin descripción disponible."}
                                    </p>
                                </CardContent>
                                <CardFooter className="pt-0">
                                    {recurso.linkRecursos ? (
                                        <Button
                                            className="w-full bg-[#049DD9] hover:bg-[#0388bd] text-white gap-2 shadow-md group-hover:shadow-lg transition-all"
                                            onClick={() => window.open(recurso.linkRecursos, '_blank')}
                                        >
                                            <Download className="h-4 w-4" />
                                            Descargar Materiales
                                        </Button>
                                    ) : (
                                        <Button variant="outline" disabled className="w-full gap-2 bg-gray-50">
                                            <Download className="h-4 w-4" />
                                            No disponible
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
}
