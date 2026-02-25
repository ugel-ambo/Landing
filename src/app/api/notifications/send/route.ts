import { NextRequest, NextResponse } from 'next/server'
import webpush from 'web-push'
import connectMongoDB from '@/lib/mongodbConnection'
import { PushSubscriptionModel } from '@/models/PushSubscription'

webpush.setVapidDetails(
    'mailto:contacto@ugelambo.gob.pe',
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
    process.env.VAPID_PRIVATE_KEY!
)

export async function POST(request: NextRequest) {
    try {
        const { title, body } = await request.json()

        if (!title || !body) {
            return NextResponse.json(
                { error: 'Se requiere title y body' },
                { status: 400 }
            )
        }

        await connectMongoDB()
        const subscriptions = await PushSubscriptionModel.find({})

        if (subscriptions.length === 0) {
            return NextResponse.json(
                { message: 'No hay suscriptores', sent: 0, failed: 0 },
                { status: 200 }
            )
        }

        const payload = JSON.stringify({
            title,
            body,
            icon: '/icon-192x192.png',
        })

        let sent = 0
        let failed = 0
        const expiredEndpoints: string[] = []

        await Promise.allSettled(
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
                    const statusCode = (error as { statusCode?: number })?.statusCode
                    if (statusCode === 410 || statusCode === 404) {
                        expiredEndpoints.push(sub.endpoint)
                    } else {
                        console.error('Error enviando push a:', sub.endpoint.slice(0, 50), error)
                    }
                }
            })
        )

        // Limpiar suscripciones expiradas
        if (expiredEndpoints.length > 0) {
            await PushSubscriptionModel.deleteMany({ endpoint: { $in: expiredEndpoints } })
            console.log(`${expiredEndpoints.length} suscripciones expiradas eliminadas`)
        }

        return NextResponse.json({
            message: `Notificaciones enviadas`,
            sent,
            failed,
            expired: expiredEndpoints.length,
            totalSubscribers: subscriptions.length,
        })
    } catch (error) {
        console.error('Error en API de notificaciones:', error)
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        )
    }
}

// GET para consultar cuántos suscriptores hay
export async function GET() {
    try {
        await connectMongoDB()
        const count = await PushSubscriptionModel.countDocuments()

        return NextResponse.json({ subscribers: count })
    } catch (error) {
        console.error('Error consultando suscriptores:', error)
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        )
    }
}
