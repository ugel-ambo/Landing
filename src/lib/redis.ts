import Redis from "ioredis";

/**
 * Cliente Redis singleton para caché
 * Usa REDIS_URL de Redis Cloud/Labs
 */

let redis: Redis | null = null;

function getRedisClient(): Redis | null {
  if (redis) return redis;

  const redisUrl = process.env.REDIS_URL;

  if (!redisUrl) {
    console.log("[Redis] REDIS_URL no configurado, caché deshabilitado");
    return null;
  }

  try {
    redis = new Redis(redisUrl, {
      maxRetriesPerRequest: 3,
      lazyConnect: true,
    });

    redis.on("error", (err) => {
      console.error("[Redis] Error de conexión:", err.message);
    });

    redis.on("connect", () => {
      console.log("[Redis] Conectado exitosamente");
    });

    return redis;
  } catch (error) {
    console.error("[Redis] Error al crear cliente:", error);
    return null;
  }
}

/**
 * Obtiene un valor del caché
 */
export async function cacheGet<T>(key: string): Promise<T | null> {
  const client = getRedisClient();
  if (!client) return null;

  try {
    const value = await client.get(key);
    if (value) {
      console.log(`[Cache] HIT: ${key}`);
      return JSON.parse(value) as T;
    }
    console.log(`[Cache] MISS: ${key}`);
    return null;
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
  const client = getRedisClient();
  if (!client) return false;

  try {
    await client.setex(key, ttlSeconds, JSON.stringify(value));
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
  const client = getRedisClient();
  if (!client) return false;

  try {
    await client.del(key);
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
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}

// Claves de caché predefinidas
export const CACHE_KEYS = {
  FACEBOOK_POSTS: "fb:posts",
  FACEBOOK_NEWS: "fb:news",
  GEMINI_FORMAT: (hash: string) => `gemini:format:${hash}`,
};

// TTLs en segundos
export const CACHE_TTL = {
  FACEBOOK_POSTS: 300,    // 5 minutos
  FACEBOOK_NEWS: 300,     // 5 minutos
  GEMINI_FORMAT: 86400,   // 24 horas
};
