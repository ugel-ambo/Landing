'use server'

import webpush from 'web-push'
import connectMongoDB from '@/lib/mongodbConnection'
import { PushSubscriptionModel } from '@/models/PushSubscription'

let vapidConfigured = false

function ensureVapidConfigured() {
    if (vapidConfigured) return true
    const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
    const privateKey = process.env.VAPID_PRIVATE_KEY
    if (!publicKey || !privateKey) {
        console.error('[Push] VAPID keys no configuradas')
        return false
    }
    webpush.setVapidDetails('mailto:soporteugelamboo@gmail.com', publicKey, privateKey)
    vapidConfigured = true
    return true
}

interface PushSubscriptionData {
    endpoint: string
    keys: {
        p256dh: string
        auth: string
    }
}

export async function subscribeUser(sub: PushSubscriptionData) {
    try {
        console.log('[Push] Guardando suscripción:', sub.endpoint.slice(0, 50))
        await connectMongoDB()
        // Upsert: si ya existe el endpoint, actualiza las keys
        await PushSubscriptionModel.findOneAndUpdate(
            { endpoint: sub.endpoint },
            {
                endpoint: sub.endpoint,
                keys: sub.keys,
            },
            { upsert: true, new: true }
        )
        console.log('Usuario suscrito a notificaciones push')
        return { success: true }
    } catch (error) {
        console.error('Error guardando suscripción push:', error)
        return { success: false, error: 'Error al guardar suscripción' }
    }
}

export async function unsubscribeUser(endpoint: string) {
    try {
        await connectMongoDB()
        await PushSubscriptionModel.deleteOne({ endpoint })
        console.log('Usuario desuscrito de notificaciones push')
        return { success: true }
    } catch (error) {
        console.error('Error eliminando suscripción push:', error)
        return { success: false, error: 'Error al eliminar suscripción' }
    }
}

export async function sendNotification(message: string) {
    try {
        if (!ensureVapidConfigured()) {
            return { success: false, error: 'VAPID keys no configuradas' }
        }
        await connectMongoDB()
        const subscriptions = await PushSubscriptionModel.find({})

        if (subscriptions.length === 0) {
            throw new Error('No hay suscripciones disponibles')
        }

        const payload = JSON.stringify({
            title: 'UGEL Ambo',
            body: message,
            icon: '/icon-192x192.png',
        })

        let sent = 0
        let failed = 0

        const results = await Promise.allSettled(
            subscriptions.map(async (sub) => {
                try {
                    await webpush.sendNotification(
                        {
                            endpoint: sub.endpoint,
                            keys: {
                                p256dh: sub.keys.p256dh,
                                auth: sub.keys.auth,
                            },
                        },
                        payload
                    )
                    sent++
                } catch (error: unknown) {
                    failed++
                    // Si la suscripción expiró o fue revocada (410 Gone, 404 Not Found),
                    // eliminarla de la BD
                    const statusCode = (error as { statusCode?: number })?.statusCode
                    if (statusCode === 410 || statusCode === 404) {
                        await PushSubscriptionModel.deleteOne({ endpoint: sub.endpoint })
                        console.log(`Suscripción expirada eliminada: ${sub.endpoint.slice(0, 50)}...`)
                    } else {
                        console.error('Error enviando notificación a:', sub.endpoint.slice(0, 50), error)
                    }
                }
            })
        )

        console.log(`Notificaciones enviadas: ${sent}, fallidas: ${failed}`)
        return { success: true, sent, failed, total: results.length }
    } catch (error) {
        console.error('Error enviando notificaciones push:', error)
        return { success: false, error: 'Error al enviar notificaciones' }
    }
}
