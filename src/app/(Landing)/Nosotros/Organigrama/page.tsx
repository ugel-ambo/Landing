"use client";

import { useState } from "react";
import { ZoomIn, ZoomOut, Download, Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OrganigramaPage() {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [zoom, setZoom] = useState(100);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/docs/Organigrama.jpg';
        link.download = 'Organigrama-UGEL.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleZoomIn = () => {
        setZoom(prev => Math.min(prev + 25, 200));
    };

    const handleZoomOut = () => {
        setZoom(prev => Math.max(prev - 25, 50));
    };

    const handleReset = () => {
        setZoom(100);
    };

    return (
        <div className="min-h-screen bg-linear-to-b from-white via-blue-50/30 to-white py-12">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Organigrama Institucional
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Estructura organizacional de la UGEL
                    </p>
                </div>

                {/* Vista principal */}
                <div className="w-full">
                    <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-3 bg-linear-to-r from-blue-50 to-blue-100/50 border-b border-blue-200">
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handleZoomOut}
                                    disabled={zoom <= 50}
                                    className="h-9"
                                >
                                    <ZoomOut className="w-4 h-4" />
                                </Button>
                                <span className="text-sm font-medium text-gray-700 min-w-[60px] text-center">
                                    {zoom}%
                                </span>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handleZoomIn}
                                    disabled={zoom >= 200}
                                    className="h-9"
                                >
                                    <ZoomIn className="w-4 h-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handleReset}
                                    className="h-9 text-xs"
                                >
                                    Reiniciar
                                </Button>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handleDownload}
                                    className="h-9"
                                >
                                    <Download className="w-4 h-4 mr-2" />
                                    Descargar
                                </Button>
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
                        </div>

                        {/* Contenedor de imagen */}
                        <div className="overflow-auto bg-gray-50" style={{ maxHeight: 'calc(100vh - 250px)' }}>
                            <div className="p-4 sm:p-6 md:p-8 flex items-center justify-center min-h-[600px]">
                                <div className="w-full flex justify-center">
                                    <img
                                        src="/docs/Organigrama.jpg"
                                        alt="Organigrama Institucional"
                                        className="transition-all duration-300 shadow-xl rounded-lg max-w-full h-auto"
                                        style={{ 
                                            transform: `scale(${zoom / 100})`,
                                            transformOrigin: 'center center'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Pantalla Completa */}
            {isFullScreen && (
                <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
                    <div className="relative w-full h-full">
                        {/* Barra superior */}
                        <div className="absolute top-0 left-0 right-0 bg-black/50 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between z-10">
                            <div className="flex items-center gap-4">
                                <h2 className="text-white font-semibold">Organigrama Institucional</h2>
                                <span className="text-white/70 text-sm">{zoom}%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleZoomOut}
                                    disabled={zoom <= 50}
                                    className="text-white hover:bg-white/10"
                                >
                                    <ZoomOut className="w-4 h-4" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleZoomIn}
                                    disabled={zoom >= 200}
                                    className="text-white hover:bg-white/10"
                                >
                                    <ZoomIn className="w-4 h-4" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleReset}
                                    className="text-white hover:bg-white/10"
                                >
                                    100%
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleDownload}
                                    className="text-white hover:bg-white/10"
                                >
                                    <Download className="w-4 h-4" />
                                </Button>
                                <div className="w-px h-6 bg-white/20 mx-2"></div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsFullScreen(false)}
                                    className="text-white hover:bg-white/10"
                                >
                                    <X className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>

                        {/* Contenedor de imagen */}
                        <div className="w-full h-full overflow-auto pt-20 pb-6 px-6">
                            <div className="flex items-center justify-center min-h-full">
                                <img
                                    src="/docs/Organigrama.jpg"
                                    alt="Organigrama Institucional"
                                    className="transition-all duration-300 rounded-lg shadow-2xl max-w-full h-auto"
                                    style={{ 
                                        transform: `scale(${zoom / 100})`,
                                        transformOrigin: 'center center'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}