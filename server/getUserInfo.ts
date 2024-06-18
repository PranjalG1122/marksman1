"use server";

import { cookies } from "next/headers";
import { decodeJwt } from "jose";

export const getUserInfo = (): string | null => {
  const cookie = cookies();

  const data = cookie.get("token");
  if (!data) return null;

  if (!data) return null;
  const token = decodeJwt(data.value) as { id: string };

  if (!token) return null;
  return token.id;
};
