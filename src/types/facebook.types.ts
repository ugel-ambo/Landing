// Types para la respuesta de Facebook API
export interface FacebookMediaImage {
  height: number;
  src: string;
  width: number;
}

export interface FacebookMedia {
  image: FacebookMediaImage;
}

export interface FacebookAttachment {
  media: FacebookMedia;
  type: string;
  url: string;
}

export interface FacebookAttachments {
  data: FacebookAttachment[];
}

export interface FacebookPost {
  id: string;
  message?: string;
  created_time: string;
  full_picture?: string;
  attachments?: FacebookAttachments;
}

export interface FacebookPaging {
  cursors: {
    before: string;
    after: string;
  };
  next?: string;
}

export interface FacebookPostsResponse {
  data: FacebookPost[];
  paging: FacebookPaging;
}

// Types para el componente de noticias
export interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string; // Nueva propiedad para la hora
  category: string;
  image: string;
  url?: string;
}