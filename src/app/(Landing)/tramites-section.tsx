"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileCheck, Users, Database, LogIn } from "lucide-react"

const tramites = [
  {
    id: 1,
    title: "Formato Único de Trámite",
    description: "Accede a los formatos estándar para tus trámites",
    icon: FileCheck,
    href: "/docs/FUT_UGEL.pdf",
    download: true,
    filename: "FUT_UGEL.pdf",
  },
  {
    id: 2,
    title: "AYNI",
    description: "Sistema de gestión de recursos humanos",
    icon: Users,
    href: "https://servicios-ayni.minedu.gob.pe/ayni/inicio",
  },
  {
    id: 3,
    title: "Sistema de Gestión Documental (SGD)",
    description: "Plataforma digital para gestión de documentos",
    icon: Database,
    href: "https://digital.regionhuanuco.gob.pe/login",
  },
  {
    id: 4,
    title: "Registro de Visitas",
    description: "Control y registro de visitas a la institución",
    icon: LogIn,
    href: "http://ugelambo.regionhuanuco.gob.pe/visitas",
  },
]

export default function TramitesSection() {
  return (
    <section id="tramite" className="py-10  md:py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trámites y Servicios</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Realiza tus trámites de forma rápida y segura
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tramites.map((tramite) => {
            const Icon = tramite.icon
            return (
              <Card key={tramite.id} className="hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader>
                  <Icon className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{tramite.title}</CardTitle>
                  <CardDescription>{tramite.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  {tramite.download ? (
                    <a href={tramite.href} download={tramite.filename ?? true} className="w-full">
                      <Button variant="outline" className="w-full bg-transparent">
                        Descargar
                      </Button>
                    </a>
                  ) : (
                    <Link href={tramite.href} className="w-full">
                      <Button variant="outline" className="w-full bg-transparent">
                        Acceder
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
