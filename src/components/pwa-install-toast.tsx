"use client"

import { useState, useEffect } from "react"
import { X, Download, Share } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInstallPrompt } from "@/hooks/use-install-prompt"
import { cn } from "@/lib/utils"

export function PWAInstallToast() {
    const { deferredPrompt, isIOS, isStandalone, promptInstall } = useInstallPrompt()
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (!isStandalone && (deferredPrompt || isIOS)) {
            const timer = setTimeout(() => setIsVisible(true), 3000)
            return () => clearTimeout(timer)
        }
    }, [deferredPrompt, isIOS, isStandalone])

    if (!isVisible) return null

    return (
        <div className={cn(
            "fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-96",
            "bg-background border rounded-lg shadow-lg p-4",
            "animate-in slide-in-from-bottom-5 fade-in duration-500"
        )}>
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                    <h3 className="font-semibold text-sm mb-1">Instalar App UGEL Ambo</h3>
                    <p className="text-xs text-muted-foreground mb-3">
                        {isIOS
                            ? "Instala nuestra app para un acceso más rápido y mejor experiencia."
                            : "Instala nuestra aplicación para acceder más rápido y recibir notificaciones."}
                    </p>

                    {isIOS ? (
                        <div className="text-xs bg-muted p-2 rounded space-y-1">
                            <p className="flex items-center gap-1">1. Toca el botón compartir <Share className="h-3 w-3" /></p>
                            <p>2. Selecciona *Agregar a inicio* <span>➕</span></p>
                        </div>
                    ) : (
                        <Button size="sm" onClick={promptInstall} className="w-full">
                            <Download className="mr-2 h-4 w-4" />
                            Instalar Ahora
                        </Button>
                    )}
                </div>

                <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 -mt-1 -mr-1"
                    onClick={() => setIsVisible(false)}
                >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Cerrar</span>
                </Button>
            </div>
        </div>
    )
}
