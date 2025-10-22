"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

import Image from "next/image"

import { NewsItem } from "@/types/facebook.types"
import { facebookService } from "../services/facebook.service"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function NewsSection() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadNews()
  }, [])

  const loadNews = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await facebookService.getPosts(5)
      const transformedNews = facebookService.transformPostsToNews(response)
      
      setNewsItems(transformedNews)
    } catch (err) {
      console.error('Error al cargar noticias:', err)
      setError('No se pudieron cargar las noticias. Por favor, intenta más tarde.')
    } finally {
      setLoading(false)
    }
  }

  const handleNewsClick = (url?: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Noticias y Actualizaciones</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Mantente informado sobre las últimas noticias de UGEL Ambo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
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
    )
  }

  if (error) {
    return (
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Noticias y Actualizaciones</h2>
          </div>
          <Alert variant="destructive" className="max-w-2xl mx-auto">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Noticias y Actualizaciones</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mantente informado sobre las últimas noticias de UGEL Ambo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <Card 
              key={news.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleNewsClick(news.url)}
            >
              <div className="relative h-48 w-full">
                <Image 
                  src={news.image} 
                  alt={news.title} 
                  fill 
                  className="object-cover"
                  unoptimized
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <Badge variant="secondary">{news.category}</Badge>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {news.date}
                  </span>
                </div>
                <CardTitle className="text-lg mt-2 line-clamp-2">
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
  )
}