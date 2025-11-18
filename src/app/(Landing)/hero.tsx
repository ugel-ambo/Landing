"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Award, Users, University, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import TypingText from "@/components/ui/shadcn-io/typing-text"


const heroImages = [
    {
        id: 1,
        src: "/hero1.jpg",
        alt: "UGEL Ambo - Institución Educativa",
    },
    {
        id: 2,
        src: "/hero2.jpg",
        alt: "Estudiantes aprendiendo",
    },
    {
        id: 3,
        src: "/hero3.jpg",
        alt: "Educación moderna",
    },
]

const stats = [
    { icon: Users, label: "Estudiantes", value: "13 K +" },
    { icon: University, label: "Instituciones", value: "200+" },
    { icon: Award, label: "Años de excelencia", value: "12+" },
]

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [, setIsTransitioning] = useState(false)
    const [particles, setParticles] = useState<Array<{
        left: string
        top: string
        animationDelay: string
        animationDuration: string
    }>>([])

    // Generar partículas solo en el cliente para evitar errores de hidratación
    useEffect(() => {
        const generatedParticles = [...Array(15)].map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
        }))
        setParticles(generatedParticles)
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            handleTransition((prev) => (prev + 1) % heroImages.length)
        }, 6000)
        return () => clearInterval(timer)
    }, [])

    const handleTransition = (getNext: (prev: number) => number) => {
        setIsTransitioning(true)
        setTimeout(() => {
            setCurrentSlide(getNext)
            setIsTransitioning(false)
        }, 300)
    }

    const goToSlide = (index: number) => {
        handleTransition(() => index)
    }


    return (
        <section className="relative w-full h-[500px] md:h-[600px] xl:h-[750px] overflow-hidden">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-[#049DD9] via-[#3873A6] to-[#223F59] animate-gradient-xy" />

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
                {particles.map((particle, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            animationDelay: particle.animationDelay,
                            animationDuration: particle.animationDuration,
                        }}
                    />
                ))}
            </div>

            {/* Carousel */}
            <div className="relative w-full h-full">
                {heroImages.map((image, index) => (
                    <div
                        key={image.id}
                        className={`absolute inset-0 transition-all duration-1000 transform ${index === currentSlide
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-105"
                            }`}
                    >
                        <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            priority={index === 0}
                            quality={95}
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/50 to-black/20" />
                        <div className="absolute inset-0 bg-linear-to-br from-[#049DD9]/15 to-[#223F59]/15" />
                    </div>
                ))}

                {/* Main Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
                    <div >
                        {/* Icon Badge */}
                        <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                            <Sparkles className="w-4 h-4 text-[#049DD9]" />
                            <span className="text-sm font-medium">Educación de Calidad</span>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-4xl md:text-6xl lg:text-6xl 2xl:text-7xl font-black mb-1 text-balance drop-shadow-2xl leading-tight">
                            <span className="bg-clip-text text-transparent bg-linear-to-t from-white via-[#F2F2F2] to-white animate-shimmer">
                                Bienvenido a
                            </span>
                            <br />
                            <span className="text-[#049DD9]">UGEL AMBO</span>
                        </h1>

                        {/* Subtitle */}
                        <TypingText
                            text={["Impulsando el desarrollo educativo", "Transformando vidas con educación"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            className="text-lg md:text-xl 2xl:text-2xl mb-6 max-w-2xl text-balance drop-shadow-lg font-bold leading-relaxed"
                            textColors={['#F2F2F2', '#F2F2F2']}
                            variableSpeed={{ min: 50, max: 120 }}
                        />

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
                            <Button
                                size="lg"
                                className="bg-[#049DD9] hover:bg-[#049DD9]/90 text-white font-bold shadow-xl hover:shadow-[#049DD9]/50 transition-all duration-300 transform hover:scale-105 px-8 rounded-full"
                                onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Explorar Servicios
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20 font-semibold shadow-xl rounded-full transition-all duration-300 transform hover:scale-105"
                                onClick={() => document.getElementById("noticias")?.scrollIntoView({ behavior: "smooth" })}
                           >
                                Ultimas Noticias
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto ">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                                >
                                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-[#049DD9]" />
                                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                                    <div className="text-xs text-gray-200 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex gap-2 z-20">
                    {heroImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2.5 rounded-full transition-all duration-300 backdrop-blur-md border border-white/30 ${index === currentSlide
                                    ? "bg-[#049DD9] w-10 shadow-lg shadow-[#049DD9]/50"
                                    : "bg-white/50 hover:bg-white/75 w-2.5 hover:w-6"
                                }`}
                            aria-label={`Ir a slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 15s ease infinite;
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
      `}</style>
        </section>
    )
}