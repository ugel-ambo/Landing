"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileCheck, LogIn, Globe ,FileInput } from "lucide-react";

const tramites = [
  {
    id: 1,
    title: "Formato Único de Trámite",
    description: "Accede a los formatos estándar para tus trámites",
    icon: FileCheck,
    href: "/docs/FUT_MESADEPARTES.pdf",
    download: true,
    filename: "FUT_UGEL.pdf"
  },
  {
    id: 2,
    title: "PAPELETA DE SALIDA",
    description: "Formato de papeleta de salida",
    icon: FileInput,
    href: "/docs/PAPELETA_2026.doc",
    download: true,
    filename: "PAPELETA_2026.doc"
  },
  {
    id: 3,
    title: "Mesa de Partes Virtual",
    description: "Accede y envía tus documentos de manera digital",
    icon: Globe, // 👈 cambiado (mejor para enlaces web)
    href: "http://digital.regionhuanuco.gob.pe/registro/mesa-partes-virtual/263",
    external: true // 👈 en vez de download
  },
  {
    id: 4,
    title: "Registro de Visitas",
    description: "Control y registro de visitas a la institución",
    icon: LogIn,
    href: "https://visitas.servicios.gob.pe/consultas/index.php?ruc_enti=20573159030"
  }
];

export default function TramitesSection() {
  return (
    <section id="tramite" className="py-10 md:py-10 bg-background w-full">
      <div className="w-full px-4 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trámites y Servicios
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Realiza tus trámites de forma rápida y segura
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tramites.map((tramite) => {
              const Icon = tramite.icon;
              return (
                <Card
                  key={tramite.id}
                  className="hover:shadow-lg transition-shadow flex flex-col"
                >
                  <CardHeader>
                    <Icon className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{tramite.title}</CardTitle>
                    <CardDescription>{tramite.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    {tramite.download ? (
                      <a
                        href={tramite.href}
                        download={tramite.filename ?? true}
                        className="w-full"
                      >
                        <Button
                          variant="outline"
                          className="w-full bg-transparent"
                        >
                          Descargar
                        </Button>
                      </a>
                    ) : (
                      <Link href={tramite.href} className="w-full">
                        <Button
                          variant="outline"
                          className="w-full bg-transparent"
                        >
                          Acceder
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </div>
    </section>
  );
}
