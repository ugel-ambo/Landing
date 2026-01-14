"use client";

import { useEffect, useState } from "react";
import Menu from "../(Landing)/menu";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { PlayCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  getYoutubeID,
  Tutorial,
  TutorialesApiResponse,
  CATEGORIAS,
  CategoriaKey,
} from "@/types/tutorial.types";

export default function TutorialesPage() {
  const [tutoriales, setTutoriales] = useState<Tutorial[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<"all" | CategoriaKey>("all");

  useEffect(() => {
    fetch("/api/tutoriales")
      .then((res) => res.json())
      .then((data: TutorialesApiResponse) => {
        if (data.success) {
          setTutoriales(data.data);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filteredTutoriales = tutoriales.filter((t) => {
    const matchesSearch =
      t.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || t.categoria === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-background">
      <Menu />
      <div className="bg-[#049DD9] py-8 md:py-10 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Tutoriales para Docentes
          </h1>
          <p className="text-lg md:text-lg text-blue-100 max-w-2xl mx-auto">
            Guías en video para facilitar el uso de nuestras plataformas y
            procesos administrativos.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Buscar tutoriales..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {(
              Object.entries(CATEGORIAS) as ["all" | CategoriaKey, string][]
            ).map(([key, label]) => (
              <Button
                key={key}
                variant={filter === key ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(key)}
                className="whitespace-nowrap"
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : filteredTutoriales.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutoriales.map((tutorial) => {
              const videoId = getYoutubeID(tutorial.youtubeUrl);
              return (
                <Card
                  key={tutorial._id}
                  className="overflow-hidden hover:shadow-lg transition-all group"
                >
                  <div className="relative h-48 bg-black">
                    {videoId ? (
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={tutorial.titulo}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/50">
                        <PlayCircle className="w-12 h-12" />
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <Badge variant="secondary">
                        {CATEGORIAS[tutorial.categoria] || tutorial.categoria}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl line-clamp-1">
                      {tutorial.titulo}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {tutorial.descripcion}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No se encontraron tutoriales con esos criterios.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
