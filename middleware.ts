import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // Skip middleware if it's an API route or static file
  if (
    req.nextUrl.pathname.startsWith('/_next') || 
    req.nextUrl.pathname.startsWith('/api') ||
    req.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  try {
    // Create a new response object
    const res = NextResponse.next();
    
    // Create the Supabase client with both request and response objects
    const supabase = createMiddlewareClient({ req, res });

    // This is critical - it refreshes the session and sets the cookies
    const { data: { session } } = await supabase.auth.getSession();

    const isAuthPage = req.nextUrl.pathname === '/signin' || req.nextUrl.pathname === '/signup';
    const isProtectedPage = req.nextUrl.pathname.startsWith('/dashboard');

    console.log(`Middleware: Path: ${req.nextUrl.pathname}, Auth: ${!!session}, AuthPage: ${isAuthPage}, ProtectedPage: ${isProtectedPage}`);

    // If user is signed in and the current path is /signin or /signup, redirect to dashboard
    if (session && isAuthPage) {
      console.log('Middleware: Authenticated user tried to access auth page, redirecting to dashboard');
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    // If user is not signed in and the current path is a protected route, redirect to signin
    if (!session && isProtectedPage) {
      console.log('Middleware: Unauthenticated user tried to access protected page, redirecting to signin');
      // Store the URL they were trying to access
      const redirectUrl = new URL('/signin', req.url);
      redirectUrl.searchParams.set('redirect', req.nextUrl.pathname);
      return NextResponse.redirect(redirectUrl);
    }

    // Return the response with the refreshed session cookie
    return res;
  } catch (error) {
    console.error('Middleware error:', error);
    // If there's an error in the middleware, just proceed with the request
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|public/).*)'],
}; 