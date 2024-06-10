"use server";

import { maxAge } from "@/lib/maxAge";
import { SignJWT, jwtVerify } from "jose";

const jwtSecret = new TextEncoder().encode(process.env.JWT_SECRET!);

export const signJoseToken = async (payload: string) => {
  return new SignJWT({ id: payload })
    .setProtectedHeader({
      alg: "HS256",
    })
    .setExpirationTime(Math.floor(Date.now() / 1000) + maxAge)
    .sign(jwtSecret);
};

export const verifyJoseToken = async (token: string) => {
  return await jwtVerify(token, jwtSecret);
};
