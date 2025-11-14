"use client"

import { useEffect, useState } from "react"
import { Eye } from "lucide-react"

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Registrar visita
    const registerVisit = async () => {
      try {
        // Verificar si ya se registró la visita en esta sesión
        const hasRegistered = sessionStorage.getItem("visit-registered")
        
        if (!hasRegistered) {
          const response = await fetch("/api/visits", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          })

          if (response.ok) {
            const data = await response.json()
            setCount(data.totalVisits)
            sessionStorage.setItem("visit-registered", "true")
          }
        } else {
          // Si ya se registró, solo obtener el contador
          fetchCount()
        }
      } catch (error) {
        console.error("Error al registrar visita:", error)
        fetchCount()
      } finally {
        setIsLoading(false)
      }
    }

    // Obtener contador de visitas
    const fetchCount = async () => {
      try {
        const response = await fetch("/api/visits")
        if (response.ok) {
          const data = await response.json()
          setCount(data.totalVisits)
        }
      } catch (error) {
        console.error("Error al obtener contador:", error)
      } finally {
        setIsLoading(false)
      }
    }

    registerVisit()
  }, [])

  if (isLoading) {
    return (
      <div className="fixed bottom-4 left-4 z-40 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg px-4 py-2 border border-gray-200">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-[#049DD9] animate-pulse" />
          <span className="text-sm text-gray-600">Cargando...</span>
        </div>
      </div>
    )
  }

  if (count === null) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 z-40 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg px-4 py-2 border border-gray-200 hover:bg-white transition-colors duration-200">
      <div className="flex items-center gap-2">
        <Eye className="w-4 h-4 text-[#049DD9]" />
        <span className="text-sm font-semibold text-gray-800">
          <span className="text-[#049DD9]">{count.toLocaleString()}</span>{" "}
          <span className="text-gray-600">visitas</span>
        </span>
      </div>
    </div>
  )
}