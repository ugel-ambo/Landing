"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight, ExternalLink, Megaphone, Maximize2 } from "lucide-react"

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
        
        // Mostrar el modal si no ha sido cerrado en esta sesión
        const hasClosedModal = sessionStorage.getItem("comunicados-modal-closed") === "true"
        
        if (!hasClosedModal) {
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
    sessionStorage.setItem("comunicados-modal-closed", "true")
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? noticias.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === noticias.length - 1 ? 0 : prev + 1))
  }

  const currentNoticia = noticias[currentIndex]
  const hasUrl = Boolean(currentNoticia?.url)

  if (!currentNoticia) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent
        className="w-[98vw] md:w-auto md:min-w-[600px] md:max-w-4xl max-h-[95vh] p-0 gap-0 bg-white border-none shadow-2xl rounded-xl overflow-hidden flex flex-col"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">Comunicados</DialogTitle>
        
        {/* Header Color Institucional UGEL AMBO */}
        <div className="bg-[#049dd9] text-white px-4 py-3 flex items-center justify-between shadow-md relative z-20">
          <div className="flex items-center gap-3">
            <Megaphone className="w-5 h-5 text-white" />
            <h2 className="font-bold text-lg hidden sm:block">Comunicados</h2>
            <div className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
               <span>{noticias.length} publicado{noticias.length !== 1 ? 's' : ''}</span>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="flex items-center gap-1 bg-white hover:bg-gray-100 text-[#049dd9] px-4 py-1.5 rounded-full text-sm font-bold transition-colors shadow-sm"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">Cerrar</span>
          </button>
        </div>

        {/* Body (Imagen y Controles) */}
        <div className="relative w-full flex-1 bg-gray-50/50 flex flex-col p-4">
          
          {/* Navegación y Carrusel Flexbox (Flechas NO tapan la imagen) */}
          <div className="w-full flex flex-row items-center justify-between gap-2 md:gap-4 flex-1">
            
            {/* Flecha Izquierda (Espacio Propio) */}
            {noticias.length > 1 && (
              <button
                onClick={handlePrevious}
                className="shrink-0 z-40 bg-white hover:bg-gray-100 text-gray-700 rounded-full p-2 md:p-3 shadow-lg border border-gray-200 transition-transform duration-200 hover:scale-110 active:scale-95"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            )}

            {/* Contenedor de Imagen Central */}
            <div className="relative flex flex-col items-center justify-center flex-1 min-w-0">
              {/* Badge de contador (1 / 10) superpuesto arriba de la imagen */}
              {noticias.length > 1 && (
                <div className="absolute -top-3 z-30 bg-black/70 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-2">
                  <span>{currentIndex + 1} / {noticias.length}</span>
                </div>
              )}

              <div className="w-full flex justify-center items-center rounded-lg overflow-hidden relative min-h-[250px] sm:min-h-[300px] max-h-[60vh] md:max-h-[65vh]">
                <Image
                  src={currentNoticia.src}
                  alt={currentNoticia.alt}
                  width={900}
                  height={1200}
                  className="w-auto h-auto max-w-full max-h-[60vh] md:max-h-[65vh] object-contain shadow-sm rounded-lg"
                  priority
                  quality={95}
                />
              </div>
            </div>

            {/* Flecha Derecha (Espacio Propio) */}
            {noticias.length > 1 && (
              <button
                onClick={handleNext}
                className="shrink-0 z-40 bg-white hover:bg-gray-100 text-gray-700 rounded-full p-2 md:p-3 shadow-lg border border-gray-200 transition-transform duration-200 hover:scale-110 active:scale-95"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            )}
          </div>

          {/* Indicadores de puntos (Paginación Inferior) */}
          {noticias.length > 1 && (
            <div className="flex gap-2 mt-4 justify-center">
              {noticias.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#049dd9] w-6"
                      : "bg-gray-300 hover:bg-gray-400 w-2"
                  }`}
                  aria-label={`Ir a noticia ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions (Botones Ver imagen / Ver detalles) */}
        <div className="bg-white border-t p-4 flex items-center justify-center gap-3 sm:gap-4">
          <a
            href={currentNoticia.src}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold text-sm rounded-lg shadow-sm transition-all"
          >
            <Maximize2 className="w-4 h-4" />
            <span className="hidden sm:inline">Ver imagen</span>
            <span className="sm:hidden">Ampliar</span>
          </a>
          
          {hasUrl && (
            <a
              href={currentNoticia.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-[#049dd9] hover:bg-[#037bb0] text-white font-semibold text-sm rounded-lg shadow-md transition-all"
            >
              <span>Ver detalles</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

      </DialogContent>
    </Dialog>
  )
}
