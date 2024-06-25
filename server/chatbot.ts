"use server";

import { customPrompt } from "@/lib/prompt";
import { ChatBotProps } from "@/lib/types";
import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "string");
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

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
              text: customPrompt,
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
