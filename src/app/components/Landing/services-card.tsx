"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Megaphone, Gift, ExternalLink } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Consulta tu Expediente",
    description: "Accede a tu expediente académico y documentación",
    icon: FileText,
    href: "https://digital.regionhuanuco.gob.pe/registro/mpv/obs/3",
    external: false,
    color: "from-blue-50 to-blue-100/50",
    iconColor: "text-primary",
  },
  {
    id: 2,
    title: "Convocatorias",
    description: "Últimas convocatorias y oportunidades laborales",
    icon: Megaphone,
    href: "/consultas/convocatorias",
    external: false,
    color: "from-cyan-50 to-cyan-100/50",
    iconColor: "text-secondary",
  },
  {
    id: 3,
    title: "Becas y Créditos PRONABEC",
    description: "Información sobre becas y créditos educativos",
    icon: Gift,
    href: "/consultas/becas",
    external: false,
    color: "from-blue-50 to-blue-100/50",
    iconColor: "text-primary",
  },
]

export default function ServicesCards() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Servicios Principales</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Accede a los servicios más solicitados de UGEL Ambo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.id}
                className={`hover:shadow-xl transition-all duration-300 border-0 bg-linear-to-br ${service.color} hover:scale-105`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                      <CardDescription className="mt-2 text-muted-foreground">{service.description}</CardDescription>
                    </div>
                    <Icon className={`w-6 h-6 ${service.iconColor} shrink-0 ml-2`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <Link href={service.href}>
                    <Button className="w-full bg-primary hover:bg-secondary text-white font-semibold">
                      Acceder
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
