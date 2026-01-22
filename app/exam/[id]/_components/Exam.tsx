"use client"

import { useExam } from "../../../../context/ExamContext"
import EndExam from "./EndExam"
import ExamSession from "./ExamSession"
import RestSession from "./RestSession"
import StartExam from "./StartExam"

export default function Exam() {
  const {
    startedAt,
    endedAt,
    isRestSession,
  } = useExam()

  if (endedAt) return <EndExam />
  if (startedAt) {
    if (isRestSession) return <RestSession />
    else return <ExamSession />
  }
  return <StartExam />
}