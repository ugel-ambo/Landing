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
    <div className="w-full bg-background sticky top-0 z-50 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between lg:justify-evenly h-16 md:h-20">
          {/* Logo y Nombre */}

          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="relative md:w-28 md:h-28 w-22 h-22 ml-4 md:ml-0 items-center justify-center ">
              <Image
                src="/newlogo.png"
                alt="Logo "
                fill
                className="object-contain"
                priority
              />
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
            <SheetContent
              side="left"
              className="w-[300px] sm:w-[400px] overflow-y-auto"
            >
              <SheetHeader>
                <SheetTitle className="text-left">Menú</SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col space-y-2 mt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="inicial" className="border-none">
                    <Link href="/Gestion-Pedagogica/inicial">
                      <AccordionTrigger className="px-4 py-3 hover:bg-accent rounded-md font-medium hover:no-underline hover:text-white">
                        Inicial
                      </AccordionTrigger>
                    </Link>
                    <AccordionContent className="pl-4 pb-0">
                      <div className="flex flex-col space-y-1">
                        <Link
                          href="/Gestion-Pedagogica/inicial/especialistas"
                          className="px-4 py-2 text-sm hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          Especialistas
                        </Link>
                        <Link
                          href="/Gestion-Pedagogica/inicial/fortalecimiento"
                          className="px-4 py-2 text-sm hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          Fortalecimiento
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="primaria" className="border-none">
                    <Link href="/Gestion-Pedagogica/primaria">
                      <AccordionTrigger className="px-4 py-3 hover:bg-accent rounded-md font-medium hover:no-underline hover:text-white">
                        Primaria
                      </AccordionTrigger>
                    </Link>
                    <AccordionContent className="pl-4 pb-0">
                      <div className="flex flex-col space-y-1">
                        <Link
                          href="/Gestion-Pedagogica/primaria/especialistas"
                          className="px-4 py-2 text-sm hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          Especialistas
                        </Link>
                        <Link
                          href="/Gestion-Pedagogica/primaria/fortalecimiento"
                          className="px-4 py-2 text-sm hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          Fortalecimiento
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="secundaria" className="border-none">
                    <Link href="/Gestion-Pedagogica/secundaria">
                      <AccordionTrigger className="px-4 py-3 hover:bg-accent rounded-md font-medium hover:no-underline hover:text-white">
                        Secundaria
                      </AccordionTrigger>
                    </Link>
                    <AccordionContent className="pl-4 pb-0">
                      <div className="flex flex-col space-y-1">
                        <Link
                          href="/Gestion-Pedagogica/secundaria/especialistas"
                          className="px-4 py-2 text-sm hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          Especialistas
                        </Link>
                        <Link
                          href="/Gestion-Pedagogica/secundaria/fortalecimiento"
                          className="px-4 py-2 text-sm hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          Fortalecimiento
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="pronoi" className="border-none">
                    <Link href="/Gestion-Pedagogica/pronoi">
                      <AccordionTrigger className="px-4 py-3 hover:bg-accent rounded-md font-medium hover:no-underline hover:text-white">
                        PRONOEI
                      </AccordionTrigger>
                    </Link>
                    <AccordionContent className="pl-4 pb-0">
                      <div className="flex flex-col space-y-1">
                        <Link
                          href="/Gestion-Pedagogica/pronoi/especialistas"
                          className="px-4 py-2 text-sm hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          Especialistas
                        </Link>

                        <Link
                          href="/Gestion-Pedagogica/pronoi/fortalecimiento"
                          className="px-4 py-2 text-sm hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          Fortalecimiento
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="ceba" className="border-none">
                    <Link href="/Gestion-Pedagogica/ceba">
                      <AccordionTrigger className="px-4 py-3 hover:bg-accent rounded-md font-medium hover:no-underline hover:text-white">
                        CEBA
                      </AccordionTrigger>
                    </Link>
                    <AccordionContent className="pl-4 pb-0">
                      <div className="flex flex-col space-y-1">
                        <Link
                          href="/Gestion-Pedagogica/ceba/especialistas"
                          className="px-4 py-2 text-sm hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          Especialistas
                        </Link>
                        <Link
                          href="/Gestion-Pedagogica/ceba/fortalecimiento"
                          className="px-4 py-2 text-sm hover:bg-accent rounded-md hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          Fortalecimiento
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  {/* Convivencia Escolar se accede vía /convivencia (sección propia) */}
                  <Link
                    href="/convivencia"
                    className="flex items-center px-4 py-3 hover:bg-accent rounded-md font-medium hover:text-white transition-colors text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Convivencia Escolar
                  </Link>
                </Accordion>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
