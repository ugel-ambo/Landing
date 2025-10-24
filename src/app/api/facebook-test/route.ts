import { facebookService } from "@/app/services/facebook.service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Intentar obtener posts de Facebook
    const posts = await facebookService.getPosts(1);
    
    return NextResponse.json({
      success: true,
      message: "Facebook API funcionando correctamente",
      data: {
        postsCount: posts.data.length,
        firstPost: posts.data[0] ? {
          id: posts.data[0].id,
          hasMessage: !!posts.data[0].message,
          hasImage: !!posts.data[0].full_picture
        } : null
      }
    });
  } catch (error) {
    console.error('Error en Facebook test:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Error desconocido',
        details: 'Verifica que las variables de entorno estén configuradas correctamente'
      },
      { status: 500 }
    );
  }
}
