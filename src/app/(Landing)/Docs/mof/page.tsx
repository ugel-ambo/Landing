"use client";
import { Button } from "@/components/ui/button";
import { Maximize2, X } from "lucide-react";
import { useState } from "react";

export default function MOFPage() {
    const [isFullScreen, setIsFullScreen] = useState(false);

    return (
        <>
            <div className="min-h-screen bg-linear-to-b from-white via-blue-50/30 to-white py-6">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Header */}
                    <div className="text-center mb-6">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                            Manual de Organización y Funciones
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Documento oficial del MOF de la UGEL
                        </p>
                    </div>

                    {/* Vista principal */}
                    <div className="w-full">
                        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
                            <div className="flex justify-end px-4 py-3 bg-linear-to-r from-blue-50 to-blue-100/50 border-b border-blue-200">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setIsFullScreen(true)}
                                    className="h-9"
                                >
                                    <Maximize2 className="w-4 h-4 mr-2" />
                                    Pantalla completa
                                </Button>
                            </div>
                            {/* Contenedor de PDF */}
                            <div className="overflow-hidden bg-gray-50" style={{ height: 'calc(100vh - 250px)' }}>
                                <iframe
                                    src="/docs/mof.pdf"
                                    className="w-full h-full border-0"
                                    title="Manual de Organización y Funciones"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Pantalla Completa */}
            {isFullScreen && (
                <div className="fixed inset-0 z-50 bg-black">
                    <div className="relative w-full h-full">
                        {/* Barra superior */}
                        <div className="absolute top-0 left-0 right-0 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between z-10">
                            <h2 className="text-white font-semibold">Manual de Organización y Funciones</h2>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsFullScreen(false)}
                                className="text-white hover:bg-white/10"
                            >
                                <X className="w-5 h-5 mr-2" />
                                Cerrar
                            </Button>
                        </div>

                        {/* Contenedor de PDF */}
                        <div className="w-full h-full pt-16">
                            <iframe
                                src="/docs/mof.pdf"
                                className="w-full h-full border-0"
                                title="Manual de Organización y Funciones"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}