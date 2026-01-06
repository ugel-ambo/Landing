import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'UGEL Ambo - Unidad de Gestión Educativa Local',
        short_name: 'UGEL Ambo',
        description: 'Aplicación web oficial de la UGEL Ambo - Información, trámites y servicios educativos',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#2563eb',
        icons: [
            {
                src: '/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
        categories: ['education', 'government', 'productivity'],
        orientation: 'portrait-primary',
        scope: '/',
    }
}
