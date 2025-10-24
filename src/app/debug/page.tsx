"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"

interface DebugInfo {
  facebookConfig: {
    baseUrl: string
    pageId: string
    hasToken: boolean
  }
  geminiConfig: {
    hasApiKey: boolean
  }
  facebookTest: {
    success: boolean
    error?: string
    data?: any
  }
  geminiTest: {
    success: boolean
    error?: string
    data?: any
  }
}

export default function DebugPage() {
  const [debugInfo, setDebugInfo] = useState<DebugInfo | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    runDebugTests()
  }, [])

  const runDebugTests = async () => {
    const info: DebugInfo = {
      facebookConfig: {
        baseUrl: process.env.NEXT_PUBLIC_FACEBOOK_GRAPH_API_URL || 'https://graph.facebook.com/v24.0',
        pageId: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '',
        hasToken: !!process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN
      },
      geminiConfig: {
        hasApiKey: !!process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY
      },
      facebookTest: { success: false },
      geminiTest: { success: false }
    }

    // Test Facebook API
    try {
      const facebookResponse = await fetch('/api/facebook-test')
      if (facebookResponse.ok) {
        const data = await facebookResponse.json()
        info.facebookTest = { success: true, data }
      } else {
        const error = await facebookResponse.text()
        info.facebookTest = { success: false, error }
      }
    } catch (error) {
      info.facebookTest = { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
    }

    // Test Gemini API
    try {
      const geminiResponse = await fetch('/api/gemini-test')
      if (geminiResponse.ok) {
        const data = await geminiResponse.json()
        info.geminiTest = { success: true, data }
      } else {
        const error = await geminiResponse.text()
        info.geminiTest = { success: false, error }
      }
    } catch (error) {
      info.geminiTest = { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
    }

    setDebugInfo(info)
    setLoading(false)
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Debug - Cargando...</h1>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Debug - Diagnóstico del Sistema</h1>
      
      <div className="grid gap-6">
        {/* Configuración de Facebook */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Facebook API
              <Badge variant={debugInfo?.facebookConfig.hasToken ? "default" : "destructive"}>
                {debugInfo?.facebookConfig.hasToken ? "Configurado" : "Sin Token"}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p><strong>Base URL:</strong> {debugInfo?.facebookConfig.baseUrl}</p>
              <p><strong>Page ID:</strong> {debugInfo?.facebookConfig.pageId || "No configurado"}</p>
              <p><strong>Token:</strong> {debugInfo?.facebookConfig.hasToken ? "Presente" : "Faltante"}</p>
            </div>
            
            {debugInfo?.facebookTest.success ? (
              <Alert className="mt-4">
                <AlertDescription>
                  ✅ Facebook API funcionando correctamente
                </AlertDescription>
              </Alert>
            ) : (
              <Alert variant="destructive" className="mt-4">
                <AlertDescription>
                  ❌ Error en Facebook API: {debugInfo?.facebookTest.error}
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Configuración de Gemini */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Gemini AI
              <Badge variant={debugInfo?.geminiConfig.hasApiKey ? "default" : "destructive"}>
                {debugInfo?.geminiConfig.hasApiKey ? "Configurado" : "Sin API Key"}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p><strong>API Key:</strong> {debugInfo?.geminiConfig.hasApiKey ? "Presente" : "Faltante"}</p>
            </div>
            
            {debugInfo?.geminiTest.success ? (
              <Alert className="mt-4">
                <AlertDescription>
                  ✅ Gemini AI funcionando correctamente
                </AlertDescription>
              </Alert>
            ) : (
              <Alert variant="destructive" className="mt-4">
                <AlertDescription>
                  ❌ Error en Gemini AI: {debugInfo?.geminiTest.error}
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Instrucciones */}
        <Card>
          <CardHeader>
            <CardTitle>Instrucciones para Configurar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">1. Variables de Entorno</h3>
                <p>Crea un archivo <code>.env.local</code> en la raíz del proyecto con:</p>
                <pre className="bg-gray-100 p-3 rounded mt-2 text-sm">
{`NEXT_PUBLIC_FACEBOOK_GRAPH_API_URL=https://graph.facebook.com/v24.0
NEXT_PUBLIC_FACEBOOK_PAGE_ID=tu_page_id_aqui
NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN=tu_access_token_aqui
NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY=tu_gemini_api_key_aqui`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">2. Obtener Facebook Access Token</h3>
                <p>Ve a <a href="https://developers.facebook.com/tools/explorer/" target="_blank" className="text-blue-600">Facebook Graph API Explorer</a> y obtén un token de acceso.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">3. Obtener Gemini API Key</h3>
                <p>Ve a <a href="https://makersuite.google.com/app/apikey" target="_blank" className="text-blue-600">Google AI Studio</a> y crea una API key.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
