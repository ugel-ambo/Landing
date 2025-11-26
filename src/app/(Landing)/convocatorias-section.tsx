"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, FileText, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react"
import { Convocatoria, ConvocatoriasResponse } from "@/types/convocatoria.types"
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"

export default function ConvocatoriasSection() {
    const [convocatorias, setConvocatorias] = useState<Convocatoria[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchConvocatorias = async () => {
            try {
                const res = await fetch('/api/convocatorias')
                if (!res.ok) throw new Error('Error al cargar convocatorias')
                const data: ConvocatoriasResponse = await res.json()
                // Sort by idproceso descending (assuming higher ID is newer) or by date if needed.
                // The API seems to return them in some order, but let's take the first 3.
                // If we need to sort by date, we can parse 'ini_insc'.
                // For now, let's assume the API returns them in a reasonable order or we take the top 3.
                setConvocatorias(data.convocatorias.slice(0, 3))
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Error desconocido')
            } finally {
                setLoading(false)
            }
        }

        fetchConvocatorias()
    }, [])

    const getStatusColor = (text: string) => {
        const status = text.toUpperCase()
        if (status.includes('VIGENTE') || status.includes('EN PROCESO')) return 'bg-green-500 hover:bg-green-600'
        if (status.includes('CONCLUIDO') || status.includes('FINALIZADO')) return 'bg-red-500 hover:bg-red-600'
        return 'bg-blue-500 hover:bg-blue-600'
    }

    const getStatusIcon = (text: string) => {
        const status = text.toUpperCase()
        if (status.includes('VIGENTE')) return <CheckCircle2 className="w-4 h-4 mr-1" />
        return <AlertCircle className="w-4 h-4 mr-1" />
    }

    if (loading) {
        return (
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <Skeleton className="h-10 w-64 mx-auto mb-4" />
                        <Skeleton className="h-6 w-96 mx-auto" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <Card key={i} className="overflow-hidden">
                                <CardHeader>
                                    <Skeleton className="h-6 w-3/4 mb-2" />
                                    <Skeleton className="h-4 w-1/2" />
                                </CardHeader>
                                <CardContent>
                                    <Skeleton className="h-20 w-full" />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    if (error) return null // Hide section on error or show a message? Better to hide or show empty state.

    return (
        <section id="convocatorias" className="py-16 md:py-24 bg-linear-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                            Convocatorias <span className="text-[#049DD9]">Recientes</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Únete a nuestro equipo. Revisa las últimas oportunidades laborales vigentes.
                        </p>
                    </div>
                    <Link href="/convocatoria">
                        <Button variant="outline" className="group">
                            Ver todas las convocatorias
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {convocatorias.map((conv, index) => (
                        <motion.div
                            key={conv.idproceso}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-t-4 border-t-[#049DD9]">
                                <CardHeader className="pb-3">
                                    <div className="flex justify-between items-start gap-2 mb-2">
                                        <Badge className={`${getStatusColor(conv.texto)} text-white border-none flex items-center`}>
                                            {getStatusIcon(conv.texto)}
                                            {conv.texto}
                                        </Badge>
                                        <span className="text-xs text-muted-foreground font-mono bg-gray-100 px-2 py-1 rounded-full">
                                            CAS {conv.idproceso}
                                        </span>
                                    </div>
                                    <CardTitle className="text-lg font-bold leading-tight line-clamp-2" title={conv.nom_proceso}>
                                        {conv.nom_proceso}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1 pb-4">
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-center text-muted-foreground">
                                            <Calendar className="w-4 h-4 mr-2 text-[#049DD9]" />
                                            <span className="font-medium text-gray-700">Inscripción:</span>
                                            <span className="ml-auto">{conv.ini_insc} al {conv.fin_insc}</span>
                                        </div>
                                        <div className="flex items-center text-muted-foreground">
                                            <FileText className="w-4 h-4 mr-2 text-[#049DD9]" />
                                            <span className="font-medium text-gray-700">Resultados:</span>
                                            <span className="ml-auto">{conv.fecha_res}</span>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="pt-0">
                                    <Link href="/convocatoria" className="w-full">
                                        <Button className="w-full bg-[#049DD9] hover:bg-[#037bbd] text-white group-hover:shadow-md transition-all">
                                            Ver Detalles
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
