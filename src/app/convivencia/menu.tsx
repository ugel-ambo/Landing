"use client";

import Image from "next/image";
import {
  Menu as MenuIcon,
  Home,
  Video,
  FileImage,
  ClipboardList,
  ArrowLeft,
  Wrench,
  CalendarDays,
} from "lucide-react";
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
import type { LucideIcon } from "lucide-react";

interface MobileLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

const mobileLinks: MobileLink[] = [
  { href: "/convivencia", label: "Inicio", icon: Home },
  { href: "/convivencia/videos", label: "Videos", icon: Video },
  { href: "/convivencia/flyers", label: "Flyers", icon: FileImage },
  {
    href: "/convivencia/protocolos",
    label: "Protocolos de Atención",
    icon: ClipboardList,
  },
  {
    href: "/herramientas",
    label: "Herramientas",
    icon: Wrench,
  },
  {
    href: "/convivencia/calendario",
    label: "Calendario",
    icon: CalendarDays,
  },
];

export default function Menu() {
  const [, setIsScrolled] = useState(false);
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
                src="/logo2026.png"
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
                <SheetTitle className="text-left">
                  Convivencia Escolar
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col space-y-2 mt-6">
                {mobileLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-4 py-3 hover:bg-accent rounded-md font-medium hover:text-white flex items-center gap-3"
                      onClick={() => setOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      {link.label}
                    </Link>
                  );
                })}
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
