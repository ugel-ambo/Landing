"use client"

import { NavigationMenuDemo } from "./navigation";
import Image from "next/image";
import { Menu as MenuIcon, X } from "lucide-react";
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
          

          <Link href="#inicio" className="flex items-center gap-2 md:gap-3 group">
            <div className="relative w-8 h-8 md:w-10 md:h-10  rounded-lg flex items-center justify-center font-bold text-white text-lg md:text-xl">
              <Image
                src="/Logo1.jpg"
                alt="Logo "
                fill
                className="object-contsain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-lg md:text-xl font-bold tracking-tight leading-none ${
                  isScrolled ? "text-[#049DD9]" : "text-[#049DD9]"
                }`}
              >
                UGEL AMBO
              </span>
            </div>
          </Link>

          {/* Menú Desktop - Tu NavigationMenuDemo original */}
          <div className="hidden md:block">
            <NavigationMenuDemo />
          </div>

          {/* Botón Burger Mobile usando shadcn Sheet */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon-lg">
                <MenuIcon className="h-52 w-52" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-left">Menú</SheetTitle>
              </SheetHeader>
              
              <nav className="flex flex-col space-y-2 mt-6">
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="nosotros" className="border-none">
                    <AccordionTrigger className="px-4 py-3 hover:bg-accent rounded-md font-medium hover:no-underline">
                      Nosotros
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 pb-0">
                      <div className="flex flex-col space-y-1">
                        <Link 
                          href="/docs" 
                          className="px-4 py-2 text-sm hover:bg-accent rounded-md"
                          onClick={() => setOpen(false)}
                        >
                          Quiénes somos
                        </Link>
                        <Link 
                          href="/docs/installation" 
                          className="px-4 py-2 text-sm hover:bg-accent rounded-md"
                          onClick={() => setOpen(false)}
                        >
                          Misión y visión
                        </Link>
                        <Link 
                          href="/docs/primitives/typography" 
                          className="px-4 py-2 text-sm hover:bg-accent rounded-md"
                          onClick={() => setOpen(false)}
                        >
                          Nuestra historia
                        </Link>
                        <Link 
                          href="/docs/primitives/typography" 
                          className="px-4 py-2 text-sm hover:bg-accent rounded-md"
                          onClick={() => setOpen(false)}
                        >
                          Valores Institucionales
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="documentos" className="border-none">
                    <AccordionTrigger className="px-4 py-3 hover:bg-accent rounded-md font-medium hover:no-underline">
                      Documentos
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 pb-0">
                      <div className="flex flex-col space-y-2">
                        <Link 
                          href="/docs/primitives/alert-dialog" 
                          className="px-4 py-2 hover:bg-accent rounded-md"
                          onClick={() => setOpen(false)}
                        >
                          <div className="font-medium text-sm">MOP</div>
                          <div className="text-xs text-muted-foreground">Manual de Organización y Funciones del Personal</div>
                        </Link>
                        <Link 
                          href="/docs/primitives/hover-card" 
                          className="px-4 py-2 hover:bg-accent rounded-md"
                          onClick={() => setOpen(false)}
                        >
                          <div className="font-medium text-sm">MOF</div>
                          <div className="text-xs text-muted-foreground">Manual de Organización y Funciones</div>
                        </Link>
                        <Link 
                          href="/docs/primitives/progress" 
                          className="px-4 py-2 hover:bg-accent rounded-md"
                          onClick={() => setOpen(false)}
                        >
                          <div className="font-medium text-sm">RISC</div>
                          <div className="text-xs text-muted-foreground">Reglamento Interno de Servidores Civiles</div>
                        </Link>
                        <Link 
                          href="/docs/primitives/scroll-area" 
                          className="px-4 py-2 hover:bg-accent rounded-md"
                          onClick={() => setOpen(false)}
                        >
                          <div className="font-medium text-sm">TUPA</div>
                          <div className="text-xs text-muted-foreground">Texto Único de Procedimientos Administrativos</div>
                        </Link>
                        <Link 
                          href="/docs/primitives/tabs" 
                          className="px-4 py-2 hover:bg-accent rounded-md"
                          onClick={() => setOpen(false)}
                        >
                          <div className="font-medium text-sm">PEI</div>
                          <div className="text-xs text-muted-foreground">Proyecto Educativo Institucional</div>
                        </Link>
                        <Link 
                          href="/docs/primitives/tooltip" 
                          className="px-4 py-2 hover:bg-accent rounded-md"
                          onClick={() => setOpen(false)}
                        >
                          <div className="font-medium text-sm">PER</div>
                          <div className="text-xs text-muted-foreground">Proyecto Educativo Regional</div>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="areas" className="border-none">
                    <AccordionTrigger className="px-4 py-3 hover:bg-accent rounded-md font-medium hover:no-underline">
                      Áreas
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 pb-0">
                      <div className="flex flex-col space-y-2">
                        <Link 
                          href="#" 
                          className="px-4 py-2 hover:bg-accent rounded-md"
                          onClick={() => setOpen(false)}
                        >
                          <div className="font-medium text-sm">Dirección</div>
                        </Link>
                        <Link 
                          href="#" 
                          className="px-4 py-2 hover:bg-accent rounded-md"
                          onClick={() => setOpen(false)}
                        >
                          <div className="font-medium text-sm">Gestión Pedagógica</div>
                        </Link>
                        <Link 
                          href="#" 
                          className="px-4 py-2 hover:bg-accent rounded-md"
                          onClick={() => setOpen(false)}
                        >
                          <div className="font-medium text-sm">Gestión Administrativa</div>
                        </Link>
                        <Link 
                          href="#" 
                          className="px-4 py-2 hover:bg-accent rounded-md"
                          onClick={() => setOpen(false)}
                        >
                          <div className="font-medium text-sm">Planeamiento y Desarrollo Institucional</div>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Link 
                  href="/docs" 
                  className="px-4 py-3 hover:bg-accent rounded-md transition-colors font-medium"
                  onClick={() => setOpen(false)}
                >
                  Convocatorias
                </Link>

              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}