import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Extract Better-Auth session token from cookies
  // Better-Auth uses 'better-auth.session_token' (or '__Secure-better-auth.session_token' in production)
  const sessionToken =
    request.cookies.get('better-auth.session_token')?.value ||
    request.cookies.get('__Secure-better-auth.session_token')?.value;

  // 2. Define Protected Routes (Client & Admin Profiles, Dashboards, etc.)
  const isProtectedUserRoute =
    pathname.startsWith('/client') ||
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/profile');

  const isAdminRoute = pathname.startsWith('/admin');

  // 3. Protect User / Client / Dashboard Routes
  if (isProtectedUserRoute || isAdminRoute) {
    if (!sessionToken) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // 4. Redirect Authenticated Users away from Auth Pages (e.g., /login or /signup)
  if (pathname.startsWith('/login') || pathname.startsWith('/signup')) {
    if (sessionToken) {
      // Redirect already logged in users to homepage or dashboard
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // 5. API Redirects or Rewrites (Example)
  if (pathname.startsWith('/api/v1/old-endpoint')) {
    return NextResponse.redirect(new URL('/api/v1/new-endpoint', request.url));
  }

  return NextResponse.next();
}

// 6. Matcher Configuration
export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public media files (.png, .jpg, .svg, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};