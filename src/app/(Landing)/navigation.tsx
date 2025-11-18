"use client"

import * as React from "react"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "MOP ",
    href: "/Docs/mop",
    description:
      "Manual de Organización y Funciones del Personal",
  },
  {
    title: "MOF ",
    href: "/Docs/mof",
    description:
      "Manual de Organización y Funciones",
  },
  {
    title: "RISC ",
    href: "/Docs/risc",
    description:
      "Reglamento Interno de Servidores Civiles",
  },
  {
    title: "TUPA",
    href: "/Docs/tupa",
    description: "Texto Único de Procedimientos Administrativos",
  },
  {
    title: "PEI",
    href: "/Docs/pei",
    description:
      "Proyecto Educativo Institucional",
  },
  {
    title: "POI",
    href: "/Docs/poi",
    description:
      "Plan Operativo Institucional",
  },
]

export function NavigationMenuDemo() {
  const isMobile = useIsMobile()

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">UGEL</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Nosotros</NavigationMenuTrigger>
          <NavigationMenuContent >
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] grid-cols-1">
              <ListItem href="/Nosotros/Quienes-Somos" title="Quiénes somos" className="hover:text-white" >
                Conoce quiénes somos y nuestro compromiso con la educación.
              </ListItem>
              <ListItem href="/Nosotros/Mision-Vision" title="Misión y visión" className="hover:text-white">
                Nuestra razón de ser y el propósito que guía nuestro trabajo.
              </ListItem><ListItem href="/Nosotros/Organigrama" title="Organigrama" className="hover:text-white">
                Nuestra razón de ser y el propósito que guía nuestro trabajo.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Documentos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Áreas</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/Areas/Direccion">
                    <div className="font-medium">Dirección</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Gestion-Pedagogica">
                    <div className="font-medium">Gestión Pedagógica</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Areas/Gestion-Administrativa">
                    <div className="font-medium">Gestión Administrativa</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Areas/RRHH">
                    <div className="font-medium">Unidad de Gestión de Recursos Humanos</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Areas/Planeamiento-y-Desarrollo-Institucional">
                    <div className="font-medium">Planeamiento y Desarrollo Institucional</div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="http://ugelambo.regionhuanuco.gob.pe/convocatorias">Convocatorias</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>


      </NavigationMenuList>
    </NavigationMenu>
  )
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
  )
}
