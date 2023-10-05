import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtDecode } from './app/helpers/jwt_decoder';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    let access_token: any = request.cookies.get('token')?.value

    const USER_DATA = jwtDecode(access_token)
    console.log(USER_DATA)
    
    if (USER_DATA?.role !== 'admin' && pathname === '/dashboard') {
         return NextResponse.redirect(
            new URL('/no-access', request.url)
        );
    }
    if (access_token && pathname === '/dashboard/auth') {
         return NextResponse.redirect(
            new URL('/dashboard', request.url)
        );
    }
    
    if (access_token && pathname === '/auth') {
        return NextResponse.redirect(
            new URL('/', request.url)
        );
    }
}

export const config = {
    matcher: [
        '/auth',
        '/dashboard/:path*',
    ],
};
