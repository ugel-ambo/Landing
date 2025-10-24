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
    href: "/docs/primitives/alert-dialog",
    description:
      "Manual de Organización y Funciones del Personal",
  },
  {
    title: "MOF ",
    href: "/docs/primitives/hover-card",
    description:
      "Manual de Organización y Funciones",
  },
  {
    title: "RISC ",
    href: "/docs/primitives/progress",
    description:
      "Reglamento Interno de Servidores Civiles",
  },
  {
    title: "TUPA",
    href: "/docs/primitives/scroll-area",
    description: "Texto Único de Procedimientos Administrativos",
  },
  {
    title: "PEI",
    href: "/docs/primitives/tabs",
    description:
      "Proyecto Educativo Institucional",
  },
  {
    title: "PER",
    href: "/docs/primitives/tooltip",
    description:
      "Proyecto Educativo Regional",
  },
]

export function NavigationMenuDemo() {
    const isMobile = useIsMobile()
  
    return (
      <NavigationMenu viewport={isMobile}>
        <NavigationMenuList className="flex-wrap">
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/docs">UGEL</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>    
  
          <NavigationMenuItem>
            <NavigationMenuTrigger>Nosotros</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
                  <ListItem href="/docs" title="Quiénes somos">
                  Conoce quiénes somos y nuestro compromiso con la educación.
                </ListItem>
                <ListItem href="/docs/installation" title="Misión y visión">
                  Nuestra razón de ser y el propósito que guía nuestro trabajo.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Nuestra historia">
                  Recorrido institucional y logros alcanzados a lo largo del tiempo.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Valores Institucionales">
                  Principios que guían nuestras acciones y decisiones.
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
                    <Link href="#">
                      <div className="font-medium">Dirección</div>
                      <div className="text-muted-foreground">
                        Información sobre el despacho de dirección y sus funciones.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">
                      <div className="font-medium">Gestión Pedagógica</div>
                      <div className="text-muted-foreground">
                        Coordinación de la calidad educativa y acompañamiento docente.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">
                      <div className="font-medium">Gestión Administrativa</div>
                      <div className="text-muted-foreground">
                        Administración de recursos humanos, materiales y financieros.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">
                      <div className="font-medium">Planeamiento y Desarrollo Institucional</div>
                      <div className="text-muted-foreground">
                        Planificación estratégica y desarrollo institucional sostenible.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
  
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/docs">Convocatoria</Link>
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
