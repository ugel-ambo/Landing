"use client"
import Image from "next/image"

export default function Construction() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {/* Contenido de texto */}
          <div className="text-center md:text-left max-w-md lg:max-w-lg">
            {/* Título */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#049DD9] mb-6">
              PROXIMAMENTE
            </h1>

            {/* Descripción ampliada */}
            <div className="space-y-4 mb-8">
              <p className="text-lg md:text-xl lg:text-2xl text-[#223F59]">
                Estamos trabajando en algo increíble
              </p>
              <p className="text-sm md:text-base text-[#223F59] opacity-70 leading-relaxed">
                Muy pronto podrás descubrir todas las nuevas funcionalidades 
                que hemos preparado para ti. ¡Mantente atento!
              </p>
            </div>

            {/* Puntos animados */}
            <div className="flex justify-center md:justify-start gap-2">
              <div className="w-3 h-3 bg-[#049DD9] rounded-full animate-bounce [animation-delay:-0.3s]" />
              <div className="w-3 h-3 bg-[#049DD9] rounded-full animate-bounce [animation-delay:-0.15s]" />
              <div className="w-3 h-3 bg-[#049DD9] rounded-full animate-bounce" />
            </div>
          </div>

          {/* Imagen del astronauta */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg animate-float mt-8 md:mt-0">
            <Image
              src="/astronauta.png"
              alt="Astronauta flotando en el espacio"
              width={400}
              height={400}
              className="w-full h-auto drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(-3deg);
          }
          50% {
            transform: translateY(-20px) rotate(3deg);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}