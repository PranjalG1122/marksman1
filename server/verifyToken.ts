"use server";

import { cookies } from "next/headers";
import { verifyJoseToken } from "@/server/jose";

export const verifyToken = async (): Promise<boolean> => {
  const cookie = cookies();

  const token = cookie.get("token");
  if (!token) return false;

  const decodedToken = await verifyJoseToken(token.value);
  if (!decodedToken.payload.id) return false;
  if (!decodedToken.payload.exp) return false;
  if (decodedToken.payload.exp < Date.now() / 1000) return false;

  return true;
};
