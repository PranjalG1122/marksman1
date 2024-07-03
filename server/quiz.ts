"use server";

import { quizPrompt } from "@/lib/prompt";
import { safetySettings } from "@/lib/safetySettings";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { PrismaClient } from "@prisma/client";
import { getUserInfo } from "@/server/user";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "string");

const prisma = new PrismaClient();

export const generateQuiz = async (chapterId: string) => {
  try {
    const chapterData = await prisma.chapter.findUniqueOrThrow({
      where: {
        id: chapterId,
      },
      select: {
        class: {
          select: {
            classNumber: true,
          },
        },
        subtopics: {
          select: {
            subtopicContent: true,
          },
        },
      },
    });

    const classNum = chapterData.class.classNumber;

    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
      safetySettings: safetySettings,
    });

    const history = chapterData.subtopics.map((subtopic) => {
      return {
        role: "user",
        parts: [
          {
            text: subtopic.subtopicContent,
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
              text: `This is the syllabus for this chapter for class ${classNum}.`,
            },
            {
              text: quizPrompt,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.9,
        topK: 1,
        topP: 1,
      },
    });

    const result = await chat.sendMessage(
      "Generate a quiz for this chapter, consisting of 10 questions in the specified format. Do not return markdown or backticks."
    );
    const res = result.response;
    const modelResponse = res.text();

    return modelResponse;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const checkUserQuizProgress = async (chapterId: string) => {
  try {
    const user = await getUserInfo();
    if (!user) return false;

    const progress = await prisma.quizUserProgress.findFirst({
      where: {
        chapterId,
        userId: user,
      },
      select: {
        score: true,
        chapter: {
          select: {
            chapterName: true,
          },
        },
      },
    });

    if (!progress) return false;
    return progress;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const submitQuiz = async (
  chapterId: string,
  score: number
): Promise<boolean> => {
  try {
    const user = await getUserInfo();
    if (!user) return false;

    await prisma.quizUserProgress.create({
      data: {
        chapterId,
        userId: user,
        score,
      },
    });

    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};
