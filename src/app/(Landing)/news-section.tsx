"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Clock, Sparkles, PlayCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AnimatePresence } from "framer-motion"

import { NewsItem, FacebookPostsResponse } from "@/types/facebook.types"
import { facebookService } from "../services/facebook.service"
import StoriesViewer from "@/components/stories-viewer"

const NewsImage = ({ src, alt }: { src: string, alt: string }) => {
  const [imgSrc, setImgSrc] = useState(src)

  useEffect(() => {
    setImgSrc(src)
  }, [src])

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-300"
      unoptimized
      onError={() => setImgSrc('/Logo1.jpg')}
    />
  )
}

export default function NewsSection() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [aiFormatted, setAiFormatted] = useState(false)
  const [showStories, setShowStories] = useState(false)

  useEffect(() => {
    loadNews()
  }, [])

  const loadNews = async () => {
    try {
      setLoading(true)
      setError(null)

      console.log('NewsSection - Iniciando carga de noticias')

      // 1. Obtener posts de Facebook
      console.log('NewsSection - Obteniendo posts de Facebook')
      const res = await fetch("/api/facebook");
      const json = await res.json();

      if (!json.success) throw new Error(json.error);

      // Construir la estructura completa esperada por FacebookPostsResponse
      const postsResponse: FacebookPostsResponse = {
        data: json.data,
        paging: json.paging || { cursors: { before: '', after: '' } }
      };

      console.log('NewsSection - Posts obtenidos:', postsResponse.data.length)

      // 2. Extraer mensajes para formatear con AI
      const messages = facebookService.extractMessages(postsResponse)
      console.log('NewsSection - Mensajes extraídos:', messages.length)

      // 3. Formatear con Gemini AI
      let formattedData = []
      try {
        console.log('NewsSection - Enviando a Gemini AI')
        const aiResponse = await fetch('/api/format-posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ messages })
        })

        if (aiResponse.ok) {
          const result = await aiResponse.json()
          formattedData = result.data || []
          setAiFormatted(true)
          console.log('NewsSection - Gemini AI exitoso:', formattedData.length, 'posts formateados')
        } else {
          const text = await aiResponse.text().catch(() => '')
          console.warn('NewsSection - AI formatting failed, status=', aiResponse.status, 'body=', text)
          formattedData = []
        }
      } catch (aiError) {
        console.error('NewsSection - Error con AI formatting:', aiError)
        formattedData = []
      }

      // 4. Transformar a NewsItems
      console.log('NewsSection - Transformando a NewsItems')
      const transformedNews = facebookService.transformPostsToNews(
        postsResponse,
        formattedData
      )

      // Add default image if missing
      const newsWithImages = transformedNews.map(item => ({
        ...item,
        image: item.image || '/Logo1.jpg'
      }))

      console.log('NewsSection - Noticias transformadas:', newsWithImages.length)
      setNewsItems(newsWithImages)
    } catch (err) {
      console.error('NewsSection - Error al cargar noticias:', err)
      setError(`No se pudieron cargar las noticias: ${err instanceof Error ? err.message : 'Error desconocido'}`)
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
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
    <section id="noticias" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex flex-col items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl md:text-4xl font-bold">Noticias y Actualizaciones</h2>
              {aiFormatted && (
                <span className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-full">
                  <Sparkles className="w-3 h-3" />
                  AI
                </span>
              )}
            </div>

            {/* Stories Button */}
            {newsItems.length > 0 && (
              <Button
                onClick={() => setShowStories(true)}
                className="bg-linear-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white rounded-full px-6 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-white"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Ver Historias
              </Button>
            )}
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mantente informado sobre las últimas noticias de UGEL Ambo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <Card
              key={news.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => handleNewsClick(news.url)}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <NewsImage
                  src={news.image}
                  alt={news.title}
                />
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

      {/* Stories Viewer Overlay */}
      <AnimatePresence>
        {showStories && (
          <StoriesViewer
            stories={newsItems}
            onClose={() => setShowStories(false)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}