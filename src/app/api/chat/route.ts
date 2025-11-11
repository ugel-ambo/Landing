import { streamText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { initialMessage } from "@/lib/data";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY || "",
});

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    console.log('Mensajes recibidos:', JSON.stringify(messages, null, 2));

    const formattedMessages = messages.map((msg: any) => {
      let content = '';

      if (msg.parts && Array.isArray(msg.parts)) {
        content = msg.parts
          .filter((part: any) => part.type === 'text')
          .map((part: any) => part.text)
          .join('');
      } else if (msg.content) {
        content = typeof msg.content === 'string' ? msg.content : '';
      }

      return {
        role: msg.role,
        content
      };
    });

    const allMessages = [
      {
        role: "system",
        content: initialMessage.content
      },
      ...formattedMessages
    ];

    console.log('Mensajes formateados:', JSON.stringify(allMessages, null, 2));

    const result = await streamText({
      model: google("models/gemini-2.0-flash-lite"),
      messages: allMessages,
      temperature: 0.7,
    });

    // ✅ API v2.x usa toTextStreamResponse()
    return result.toTextStreamResponse();

  } catch (error) {
    console.error('Error en API de chat:', error);
    return new Response(
      JSON.stringify({
        error: 'Error procesando la solicitud',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
