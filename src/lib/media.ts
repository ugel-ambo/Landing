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

export type MediaLike =
  | string
  | {
    url?: string | null;
    filename?: string | null;
    [key: string]: any;
  }
  | null
  | undefined;

export function getMediaUrl(
  media: MediaLike,
  fallback: string = ""
): string {
  if (!media) return fallback;

  // Si es un objeto de Media de MongoDB / Mongoose populate
  if (typeof media === "object") {
    // 1. Si tiene url definida
    if (media.url && typeof media.url === "string") {
      const trimmedUrl = media.url.trim();
      if (trimmedUrl.startsWith("http://") || trimmedUrl.startsWith("https://")) {
        return trimmedUrl;
      }
      const cleanPath = trimmedUrl.startsWith("/") ? trimmedUrl : `/${trimmedUrl}`;
      return `${ADMIN_URL}${cleanPath}`;
    }

    // 2. Si no tiene url pero tiene filename (archivos locales guardados por Payload CMS 3)
    if (media.filename && typeof media.filename === "string") {
      return `${ADMIN_URL}/api/media/file/${encodeURIComponent(media.filename)}`;
    }

    return fallback;
  }

  // Si es string
  if (typeof media === "string") {
    const trimmed = media.trim();
    if (!trimmed) return fallback;

    // Si es un ObjectId de MongoDB (24 caracteres hexadecimales sin extensión),
    // significa que no se pudo hacer populate del objeto en Mongoose.
    if (/^[0-9a-fA-F]{24}$/.test(trimmed)) {
      return fallback;
    }

    // Si es URL absoluta (Cloudinary legacy o externa)
    if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
      return trimmed;
    }

    // Si ya empieza con / (ruta relativa como /api/media/file/... o /uploads/...)
    if (trimmed.startsWith("/")) {
      return `${ADMIN_URL}${trimmed}`;
    }

    // Si parece un filename directo (ej. 'imagen.jpg' o 'images (2).jpeg')
    return `${ADMIN_URL}/api/media/file/${encodeURIComponent(trimmed)}`;
  }

  return fallback;
}

