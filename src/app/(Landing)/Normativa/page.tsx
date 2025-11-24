import { Suspense } from "react"
import { FileText, RefreshCw, Calendar } from "lucide-react"
import NormCard from "./components/NormCard"
import { ScrapingResponse } from "@/types/scrape.types";

// Forzar rendering dinámico para evitar errores en build
export const dynamic = 'force-dynamic';

async function getNormas(): Promise<ScrapingResponse> {
    try {
        // En desarrollo, usar localhost; en producción, usar la URL absoluta
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const response = await fetch(`${baseUrl}/api/scrape-normas`, {
            cache: 'no-store', // Siempre verificar el cache del servidor
        });

        if (!response.ok) {
            throw new Error('Error al obtener las normas');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching normas:', error);
        return {
            success: false,
            data: [],
            cached: false,
            lastUpdated: new Date().toISOString(),
            nextUpdate: new Date().toISOString(),
            error: error instanceof Error ? error.message : 'Error desconocido',
        };
    }
}

function LoadingSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="border rounded-xl p-6 animate-pulse">
                    <div className="flex gap-3 mb-4">
                        <div className="w-20 h-28 bg-gray-200 rounded" />
                        <div className="flex-1 space-y-2">
                            <div className="h-4 bg-gray-200 rounded w-24" />
                            <div className="h-4 bg-gray-200 rounded w-full" />
                            <div className="h-4 bg-gray-200 rounded w-3/4" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded w-full" />
                        <div className="h-3 bg-gray-200 rounded w-full" />
                        <div className="h-3 bg-gray-200 rounded w-2/3" />
                    </div>
                </div>
            ))}
        </div>
    )
}

function formatearFecha(isoString: string): string {
    const fecha = new Date(isoString);
    return fecha.toLocaleString('es-PE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
}

export default async function NormativaPage() {
    const result = await getNormas();

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                        <FileText className="w-4 h-4" />
                        Normativa Legal Educativa
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        Normas Legales de Educación
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                        Consulta las últimas resoluciones, directivas y normas legales relacionadas con el sector educación
                        publicadas en el Diario Oficial El Peruano.
                    </p>

                    {/* Info de actualización */}
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>Últimos 2 días</span>
                        </div>

                        {result.success && (
                            <>
                                <div className="flex items-center gap-2">
                                    <RefreshCw className={`w-4 h-4 ${result.cached ? '' : 'text-green-600'}`} />
                                    <span>
                                        {result.cached ? 'Cache:' : 'Actualizado:'} {formatearFecha(result.lastUpdated)}
                                    </span>
                                </div>

                                <div className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                                    Próxima actualización: {formatearFecha(result.nextUpdate)}
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Contenido */}
                <Suspense fallback={<LoadingSkeleton />}>
                    {result.success ? (
                        result.data.length > 0 ? (
                            <>
                                <div className="text-center mb-6">
                                    <p className="text-sm font-medium text-gray-600">
                                        Se encontraron <span className="text-primary font-bold">{result.data.length}</span> normas de Educación e Instituciones Educativas
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {result.data.map((norma, index) => (
                                        <NormCard key={`${norma.titulo}-${index}`} norma={norma} />
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="text-center py-16">
                                <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                                <h3 className="text-xl font-semibold mb-2 text-gray-600">
                                    No se encontraron normas
                                </h3>
                                <p className="text-muted-foreground">
                                    No hay normas de Educación o Instituciones Educativas publicadas en los últimos 5 días.
                                </p>
                            </div>
                        )
                    ) : (
                        <div className="text-center py-16 bg-red-50 rounded-xl border border-red-200">
                            <div className="text-red-600 mb-4">
                                <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-red-800">
                                Error al cargar las normas
                            </h3>
                            <p className="text-red-600 mb-4">
                                {result.error || 'Ocurrió un error desconocido'}
                            </p>
                            <p className="text-sm text-red-500">
                                Por favor, intenta recargar la página en unos momentos.
                            </p>
                        </div>
                    )}
                </Suspense>
            </div>
        </div>
    )
}
