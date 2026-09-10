/**
 * Helper para resolver URLs de imágenes y multimedia.
 * 
 * - Soporta URLs completas (Cloudinary legacy o URLs externas http/https).
 * - Convierte rutas relativas (ej. /api/media/file/... o /media/...) a URLs absolutas
 *   apuntando al dominio de Payload CMS (panel-admin).
 */

const ADMIN_URL = (
  process.env.NEXT_PUBLIC_ADMIN_URL || "http://localhost:3000"
).replace(/\/$/, "");

export function getMediaUrl(
  url: string | null | undefined,
  fallback: string = ""
): string {
  if (!url) return fallback;

  // Si ya es una URL absoluta (Cloudinary o externa), se mantiene
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  // Si es una ruta relativa de Payload CMS local
  const cleanPath = url.startsWith("/") ? url : `/${url}`;
  return `${ADMIN_URL}${cleanPath}`;
}

