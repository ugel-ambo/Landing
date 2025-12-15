import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Menu from "@/app/(Landing)/menu";
import connectMongoDB from "@/lib/mongodbConnection";
import NoticiaIntegridad, { getImageUrl } from "@/models/NoticiaIntegridad";
import mongoose from "mongoose";

interface PageProps {
    params: Promise<{ id: string }>;
}

async function getNoticia(id: string) {
    try {
        await connectMongoDB();
        
        // Usar aggregate para hacer lookup del campo imagen desde la colección media
        const noticias = await NoticiaIntegridad.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(id)
                }
            },
            {
                $lookup: {
                    from: 'media',
                    localField: 'imagen',
                    foreignField: '_id',
                    as: 'imagenData'
                }
            },
            {
                $addFields: {
                    imagen: { $arrayElemAt: ['$imagenData', 0] }
                }
            },
            {
                $project: {
                    imagenData: 0
                }
            }
        ]);

        if (!noticias || noticias.length === 0) return null;

        return JSON.parse(JSON.stringify(noticias[0]));
    } catch (error) {
        console.error("Error fetching noticia:", error);
        return null;
    }
}

export default async function NoticiaDetailPage({ params }: PageProps) {
    const { id } = await params;
    const noticia = await getNoticia(id);

    if (!noticia) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background">
            <Menu />

            {/* Header */}
            <section className="bg-gradient-to-br from-[#049DD9] to-[#223F59] py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-2 mb-4">
                        <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="text-white hover:bg-white/20"
                        >
                            <Link href="/integridad">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Volver
                            </Link>
                        </Button>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-white/20 text-white border-white/30">
                            <Shield className="w-3 h-3 mr-1" />
                            Integridad
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-blue-100">
                            <Calendar className="w-4 h-4" />
                            <span>
                                {new Date(noticia.fecha).toLocaleDateString('es-PE', {
                                    day: '2-digit',
                                    month: 'long',
                                    year: 'numeric'
                                })}
                            </span>
                        </div>
                    </div>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl">
                        {noticia.titulo}
                    </h1>
                </div>
            </section>

            {/* Content */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Descripción */}
                        <div className="prose prose-lg max-w-none mb-12">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {noticia.descripcion}
                            </p>
                        </div>

                        {/* Imagen */}
                        {noticia.imagen && (
                            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={getImageUrl(noticia.imagen)}
                                    alt={noticia.titulo}
                                    fill
                                    className="object-cover"
                                    quality={95}
                                />
                            </div>
                        )}

                        {/* Back button */}
                        <div className="mt-12 text-center">
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-2 border-[#049DD9] text-[#049DD9] hover:bg-[#049DD9] hover:text-white font-semibold rounded-full"
                            >
                                <Link href="/integridad">
                                    <ArrowLeft className="w-5 h-5 mr-2" />
                                    Volver a Integridad
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
