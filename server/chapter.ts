"use server";

import { PrismaClient } from "@prisma/client";
import { getUserInfo } from "./user";

const prisma = new PrismaClient();

const user = getUserInfo();
if (!user) throw new Error();

export const fetchChapters = async (chapterId: string) => {
  try {
    const chapter = await prisma.chapter.findUnique({
      where: {
        id: chapterId,
      },
      select: {
        class: {
          select: {
            classNumber: true,
          },
        },
        chapterName: true,
        subtopics: {
          select: {
            subtopicContent: {
              select: {
                content: true,
                type: true,
              },
            },
            subtopicName: true,
            subtopicNumber: true,
            id: true,

            subtopicUserProgress: {
              where: {
                userId: user,
              },
              select: {
                subtopicId: true,
              },
            },
          },
          orderBy: {
            subtopicNumber: "asc",
          },
        },
      },
    });

    return chapter;
  } catch (err) {
    console.error(err);
    if (err instanceof Error) return null;
  }
};

export const fetchSubTopicContent = async (subtopicId: string) => {
  try {
    return await prisma.subTopic.findUnique({
      where: {
        id: subtopicId,
      },
      select: {
        subtopicContent: {
          select: {
            content: true,
            type: true,
          },
        },
      },
    });
  } catch (err) {
    console.error(err);
    return null;
  }
};
