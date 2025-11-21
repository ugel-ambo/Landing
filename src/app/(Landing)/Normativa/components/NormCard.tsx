"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { NormaLegal } from "@/types/scrape.types"


interface NormCardProps {
    norma: NormaLegal;
}

export default function NormCard({ norma }: NormCardProps) {
    return (
        <Card className="hover:shadow-xl transition-all duration-300 h-full flex flex-col gap-1">
            <CardHeader className="">
                <div className="flex items-start gap-3 mb-3">
                    {/* Imagen de portada */}
                    <div className="relative w-20 h-28 flex-shrink-0 rounded overflow-hidden border">
                        <Image
                            src={norma.imagenPortada}
                            alt={`Portada ${norma.titulo}`}
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    </div>

                    <div className="flex-1 min-w-0">
                        {/* Badge de categoría */}
                        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold mb-2 bg-primary/10 text-primary">
                            <FileText className="w-3 h-3" />
                            {norma.categoria}
                        </div>

                        {/* Título con enlace */}
                        <CardTitle className="text-base leading-tight">
                            <Link
                                href={norma.tituloUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors line-clamp-2"
                            >
                                {norma.titulo}
                            </Link>
                        </CardTitle>

                        {/* Fecha */}
                        <CardDescription className=" mt-2 text-sm font-medium">
                            {norma.fecha}
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="flex-1">
                {/* Descripción */}
                <p className="text-sm text-muted-foreground line-clamp-3 pb-4">
                    {norma.descripcion}
                </p>
            </CardContent>

            <CardFooter className="flex flex-col gap-2 pt-4 border-t">
                {/* Botón de descarga individual */}
                <Link href={norma.descargaIndividual} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="default" className="w-full" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Descarga Individual
                    </Button>
                </Link>

                {/* Botón de cuadernillo completo */}
                {norma.descargaCuadernillo && (
                    <Link href={norma.descargaCuadernillo} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button variant="outline" className="w-full" size="sm">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Cuadernillo Completo
                        </Button>
                    </Link>
                )}
            </CardFooter>
        </Card>
    )
}
