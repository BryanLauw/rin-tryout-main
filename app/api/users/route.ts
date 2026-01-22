// app/api/users/route.ts
import prisma from "@/be/db/prisma-init";
import { NextResponse } from "next/server";

// GET Request
export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json({ success: true, users });
}

// POST Request
export async function POST(request: Request) {
  const body = await request.json();
  
  const user = await prisma.user.create({
    data: {
      phone: body.phone,
      name: body.name,
      examId: body.examId,
    },
  });

  return NextResponse.json({ success: true, user });
}