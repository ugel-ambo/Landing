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

import { HardDrive, ListChecks, Users } from "lucide-react"

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

        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Inicial</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid w-[150px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/Areas/Direccion">
                    <div className="flex hover:text-white items-center">
                      <Users className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Especialistas</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Areas/Direccion">
                    <div className="flex hover:text-white items-center">
                      <ListChecks className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Monitoreo</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Gestion-Pedagogica">
                    <div className="flex hover:text-white items-center">
                      <HardDrive className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Fortalecimiento</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Primaria</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[150px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/Areas/Direccion">
                    <div className="flex hover:text-white items-center">
                      <Users className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Especialistas</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Areas/Direccion">
                    <div className="flex hover:text-white items-center">
                      <ListChecks className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Monitoreo</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Gestion-Pedagogica">
                    <div className="flex hover:text-white items-center">
                      <HardDrive className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Fortalecimiento</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Secundaria</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[150px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/Areas/Direccion">
                    <div className="flex hover:text-white items-center">
                      <Users className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Directorio</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Areas/Direccion">
                    <div className="flex hover:text-white items-center">
                      <ListChecks className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Monitoreo</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Gestion-Pedagogica">
                    <div className="flex hover:text-white items-center">
                      <HardDrive className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Repositorio</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>CEBA</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid w-[150px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/Areas/Direccion">
                    <div className="flex hover:text-white items-center">
                      <Users className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Especialistas</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Areas/Direccion">
                    <div className="flex hover:text-white items-center">
                      <ListChecks className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Monitoreo</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Gestion-Pedagogica">
                    <div className="flex hover:text-white items-center">
                      <HardDrive className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Fortalecimiento</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>PRONOI</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid w-[150px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/Areas/Direccion">
                    <div className="flex hover:text-white items-center">
                      <Users className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Especialistas</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Areas/Direccion">
                    <div className="flex hover:text-white items-center">
                      <ListChecks className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Monitoreo</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Gestion-Pedagogica">
                    <div className="flex hover:text-white items-center">
                      <HardDrive className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Fortalecimiento</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
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
