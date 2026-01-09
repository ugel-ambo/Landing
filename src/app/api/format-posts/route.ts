import { geminiService } from "@/app/services/gemini.service";
import { NextRequest, NextResponse } from "next/server";

export const runtime = 'edge';

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

    const formattedPosts = await geminiService.formatMultiplePosts(messages);

    return NextResponse.json({
      success: true,
      data: formattedPosts
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