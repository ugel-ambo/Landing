import { facebookService } from "@/app/services/facebook.service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log('API Route: Obteniendo posts de Facebook...');
    const posts = await facebookService.getPosts(6);
    console.log('API Route: Posts obtenidos exitosamente:', posts.data.length);
    
    const response = NextResponse.json({ 
      success: true, 
      data: posts.data,
      paging: posts.paging
    });
    
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    
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
