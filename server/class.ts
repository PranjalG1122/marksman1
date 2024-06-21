"use server";

import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export const getClassChapters = async (classNumber: number) => {
  try {
    return await prisma.class.findUniqueOrThrow({
      where: {
        classNumber,
      },
      select: {
        color: true,
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
    if (err instanceof PrismaClientKnownRequestError) {
      if (err.code === "P2025") return redirect("/dashboard");
    }
    return null;
  }
};

export const fetchChapterColor = async (chapterId: string) => {
  try {
    const chapter = await prisma.chapter.findUniqueOrThrow({
      where: {
        id: chapterId,
      },
      select: {
        class: {
          select: {
            color: true,
          },
        },
      },
    });

    return chapter.class.color;
  } catch (err) {
    console.error(err);
    return null;
  }
};
