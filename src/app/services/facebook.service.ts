import { FacebookPostsResponse, NewsItem } from "@/types/facebook.types";



class FacebookService {
  private baseUrl: string;
  private pageId: string;
  private accessToken: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_FACEBOOK_GRAPH_API_URL || 'https://graph.facebook.com/v24.0';
    this.pageId = process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '';
    this.accessToken = process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN || '';
  }

  /**
   * Obtiene los posts de la página de Facebook
   */
  async getPosts(limit: number = 10): Promise<FacebookPostsResponse> {
    try {
      const fields = 'id,message,created_time,full_picture,attachments{media,type,url}';
      const url = `${this.baseUrl}/${this.pageId}/posts?fields=${fields}&limit=${limit}&access_token=${this.accessToken}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: 300 } // Revalidar cada 5 minutos
      });

      if (!response.ok) {
        throw new Error(`Error al obtener posts: ${response.statusText}`);
      }

      const data: FacebookPostsResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Error en FacebookService.getPosts:', error);
      throw error;
    }
  }

  /**
   * Transforma los posts de Facebook a NewsItems
   */
  transformPostsToNews(posts: FacebookPostsResponse): NewsItem[] {
    return posts.data.map((post) => {
      // Extraer el título del mensaje (primeras palabras o línea)
      const title = this.extractTitle(post.message || '');
      
      // Extraer descripción
      const description = this.extractDescription(post.message || '');
      
      // Formatear fecha
      const date = this.formatDate(post.created_time);
      
      // Categorizar el post
      const category = this.categorizePost(post.message || '');
      
      // Obtener imagen
      const image = post.full_picture || 
                    post.attachments?.data[0]?.media?.image?.src || 
                    '/placeholder.svg';
      
      // Obtener URL
      const url = post.attachments?.data[0]?.url;

      return {
        id: post.id,
        title,
        description,
        date,
        category,
        image,
        url
      };
    });
  }

  /**
   * Extrae el título del mensaje
   */
  private extractTitle(message: string): string {
    // Buscar texto entre emojis o símbolos especiales
    const titleMatch = message.match(/[🔰🔉📑](.+?)(?:\n|$)/);
    if (titleMatch) {
      return titleMatch[1].trim();
    }
    
    // Si no hay match, tomar las primeras 80 caracteres
    const firstLine = message.split('\n')[0];
    return firstLine.length > 80 
      ? firstLine.substring(0, 80) + '...' 
      : firstLine;
  }

  /**
   * Extrae la descripción del mensaje
   */
  private extractDescription(message: string): string {
    // Remover emojis y símbolos especiales del inicio
    const cleaned = message.replace(/^[🔰🔉📑🗓⏱🏢🗂🔗📩🔎🏅📑]+/gm, '').trim();
    
    // Tomar las primeras líneas significativas
    const lines = cleaned.split('\n').filter(line => line.trim().length > 10);
    const description = lines.slice(0, 3).join(' ').trim();
    
    return description.length > 150 
      ? description.substring(0, 150) + '...' 
      : description;
  }

  /**
   * Formatea la fecha a formato legible
   */
  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('es-PE', options);
  }

  /**
   * Categoriza el post basándose en palabras clave
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

// Exportar instancia única (Singleton)
export const facebookService = new FacebookService();