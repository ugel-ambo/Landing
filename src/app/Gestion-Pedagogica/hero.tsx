"use client";

import Image from "next/image";
import { BookOpen, School, Users } from "lucide-react";

const stats = [
  { icon: School, value: "220+", label: "Instituciones Educativas" },
  { icon: Users, value: "13,870+", label: "Estudiantes Atendidos" },
  { icon: BookOpen, value: "13+", label: "Especialistas Pedagógicos" },
];

export default function HeroUGP() {
  return (
    <section className="relative w-full bg-white border-b border-gray-200">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-[#049DD9]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 lg:py-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#049DD9]/10 border border-[#049DD9]/30 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#049DD9] animate-pulse" />
            <span className="text-xs font-semibold text-[#049DD9] uppercase tracking-wider">
              UGEL Ambo
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#223F59] leading-tight">
            Unidad de{" "}
            <span className="text-[#049DD9]">Gestión Pedagógica</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Planificamos, organizamos y evaluamos las acciones pedagógicas en la
            provincia de Ambo, promoviendo la mejora continua del aprendizaje en
            todos los niveles educativos.
          </p>

          {/* Stats strip */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#049DD9]/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#049DD9]" />
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold text-[#223F59] leading-none">
                    {value}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg h-56 sm:h-72 lg:h-80 shrink-0">
          <Image
            src="/gp/hero_1.png"
            alt="Unidad de Gestión Pedagógica"
            fill
            className="object-contain drop-shadow-xl"
            style={{ objectPosition: "center bottom" }}
            priority
            sizes="(max-width: 1024px) 80vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}
