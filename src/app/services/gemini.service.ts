import { GoogleGenerativeAI } from "@google/generative-ai";
import { GeminiFormattedPost, GeminiFormatRequest } from "@/types/gemini.types";

class GeminiService {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor() {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY || '';

    // Log para debug
    console.log('GeminiService config:', {
      hasApiKey: !!apiKey
    });

    if (!apiKey) {
      throw new Error('NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY no está configurado');
    }

    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
  }

  /**
   * Formatea un post de Facebook usando Gemini AI
   */
  async formatPost(request: GeminiFormatRequest): Promise<GeminiFormattedPost> {
    try {
      console.log('GeminiService.formatPost - Iniciando formateo');
      const prompt = this.buildPrompt(request.rawMessage);

      console.log('GeminiService.formatPost - Enviando request a Gemini');
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // Parse la respuesta JSON
      const formatted = this.parseGeminiResponse(text);

      return formatted;
    } catch (error) {
      console.error('Error en GeminiService.formatPost:', error);
      console.log('GeminiService.formatPost - Usando fallback');
      // Fallback en caso de error
      return this.fallbackFormat(request.rawMessage);
    }
  }

  /**
   * Formatea múltiples posts en paralelo (con límite de concurrencia)
   */
  async formatMultiplePosts(messages: string[]): Promise<GeminiFormattedPost[]> {
    const batchSize = 3; // Procesar 3 a la vez para no sobrecargar la API
    const results: GeminiFormattedPost[] = [];

    for (let i = 0; i < messages.length; i += batchSize) {
      const batch = messages.slice(i, i + batchSize);
      const batchPromises = batch.map(msg => this.formatPost({ rawMessage: msg }));
      const batchResults = await Promise.all(batchPromises);
      results.push(...batchResults);
    }

    return results;
  }

  /**
   * Construye el prompt para Gemini
   */
  private buildPrompt(rawMessage: string): string {
    return `Eres un asistente especializado en formatear anuncios educativos de la UGEL (Unidad de Gestión Educativa Local) Ambo en Perú.

Tu tarea es analizar el siguiente mensaje de una publicación de Facebook y extraer información estructurada.

MENSAJE ORIGINAL:
${rawMessage}

INSTRUCCIONES:
1. Extrae un título claro y conciso (máximo 80 caracteres) que capture la idea principal
2. Crea una descripción profesional y clara (máximo 150 caracteres) eliminando emojis y símbolos innecesarios
3. Categoriza el mensaje en UNA de estas categorías:
   - "Convocatoria" (para llamados a concursos, inscripciones, encargos)
   - "Resultados" (para publicación de resultados, expedientes, evaluaciones)
   - "Eventos" (para campeonatos, concursos, actividades)
   - "Comunicados" (para atenciones, anuncios generales)
   - "Materiales" (para dotación, entrega de materiales)
   - "Educación" (categoría por defecto)

FORMATO DE RESPUESTA (responde SOLO con este JSON, sin texto adicional):
{
  "title": "Título extraído aquí",
  "description": "Descripción clara y profesional aquí",
  "category": "Categoría correspondiente"
}

IMPORTANTE:
- NO incluyas emojis en el título ni descripción
- Mantén el tono formal y profesional
- Sé conciso y directo
- Si hay fechas, inclúyelas en la descripción`;
  }

  /**
   * Parsea la respuesta de Gemini
   */
  private parseGeminiResponse(text: string): GeminiFormattedPost {
    try {
      // Limpiar la respuesta (a veces Gemini incluye markdown)
      const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      const parsed = JSON.parse(cleaned);

      return {
        title: parsed.title || 'Publicación UGEL Ambo',
        description: parsed.description || 'Información importante',
        category: parsed.category || 'Educación'
      };
    } catch (error) {
      console.error('Error parseando respuesta de Gemini:', error);
      throw error;
    }
  }

  /**
   * Formato de respaldo si Gemini falla
   */
  private fallbackFormat(rawMessage: string): GeminiFormattedPost {
    // Remover emojis
    const cleaned = rawMessage.replace(/[🔰🔉📑🗓⏱🏢🗂🔗📩🔎🏅]/g, '').trim();

    // Extraer primera línea como título
    const firstLine = cleaned.split('\n')[0];
    const title = firstLine.length > 80
      ? firstLine.substring(0, 77) + '...'
      : firstLine;

    // Extraer descripción
    const lines = cleaned.split('\n').filter(line => line.trim().length > 10);
    const description = lines.slice(0, 2).join(' ').trim();
    const finalDescription = description.length > 150
      ? description.substring(0, 147) + '...'
      : description;

    // Categorizar básicamente
    const lowerMessage = rawMessage.toLowerCase();
    let category = 'Educación';

    if (lowerMessage.includes('convocatoria') || lowerMessage.includes('encargatura')) {
      category = 'Convocatoria';
    } else if (lowerMessage.includes('resultado') || lowerMessage.includes('expediente')) {
      category = 'Resultados';
    } else if (lowerMessage.includes('concurso') || lowerMessage.includes('campeonato')) {
      category = 'Eventos';
    } else if (lowerMessage.includes('comunicado') || lowerMessage.includes('atención')) {
      category = 'Comunicados';
    } else if (lowerMessage.includes('materiales') || lowerMessage.includes('dotación')) {
      category = 'Materiales';
    }

    return { title, description, category };
  }
}

// Exportar instancia única (Singleton)
export const geminiService = new GeminiService();