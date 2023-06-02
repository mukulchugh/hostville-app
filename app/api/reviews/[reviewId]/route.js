import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

const DELETE = async (request, { params }) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { commentId } = params;

  if (!commentId || typeof commentId !== "string") {
    throw new Error("Invalid comment ID");
  }

  const comment = await prisma.comment.deleteMany({
    where: {
      id: commentId,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(comment);
};

export default DELETE;
