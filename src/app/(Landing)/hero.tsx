"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import { getHeroImages, type HeroSlide } from "@/app/actions/hero-actions";

const fallbackHeroImages: HeroSlide[] = [
  {
    id: "fallback-1",
    src: "/portada1.png",
    alt: "Semana Santa"
  },
  {
    id: "fallback-2",
    src: "/SemanaSanta (3).png",
    alt: "Semana Santa"
  },
  {
    id: "fallback-3",
    src: "/fondo.png",
    alt: "UGEL Ambo - Institución Educativa"
  },
  {
    id: "fallback-4",
    src: "/hero4.png",
    alt: "Estudiantes aprendiendo"
  },
  {
    id: "fallback-5",
    src: "/hero2.png",
    alt: "Educación moderna"
  },
  {
    id: "fallback-6",
    src: "/newhero3.png",
    alt: "Educación moderna"
  },
  {
    id: "fallback-7",
    src: "/img1.JPG",
    alt: "Buen Inicio"
  },
  {
    id: "fallback-8",
    src: "/img2.jpg",
    alt: "Buen Inicio"
  },
  {
    id: "fallback-9",
    src: "/img3.png",
    alt: "Buen Inicio Juntos 1"
  },
  {
    id: "fallback-10",
    src: "/img4.png",
    alt: "Buen Inicio Juntos 2"
  },
  {
    id: "fallback-11",
    src: "/img5.png",
    alt: "Batalla de Arcapunco"
  }
];


interface HeroProps {
  initialImages?: HeroSlide[];
}

export default function Hero({ initialImages }: HeroProps = {}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  const [heroImages, setHeroImages] = useState<HeroSlide[]>(() => {
    if (initialImages && initialImages.length > 0) {
      return initialImages;
    }
    return fallbackHeroImages;
  });

  useEffect(() => {
    // Si ya recibimos imágenes desde el servidor (SSR), las usamos directamente
    if (initialImages && initialImages.length > 0) {
      setHeroImages(initialImages);
      return;
    }

    let mounted = true;
    getHeroImages()
      .then((imgs) => {
        if (mounted && imgs.length > 0) {
          setHeroImages(imgs);
          setCurrentSlide(0);
          setPrevSlide(0);
        }
      })
      .catch(() => {
        /* fallback ya está cargado */
      });
    return () => {
      mounted = false;
    };
  }, [initialImages]);

  const goToSlide = (nextIndex: number) => {
    setCurrentSlide((prev) => {
      if (prev === nextIndex) return prev;
      setPrevSlide(prev);
      return nextIndex;
    });
  };

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      goToSlide((currentSlide + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length, currentSlide]);

  return (
    <section className="relative w-full min-h-[360px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[540px] xl:min-h-[600px] 2xl:min-h-[660px] h-[55vw] sm:h-[45vw] md:h-[38vw] lg:h-[32vw] max-h-[720px] overflow-hidden">
      {/* Carousel */}
      <div className="relative w-full h-full flex justify-center">
        <div className="relative w-full h-full">
          {heroImages.map((image, index) => {
            const isCurrent = index === currentSlide;
            const isPrev = index === prevSlide;

            return (
              <div
                key={image.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  isCurrent
                    ? "opacity-100 z-10"
                    : isPrev
                    ? "opacity-100 z-0"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover object-center select-none pointer-events-none"
                  priority={index === 0}
                  quality={95}
                  sizes="100vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              </div>
            );
          })}
        </div>

        {/* Main Content - Solo el lema animado */}
        <div className="absolute inset-x-0 bottom-6 sm:bottom-7 md:bottom-8 flex flex-col items-center justify-end text-center px-4 z-10 select-none">
          {/* Lema animado */}
          <div className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            <TypingText
              text={[
                "Con vision de futuro y resultados !",
                "Con vision de futuro y resultados !",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-bold italic tracking-wide"
              textColors={["#ffffff"]}
              variableSpeed={{ min: 50, max: 120 }}
            />
          </div>
        </div>

        {/* Indicadores de carrusel */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[#049DD9] w-7 sm:w-9 shadow-lg shadow-[#049DD9]/50"
                  : "bg-white/60 hover:bg-white/90 w-2 sm:w-2.5 hover:w-5"
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
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
