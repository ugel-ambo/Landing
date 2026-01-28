import { facebookService } from "@/app/services/facebook.service";
import { NextResponse } from "next/server";
import { cacheGet, cacheSet, CACHE_KEYS, CACHE_TTL } from "@/lib/redis";

interface CachedFacebookData {
  data: any[];
  paging: any;
  cachedAt: string;
}

export async function GET() {
  try {
    // 1. Intentar obtener del caché
    const cached = await cacheGet<CachedFacebookData>(CACHE_KEYS.FACEBOOK_POSTS);
    
    if (cached) {
      console.log('API Route: Usando posts de Facebook desde CACHÉ');
      const response = NextResponse.json({ 
        success: true, 
        data: cached.data,
        paging: cached.paging,
        cached: true,
        cachedAt: cached.cachedAt
      });
      
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
      response.headers.set('X-Cache', 'HIT');
      
      return response;
    }

    // 2. Si no hay caché, obtener de Facebook
    console.log('API Route: Obteniendo posts de Facebook (sin caché)...');
    const posts = await facebookService.getPosts(6);
    console.log('API Route: Posts obtenidos exitosamente:', posts.data.length);
    
    // 3. Guardar en caché por 5 minutos
    const dataToCache: CachedFacebookData = {
      data: posts.data,
      paging: posts.paging,
      cachedAt: new Date().toISOString()
    };
    await cacheSet(CACHE_KEYS.FACEBOOK_POSTS, dataToCache, CACHE_TTL.FACEBOOK_POSTS);
    
    const response = NextResponse.json({ 
      success: true, 
      data: posts.data,
      paging: posts.paging,
      cached: false
    });
    
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    response.headers.set('X-Cache', 'MISS');
    
    return response;
  } catch (error) {
    console.error("Error en Facebook API Route:", error);
    
    const errorResponse = NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : "Error desconocido" 
      },
      { status: 500 }
    );
    
    errorResponse.headers.set('Access-Control-Allow-Origin', '*');
    errorResponse.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    errorResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    
    return errorResponse;
  }
}

export async function OPTIONS() {
  const response = new NextResponse(null, { status: 200 });
  
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  
  return response;
}
