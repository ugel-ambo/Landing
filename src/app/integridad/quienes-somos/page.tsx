import { Shield, Scale, BookOpen, Users, Target, Heart, CheckCircle2, FileText, Phone, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Menu from "@/app/(Landing)/menu";

const valores = [
    {
        icon: Scale,
        title: "Justicia",
        description: "Actuamos con equidad e imparcialidad en todas nuestras decisiones y procesos",
        gradient: "from-blue-500 to-cyan-400"
    },
    {
        icon: Heart,
        title: "Honestidad",
        description: "Garantizamos la veracidad y transparencia en toda nuestra gestión",
        gradient: "from-rose-500 to-pink-400"
    },
    {
        icon: Target,
        title: "Responsabilidad",
        description: "Cumplimos con nuestros compromisos y rendimos cuentas de nuestras acciones",
        gradient: "from-amber-500 to-orange-400"
    },
    {
        icon: Users,
        title: "Respeto",
        description: "Valoramos la dignidad de todas las personas y promovemos la inclusión",
        gradient: "from-emerald-500 to-teal-400"
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
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            <Menu />

            {/* Header con formas orgánicas */}
            <section className="relative bg-gradient-to-br from-[#049DD9] via-[#0380B3] to-[#223F59] py-20 md:py-28 overflow-hidden">
                {/* Círculos decorativos */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-2xl" />
                <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/30 rounded-full animate-pulse" />
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyan-300/40 rounded-full animate-pulse delay-300" />
                
                <div className="container mx-auto px-4 text-center text-white relative z-10">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8 shadow-lg shadow-black/10">
                        <Shield className="w-5 h-5 text-cyan-200" />
                        <span className="text-sm font-medium tracking-wide">Área de Integridad</span>
                        <Sparkles className="w-4 h-4 text-yellow-300" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        ¿Quiénes <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-white">Somos</span>?
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
                        Conoce más sobre nuestra misión, valores y el trabajo que realizamos
                        para promover la integridad en la gestión educativa
                    </p>
                </div>
                
                {/* Ola decorativa */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="w-full h-auto">
                        <path fill="rgb(248 250 252)" d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" />
                    </svg>
                </div>
            </section>

            {/* Descripción del Área */}
            <section className="py-16 relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                            El <span className="font-semibold text-[#049DD9]">Área de Integridad</span> de la UGEL Ambo 
                            es la unidad responsable de promover y fortalecer la cultura de integridad, 
                            transparencia y lucha contra la corrupción en nuestra institución. Trabajamos 
                            para garantizar una gestión educativa ética y eficiente, implementando políticas 
                            de prevención, gestionando canales de denuncia y capacitando al personal en 
                            temas de ética pública, todo ello al servicio de la comunidad educativa de la provincia.
                        </p>
                    </div>
                </div>
            </section>

            {/* Valores - Diseño con cards de igual tamaño */}
            <section className="py-20 relative">
                {/* Fondo decorativo */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-cyan-50/30 to-slate-50" />
                <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-[#049DD9]/10 text-[#049DD9] text-sm font-semibold rounded-full mb-4">
                            Lo que nos define
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#223F59] mb-4">
                            Nuestros Valores
                        </h2>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-[#049DD9] to-cyan-400 mx-auto rounded-full" />
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {valores.map((valor, index) => {
                            const Icon = valor.icon;
                            return (
                                <div
                                    key={index}
                                    className="group relative h-full"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${valor.gradient} rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500`} />
                                    <div className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                                        <div className={`inline-flex p-4 bg-gradient-to-br ${valor.gradient} rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 self-start`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#223F59] mb-3">
                                            {valor.title}
                                        </h3>
                                        <p className="text-slate-500 leading-relaxed flex-grow">
                                            {valor.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Funciones - Diseño tipo bento grid */}
            <section className="py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-600 text-sm font-semibold rounded-full mb-4">
                            Nuestro rol
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#223F59] mb-4">
                            Nuestras Funciones
                        </h2>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto rounded-full" />
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                            {funciones.map((funcion, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white p-6 rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#049DD9] to-cyan-400 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#049DD9]/10 to-cyan-400/10 rounded-xl flex items-center justify-center group-hover:from-[#049DD9] group-hover:to-cyan-400 transition-all duration-300">
                                            <CheckCircle2 className="w-5 h-5 text-[#049DD9] group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-slate-700 font-medium leading-relaxed pt-1.5">
                                            {funcion}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
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
                            asChild
                            size="lg"
                            className="bg-white text-[#049DD9] hover:bg-white/90 font-bold rounded-full"
                        >
                            <Link href="https://denuncias.servicios.gob.pe/?gobpe_id=4412" target="_blank">
                                <Phone className="mr-2 w-5 h-5" />
                                Canal de Denuncias
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-2 border-white text-[#049DD9] hover:bg-white/20 font-semibold rounded-full"
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
