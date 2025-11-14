"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

export default function NoticiaModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Verificar si el usuario ya cerró el modal en esta sesión
    const hasSeenModal = sessionStorage.getItem("noticia-modal-closed")
    
    if (!hasSeenModal) {
      // Pequeño delay para que la página cargue primero
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 500)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Guardar en sessionStorage que el usuario cerró el modal
    sessionStorage.setItem("noticia-modal-closed", "true")
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent 
        className="max-w-2xl w-auto max-h-[90vh] p-0 gap-0 bg-transparent border-none shadow-none"
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
          <div className="relative w-full h-full">
            <Image
              src="/modal/noticia.jpg"
              alt="Noticia importante"
              width={800}
              height={1200}
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
              priority
              quality={95}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}