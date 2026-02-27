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
    const sekarang = new Date();
    const waktuBuka = new Date('2026-02-28T08:00:00+07:00');
    const waktuTutup = new Date('2026-01-31T23:59:59+07:00');

    if (sekarang < waktuBuka) {
      return { success: false, error: "Login belum dibuka. Silakan kembali pada Sabtu, 08:00 WIB." };
    }

    if (sekarang > waktuTutup) {
      return { success: false, error: "Masa login telah berakhir." };
    }

    const result = await isThereClientId(userId, name, phone);

    if (!result.success) {
      return { success: false, error: result.error };
    }

    if (result.isThere) {
      return { success: false, error: "User Has Already Logged In" };
    }


    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
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

export async function isThereClientId(userId: string, name: string, phone: string) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
        phone: phone,
        name: name,
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
