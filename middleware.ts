import { NextRequest, NextResponse } from 'next/server'
import { get } from './lib/feature-flags'

export const config = {
  matcher: '/',
}

export async function middleware(req: NextRequest) {
  try {
    if (await get('storeClosed')) {
      const url = req.nextUrl.clone()
      url.pathname = '/_closed'
      return NextResponse.rewrite(url)
    }
  } catch (error) {
    console.error(error)
  }
}
