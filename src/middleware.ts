import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  // Check if the request URL starts with "/login" (exclude login page from check)

  const session = req.cookies.get('session');

  

  if (req.nextUrl.pathname.startsWith('/login') && session ) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }
  
  if (req.nextUrl.pathname.startsWith('/login') ||req.nextUrl.pathname.startsWith('/signup') ) {
    return NextResponse.next();
  }

  // Check if there's a session object in the request
 
  
  
  if (!session) {
    // Redirect to the login page if no session is found
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // User is authenticated, continue with the request
  return NextResponse.next();
}
export const config = {
    matcher: ['/dashboard','/prediction'],
  }