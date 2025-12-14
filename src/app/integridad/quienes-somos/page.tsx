import { Shield, Scale, BookOpen, Users, Target, Heart, CheckCircle2, FileText, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Menu from "@/app/(Landing)/menu";

const valores = [
    {
        icon: Scale,
        title: "Justicia",
        description: "Actuamos con equidad e imparcialidad en todas nuestras decisiones y procesos"
    },
    {
        icon: Heart,
        title: "Honestidad",
        description: "Garantizamos la veracidad y transparencia en toda nuestra gestión"
    },
    {
        icon: Target,
        title: "Responsabilidad",
        description: "Cumplimos con nuestros compromisos y rendimos cuentas de nuestras acciones"
    },
    {
        icon: Users,
        title: "Respeto",
        description: "Valoramos la dignidad de todas las personas y promovemos la inclusión"
    }
];

const funciones = [
    "Promover la cultura de integridad y lucha contra la corrupción",
    "Implementar el Plan de Integridad y Lucha contra la Corrupción",
    "Coordinar acciones de prevención de la corrupción",
    "Gestionar el canal de denuncias y quejas",
    "Capacitar al personal en temas de integridad y ética pública",
    "Monitorear el cumplimiento del Código de Ética de la Función Pública"
];

const normativas = [
    {
        titulo: "Ley N° 27815",
        descripcion: "Ley del Código de Ética de la Función Pública"
    },
    {
        titulo: "D.S. N° 033-2005-PCM",
        descripcion: "Reglamento de la Ley del Código de Ética"
    },
    {
        titulo: "Ley N° 27444",
        descripcion: "Ley del Procedimiento Administrativo General"
    },
    {
        titulo: "Ley N° 31457",
        descripcion: "Ley que promueve la integridad en la gestión pública"
    }
];

export default function QuienesSomosIntegridad() {
    return (
        <main className="min-h-screen bg-background">
            <Menu />

            {/* Header */}
            <section className="bg-gradient-to-br from-[#049DD9] to-[#223F59] py-16 md:py-24">
                <div className="container mx-auto px-4 text-center text-white">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
                        <Shield className="w-5 h-5" />
                        <span className="text-sm font-medium">Área de Integridad</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        ¿Quiénes Somos?
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
                        Conoce más sobre nuestra misión, valores y el trabajo que realizamos
                        para promover la integridad en la gestión educativa
                    </p>
                </div>
            </section>

            {/* Misión y Visión */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-8">
                        <Card className="border-2 border-l-4 border-l-[#049DD9] hover:shadow-lg transition-shadow">
                            <CardContent className="p-6 md:p-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 bg-[#049DD9]/10 rounded-lg">
                                        <Target className="w-6 h-6 text-[#049DD9]" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-[#223F59] mb-2">
                                            Nuestra Misión
                                        </h2>
                                        <div className="h-1 w-16 bg-[#049DD9] rounded-full" />
                                    </div>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    Promover y fortalecer la cultura de integridad, transparencia y lucha contra
                                    la corrupción en la UGEL Ambo, garantizando una gestión educativa ética y
                                    eficiente al servicio de la comunidad educativa de la provincia.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-l-4 border-l-[#049DD9] hover:shadow-lg transition-shadow">
                            <CardContent className="p-6 md:p-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 bg-[#049DD9]/10 rounded-lg">
                                        <BookOpen className="w-6 h-6 text-[#049DD9]" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-[#223F59] mb-2">
                                            Nuestra Visión
                                        </h2>
                                        <div className="h-1 w-16 bg-[#049DD9] rounded-full" />
                                    </div>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    Ser reconocidos como una institución modelo en integridad pública, donde
                                    la ética, la transparencia y el compromiso con la ciudadanía sean los
                                    pilares fundamentales de nuestra gestión educativa.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Valores */}
            <section className="py-16 bg-gradient-to-b from-muted/30 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#223F59] mb-4">
                            Nuestros Valores
                        </h2>
                        <div className="h-1 w-24 bg-[#049DD9] mx-auto rounded-full" />
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {valores.map((valor, index) => {
                            const Icon = valor.icon;
                            return (
                                <Card
                                    key={index}
                                    className="border-2 hover:border-[#049DD9]/50 hover:shadow-lg transition-all duration-300 group"
                                >
                                    <CardContent className="p-6 text-center">
                                        <div className="inline-flex p-4 bg-gradient-to-br from-[#049DD9]/10 to-[#049DD9]/5 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                                            <Icon className="w-8 h-8 text-[#049DD9]" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-[#223F59] mb-2">
                                            {valor.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {valor.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Funciones */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#223F59] mb-4">
                            Nuestras Funciones
                        </h2>
                        <div className="h-1 w-24 bg-[#049DD9] mx-auto rounded-full" />
                    </div>

                    <Card className="max-w-4xl mx-auto border-2 bg-gradient-to-br from-[#049DD9]/5 to-transparent">
                        <CardContent className="p-6 md:p-8">
                            <div className="grid md:grid-cols-2 gap-4">
                                {funciones.map((funcion, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-[#049DD9] mt-0.5 shrink-0" />
                                        <span className="text-sm text-[#223F59] font-medium">
                                            {funcion}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Marco Normativo */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#223F59] mb-4">
                            Marco Normativo
                        </h2>
                        <div className="h-1 w-24 bg-[#049DD9] mx-auto rounded-full mb-6" />
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Principales normas que sustentan nuestra labor en materia de integridad
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {normativas.map((norma, index) => (
                            <Card
                                key={index}
                                className="border-2 hover:border-[#049DD9]/50 hover:shadow-lg transition-all duration-300"
                            >
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <FileText className="w-5 h-5 text-[#049DD9]" />
                                        <span className="font-semibold text-[#223F59]">
                                            {norma.titulo}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        {norma.descripcion}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contacto */}
            <section className="py-16 bg-gradient-to-br from-[#223F59] to-[#049DD9]">
                <div className="container mx-auto px-4 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        ¿Tienes alguna denuncia o consulta?
                    </h2>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
                        Contamos con un canal de denuncias confidencial para reportar
                        cualquier acto de corrupción o falta de integridad
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-white text-[#049DD9] hover:bg-white/90 font-bold rounded-full"
                        >
                            <Phone className="mr-2 w-5 h-5" />
                            Canal de Denuncias
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-2 border-white text-white hover:bg-white/20 font-semibold rounded-full"
                        >
                            <Link href="/integridad">
                                Volver a Integridad
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
