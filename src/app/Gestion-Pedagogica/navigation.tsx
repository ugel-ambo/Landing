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
          <Link href="/Gestion-Pedagogica/inicial"><NavigationMenuTrigger>Inicial</NavigationMenuTrigger></Link>
          <NavigationMenuContent>
          <ul className="grid w-[150px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/Gestion-Pedagogica/inicial/especialistas">
                    <div className="flex hover:text-white items-center">
                      <Users className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Especialistas</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Gestion-Pedagogica/inicial/monitoreo">
                    <div className="flex hover:text-white items-center">
                      <ListChecks className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Monitoreo</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Gestion-Pedagogica/inicial/fortalecimiento">
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
        <Link href="/Gestion-Pedagogica/primaria"><NavigationMenuTrigger>Primaria</NavigationMenuTrigger></Link>
          <NavigationMenuContent>
            <ul className="grid w-[150px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/Gestion-Pedagogica/primaria/especialistas">
                    <div className="flex hover:text-white items-center">
                      <Users className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Especialistas</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Gestion-Pedagogica/primaria/monitoreo">
                    <div className="flex hover:text-white items-center">
                      <ListChecks className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Monitoreo</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Gestion-Pedagogica/primaria/fortalecimiento">
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
          <Link href="/Gestion-Pedagogica/secundaria"><NavigationMenuTrigger>Secundaria</NavigationMenuTrigger></Link>
          <NavigationMenuContent>
            <ul className="grid w-[150px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/Gestion-Pedagogica/secundaria/especialistas">
                    <div className="flex hover:text-white items-center">
                      <Users className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Especialistas</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Gestion-Pedagogica/secundaria/monitoreo">
                    <div className="flex hover:text-white items-center">
                      <ListChecks className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Monitoreo</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Gestion-Pedagogica/secundaria/fortalecimiento">
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
        <Link href="/Gestion-Pedagogica/pronoi"><NavigationMenuTrigger>PRONOI</NavigationMenuTrigger></Link>
          <NavigationMenuContent>
          <ul className="grid w-[150px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/Gestion-Pedagogica/pronoi/especialistas">
                    <div className="flex hover:text-white items-center">
                      <Users className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Especialistas</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Gestion-Pedagogica/pronoi/monitoreo">
                    <div className="flex hover:text-white items-center">
                      <ListChecks className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Monitoreo</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Gestion-Pedagogica/pronoi/fortalecimiento">
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
        <Link href="/Gestion-Pedagogica/ceba"><NavigationMenuTrigger>CEBA</NavigationMenuTrigger></Link>
          <NavigationMenuContent>
          <ul className="grid w-[150px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/Gestion-Pedagogica/ceba/especialistas">
                    <div className="flex hover:text-white items-center">
                      <Users className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Especialistas</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Gestion-Pedagogica/ceba/monitoreo">
                    <div className="flex hover:text-white items-center">
                      <ListChecks className="mr-2 hover:text-white " strokeWidth={2} />
                      <div className="font-medium">Monitoreo</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/Gestion-Pedagogica/ceba/fortalecimiento">
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
