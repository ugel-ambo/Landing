import { geminiService } from "@/app/services/gemini.service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Intentar formatear un mensaje de prueba
    const testMessage = "🔰 CONVOCATORIA A CONCURSO PÚBLICO\n\nLa UGEL Ambo convoca a concurso público para el cargo de Director de I.E. N° 12345.\n\nRequisitos:\n- Título profesional\n- Experiencia mínima 3 años\n\nFecha límite: 15 de enero de 2024";
    
    const formatted = await geminiService.formatPost({ rawMessage: testMessage });
    
    return NextResponse.json({
      success: true,
      message: "Gemini AI funcionando correctamente",
      data: {
        originalMessage: testMessage,
        formatted: formatted
      }
    });
  } catch (error) {
    console.error('Error en Gemini test:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Error desconocido',
        details: 'Verifica que la API key de Gemini esté configurada correctamente'
      },
      { status: 500 }
    );
  }
}
