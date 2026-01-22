"use server";

import prisma from "@/be/db/prisma-init";
import { revalidatePath } from "next/cache";

export async function getUser(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return { success: false, error: "User not found" };
    }

    return { success: true, data: user };
  } catch (error) {
    console.error("Error fetching user:", error);
    return { success: false, error: "Failed to fetch user" };
  }
}

export async function isUserHasAnswer(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        answers: true,
      },
    });

    return { success: true, hasAnswer: !!user?.answers };
  } catch (error) {
    console.error("Error checking user answer:", error);
    return { success: false, error: "Failed to check user answer" };
  }
}

export async function login(
  userId: string,
  name: string,
  phone: string,
  clientId: string
) {
  try {
    const { isThere } = await isThereClientId(userId);
    if (isThere) return { success: false, error: "User Has Already Logged In" };

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name,
        phone,
        clientId,
      },
    });

    revalidatePath(`/exam/${userId}`);
    return { success: true };
  } catch (error) {
    console.error("Error updating user:", error);
    return { success: false, error: "Failed to update user" };
  }
}

export async function checkClientId(userId: string, clientId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        clientId: true,
      },
    });

    if (!user) {
      return { success: false, error: "User not found" };
    }

    return {
      success: true,
      isMatch: user.clientId === clientId,
    };
  } catch (error) {
    console.error("Error checking client ID:", error);
    return { success: false, error: "Failed to check client ID" };
  }
}

export async function isThereClientId(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        clientId: true,
      },
    });

    if (!user) {
      return { success: false, error: "User not found" };
    }

    return {
      success: true,
      isThere: !!user.clientId,
    };
  } catch (error) {
    console.error("Error checking client ID:", error);
    return { success: false, error: "Failed to check client ID" };
  }
}
