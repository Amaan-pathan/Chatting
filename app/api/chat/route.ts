import { google } from "@ai-sdk/google";
import { convertToModelMessages, streamText } from "ai";

export const maxDuration = 30;

const geminiApiKey =
  process.env.GOOGLE_GENERATIVE_AI_API_KEY ??
  process.env.GEMINI_API_KEY ??
  process.env.NEXT_PUBLIC_GEMINI_API_KEY;

export async function POST(req: Request) {
  if (!geminiApiKey) {
    return new Response(
      JSON.stringify({
        error:
          "Gemini API key is missing. Set GOOGLE_GENERATIVE_AI_API_KEY (or GEMINI_API_KEY) in your environment.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const { messages } = await req.json();
  const result = streamText({
    model: google("gemini-2.0-flash"),
    messages: convertToModelMessages(messages),
  });
  return result.toUIMessageStreamResponse();
}