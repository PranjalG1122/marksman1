"use server";

import { SignInProps, SignUpProps } from "@/lib/types";
import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { signJoseToken } from "./jose";
import { maxAge } from "@/lib/maxAge";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const prisma = new PrismaClient();

const saltRounds = 10;

export const SignUpUser = async (
  userInfo: SignUpProps
): Promise<{
  success: boolean;
  message: string;
}> => {
  try {
    const hashedPassword = await bcrypt.hash(userInfo.password, saltRounds);

    await prisma.user.create({
      data: {
        name: userInfo.name,
        email: userInfo.email,
        password: hashedPassword,
      },
    });

    return {
      success: true,
      message: "User created successfully. Please sign in.",
    };
  } catch (err) {
    console.error(err);
    if (err instanceof PrismaClientKnownRequestError) {
      if (err.code === "P2002")
        return { success: false, message: "User already exists" };
    }
    if (err instanceof Error)
      return {
        success: false,
        message: err.message,
      };

    return {
      success: false,
      message: "An error occured",
    };
  }
};

export const SignInUser = async (
  userInfo: SignInProps
): Promise<{
  success: boolean;
  message: string;
}> => {
  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        email: userInfo.email,
      },
      select: {
        id: true,
        password: true,
      },
    });

    const match = await bcrypt.compare(userInfo.password, user.password);

    if (!match) {
      throw new Error("Invalid email or password");
    }

    const cookie = cookies();

    const token = await signJoseToken(user.id);

    cookie.set("token", token, {
      httpOnly: true,
      maxAge: maxAge,
      path: "/",
    });

    return {
      success: true,
      message: "Signed in successfully",
    };
  } catch (err) {
    console.error(err);

    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2025")
        return {
          success: false,
          message: "Invalid email or password",
        };
      else
        return {
          success: false,
          message: "An error occured",
        };
    }

    if (err instanceof Error)
      return {
        success: false,
        message: err.message,
      };

    return {
      success: false,
      message: "An error occured",
    };
  }
};
