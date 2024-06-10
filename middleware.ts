import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { verifyToken } from "@/server/verifyToken";

export async function middleware(request: NextRequest) {
  const authPages = ["/signin", "/signup"];

  const tokenVerified = await verifyToken();

  if (!tokenVerified) {
    if (authPages.includes(request.nextUrl.pathname))
      return NextResponse.next();
    return NextResponse.redirect(
      new URL("/signin", request.nextUrl).toString()
    );
  }

  if (authPages.includes(request.nextUrl.pathname))
    return NextResponse.redirect(
      new URL("/dashboard", request.nextUrl).toString()
    );

  return NextResponse.next();
}

export const config = { matcher: ["/dashboard", "/signup", "/signin"] };
