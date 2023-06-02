import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface RequestBody {
  title: string;
  description: string;
  imageSrc: string;
  category: string;
  roomCount: number;
  bathroomCount: number;
  guestCount: number;
  location: { value: string };
  price: string;
}

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = (await request.json()) as RequestBody;

  for (const key in body) {
    if (!body[key]) {
      return NextResponse.error();
    }
  }

  const {} = body;

  const comment = await prisma.comment.create({
    data: {
      userId: currentUser.id,
    },
  });

  return NextResponse.json(comment);
}
