import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { createToken } from '../../../lib/jwt';
import cookie from 'cookie';

var bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (user && await bcrypt.compare(password, user.password)) {
    const token = await createToken(username);
    const response = NextResponse.json({ message: 'Login successful' });

    response.headers.set('Set-Cookie', cookie.serialize('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600,
      path: '/',
    }));

    return response;
  } else {
    return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
  }
}