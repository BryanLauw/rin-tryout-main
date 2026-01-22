import { PrismaClient } from '@prisma/client'
import { data } from './data-seed/exam'

const prisma = new PrismaClient()

// liat data di db:
// npx prisma studio

// push schema ke db (data hilang):
// npx prisma db push 

// migrate schema:
// npx prisma migrate dev

// run seed:
// bun run ./be/db/seed.ts
async function main() {
  // await prisma.user.deleteMany()
  await prisma.question.deleteMany()
  await prisma.examSession.deleteMany()
  await prisma.exam.deleteMany()

  // seed exams
  for (const ujian of data) {
    const exam = await prisma.exam.create({
      data: {
        name: ujian.name,
        description: ujian.description,
        items: {
          create: ujian.items.map((session: any) => ({
            name: session.name,
            description: session.description,
            duration: session.duration ?? 1800, // 30 menit // 1800
            questions: {
              create: session.questions.map((q: any) => ({
                type: q.type,
                imageUrl: q.imageUrl,
                txtField: q.txtField,
                question: q.question,
                options: q.options,
                answerIndex: q.answerIndex.map(String),
              }))
            }
          }))
        }
      }
    })
    console.log(`Created exam: ${exam.name}`)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
