import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getUser } from '@/lib/auth'

export async function middleware(req: NextRequest) {
  const user = await getUser()

  // Protected routes
  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    if (!user) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }

  // Auth routes (login, signup)
  if (['/login', '/signup'].includes(req.nextUrl.pathname)) {
    if (user) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/signup'],
}