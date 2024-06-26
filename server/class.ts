"use server";

import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { redirect } from "next/navigation";
import { getUserInfo } from "@/server/user";

const prisma = new PrismaClient();

export const getClassChapters = async (classNumber: number) => {
  const user = await getUserInfo();
  if (!user) throw new Error();

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
                subtopicUserProgress: {
                  where: {
                    userId: user,
                  },
                  select: {
                    userId: true,
                  },
                },
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
