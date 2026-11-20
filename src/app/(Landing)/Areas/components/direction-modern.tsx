"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, ListChecks, Users } from "lucide-react";
import type { AreaContent, Employee } from "./area-section";

function TeamCard({ name, position, image }: Employee) {
  const [imageFailed, setImageFailed] = useState(false);
  const initials = name.trim().split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();

  return (
    <article className="group relative flex h-full items-center gap-4 overflow-hidden rounded-2xl border border-[#dcecf3] bg-white p-4 shadow-[0_8px_25px_-20px_rgba(16,64,89,0.4)] transition duration-300 hover:-translate-y-1 hover:border-[#9dd6e7] hover:shadow-[0_20px_35px_-22px_rgba(4,125,169,0.4)] motion-reduce:transform-none motion-reduce:transition-none">
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#049DD9] to-[#a7dfef]" />
      <div className="relative h-24 w-24 shrink-0 rounded-[1.2rem] bg-white p-1 shadow-[0_8px_18px_-10px_rgba(16,64,89,0.4)] transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none">
          <div className="relative h-full w-full overflow-hidden rounded-[1.15rem] bg-[#e8f6fb]">
          {image && !imageFailed ? (
            <Image src={image} alt={name} fill sizes="96px" unoptimized className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:transform-none motion-reduce:transition-none" onError={() => setImageFailed(true)} />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#d9f2fa] to-[#bde4f2] text-2xl font-bold text-[#087da9]">{initials}</div>
          )}
          </div>
          <span aria-hidden="true" className="absolute -bottom-1 -right-1 h-4 w-4 rotate-45 rounded-sm border-[3px] border-white bg-[#e8bd48] shadow-sm" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#087da9]">Equipo de Dirección</p>
        <h3 className="mt-1.5 break-words text-base font-bold leading-snug text-[#223F59]">{name}</h3>
        <p className="mt-2 break-words text-sm leading-relaxed text-slate-600">{position}</p>
      </div>
    </article>
  );
}

export function DirectionModern({ hero, functions, employees, functionsIntro, teamIntro }: AreaContent) {
  return (
    <section className="mx-auto w-full max-w-7xl space-y-12 md:space-y-16">
      <div className="overflow-hidden rounded-3xl border border-[#e2eef3] bg-white shadow-[0_18px_45px_-32px_rgba(19,65,87,0.3)]">
        <div className="grid lg:grid-cols-[1fr_1fr]">
          <div className="relative flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <div aria-hidden="true" className="absolute left-0 top-10 h-16 w-1 rounded-r-full bg-[#049DD9]" />
            {hero.badge && <span className="inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#087da9]"><Building2 className="h-4 w-4" aria-hidden="true" />{hero.badge}</span>}
            <h1 className="mt-4 max-w-lg text-3xl font-extrabold leading-[1.15] tracking-tight text-[#223F59] sm:text-4xl">{hero.title}</h1>
            {hero.subtitle && <p className="mt-4 text-base font-semibold leading-relaxed text-[#087da9]">{hero.subtitle}</p>}
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">{hero.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#eaf1f4] pt-5">
              <a href="#funciones-direccion" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#087da9] hover:text-[#049DD9] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#049DD9]">Funciones del área <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
              <a href="#equipo-direccion" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#087da9] hover:text-[#049DD9] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#049DD9]">Nuestro equipo <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
            </div>
          </div>
          <div className="flex flex-col bg-[#f0f9fc] p-4 sm:p-5 lg:p-6">
            <div className="relative min-h-60 flex-1 overflow-hidden rounded-2xl bg-[#d9eef6] sm:min-h-72 lg:min-h-[310px]">
              {hero.image && <Image src={hero.image} alt={hero.leaderName || hero.title} fill priority sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover object-center" />}
            </div>
            {hero.leaderName && <div className="flex items-center gap-3 px-1 pb-1 pt-4"><span className="h-9 w-1 shrink-0 rounded-full bg-[#049DD9]" aria-hidden="true" /><div><p className="font-bold leading-snug text-[#223F59]">{hero.leaderName}</p>{hero.leaderPosition && <p className="mt-0.5 text-sm text-slate-500">{hero.leaderPosition}</p>}</div></div>}
          </div>
        </div>
      </div>
      <div id="funciones-direccion" className="scroll-mt-24">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-[#dcecf3] pb-5">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#087da9]"><ListChecks className="h-4 w-4" aria-hidden="true" /> Nuestro trabajo</span>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#223F59] sm:text-3xl">Funciones del área</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">{functionsIntro ?? "Responsabilidades principales que guían nuestro trabajo diario."}</p>
          </div>
          <span className="rounded-full bg-[#eaf7fc] px-3 py-1.5 text-xs font-bold text-[#087da9]">{functions.length} funciones</span>
        </div>
        <div className="grid gap-3 md:grid-cols-2 md:gap-4">
          {functions.map((func, index) => (
            <article key={`${index}-${func}`} className="group relative flex gap-4 overflow-hidden rounded-2xl border border-[#e0edf3] bg-white p-5 shadow-[0_8px_24px_-24px_rgba(16,64,89,0.45)] transition duration-300 hover:-translate-y-0.5 hover:border-[#a9dbe9] hover:shadow-[0_14px_30px_-22px_rgba(4,125,169,0.4)] motion-reduce:transform-none motion-reduce:transition-none sm:p-6">
              <span aria-hidden="true" className="absolute inset-y-5 left-0 w-1 rounded-r-full bg-[#bde7f3] transition-colors group-hover:bg-[#049DD9]" />
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf7fc] text-sm font-extrabold text-[#087da9]">{String(index + 1).padStart(2, "0")}</span>
              <p className="self-center text-sm leading-6 text-[#405d6d]">{func}</p>
            </article>
          ))}
        </div>
      </div>

      <div id="equipo-direccion" className="scroll-mt-24">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-[#dcecf3] pb-5">
          <div className="max-w-3xl"><span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#087da9]"><Users className="h-4 w-4" aria-hidden="true" /> Nuestro equipo</span><h2 className="mt-2 text-2xl font-extrabold text-[#223F59] sm:text-3xl">Personal del área</h2><p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">{teamIntro ?? "Conoce a las personas que brindan soporte especializado a nuestra comunidad educativa."}</p></div>
          <Link href="/Nosotros/Directorio" className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf7fc] px-4 py-2 text-sm font-semibold text-[#087da9] transition-colors hover:bg-[#d5eef7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#049DD9]">Ver directorio <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        {employees.length > 0 ? <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{employees.map((employee) => <TeamCard key={employee.id || employee.name} {...employee} />)}</div> : <p className="rounded-2xl border border-[#dcecf3] bg-white p-5 text-sm text-slate-500">No hay personal disponible para mostrar en este momento.</p>}
      </div>
    </section>
  );
}
