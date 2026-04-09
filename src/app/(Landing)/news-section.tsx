"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Clock } from "lucide-react";
import Image from "next/image";

import { NewsItem, FacebookPostsResponse } from "@/types/facebook.types";
import { facebookService } from "../services/facebook.service";

const NewsImage = ({ src, alt }: { src: string; alt: string }) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-300"
      unoptimized
      onError={() => setImgSrc("/Logo1.jpg")}
    />
  );
};

export default function NewsSection() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/facebook");
      const json = await res.json();

      if (!json.success) throw new Error(json.error);

      const postsResponse: FacebookPostsResponse = {
        data: json.data,
        paging: json.paging || { cursors: { before: "", after: "" } },
      };

      const messages = facebookService.extractMessages(postsResponse);

      let formattedData = [];
      try {
        const aiResponse = await fetch("/api/format-posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ messages }),
        });

        if (aiResponse.ok) {
          const result = await aiResponse.json();
          formattedData = result.data || [];
        } else {
          formattedData = [];
        }
      } catch (aiError) {
        console.error("NewsSection - Error con AI formatting:", aiError);
        formattedData = [];
      }

      const transformedNews = facebookService.transformPostsToNews(
        postsResponse,
        formattedData
      );

      const newsWithImages = transformedNews.map((item) => ({
        ...item,
        image: item.image || "/Logo1.jpg",
      }));

      setNewsItems(newsWithImages.slice(0, 6));
    } catch (err) {
      setError(
        `No se pudieron cargar las noticias: ${
          err instanceof Error ? err.message : "Error desconocido"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  const handleNewsClick = (url?: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  if (loading) {
    return (
      <section className="py-8 md:py-10 bg-muted/30 w-full">
        <div className="w-full px-4 md:px-10">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Noticias y Actualizaciones
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Mantente informado sobre las últimas noticias de UGEL Ambo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i, index) => (
              <Card
                key={i}
                className={`overflow-hidden ${
                  index >= 3 ? "hidden md:block" : ""
                }`}
              >
                <Skeleton className="h-48 w-full" />
                <CardHeader>
                  <Skeleton className="h-4 w-20 mb-2" />
                  <Skeleton className="h-6 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-8 md:py-10 bg-muted/30 w-full">
        <div className="w-full px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Noticias y Actualizaciones
            </h2>
          </div>
          <Alert variant="destructive" className="max-w-2xl mx-auto">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </div>
      </section>
    );
  }

  return (
    <section id="noticias" className="py-8 md:py-10 bg-muted/30 w-full">
      <div className="w-full px-4 md:px-10">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex flex-col items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl md:text-4xl font-bold">
                Noticias y Actualizaciones
              </h2>
            </div>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mantente informado sobre las últimas noticias de UGEL Ambo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news, index) => (
            <Card
              key={news.id}
              className={`overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group ${
                index >= 3 ? "hidden md:flex flex-col" : "flex flex-col"
              }`}
              onClick={() => handleNewsClick(news.url)}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <NewsImage src={news.image} alt={news.title} />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge variant="secondary" className="font-medium">
                    {news.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{news.time}</span>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">
                  {news.date}
                </span>
                <CardTitle className="text-lg mt-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {news.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">
                  {news.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
