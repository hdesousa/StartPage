import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

var bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Username already exists' }, { status: 400 });
  }
}