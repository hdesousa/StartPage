import { NextRequest, NextResponse } from 'next/server';
import cookie from 'cookie';

export async function POST(req: NextRequest) {
  const response = NextResponse.json({ message: 'Logout successful' });

  response.headers.set('Set-Cookie', cookie.serialize('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    expires: new Date(0),
    path: '/',
  }));

  return response;
}