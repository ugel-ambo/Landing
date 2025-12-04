'use client'

import { useState, useEffect } from 'react'
import { subscribeUser, unsubscribeUser, sendNotification } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Bell, BellOff, Send } from 'lucide-react'

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

function urlBase64ToUint8Array(base64String: string) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')

    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
}

export function PushNotificationManager() {
    const [isSupported, setIsSupported] = useState(false)
    const [subscription, setSubscription] = useState<PushSubscription | null>(null)
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if ('serviceWorker' in navigator && 'PushManager' in window) {
            setIsSupported(true)
            registerServiceWorker()
        }
    }, [])

    async function registerServiceWorker() {
        try {
            const registration = await navigator.serviceWorker.register('/sw.js', {
                scope: '/',
                updateViaCache: 'none',
            })
            const sub = await registration.pushManager.getSubscription()
            setSubscription(sub)
        } catch (error) {
            console.error('Error registrando service worker:', error)
        }
    }

    async function subscribeToPush() {
        setLoading(true)
        try {
            const registration = await navigator.serviceWorker.ready
            const sub = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(
                    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
                ),
            })
            setSubscription(sub)
            const serializedSub = JSON.parse(JSON.stringify(sub))
            await subscribeUser(serializedSub)
        } catch (error) {
            console.error('Error suscribiéndose a push:', error)
        } finally {
            setLoading(false)
        }
    }

    async function unsubscribeFromPush() {
        setLoading(true)
        try {
            await subscription?.unsubscribe()
            setSubscription(null)
            await unsubscribeUser()
        } catch (error) {
            console.error('Error desuscribiéndose:', error)
        } finally {
            setLoading(false)
        }
    }

    async function sendTestNotification() {
        if (subscription && message.trim()) {
            setLoading(true)
            try {
                await sendNotification(message)
                setMessage('')
            } catch (error) {
                console.error('Error enviando notificación:', error)
            } finally {
                setLoading(false)
            }
        }
    }

    if (!isSupported) {
        return (
            <Card className="w-full max-w-md mx-auto">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BellOff className="w-5 h-5" />
                        Notificaciones No Disponibles
                    </CardTitle>
                    <CardDescription>
                        Tu navegador no soporta notificaciones push
                    </CardDescription>
                </CardHeader>
            </Card>
        )
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5" />
                    Notificaciones Push
                </CardTitle>
                <CardDescription>
                    Mantente informado sobre actualizaciones de UGEL Ambo
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {subscription ? (
                    <>
                        <div className="p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                            <p className="text-sm text-green-800 dark:text-green-200">
                                ✓ Estás suscrito a las notificaciones
                            </p>
                        </div>
                        <Button
                            onClick={unsubscribeFromPush}
                            variant="outline"
                            className="w-full"
                            disabled={loading}
                        >
                            <BellOff className="w-4 h-4 mr-2" />
                            {loading ? 'Procesando...' : 'Desuscribirse'}
                        </Button>
                        <div className="space-y-2">
                            <Input
                                type="text"
                                placeholder="Mensaje de prueba"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                disabled={loading}
                            />
                            <Button
                                onClick={sendTestNotification}
                                className="w-full"
                                disabled={loading || !message.trim()}
                            >
                                <Send className="w-4 h-4 mr-2" />
                                {loading ? 'Enviando...' : 'Enviar Notificación de Prueba'}
                            </Button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="p-3 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
                            <p className="text-sm text-blue-800 dark:text-blue-200">
                                Recibe notificaciones sobre convocatorias, noticias y actualizaciones importantes
                            </p>
                        </div>
                        <Button
                            onClick={subscribeToPush}
                            className="w-full"
                            disabled={loading}
                        >
                            <Bell className="w-4 h-4 mr-2" />
                            {loading ? 'Procesando...' : 'Activar Notificaciones'}
                        </Button>
                    </>
                )}
            </CardContent>
        </Card>
    )
}

export function InstallPrompt() {
    const [isIOS, setIsIOS] = useState(false)
    const [isStandalone, setIsStandalone] = useState(false)
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)

    useEffect(() => {
        setIsIOS(
            /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as Window & { MSStream?: unknown }).MSStream
        )

        setIsStandalone(window.matchMedia('(display-mode: standalone)').matches)

        const handler = (e: Event) => {
            e.preventDefault()
            setDeferredPrompt(e as BeforeInstallPromptEvent)
        }

        window.addEventListener('beforeinstallprompt', handler)

        return () => {
            window.removeEventListener('beforeinstallprompt', handler)
        }
    }, [])

    const handleInstallClick = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt()
            const { outcome } = await deferredPrompt.userChoice
            console.log(`User response to the install prompt: ${outcome}`)
            setDeferredPrompt(null)
        }
    }

    if (isStandalone) {
        return null // No mostrar si ya está instalado
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Instalar Aplicación</CardTitle>
                <CardDescription>
                    Accede rápidamente a UGEL Ambo desde tu pantalla de inicio
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {isIOS ? (
                    <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                            Para instalar esta aplicación en tu dispositivo iOS:
                        </p>
                        <ol className="text-sm space-y-2 list-decimal list-inside text-muted-foreground">
                            <li>Toca el botón de compartir <span className="text-lg">⎋</span> en la barra de navegación</li>
                            <li>Selecciona &quot;Añadir a pantalla de inicio&quot; <span className="text-lg">➕</span></li>
                            <li>Confirma tocando &quot;Añadir&quot;</li>
                        </ol>
                    </div>
                ) : deferredPrompt ? (
                    <Button onClick={handleInstallClick} className="w-full" size="lg">
                        Instalar UGEL Ambo
                    </Button>
                ) : (
                    <div className="p-3 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground">
                            Esta aplicación puede instalarse en tu dispositivo para un acceso más rápido
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
