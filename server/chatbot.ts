"use server";

import { chatbotPrompt } from "@/lib/prompt";
import { safetySettings } from "@/lib/safetySettings";
import { ChatBotProps } from "@/lib/types";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "string");

export const chat = async (
  messages: ChatBotProps[]
): Promise<string | null> => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
      safetySettings: safetySettings,
    });

    const history = messages.map((message) => {
      return {
        role: message.type,
        parts: [
          {
            text: message.message,
          },
        ],
      };
    });

    const chat = model.startChat({
      history: [
        ...history,
        {
          role: "model",
          parts: [
            {
              text: chatbotPrompt,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
      },
    });

    const result = await chat.sendMessage(
      messages[messages.length - 1].message
    );
    const res = result.response;
    const modelResponse = res.text();

    if (!modelResponse) return null;

    return modelResponse;
  } catch (err) {
    console.error(err);
    return null;
  }
};
