import { kv } from "@vercel/kv";

/**
 * Helper de caché usando Vercel KV (Redis)
 * - En producción usa KV_REST_API_URL y KV_REST_API_TOKEN
 * - Si no hay KV configurado, funciona sin caché (bypass)
 */

// Verificar si KV está configurado
const isKVConfigured = (): boolean => {
  return !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
};

/**
 * Obtiene un valor del caché
 */
export async function cacheGet<T>(key: string): Promise<T | null> {
  if (!isKVConfigured()) {
    console.log(`[Cache] KV no configurado, skip get: ${key}`);
    return null;
  }

  try {
    const value = await kv.get<T>(key);
    if (value) {
      console.log(`[Cache] HIT: ${key}`);
    } else {
      console.log(`[Cache] MISS: ${key}`);
    }
    return value;
  } catch (error) {
    console.error(`[Cache] Error en get ${key}:`, error);
    return null;
  }
}

/**
 * Guarda un valor en caché con TTL en segundos
 */
export async function cacheSet<T>(
  key: string,
  value: T,
  ttlSeconds: number = 300
): Promise<boolean> {
  if (!isKVConfigured()) {
    console.log(`[Cache] KV no configurado, skip set: ${key}`);
    return false;
  }

  try {
    await kv.set(key, value, { ex: ttlSeconds });
    console.log(`[Cache] SET: ${key} (TTL: ${ttlSeconds}s)`);
    return true;
  } catch (error) {
    console.error(`[Cache] Error en set ${key}:`, error);
    return false;
  }
}

/**
 * Elimina una clave del caché
 */
export async function cacheDel(key: string): Promise<boolean> {
  if (!isKVConfigured()) {
    return false;
  }

  try {
    await kv.del(key);
    console.log(`[Cache] DEL: ${key}`);
    return true;
  } catch (error) {
    console.error(`[Cache] Error en del ${key}:`, error);
    return false;
  }
}

/**
 * Genera un hash simple para crear claves de caché estables
 */
export function hashKey(data: string): string {
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36);
}

// Claves de caché predefinidas
export const CACHE_KEYS = {
  FACEBOOK_POSTS: "fb:posts",
  FACEBOOK_NEWS: "fb:news", // Posts + formateo combinado
  GEMINI_FORMAT: (hash: string) => `gemini:format:${hash}`,
};

// TTLs en segundos
export const CACHE_TTL = {
  FACEBOOK_POSTS: 300,      // 5 minutos
  FACEBOOK_NEWS: 300,       // 5 minutos (datos combinados)
  GEMINI_FORMAT: 86400,     // 24 horas (el formateo no cambia)
};
