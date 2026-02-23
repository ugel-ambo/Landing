"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

import { EmployeeCard } from "./employee-card";

export interface Employee {
  id: string;
  name: string;
  position: string;
  image?: string;
}

export interface HeroContent {
  title: string;
  description: string;
  subtitle?: string;
  badge?: string;
  image?: string;
  leaderName?: string;
  leaderPosition?: string;
}

export interface AreaContent {
  hero: HeroContent;
  functions: string[];
  employees: Employee[];
  functionsIntro?: string;
  teamIntro?: string;
}

export function AreaSection({
  hero,
  functions,
  employees,
  functionsIntro,
  teamIntro,
}: AreaContent) {
  return (
    <section className="w-full max-w-7xl mx-auto space-y-16">
      {/* Hero */}
      <div className="rounded-3xl border border-blue-100 bg-blue-50/80 p-8 md:p-12 shadow-sm">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            {hero.badge && (
              <span className="inline-flex items-center rounded-full bg-[#049DD9]/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-[#049DD9]">
                {hero.badge}
              </span>
            )}
            <h1 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 text-center lg:text-left">
              {hero.title}
            </h1>
            {hero.subtitle && (
              <p className="mt-2 text-lg font-semibold text-slate-600 text-center lg:text-left">
                {hero.subtitle}
              </p>
            )}
            <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed text-center lg:text-left">
              {hero.description}
            </p>
          </div>

          {/* Imagen + Nombre del jefe */}
          <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden border border-blue-100 shadow-lg">
            {hero.image ? (
              <Image
                src={hero.image}
                alt={hero.leaderName || hero.title}
                fill
                priority
                sizes="(min-width: 1024px) 32rem, 100vw"
                className="object-cover"
              />
            ) : (
              <div className="h-full w-full bg-[#049DD9]" />
            )}

            {/* Nombre del líder sobre la imagen */}
            {hero.leaderName && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm px-4 py-3 text-center">
                <p className="text-sm md:text-base font-bold text-white tracking-wide">
                  {hero.leaderName}
                </p>
                {hero.leaderPosition && (
                  <p className="text-xs md:text-sm text-white/90 mt-0.5">
                    {hero.leaderPosition}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Functions */}
      <div className="space-y-4 md:space-y-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#049DD9]">
            Funciones
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
            Funciones del área
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            {functionsIntro ??
              "Responsabilidades principales que guían nuestro trabajo diario."}
          </p>
        </div>
        <div className="grid gap-3 md:gap-4 md:grid-cols-2">
          {functions.map((func, index) => (
            <Card
              key={index}
              className="border border-blue-100 bg-white/80 p-4 md:p-5 shadow-sm"
            >
              <p className="text-sm md:text-base leading-relaxed text-slate-700">
                <span className="mr-2 font-semibold text-[#049DD9]">
                  {(index + 1).toString().padStart(2, "0")}.
                </span>
                {func}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="space-y-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#049DD9]">
            Equipo
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Personal del área
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {teamIntro ??
              "Conoce a las personas que brindan soporte especializado a nuestra comunidad educativa."}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {employees.map((employee) => (
            <EmployeeCard key={employee.id || employee.name} {...employee} />
          ))}
        </div>
      </div>
    </section>
  );
}
