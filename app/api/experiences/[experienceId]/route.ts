import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
  experienceId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { experienceId } = params;

  if (!experienceId || typeof experienceId !== "string") {
    throw new Error("Invalid ID");
  }

  const experience = await prisma.experience.deleteMany({
    where: {
      id: experienceId,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(experience);
}
