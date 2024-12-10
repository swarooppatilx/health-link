import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "@/lib/session"; // Ensure this function correctly fetches session info

export async function middleware(request: NextRequest) {
  const session = await getSession(); // Fetch session data (implementation should fetch based on cookies or headers)

  const loginPath = "/login";
  const signupPath = "/signup";
  const homePath = "/home";

  const isAuthPath =
    request.nextUrl.pathname === loginPath || request.nextUrl.pathname === signupPath;

  if (session) {
    // If the user has a session and tries to access login/signup, redirect to the home page
    if (isAuthPath) {
      return NextResponse.redirect(new URL(homePath, request.url));
    }
  } else {
    // If the user doesn't have a session and is not on the login or signup page, redirect to login
    if (!isAuthPath) {
      return NextResponse.redirect(new URL(loginPath, request.url));
    }
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Specify the paths where the middleware applies
export const config = {
  matcher: [
    "/home/:path*",   // Protect the home page and its sub-paths
    "/dashboard/:path*", // Example: Protect dashboard pages
    "/signup",        // Block access to signup for authenticated users
    "/login",         // Block access to login for authenticated users
    "/",              // Protect the root path
  ],
};
