"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

import { getNoticiasModal } from "@/app/actions/noticia-actions"

// Deshabilitar cache para obtener datos frescos
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function NoticiaModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [noticias, setNoticias] = useState<any[]>([])

  useEffect(() => {
    async function loadNoticias() {
      const data = await getNoticiasModal()
      if (data && data.length > 0) {
        setNoticias(data)
        
        const seenNoticias = JSON.parse(sessionStorage.getItem("seen-noticias") || "[]")
        // Buscar la primera noticia no vista (usando el src como ID único para mayor fiabilidad si el index cambia)
        const nextUnseenIndex = data.findIndex((noticia: any) => !seenNoticias.includes(noticia.src))

        if (nextUnseenIndex !== -1) {
          setCurrentIndex(nextUnseenIndex)
          const timer = setTimeout(() => {
            setIsOpen(true)
          }, 500)
          return () => clearTimeout(timer)
        }
      }
    }
    loadNoticias()
  }, [])

  const handleClose = () => {
    setIsOpen(false)

    // Marcar la noticia actual como vista
    const seenNoticias = JSON.parse(sessionStorage.getItem("seen-noticias") || "[]")
    const currentNoticia = noticias[currentIndex]
    
    if (currentNoticia && !seenNoticias.includes(currentNoticia.src)) {
      seenNoticias.push(currentNoticia.src)
      sessionStorage.setItem("seen-noticias", JSON.stringify(seenNoticias))
    }

    // Buscar la siguiente noticia no vista
    const nextUnseenIndex = noticias.findIndex((noticia: any) => !seenNoticias.includes(noticia.src))

    if (nextUnseenIndex !== -1) {
      setTimeout(() => {
        setCurrentIndex(nextUnseenIndex)
        setIsOpen(true)
      }, 300)
    }
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? noticias.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === noticias.length - 1 ? 0 : prev + 1))
  }

  const currentNoticia = noticias[currentIndex]
  const hasUrl = Boolean(currentNoticia?.url)

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        className="w-[95vw] md:w-auto md:max-w-2xl max-h-[90vh] p-0 gap-0 bg-transparent border-none shadow-none"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">Noticia importante</DialogTitle>
        <div className="relative w-full h-full bg-white rounded-lg overflow-hidden shadow-2xl">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-50 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5 text-gray-800" />
          </button>

          {/* Botones de navegación */}
          {noticias.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Noticia anterior"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={handleNext}
                className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Noticia siguiente"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </>
          )}

          {/* Indicadores de página */}
          {noticias.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-40 flex gap-2">
              {noticias.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentIndex
                      ? "bg-blue-600 w-6"
                      : "bg-gray-400/60 hover:bg-gray-600"
                    }`}
                  aria-label={`Ir a noticia ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Botón de enlace cuando la noticia tiene una URL */}
          {hasUrl && (
            <div className={`absolute ${noticias.length > 1 ? 'bottom-8' : 'bottom-4'} left-1/2 -translate-x-1/2 z-40`}>
              <a
                href={currentNoticia.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-full shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 border border-white/20"
              >
                <span>Ver más información</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

          <div className="relative w-full h-full flex items-center justify-center">
            {currentNoticia && (
              hasUrl ? (
                <a
                  href={currentNoticia.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative cursor-pointer group"
                  title="Haz clic para abrir el enlace"
                >
                  <Image
                    src={currentNoticia.src}
                    alt={currentNoticia.alt}
                    width={800}
                    height={1200}
                    className="w-auto h-auto max-w-full max-h-[90vh] object-contain transition-opacity duration-200 group-hover:opacity-95"
                    priority
                    quality={95}
                  />
                </a>
              ) : (
                <Image
                  src={currentNoticia.src}
                  alt={currentNoticia.alt}
                  width={800}
                  height={1200}
                  className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
                  priority
                  quality={95}
                />
              )
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}