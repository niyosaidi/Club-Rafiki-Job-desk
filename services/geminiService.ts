
import { GoogleGenAI, Chat } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a client-side check. The actual error will be thrown by the GenAI SDK if the key is invalid.
  console.warn("API_KEY environment variable not set. The application will not function without it.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export function createChatSession(systemInstruction: string): Chat {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: systemInstruction,
      temperature: 0.7,
      topP: 0.9,
    },
  });
}
