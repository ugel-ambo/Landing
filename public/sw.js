// Service Worker para UGEL Ambo PWA
self.addEventListener('push', function (event) {
    if (event.data) {
        const data = event.data.json()
        const options = {
            body: data.body,
            icon: data.icon || '/icon-192x192.png',
            badge: '/icon-192x192.png',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: '2',
            },
            actions: [
                {
                    action: 'explore',
                    title: 'Ver más',
                },
                {
                    action: 'close',
                    title: 'Cerrar',
                },
            ],
        }
        event.waitUntil(self.registration.showNotification(data.title, options))
    }
})

self.addEventListener('notificationclick', function (event) {
    console.log('Notificación clickeada:', event.action)
    event.notification.close()

    if (event.action === 'explore') {
        event.waitUntil(clients.openWindow('/'))
    } else if (event.action === 'close') {
        // Solo cerrar la notificación
    } else {
        // Click en el cuerpo de la notificación
        event.waitUntil(clients.openWindow('/'))
    }
})

// Manejo básico de instalación y activación
self.addEventListener('install', function (event) {
    console.log('Service Worker instalado')
    self.skipWaiting()
})

self.addEventListener('activate', function (event) {
    console.log('Service Worker activado')
    event.waitUntil(clients.claim())
})
