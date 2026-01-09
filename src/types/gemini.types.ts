export interface GeminiFormattedPost {
  title: string;
  description: string;
  category: string;
}

export interface GeminiFormatRequest {
  rawMessage: string;
  context?: string;
}

export interface GeminiResponse {
  success: boolean;
  data?: GeminiFormattedPost;
  error?: string;
}