import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

const POST = async (request) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const requestData = body;

  for (const key in requestData) {
    if (!requestData[key]) {
      return NextResponse.error();
    }
  }

  const {} = requestData;

  const comment = await prisma.comment.create({
    data: {
      userId: currentUser.id,
    },
  });

  return NextResponse.json(comment);
};

export default POST;
