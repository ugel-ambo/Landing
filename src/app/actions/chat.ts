"use server";

import { streamText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

export async function continueConversation(prompt: string) {
  return streamText({
    model: google("models/gemini-1.5-flash"),
    prompt,
  });
}
