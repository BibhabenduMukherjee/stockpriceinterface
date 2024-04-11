import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default async function middleware(req : NextRequest) {
  // Get session cookie (if it exists)
  const session = req.cookies.get('session');

  // Handle root URL (/) redirection based on session status
  if (req.nextUrl.pathname === '/') {
    if (session) {
      // User is logged in, redirect to dashboard
      return NextResponse.redirect(new URL('/dashboard', req.url));
    } else {
      // No session, redirect to login
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  // Handle login and signup page access (allow without session)
  if (req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/signup')) {
    return NextResponse.next();
  }

  // Enforce authentication for other protected routes
  if (!session) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Allow access to protected routes with valid session
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard', '/prediction', '/'], // Include the root URL (/) in the matcher
};
