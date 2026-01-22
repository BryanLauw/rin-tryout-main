"use server";

import prisma from "@/be/db/prisma-init";
import { revalidatePath } from "next/cache";

export async function postAnswer(userId: string, answer: boolean[][]) {
  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        answers: answer,
      },
    });

    revalidatePath(`/exam/${userId}`);
    return { success: true };
  } catch (error) {
    console.error("Error posting answer:", error);
    return { success: false, error: "Failed to post answer" };
  }
}

