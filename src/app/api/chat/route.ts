import { streamText, convertToModelMessages } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { initialMessage } from "@/lib/data-chatbot";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY || "",
});

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Convertir UIMessage[] (o cualquier formato) a ModelMessage[]
    const modelMessages = convertToModelMessages(messages);

    const result = streamText({
      model: google("models/gemini-2.5-flash-lite"), 
      messages: modelMessages, // ahora es ModelMessage[]
      system: initialMessage.content, // Use 'system' property for prompt
      temperature: 0.7,
    });

    // Use toUIMessageStreamResponse for compatibility with the frontend
    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Error in chat API:', error);
    return new Response(
      JSON.stringify({ error: 'Error processing the request' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
