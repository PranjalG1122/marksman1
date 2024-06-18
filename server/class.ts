"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getClassChapters = async (classNumber: number) => {
  try {
    return await prisma.class.findUniqueOrThrow({
      where: {
        classNumber,
      },
      select: {
        chapters: {
          select: {
            chapterName: true,
            id: true,
            subtopics: {
              select: {
                subtopicName: true,
                id: true,
              },
            },
          },
        },
      },
    });
  } catch (err) {
    console.error(err);
    return null;
  }
};
