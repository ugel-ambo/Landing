"use client"
import Image from "next/image"

export default function HeroUGP() {
  return (
    <section className="relative w-full bg-white overflow-hidden min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[65vh]">

      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Onda desde inferior izquierda a inferior derecha */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 250" preserveAspectRatio="none">
          {/* Onda para pantallas pequeñas */}
          <path
            className="lg:hidden"
            fill="#049DD9"
            fillOpacity="0.5"
            d="M0,200 Q360,250 720,200 Q1080,150 1440,150 L1440,250 L0,250 Z"
          />
          {/* Onda para pantallas grandes (lg y mayores) */}
          <path
            className="hidden lg:block"
            fill="#049DD9"
            fillOpacity="0.5"
            d="M0,210 Q360,250 720,200 Q1080,150 1440,50 L1440,250 L0,250 Z"
          />
        </svg>
      </div>

      <div className="relative w-full mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8  pt-10 lg:pt-0 ">
        {/* Texto - mejor espaciado y responsive */}
        <div className="w-full lg:w-1/2 text-center lg:text-left z-10   lg:pr-8 lg:pl-10 2xl:pl-52">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1e293b]">
            <span className="block text-[#049DD9]">UNIDAD DE</span>
            <span className="block">GESTIÓN PEDAGÓGICA</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 md:mt-6 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Nos encargamos de planificar, organizar, dirigir y evaluar las acciones pedagógicas en la provincia de Ambo,
            promoviendo la mejora continua del aprendizaje.
          </p>

          <button className="mt-6 sm:px-8 py-2 items-center justify-center  w-60 h-10 bg-[#049DD9] hover:bg-[#028ec7] text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all">
            Conócenos
          </button>
        </div>

        <div className="relative w-full lg:w-2/3 flex justify-center items-center z-10 h-80 sm:h-80 md:h-[520px] lg:h-[560px] xl:h-[600px] ">
          <div className="relative w-full h-full max-w-none flex items-center justify-center">
            <Image
              src="/gp/hero_1.png"
              alt="Unidad de Gestión Pedagógica"
              fill
              className="object-contain drop-shadow-2xl"
              style={{ objectPosition: "center bottom" }}
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, (max-width: 1536px) 60vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
