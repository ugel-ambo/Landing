"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";

export function ConvivenciaNavigation() {
  const isMobile = useIsMobile();

  const links = [
    { href: "/", label: "UGEL" },
    { href: "/convivencia", label: "Inicio" },
    { href: "/convivencia/flyers", label: "Flyers" },
    { href: "/convivencia/protocolos", label: "Protocolos" },
    { href: "/convivencia/herramientas", label: "Herramientas" },
    { href: "/convivencia/videos", label: "Videos" },
    { href: "/convivencia/calendario", label: "Calendario" },
  ];

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap">
        {links.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={link.href}>{link.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
