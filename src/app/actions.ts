'use server'

import webpush from 'web-push'

webpush.setVapidDetails(
    'mailto:contacto@ugelambo.gob.pe',
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
    process.env.VAPID_PRIVATE_KEY!
)

let subscription: webpush.PushSubscription | null = null

export async function subscribeUser(sub: webpush.PushSubscription) {
    subscription = sub
    // En producción, deberías almacenar esto en tu base de datos MongoDB
    // Por ejemplo: await db.subscriptions.create({ data: sub })
    console.log('Usuario suscrito a notificaciones push')
    return { success: true }
}

export async function unsubscribeUser() {
    subscription = null
    // En producción, deberías eliminar esto de tu base de datos
    // Por ejemplo: await db.subscriptions.delete({ where: { ... } })
    console.log('Usuario desuscrito de notificaciones push')
    return { success: true }
}

export async function sendNotification(message: string) {
    if (!subscription) {
        throw new Error('No hay suscripciones disponibles')
    }

    try {
        await webpush.sendNotification(
            subscription,
            JSON.stringify({
                title: 'UGEL Ambo',
                body: message,
                icon: '/icon-192x192.png',
            })
        )
        return { success: true }
    } catch (error) {
        console.error('Error enviando notificación push:', error)
        return { success: false, error: 'Error al enviar notificación' }
    }
}
