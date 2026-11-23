import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";

export function DirectorPresentation() {
  return (
    <section aria-labelledby="direccion-inicio" className="bg-white px-4 py-10 md:px-10 md:py-14">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-[#dceef4] bg-gradient-to-br from-[#f3fbfe] via-white to-[#eaf7fc] shadow-[0_18px_45px_-32px_rgba(20,70,95,0.35)] md:grid-cols-[0.85fr_1.15fr]">
        <div className="relative min-h-[310px] overflow-hidden bg-gradient-to-br from-[#dbf3fb] to-[#c4e8f4] sm:min-h-[360px]">
          <div aria-hidden="true" className="absolute bottom-[-30%] h-80 w-80 rounded-full border border-white/60 bg-white/20" />
          <div aria-hidden="true" className="absolute left-8 top-8 h-24 w-24 rounded-full bg-[#049DD9]/15 blur-2xl" />
          <Image src="/director-animado-alta.gif" alt="Dr. Hugo Eduardo Palomino Esteban, director de la UGEL Ambo" fill sizes="(min-width: 768px) 45vw, 100vw" unoptimized className="z-10 object-contain object-bottom" />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#e6f6fb] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#087da9]"><Building2 className="h-4 w-4" aria-hidden="true" /> Dirección institucional</span>
          <h2 id="direccion-inicio" className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-[#223F59] sm:text-3xl lg:text-4xl">Con visión de futuro y <span className="text-[#049DD9]">resultados</span></h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">Trabajamos junto a nuestra comunidad educativa para construir oportunidades, fortalecer la gestión y avanzar hacia una mejor educación para Ambo.</p>
          <div className="mt-6 border-l-2 border-[#e4b947] pl-4"><p className="font-bold text-[#223F59]">Dr. Hugo Eduardo Palomino Esteban</p><p className="mt-1 text-sm text-slate-500">Director de la UGEL Ambo</p></div>
          <Link href="/Areas/Direccion" className="group mt-6 inline-flex w-fit items-center gap-3 rounded-2xl border border-[#c7e7f1] bg-white py-2 pl-4 pr-2 text-sm font-bold text-[#087da9] shadow-[0_8px_20px_-12px_rgba(4,125,169,0.4)] transition-colors hover:border-[#8bd0e6] hover:bg-[#f4fbfe] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#049DD9]">Conoce la Dirección <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e6f6fb] text-[#087da9] transition-colors group-hover:bg-[#049DD9] group-hover:text-white"><ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none" aria-hidden="true" /></span></Link>
        </div>
      </div>
    </section>
  );
}

export function TeamBanner() {
  return (
    <div
      role="img"
      aria-label="Fotografía grupal del equipo de la UGEL Ambo"
      className="h-[280px] w-full bg-[#dcecf3] bg-[url('/equipo-ugel-ambo.webp')] bg-cover bg-[center_60%] bg-no-repeat sm:h-[360px] md:h-[420px] md:bg-fixed motion-reduce:bg-scroll"
    />
  );
}
