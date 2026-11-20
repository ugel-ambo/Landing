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
import { ArrowUpRight, Clock } from "lucide-react";
import Image from "next/image";
import SectionHeader from "@/components/section-header";
import { Newspaper } from "lucide-react";

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
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
      unoptimized
      onError={() => setImgSrc("/Logo1.jpg")}
    />
  );
};

const FacebookLogo = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
    <circle cx="12" cy="12" r="12" fill="#1877F2" />
    <path fill="#fff" d="M13.5 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.2c-.3 0-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z" />
  </svg>
);

const isRecentNews = (news: NewsItem) => {
  if (news.rawDate) {
    const postTime = new Date(news.rawDate).getTime();
    if (!isNaN(postTime)) {
      const diffHours = (Date.now() - postTime) / (1000 * 60 * 60);
      return diffHours <= 48 && diffHours >= 0;
    }
  }
  return false;
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

  if (loading) {
    return (
      <section className="py-8 md:py-10 bg-muted/30 w-full">
        <div className="w-full px-4 md:px-10">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Noticias y Actualizaciones
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Mantente informado sobre las últimas noticias de UGEL Ambo 2026
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
    <section id="noticias" className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#f1faff] to-[#f8fcfe] py-12 md:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-16 h-64 w-64 rounded-full bg-[#049DD9]/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 bottom-10 h-48 w-48 rounded-full bg-[#f4bc32]/10 blur-3xl" />
      <div className="relative w-full px-4 md:px-10">
        <SectionHeader
          badgeIcon={<Newspaper className="w-3.5 h-3.5 text-[#049DD9]" />}
          badgeText="Actualidad UGEL"
          title="Noticias y"
          titleHighlight="Actualizaciones"
          description="Mantente informado sobre los ultimos comunicados oficiales, directivas y eventos de UGEL Ambo"
        />

        {newsItems.length === 0 && <p className="rounded-2xl border border-[#dcecf3] bg-white p-8 text-center text-sm text-slate-500">Por el momento no hay noticias disponibles.</p>}
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((news, index) => (
            <Card
              key={news.id}
              className={`overflow-hidden rounded-2xl border border-[#dcecf3] bg-white py-0 shadow-[0_8px_25px_-22px_rgba(19,57,79,0.4)] transition duration-300 hover:-translate-y-1 hover:border-[#a7dce9] hover:shadow-[0_18px_35px_-22px_rgba(4,125,169,0.4)] focus-within:-translate-y-1 focus-within:border-[#a7dce9] motion-reduce:transform-none motion-reduce:transition-none ${
                index >= 3 ? "hidden md:flex flex-col" : "flex flex-col"
              }`}
            >
              <a href={news.url || undefined} target={news.url ? "_blank" : undefined} rel={news.url ? "noopener noreferrer" : undefined} className="group flex h-full flex-col rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#049DD9]">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#e9f6fb]">
                <NewsImage src={news.image} alt={news.title} />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#123b55]/25 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white px-2 py-1 text-xs font-semibold text-[#174779] shadow-md"><FacebookLogo /> Facebook</span>
                {news.url && <span aria-hidden="true" className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#087da9] shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"><ArrowUpRight className="h-4 w-4" /></span>}
              </div>
              <CardHeader className="gap-0 px-5 pt-5 pb-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="border border-[#cdeaf4] bg-[#eaf7fc] font-semibold text-[#087da9]">
                      {news.category}
                    </Badge>
                    {isRecentNews(news) && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 shadow-xs animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Nuevo
                      </span>
                    )}
                  </div>
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
              <CardContent className="flex flex-1 flex-col px-5 pt-3 pb-5">
                <CardDescription className="line-clamp-3 flex-1 leading-relaxed text-slate-600">
                  {news.description}
                </CardDescription>
                {news.url && <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#087da9]"><FacebookLogo /> Ver publicación <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none" aria-hidden="true" /></span>}
              </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


