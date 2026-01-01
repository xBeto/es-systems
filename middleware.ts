import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    // Define paths that are accessible without maintenance mode
    // This typically includes static files, api routes if needed, and the maintenance page itself
    if (
        path.startsWith('/_next') ||
        path.startsWith('/static') ||
        path.startsWith('/api') ||
        path === '/maintenance' ||
        path === '/maintenance-cover.png' ||
        path === '/favicon.ico'
    ) {
        return NextResponse.next()
    }

    // Redirect to maintenance page
    return NextResponse.redirect(new URL('/maintenance', request.url))
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
