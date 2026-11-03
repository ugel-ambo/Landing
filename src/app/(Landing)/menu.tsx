"use client";

import Image from "next/image";
import { Menu as MenuIcon, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { NavigationMenuDemo } from "./navigation";
import { INSTITUCIONES_EDUCATIVAS } from "@/data/iiee";

export default function Menu() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-shadow ${isScrolled ? "shadow-md shadow-[#17364e]/10" : "shadow-sm"}`}>
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
        <div className={`flex items-center justify-between gap-4 transition-[height] duration-300 ${isScrolled ? "h-16" : "h-20"}`}>
          {/* Logo y Nombre */}
          <Link href="/" aria-label="UGEL Ambo, ir al inicio" className="group flex shrink-0 items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#049DD9]">
            <div className={`relative w-24 transition-[height] duration-300 ${isScrolled ? "h-16" : "h-20"}`}>
              <Image
                src="/logo2026.png"
                alt="Logo UGEL Ambo"
                fill
                className="object-contain"
                priority
              />
              {/* Distintivo Dorado 13 Aniversario */}
              <div className="absolute right-0 top-1 z-10 flex items-center gap-1 rounded-full border border-amber-200 bg-gradient-to-r from-amber-400 to-yellow-300 px-2 py-0.5 text-[9px] font-bold text-[#553a00] shadow-sm select-none">
                <Sparkles className="w-2.5 h-2.5 text-slate-900 fill-slate-900 shrink-0" />
                <span>13 Años</span>
              </div>
            </div>
          </Link>

          {/* Menú Desktop  */}
          <div className="hidden xl:block">
            <NavigationMenuDemo />
          </div>

          {/* Botón Mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="ghost" size="icon" aria-label="Abrir menú de navegación" className="rounded-xl border border-[#049DD9]/20 bg-[#049DD9]/5 text-[#16668b] hover:bg-[#049DD9]/10">
                <MenuIcon className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] sm:w-[400px] overflow-y-auto"
            >
              <SheetHeader>
                <SheetTitle className="text-left">Menú</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-2 mt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="Inicio" className="border-none">
                    <AccordionTrigger
                      className="px-4 py-3 hover:bg-accent rounded-md font-medium hover:no-underline hover:text-white [&>svg]:hidden"
                      onClick={() => {
                        window.location.href = "/";
                        setOpen(false);
                      }}
                    >
                      INICIO
                    </AccordionTrigger>
                  </AccordionItem>

                  <AccordionItem value="Jurisdiccion" className="border-none">
                    <AccordionTrigger
                      className="px-4 py-3 hover:bg-accent rounded-md font-medium hover:no-underline hover:text-white [&>svg]:hidden"
                      onClick={() => {
                        window.location.href = "/Nosotros/Jurisdiccion";
                        setOpen(false);
                      }}
                    >
                      JURISDICCIÓN
                    </AccordionTrigger>
                  </AccordionItem>

                  <AccordionItem value="iiee" className="border-none">
                    <AccordionTrigger className="px-4 py-3 hover:bg-accent rounded-md font-medium hover:no-underline hover:text-white">
                      II.EE.
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 pb-0">
                      <div className="flex flex-col space-y-1 max-h-[300px] overflow-y-auto pr-1">
                        {INSTITUCIONES_EDUCATIVAS.map((ie) => (
                          <a
                            key={ie.id}
                            href={ie.enlace}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm hover:bg-accent rounded-md hover:text-white block font-medium transition-colors"
                            onClick={() => setOpen(false)}
                          >
                            {ie.nombre}
                          </a>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="nosotros" className="border-none">
                    <AccordionTrigger className="px-4 py-3 hover:bg-accent rounded-md font-medium hover:no-underline hover:text-white">
                      NOSOTROS
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 pb-0">
                      <div className="flex flex-col space-y-1">
                        <Link
                          href="/Nosotros/Quienes-Somos"
                          className="px-4 py-2 text-sm hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          Quiénes somos
                        </Link>
                        <Link
                          href="/Nosotros/Mision-Vision"
                          className="px-4 py-2 text-sm hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          Misión y visión
                        </Link>
                        <Link
                          href="/Nosotros/Organigrama"
                          className="px-4 py-2 text-sm hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          Organigrama
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="documentos" className="border-none">
                    <AccordionTrigger className="px-4 py-3 hover:bg-accent rounded-md font-medium hover:no-underline hover:text-white">
                      DOCUMENTOS
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 pb-0">
                      <div className="flex flex-col space-y-2 ">
                        <Link
                          href="/Docs/mop"
                          className="px-4 py-2 hover:bg-accent rounded-md"
                          onClick={() => setOpen(false)}
                        >
                          <div className="font-medium text-sm hover:text-white">
                            MOP
                          </div>
                        </Link>
                        <Link
                          href="/Docs/mof"
                          className="px-4 py-2 hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          <div className="font-medium text-sm hover:text-white">
                            MOF
                          </div>
                        </Link>
                        <Link
                          href="/Docs/risc"
                          className="px-4 py-2 hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          <div className="font-medium text-sm hover:text-white">
                            RISC
                          </div>
                        </Link>
                        <Link
                          href="/Docs/tupa"
                          className="px-4 py-2 hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          <div className="font-medium text-sm hover:text-white">
                            TUPA
                          </div>
                        </Link>
                        <Link
                          href="/Docs/pei"
                          className="px-4 py-2 hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          <div className="font-medium text-sm hover:text-white">
                            PEI
                          </div>
                        </Link>
                        <Link
                          href="/Docs/poi"
                          className="px-4 py-2 hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          <div className="font-medium text-sm hover:text-white">
                            POI
                          </div>
                        </Link>
                        <Link
                          href="/Docs/cuadro_multianual"
                          className="px-4 py-2 hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          <div className="font-medium text-sm hover:text-white">
                            Cuadro Multianual
                          </div>
                        </Link>
                        <Link
                          href="/Docs/integridad"
                          className="px-4 py-2 hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          <div className="font-medium text-sm hover:text-white">
                            Programa de Integridad
                          </div>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="Areas" className="border-none ">
                    <AccordionTrigger className="px-4 py-3 hover:bg-accent rounded-md font-medium hover:no-underline hover:text-white">
                      UNIDADES
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 pb-0 ">
                      <div className="flex flex-col space-y-2 ">
                        <Link
                          href="/Areas/Direccion"
                          className="px-4 py-2 hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          <div className="font-medium text-sm">
                            Unidad de Dirección
                          </div>
                        </Link>
                        <Link
                          href="/Gestion-Pedagogica"
                          className="px-4 py-2 hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          <div className="font-medium text-sm">
                            Unidad de Gestión Pedagógica
                          </div>
                        </Link>
                        <Link
                          href="/Areas/Gestion-Administrativa"
                          className="px-4 py-2 hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          <div className="font-medium text-sm">
                            Unidad de Gestión Administrativa
                          </div>
                        </Link>
                        <Link
                          href="/Areas/RRHH"
                          className="px-4 py-2 hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          <div className="font-medium text-sm">
                            Unidad de Gestión de Recursos Humanos
                          </div>
                        </Link>
                        <Link
                          href="/Areas/Planeamiento-y-Desarrollo-Institucional"
                          className="px-4 py-2 hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          <div className="font-medium text-sm">
                            Unidad de Planeamiento y Desarrollo Institucional
                          </div>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="Normativas" className="border-none">
                    <AccordionTrigger
                      className="px-4 py-3 hover:bg-accent rounded-md font-medium hover:no-underline hover:text-white [&>svg]:hidden"
                      onClick={() => {
                        window.location.href = "/Normativa";
                        setOpen(false);
                      }}
                    >
                      NORMATIVAS
                    </AccordionTrigger>
                  </AccordionItem>

                  <AccordionItem value="Convocatorias" className="border-none">
                    <AccordionTrigger
                      className="px-4 py-3 hover:bg-accent rounded-md font-medium hover:no-underline hover:text-white [&>svg]:hidden"
                      onClick={() => {
                        window.location.href = "/convocatoria";
                        setOpen(false);
                      }}
                    >
                      CONVOCATORIAS
                    </AccordionTrigger>
                  </AccordionItem>
                  <AccordionItem value="Integridad" className="border-none">
                    <AccordionTrigger
                      className="px-4 py-3 hover:bg-accent rounded-md font-medium hover:no-underline hover:text-white [&>svg]:hidden"
                      onClick={() => {
                        window.location.href = "/integridad";
                        setOpen(false);
                      }}
                    >
                      INTEGRIDAD
                    </AccordionTrigger>
                  </AccordionItem>
                </Accordion>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
