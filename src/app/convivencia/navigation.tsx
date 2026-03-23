"use client";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Video, Image, FileText } from "lucide-react";

export function ConvivenciaNavigation() {
  const isMobile = useIsMobile();

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">UGEL</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/convivencia">Inicio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:block">
          <Link href="/convivencia/videos">
            <NavigationMenuTrigger>Videos</NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/convivencia/videos">
                    <div className="flex hover:text-white items-center">
                      <Video
                        className="mr-2 hover:text-white"
                        strokeWidth={2}
                      />
                      <div className="font-medium">Videos Educativos</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:block">
          <Link href="/convivencia/flyers">
            <NavigationMenuTrigger>Flyers</NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/convivencia/flyers">
                    <div className="flex hover:text-white items-center">
                      <Image
                        className="mr-2 hover:text-white"
                        strokeWidth={2}
                      />
                      <div className="font-medium">Material Gráfico</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:block">
          <Link href="/convivencia/protocolos">
            <NavigationMenuTrigger>Protocolos</NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className="grid w-[250px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/convivencia/protocolos">
                    <div className="flex hover:text-white items-center">
                      <FileText
                        className="mr-2 hover:text-white"
                        strokeWidth={2}
                      />
                      <div className="font-medium">Protocolos de Atención</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
