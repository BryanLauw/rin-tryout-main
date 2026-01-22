"use server";

import prisma from "@/be/db/prisma-init";
import { JsonValue } from "@prisma/client/runtime/library";
import { writeFileSync } from "node:fs";

export async function getAllUserAnswer() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        phone: true,
        name: true,
        answers: true,
      },
    });
    console.log(users);
    // Convert users data to CSV format
    const csvHeader = "ID,Phone,Name,Answers\n";
    const csvRows = users
      .map((user: {id: string, answers: JsonValue, phone: string | null, name: string | null}) => {
        const answersString = JSON.stringify(user.answers || []);
        return `${user.id},${user.phone},${user.name},${answersString}`;
      })
      .join("\n");
    const csvContent = csvHeader + csvRows;

    // Write to file with timestamp
    const now = new Date();
    const timestamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}-${String(now.getSeconds()).padStart(2, '0')}`;
    writeFileSync(`be/data/user_answers_${timestamp}.csv`, csvContent);

    return { success: true, data: users };
  } catch (error) {
    console.error("Error fetching user answers:", error);
    return { success: false, error: "Failed to fetch user answers" };
  }
}

getAllUserAnswer();
