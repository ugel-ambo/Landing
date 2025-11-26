import { FacebookPostsResponse, NewsItem } from "@/types/facebook.types";
import { GeminiFormattedPost } from "@/types/gemini.types";

class FacebookService {
  private baseUrl: string;
  private pageId: string;
  private accessToken: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_FACEBOOK_GRAPH_API_URL || 'https://graph.facebook.com/v24.0';
    this.pageId = process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '';
    this.accessToken = process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN || '';

    // Log para debug
    console.log('FacebookService config:', {
      baseUrl: this.baseUrl,
      pageId: this.pageId ? 'Configurado' : 'No configurado',
      hasToken: !!this.accessToken
    });
  }

  /**
   * Obtiene los posts de la página de Facebook
   */
  async getPosts(limit: number = 6): Promise<FacebookPostsResponse> {
    try {
      // Validar configuración
      if (!this.pageId) {
        throw new Error('NEXT_PUBLIC_FACEBOOK_PAGE_ID no está configurado');
      }
      if (!this.accessToken) {
        throw new Error('NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN no está configurado');
      }

      const fields = 'id,message,created_time,full_picture,attachments{media,type,url}';
      const url = `${this.baseUrl}/${this.pageId}/posts?fields=${fields}&limit=${limit}&access_token=${this.accessToken}`;

      console.log('Facebook API URL:', url.replace(this.accessToken, '[TOKEN_HIDDEN]'));

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: 300 } // 5 minutos 
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Facebook API Error:', response.status, errorText);

        // Verificar si es un error de token expirado
        if (response.status === 400 && errorText.includes('Session has expired')) {
          throw new Error(`Token de Facebook expirado. Error: ${errorText}. Por favor, renueva el token en Facebook Graph API Explorer.`);
        }

        throw new Error(`Error al obtener posts: ${response.status} - ${errorText}`);
      }

      const data: FacebookPostsResponse = await response.json();
      console.log('Facebook API Success:', data.data.length, 'posts obtenidos');
      return data;
    } catch (error) {
      console.error('Error en FacebookService.getPosts:', error);
      throw error;
    }
  }

  /**
   * Transforma los posts de Facebook a NewsItems usando datos formateados por AI
   */
  transformPostsToNews(
    posts: FacebookPostsResponse,
    formattedData: GeminiFormattedPost[]
  ): NewsItem[] {
    return posts.data.map((post, index) => {
      // Usar datos formateados por Gemini si están disponibles
      const formatted = formattedData[index];

      const { date, time } = this.formatDateTime(post.created_time);

      const image = post.full_picture ||
        post.attachments?.data[0]?.media?.image?.src ||
        '/placeholder.svg';

      const url = post.attachments?.data[0]?.url;

      return {
        id: post.id,
        title: formatted?.title || this.extractTitle(post.message || ''),
        description: formatted?.description || this.extractDescription(post.message || ''),
        date,
        time,
        category: formatted?.category || this.categorizePost(post.message || ''),
        image,
        url
      };
    });
  }

  /**
   * Extrae los mensajes de los posts para enviar a Gemini
   */
  extractMessages(posts: FacebookPostsResponse): string[] {
    return posts.data.map(post => post.message || 'Sin mensaje');
  }

  /**
   * Extrae el título del mensaje (fallback)
   */
  private extractTitle(message: string): string {
    const titleMatch = message.match(/[🔰🔉📑](.+?)(?:\n|$)/);
    if (titleMatch) {
      return titleMatch[1].trim();
    }

    const firstLine = message.split('\n')[0];
    return firstLine.length > 80
      ? firstLine.substring(0, 80) + '...'
      : firstLine;
  }

  /**
   * Extrae la descripción del mensaje (fallback)
   */
  private extractDescription(message: string): string {
    const cleaned = message.replace(/^[🔰🔉📑🗓⏱🏢🗂🔗📩🔎🏅📑]+/gm, '').trim();
    const lines = cleaned.split('\n').filter(line => line.trim().length > 10);
    const description = lines.slice(0, 3).join(' ').trim();

    return description.length > 150
      ? description.substring(0, 150) + '...'
      : description;
  }

  /**
   * Formatea la fecha y hora a formato legible
   */
  private formatDateTime(dateString: string): { date: string; time: string } {
    const dateObj = new Date(dateString);

    const dateOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const date = dateObj.toLocaleDateString('es-PE', dateOptions);

    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    const time = dateObj.toLocaleTimeString('es-PE', timeOptions);

    return { date, time };
  }

  /**
   * Categoriza el post basándose en palabras clave (fallback)
   */
  private categorizePost(message: string): string {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('concurso') || lowerMessage.includes('campeonato')) {
      return 'Eventos';
    }
    if (lowerMessage.includes('convocatoria') || lowerMessage.includes('encargatura')) {
      return 'Convocatoria';
    }
    if (lowerMessage.includes('resultado') || lowerMessage.includes('expediente')) {
      return 'Resultados';
    }
    if (lowerMessage.includes('atención') || lowerMessage.includes('comunicado')) {
      return 'Comunicados';
    }
    if (lowerMessage.includes('materiales') || lowerMessage.includes('dotación')) {
      return 'Materiales';
    }

    return 'Educación';
  }
}

export const facebookService = new FacebookService();