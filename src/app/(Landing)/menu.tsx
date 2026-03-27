"use client";

import Image from "next/image";
import { Menu as MenuIcon } from "lucide-react";
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
    <div className="w-full border-b bg-background sticky top-0 z-50 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between lg:justify-evenly h-16 md:h-20">
          {/* Logo y Nombre */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="relative md:w-28 md:h-28 w-22 h-22 ml-4 md:ml-0 items-center justify-center ">
              <Image
                src="/logo2026.png"
                alt="Logo "
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Menú Desktop  */}
          <div className="hidden md:block">
            <NavigationMenuDemo />
          </div>

          {/* Botón Mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon-lg">
                <MenuIcon className="h-52 w-52" />
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
