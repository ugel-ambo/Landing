import { geminiService } from "@/app/services/gemini.service";
import { NextRequest, NextResponse } from "next/server";
import { cacheGet, cacheSet, hashKey, CACHE_KEYS, CACHE_TTL } from "@/lib/redis";
import { GeminiFormattedPost } from "@/types/gemini.types";

// Removemos edge runtime para poder usar KV
// export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Se requiere un array de mensajes' },
        { status: 400 }
      );
    }

    // 1. Crear hash único basado en los mensajes
    const messagesHash = hashKey(JSON.stringify(messages));
    const cacheKey = CACHE_KEYS.GEMINI_FORMAT(messagesHash);

    // 2. Intentar obtener del caché
    const cached = await cacheGet<GeminiFormattedPost[]>(cacheKey);
    
    if (cached) {
      console.log('API format-posts: Usando datos formateados desde CACHÉ');
      return NextResponse.json({
        success: true,
        data: cached,
        cached: true
      });
    }

    // 3. Si no hay caché, llamar a Gemini
    console.log('API format-posts: Llamando a Gemini (sin caché)...');
    const formattedPosts = await geminiService.formatMultiplePosts(messages);

    // 4. Guardar en caché por 24 horas
    await cacheSet(cacheKey, formattedPosts, CACHE_TTL.GEMINI_FORMAT);
    console.log('API format-posts: Resultado guardado en caché');

    return NextResponse.json({
      success: true,
      data: formattedPosts,
      cached: false
    });

  } catch (error) {
    console.error('Error en /api/format-posts:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error al formatear posts' 
      },
      { status: 500 }
    );
  }
}