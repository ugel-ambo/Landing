"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Award, Users, University, Sparkles } from "lucide-react";
import TypingText from "@/components/ui/shadcn-io/typing-text";

const heroImages = [
  {
    id: 1,
    src: "/fondo.png",
    alt: "UGEL Ambo - Institución Educativa",
  },
  {
    id: 2,
    src: "/hero4.png",
    alt: "Estudiantes aprendiendo",
  },
  {
    id: 3,
    src: "/hero2.png",
    alt: "Educación moderna",
  },
  {
    id: 4,
    src: "/newhero4.png",
    alt: "Educación moderna",
  },
];

const stats = [
  { icon: Users, label: "Estudiantes", value: "15 K +" },
  { icon: University, label: "Instituciones", value: "300+" },
  { icon: Award, label: "Años de excelencia", value: "12+" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [, setIsTransitioning] = useState(false);
  const [particles, setParticles] = useState<
    Array<{
      left: string;
      top: string;
      animationDelay: string;
      animationDuration: string;
    }>
  >([]);

  // Generar partículas solo en el cliente para evitar errores de hidratación
  useEffect(() => {
    const generatedParticles = [...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${5 + Math.random() * 10}s`,
    }));
    setParticles(generatedParticles);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleTransition((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleTransition = (getNext: (prev: number) => number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(getNext);
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    handleTransition(() => index);
  };

  return (
    <section className="relative w-full h-[400px] md:h-[480px] xl:h-[600px] overflow-hidden">
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
      <div className="relative w-full h-full flex justify-center">
        <div className="relative w-full lg:w-[80%] max-w-6xl h-full">
          {heroImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-all duration-1000 transform ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover object-center "
                priority={index === 0}
                quality={95}
                sizes="70vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/50 to-black/20 " />
              <div className="absolute inset-0 bg-linear-to-br from-[#049DD9]/15 to-[#223F59]/15 " />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
          <div>
            {/* Icon Badge */}
            <div className="mb-2 inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Sparkles className="w-3 h-3 text-[#049DD9]" />
              <span className="text-xs font-medium">Educación de Calidad</span>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl font-black  text-balance drop-shadow-2xl leading-none">
              <span className="bg-clip-text text-transparent bg-linear-to-t from-white via-[#F2F2F2] to-white animate-shimmer">
                Bienvenido a
              </span>
              <br />
              <span className="text-[#049DD9]">UGEL AMBO</span>
            </h1>

            {/* Subtitle */}
            <TypingText
              text={[
                "Con vision de futuro y resultados !",
                "Con vision de futuro y resultados !",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-sm md:text-base lg:text-lg mb-3 max-w-xl text-balance drop-shadow-lg font-bold leading-relaxed italic"
              textColors={["#ffffff"]}
              variableSpeed={{ min: 50, max: 120 }}
            />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <stat.icon className="w-4 h-4 mx-auto mb-1 text-[#049DD9]" />
                  <div className="text-base font-bold">{stat.value}</div>
                  <div className="text-[10px] text-gray-200 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Director */}
            <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-xs md:text-sm font-semibold text-gray-200">
                Director:
              </span>
              <span className="text-xs md:text-sm font-bold text-white">
                Dr. Hugo Eduardo Palomino Estaban
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 backdrop-blur-md border border-white/30 ${
                index === currentSlide
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
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
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
  );
}
