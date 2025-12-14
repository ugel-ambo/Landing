import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, ArrowRight, Users, BookOpen, Scale, Calendar } from "lucide-react";
import Menu from "../(Landing)/menu";
import connectMongoDB from "@/lib/mongodbConnection";
import NoticiaIntegridad, { INoticiaIntegridad } from "@/models/NoticiaIntegridad";

async function getNoticias(): Promise<INoticiaIntegridad[]> {
    try {
        await connectMongoDB();
        const noticias = await NoticiaIntegridad.find({
            area: 'integridad',
            activo: true
        })
            .sort({ fecha: -1 })
            .limit(6)
            .lean();

        return JSON.parse(JSON.stringify(noticias));
    } catch (error) {
        console.error("Error fetching noticias:", error);
        return [];
    }
}

export default async function IntegridadPage() {
    const noticias = await getNoticias();

    return (
        <main className="min-h-screen bg-background">
            <Menu />

            {/* Hero Section */}
            <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
                <Image
                    src="/integridad.jpg"
                    alt="Integridad UGEL Ambo"
                    fill
                    className="object-cover"
                    priority
                    quality={95}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#049DD9]/20 to-[#223F59]/20" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
                        <Shield className="w-5 h-5 text-[#049DD9]" />
                        <span className="text-sm font-medium">Transparencia y Ética</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 drop-shadow-2xl">
                        <span className="bg-clip-text text-transparent bg-gradient-to-t from-white via-[#F2F2F2] to-white">
                            Integridad
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl max-w-2xl text-gray-200 mb-8">
                        Comprometidos con la transparencia, ética y la lucha contra la corrupción en la gestión educativa
                    </p>

                    <Button
                        asChild
                        size="lg"
                        className="bg-[#049DD9] hover:bg-[#049DD9]/90 text-white font-bold shadow-xl hover:shadow-[#049DD9]/50 transition-all duration-300 transform hover:scale-105 px-8 rounded-full"
                    >
                        <Link href="#quienes-somos">
                            Conocer más
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Quiénes Somos Section */}
            <section id="quienes-somos" className="py-10 md:py-10 bg-gradient-to-b from-white to-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#223F59] mb-4">
                            ¿Quiénes Somos?
                        </h2>
                        <div className="h-1 w-24 bg-[#049DD9] mx-auto rounded-full mb-6" />
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Somos el área encargada de promover la integridad, transparencia y la lucha
                            contra la corrupción en la Unidad de Gestión Educativa Local de Ambo.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <Card className="border-2 hover:border-[#049DD9]/50 hover:shadow-lg transition-all duration-300 group">
                            <CardContent className="p-6 text-center">
                                <div className="inline-flex p-4 bg-gradient-to-br from-[#049DD9]/10 to-[#049DD9]/5 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                                    <Scale className="w-8 h-8 text-[#049DD9]" />
                                </div>
                                <h3 className="text-lg font-semibold text-[#223F59] mb-2">Ética Pública</h3>
                                <p className="text-sm text-muted-foreground">
                                    Promovemos los valores éticos en todos los servidores públicos
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 hover:border-[#049DD9]/50 hover:shadow-lg transition-all duration-300 group">
                            <CardContent className="p-6 text-center">
                                <div className="inline-flex p-4 bg-gradient-to-br from-[#049DD9]/10 to-[#049DD9]/5 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                                    <BookOpen className="w-8 h-8 text-[#049DD9]" />
                                </div>
                                <h3 className="text-lg font-semibold text-[#223F59] mb-2">Transparencia</h3>
                                <p className="text-sm text-muted-foreground">
                                    Garantizamos el acceso a la información pública
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 hover:border-[#049DD9]/50 hover:shadow-lg transition-all duration-300 group">
                            <CardContent className="p-6 text-center">
                                <div className="inline-flex p-4 bg-gradient-to-br from-[#049DD9]/10 to-[#049DD9]/5 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                                    <Users className="w-8 h-8 text-[#049DD9]" />
                                </div>
                                <h3 className="text-lg font-semibold text-[#223F59] mb-2">Participación</h3>
                                <p className="text-sm text-muted-foreground">
                                    Fomentamos la participación ciudadana en la gestión
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="text-center">
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-2 border-[#049DD9] text-[#049DD9] hover:bg-[#049DD9] hover:text-white font-semibold rounded-full transition-all duration-300"
                        >
                            <Link href="/integridad/quienes-somos">
                                Ver más
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Últimas Noticias Section */}
            <section className="py-10 md:py-10 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#223F59] mb-4">
                            Últimas Noticias
                        </h2>
                        <div className="h-1 w-24 bg-[#049DD9] mx-auto rounded-full mb-6" />
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Mantente informado sobre las acciones y actividades en materia de integridad
                        </p>
                    </div>

                    {noticias.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {noticias.map((noticia) => (
                                <Link
                                    key={noticia._id}
                                    href={`/integridad/noticias/${noticia._id}`}
                                >
                                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <Image
                                                src={noticia.imagen || '/Logo1.jpg'}
                                                alt={noticia.titulo}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <CardContent className="p-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Badge variant="secondary" className="font-medium">
                                                    Integridad
                                                </Badge>
                                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                                    <Calendar className="w-3 h-3" />
                                                    <span>
                                                        {new Date(noticia.fecha).toLocaleDateString('es-PE', {
                                                            day: '2-digit',
                                                            month: 'short',
                                                            year: 'numeric'
                                                        })}
                                                    </span>
                                                </div>
                                            </div>
                                            <CardTitle className="text-lg line-clamp-2 group-hover:text-[#049DD9] transition-colors mb-2">
                                                {noticia.titulo}
                                            </CardTitle>
                                            {noticia.descripcion && (
                                                <p className="text-sm text-muted-foreground line-clamp-2">
                                                    {noticia.descripcion.length > 100 
                                                        ? `${noticia.descripcion.substring(0, 100)}...` 
                                                        : noticia.descripcion}
                                                </p>
                                            )}
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <Card className="max-w-2xl mx-auto border-dashed border-2">
                            <CardContent className="py-12 text-center">
                                <Shield className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
                                <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                                    Próximamente
                                </h3>
                                <p className="text-muted-foreground">
                                    Aún no hay noticias publicadas. Pronto compartiremos información relevante.
                                </p>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </section>
        </main>
    );
}
