"use server";

import { ClassProps } from "@/lib/types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addNewContent = async (content: ClassProps): Promise<boolean> => {
  try {
    await prisma.chapter.create({
      data: {
        class: {
          connect: {
            classNumber: content.classNumber,
          },
        },
        chapterName: content.chapters[0].chapterName,
        subtopics: {
          createMany: {
            data: content.chapters[0].subTopics,
          },
        },
      },
    });

    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};
