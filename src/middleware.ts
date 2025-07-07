import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    console.log('xd')
    return NextResponse.next()
}

export const config = {
    matcher: ['/profile-fake/:path*'],
}
