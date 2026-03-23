"use client";

import Image from "next/image";
import { Menu as MenuIcon, Home, Video, FileImage, ClipboardList, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ConvivenciaNavigation } from "./navigation";

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

          {/* Menú Desktop */}
          <div className="hidden md:block">
            <ConvivenciaNavigation />
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
                <SheetTitle className="text-left">Convivencia Escolar</SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col space-y-2 mt-6">
                <Link
                  href="/convivencia"
                  className="px-4 py-3 hover:bg-accent rounded-md font-medium hover:text-white flex items-center gap-3"
                  onClick={() => setOpen(false)}
                >
                  <Home className="w-5 h-5" /> Inicio
                </Link>
                <Link
                  href="/convivencia/videos"
                  className="px-4 py-3 hover:bg-accent rounded-md font-medium hover:text-white flex items-center gap-3"
                  onClick={() => setOpen(false)}
                >
                  <Video className="w-5 h-5" /> Videos
                </Link>
                <Link
                  href="/convivencia/flyers"
                  className="px-4 py-3 hover:bg-accent rounded-md font-medium hover:text-white flex items-center gap-3"
                  onClick={() => setOpen(false)}
                >
                  <FileImage className="w-5 h-5" /> Flyers
                </Link>
                <Link
                  href="/convivencia/protocolos"
                  className="px-4 py-3 hover:bg-accent rounded-md font-medium hover:text-white flex items-center gap-3"
                  onClick={() => setOpen(false)}
                >
                  <ClipboardList className="w-5 h-5" /> Protocolos de Atención
                </Link>
                <div className="border-t my-4" />
                <Link
                  href="/"
                  className="px-4 py-3 hover:bg-accent rounded-md font-medium hover:text-white flex items-center gap-3"
                  onClick={() => setOpen(false)}
                >
                  <ArrowLeft className="w-5 h-5" /> Volver a UGEL
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
