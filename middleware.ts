import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const sessionId = request.cookies.get("sessionId")?.value;

  // No session cookie → redirect
  if (!sessionId) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Cookie exists → allow request
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
