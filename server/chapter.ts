"use server";

import { PrismaClient } from "@prisma/client";
import { getUserInfo } from "./user";

const prisma = new PrismaClient();

export const fetchChapters = async (chapterId: string) => {
  const user = await getUserInfo();
  if (!user) throw new Error();

  try {
    const chapter = await prisma.chapter.findUniqueOrThrow({
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
    return await prisma.subTopic.findUniqueOrThrow({
      where: {
        id: subtopicId,
      },
      select: {
        subtopicName: true,
        subtopicContent: {
          select: {
            content: true,
          },
        },
      },
    });
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const updateMarkDone = async (subtopicId: string) => {
  try {
    const user = await getUserInfo();
    if (!user) throw new Error();
    return await prisma.subTopicUserProgress.create({
      data: {
        subtopicId,
        userId: user,
      },
    });
  } catch (err) {
    console.error(err);
    return null;
  }
};
