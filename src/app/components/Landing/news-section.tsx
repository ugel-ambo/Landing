"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Clock, Sparkles } from "lucide-react"
import Image from "next/image"

import { NewsItem } from "@/types/facebook.types"
import { facebookService } from "../../services/facebook.service"

export default function NewsSection() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [aiFormatted, setAiFormatted] = useState(false)

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
      const postsResponse = await facebookService.getPosts(6)
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
          // Nuevo logging para depuración
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
      
      console.log('NewsSection - Noticias transformadas:', transformedNews.length)
      setNewsItems(transformedNews)
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
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold">Noticias y Actualizaciones</h2>
            {aiFormatted && (
              <span className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-full">
                <Sparkles className="w-3 h-3" />
                AI
              </span>
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
                <Image 
                  src={news.image} 
                  alt={news.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
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
    </section>
  )
}