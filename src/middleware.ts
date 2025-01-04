import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSession } from '@/lib/session';

export async function middleware(request: NextRequest) {
  const session = await getSession(); // Ensure this correctly fetches session info.

  const publicPaths = ['/login', '/signup', '/intro', '/_not-found']; // Paths accessible without login.
  const isPublicPath = publicPaths.includes(request.nextUrl.pathname);

  if (session) {
    // If logged in, prevent access to login/signup and redirect to `/home`.
    if (
      request.nextUrl.pathname === '/login' ||
      request.nextUrl.pathname === '/signup'
    ) {
      return NextResponse.redirect(new URL('/home', request.url));
    }
  } else {
    // If not logged in, block access to protected paths.
    const protectedPaths = [
      '/dashboard',
      '/health',
      '/health/records',
      '/home',
      '/messages',
      '/services',
      '/services/appointment',
      '/services/appointment/hospitals',
      '/services/prescriptions',
    ];
    const isProtectedPath = protectedPaths.some((path) =>
      request.nextUrl.pathname.startsWith(path),
    );

    if (isProtectedPath && !isPublicPath) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Allow API routes to be publicly accessible.
  if (request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Proceed with the request.
  return NextResponse.next();
}

// Specify the paths where the middleware applies.
export const config = {
  matcher: [
    '/',
    '/dashboard',
    '/health/:path*',
    '/home',
    '/intro',
    '/login',
    '/messages',
    '/services/:path*',
    '/signup',
    '/_not-found',
  ],
};
