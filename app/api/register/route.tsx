import bcrypt from 'bcrypt'
import prisma from '@/app/lib/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
 const body = await request.json();
 const { name, email, password } = body;
 const hashedPassword = await bcrypt.hash(password, 12);

 try {

  const newUser = await prisma.user.create({
   data: {
    name,
    email,
    hashedPassword
   }
  })

  return NextResponse.json(newUser)

 } catch (error) {
  return NextResponse.json({ message: "Insert Fail", error }, { status: 500 })
 }


}