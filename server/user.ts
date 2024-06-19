"use server";

import { cookies } from "next/headers";
import { decodeJwt } from "jose";
import { PROFILES, PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const prisma = new PrismaClient();

export const getUserInfo = async (): Promise<string | null> => {
  const cookie = cookies();

  const data = cookie.get("token");
  if (!data) return null;

  if (!data) return null;
  const token = decodeJwt(data.value) as { id: string };

  if (!token) return null;

  return token.id;
};

export const fetchUserInfo = async (): Promise<{
  avatar: PROFILES;
  email: string;
  name: string;
} | null> => {
  const token = await getUserInfo();
  if (!token) return null;

  try {
    return await prisma.user.findUniqueOrThrow({
      where: {
        id: token,
      },
      select: {
        avatar: true,
        email: true,
        name: true,
      },
    });
  } catch (err) {
    console.error(err);
    if (err instanceof PrismaClientKnownRequestError) {
      if (err.code === "P2025") return null;
    }
    return null;
  }
};
