"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { INSTITUCIONES_EDUCATIVAS } from "@/data/iiee";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "MOP ",
    href: "/Docs/mop",
    description: "Manual de Organización y Funciones del Personal",
  },
  {
    title: "MOF ",
    href: "/Docs/mof",
    description: "Manual de Organización y Funciones",
  },
  {
    title: "RISC ",
    href: "/Docs/risc",
    description: "Reglamento Interno de Servidores Civiles",
  },
  {
    title: "TUPA",
    href: "/Docs/tupa",
    description: "Texto Único de Procedimientos Administrativos",
  },
  {
    title: "PEI",
    href: "/Docs/pei",
    description: "Proyecto Educativo Institucional",
  },
  {
    title: "POI",
    href: "/Docs/poi",
    description: "Plan Operativo Institucional",
  },
  {
    title: "Cuadro Multianual",
    href: "/Docs/cuadro_multianual",
    description: "Cuadro Multianual de Necesidades",
  },
  {
    title: "Programa de Integridad",
    href: "/Docs/integridad",
    description: "Programa de Integridad 2026",
  },
];

export function NavigationMenuDemo() {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const navClass = "!bg-transparent !text-[#223F59] hover:!bg-[#eaf7fc] hover:!text-[#007dab] focus:!bg-[#eaf7fc] focus:!text-[#007dab] data-[state=open]:!bg-[#eaf7fc] data-[state=open]:!text-[#007dab]";
  const activeClass = "!bg-[#eaf7fc] !text-[#007dab]";

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-nowrap">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} ${navClass} ${pathname === "/" ? activeClass : ""}`}>
            <Link href="/">UGEL</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} ${navClass} ${pathname === "/Nosotros/Jurisdiccion" ? activeClass : ""}`}>
            <Link href="/Nosotros/Jurisdiccion">JURISDICCIÓN</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={navClass}
            onClick={(e) => !isMobile && e.preventDefault()}>
            II.EE.
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[240px] sm:w-[260px] gap-0.5 p-1 max-h-[360px] overflow-y-auto">
              {INSTITUCIONES_EDUCATIVAS.map((ie) => (
                <li key={ie.id}>
                  <NavigationMenuLink asChild>
                    <a
                      href={ie.enlace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 rounded-md transition-colors hover:bg-accent focus:bg-accent outline-none cursor-pointer group/item"
                    >
                      <span className="text-sm font-medium text-foreground group-hover/item:text-white transition-colors leading-snug">
                        {ie.nombre}
                      </span>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={navClass}
            onClick={(e) => !isMobile && e.preventDefault()}>
            NOSOTROS
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] grid-cols-1">
              <ListItem
                href="/Nosotros/Directorio"
                title="Directorio"
                className="hover:text-white">
                Este es nuestro Directorio de la UGEL Ambo, conoce a nuestro equipo de trabajo y sus funciones.
              </ListItem>
              <ListItem
                href="/Nosotros/Quienes-Somos"
                title="Quiénes somos"
                className="hover:text-white">
                Conoce quiénes somos y nuestro compromiso con la educación.
              </ListItem>
              <ListItem
                href="/Nosotros/Mision-Vision"
                title="Misión y visión"
                className="hover:text-white">
                Nuestra razón de ser y el propósito que guía nuestro trabajo.
              </ListItem>
              <ListItem
                href="/Nosotros/Organigrama"
                title="Organigrama"
                className="hover:text-white">
                Estructura orgánica y jerárquica de la UGEL Ambo.
              </ListItem>
              {/* <ListItem
                href="/Nosotros/Jurisdiccion"
                title="Jurisdicción"
                className="hover:text-white"
              >
                Nuestras Instituciones Educativas en la Provincia de Ambo.
              </ListItem> */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={navClass}
            onClick={(e) => !isMobile && e.preventDefault()}>
            DOCUMENTOS
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger
            className={navClass}
            onClick={(e) => !isMobile && e.preventDefault()}>
            UNIDADES
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/Areas/Direccion">
                    <div className="font-medium">Unidad de Dirección</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Gestion-Pedagogica">
                    <div className="font-medium">
                      Unidad de Gestión Pedagógica
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Areas/Gestion-Administrativa">
                    <div className="font-medium">
                      Unidad de Gestión Administrativa
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Areas/RRHH">
                    <div className="font-medium">
                      Unidad de Gestión de Recursos Humanos
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Areas/Planeamiento-y-Desarrollo-Institucional">
                    <div className="font-medium">
                      Unidad de Planeamiento y Desarrollo Institucional
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} ${navClass} ${pathname === "/Normativa" ? activeClass : ""}`}>
            <Link href="/Normativa">NORMATIVAS</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} !rounded-full !bg-[#049DD9] !px-4 !text-white shadow-sm hover:!bg-[#007eaf] focus:!bg-[#007eaf] ${pathname === "/convocatoria" ? "!bg-[#006b94]" : ""}`}>
            <Link href="/convocatoria">CONVOCATORIAS</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} ${navClass} ${pathname.startsWith("/integridad") ? activeClass : ""}`}>
            <Link href="/integridad">INTEGRIDAD</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug hover:text-white">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
