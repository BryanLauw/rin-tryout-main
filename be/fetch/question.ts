import prisma from "../db/prisma-init";

export const fetchExamByUserId = async (userId: string) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: userId },
    include: {
      exam: {
        include: {
          items: {
            include: {
              questions: {
                orderBy: {
                  id: "asc",
                },
              },
            },
          },
        },
      },
    },
  });

  if (!user.exam) {
    throw new Error("User has no assigned exam");
  }

  return user.exam;
};

export type ExamType = Awaited<ReturnType<typeof fetchExamByUserId>>;
