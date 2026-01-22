"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ExamType } from "@/be/fetch/question";
import { useDebounceValue, useLocalStorage } from "usehooks-ts";
import { formatTimeLeft, getNow } from "@/lib/time";
import dayjs from "dayjs";
import { useDebounce } from "ahooks";
import { serialize } from "v8";
import { areArrayHaveSameValue } from "@/lib/areArrayHaveSameValue";
import { postAnswer } from "@/be/action/exam";

const REST_DURATION = 300;

function useContextValue(exam: ExamType, userId: string) {
  const [startedAt, setStartedAt] = useLocalStorage<string | null>(
    `${userId}-startedAt`,
    null
  );
  const [endedAt, setEndedAt] = useLocalStorage<string | null>(
    `${userId}-endedAt`,
    null
  );
  const [activeSessionIndex, setActiveSessionIndex] = useLocalStorage(
    `${userId}-activeSessionIndex`,
    0
  );
  const [isRestSession, setIsRestSession] = useLocalStorage(
    `${userId}-isRestSession`,
    false
  );
  const [activeQuestionIndex, setActiveQuestionIndex] = useLocalStorage(
    `${userId}-activeQuestionIndex`,
    0
  );
  const [sessionEndedAt, setSessionEndedAt] = useLocalStorage<number | null>(
    `${userId}-sessionEndedAt`,
    null
  );

  const [answerInput, setAnswerInput] = useState<string[]>([]);

  const [answerLS, setAnswerLS] = useLocalStorage<string[][][]>(
    `${userId}-answer`,
    []
  );

  /**
   * Timer
   */
  const [now, setNow] = useState(getNow());
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(getNow());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [timeLeft, setTimeLeft] = useState(0);
  useEffect(() => {
    setTimeLeft(dayjs(sessionEndedAt).diff(dayjs(), "seconds").valueOf());
  }, [now]);

  /**
   * Session
   */

  const activeSessionData = useMemo(() => {
    return exam.items[activeSessionIndex];
  }, [exam.items, activeSessionIndex]);

  const maxSessionIndex = useMemo(() => {
    return exam.items.length - 1;
  }, [exam.items]);

  const activeQuestionData = useMemo(() => {
    return activeSessionData.questions[activeQuestionIndex];
  }, [activeSessionData, activeQuestionIndex]);

  const maxQuestionIndex = useMemo(() => {
    return activeSessionData.questions.length - 1;
  }, [activeSessionData]);

  const startExam = () => {
    setStartedAt(getNow());
    setActiveSessionIndex(0);
    setActiveQuestionIndex(0);
    setIsRestSession(false);
    setSessionEndedAt(
      dayjs().add(activeSessionData.duration, "seconds").valueOf()
    );
    setTimeLeft(activeSessionData.duration);
    setAnswerLS(exam.items.map((session: any) => session.questions.map(() => [])));
  };

  const finishExam = () => {
    setEndedAt(getNow());
    setActiveSessionIndex(0);
    setActiveQuestionIndex(0);
    setIsRestSession(false);
  };

  const prevQuestion = () => {
    if (activeQuestionIndex > 0) {
      setActiveQuestionIndex(activeQuestionIndex - 1);
    }
  };

  const nextSession = () => {
    saveAnswer();
    if (activeSessionIndex < maxSessionIndex) {
      if (isRestSession) {
        setIsRestSession(false);
        setActiveSessionIndex(activeSessionIndex + 1);
        setActiveQuestionIndex(0);
        setSessionEndedAt(
          dayjs().add(activeSessionData.duration, "seconds").valueOf()
        );
        setTimeLeft(activeSessionData.duration);
      } else {
        setIsRestSession(true);
        setSessionEndedAt(dayjs().add(REST_DURATION, "seconds").valueOf());
        setTimeLeft(REST_DURATION);
      }
    } else {
      const finishAnswer = getFinishAnswer(answerLS);
      postAnswer(userId, finishAnswer);
      finishExam();
    }
  };

  function getFinishAnswer(answer: string[][][]) {
    return answer
      ? answer.map((sessionAnswers: string[][], sessionIndex: number) =>
          sessionAnswers.map((answer: string[], questionIndex: number) => {
            const kunciJawaban =
              exam.items[sessionIndex].questions[questionIndex].answerIndex;
            const mappedKunciJawaban = kunciJawaban.map((k: string) => {
              if (typeof Number(k) === "number" && !isNaN(Number(k)))
                return exam.items[sessionIndex].questions[questionIndex]
                  .options[Number(k)];
            });
            return areArrayHaveSameValue(answer, mappedKunciJawaban);
          })
        )
      : [];
  }

  /**
   * Answer
   */

  function saveAnswer() {
    const newAnswer = [...answerLS];
    if (!newAnswer[activeSessionIndex]) {
      newAnswer[activeSessionIndex] = [];
    }
    newAnswer[activeSessionIndex][activeQuestionIndex] = answerInput;
    setAnswerLS(newAnswer);
  }

  const nextQuestion = () => {
    if (activeQuestionIndex < maxQuestionIndex) {
      setActiveQuestionIndex(activeQuestionIndex + 1);
      saveAnswer();
    } else {
      saveAnswer();
      setIsRestSession(true);
      setActiveSessionIndex(0);
    }
  };

  const getAnswer = useCallback(() => {
    if (!answerLS[activeSessionIndex]) {
      return [""];
    }
    return answerLS[activeSessionIndex][activeQuestionIndex] || [""];
  }, [answerLS, activeSessionIndex, activeQuestionIndex]);

  useEffect(() => {
    setAnswerInput(getAnswer());
  }, [activeQuestionIndex]);

  // assign asnwer to LS on debounce
  useEffect(() => {
    saveAnswer();
  }, [answerInput]);

  // assign asnwer from LS on mount
  useEffect(() => {
    setAnswerInput(getAnswer());
  }, []);

  return {
    setAnswerLS,
    answerLS,
    answerInput,
    setAnswerInput,
    timeLeft,
    exam,
    userId,
    startedAt,
    setStartedAt,
    endedAt,
    setEndedAt,
    activeSessionIndex,
    setActiveSessionIndex,
    isRestSession,
    setIsRestSession,
    activeSessionData,
    activeQuestionIndex,
    setActiveQuestionIndex,
    activeQuestionData,
    nextQuestion,
    nextSession,
    prevQuestion,
    maxQuestionIndex,
    maxSessionIndex,
    startExam,
    finishExam,
    getAnswer,
  };
}

type T = ReturnType<typeof useContextValue>;
const Context = createContext<T>({} as T);
export const ExamProvider = ({
  children,
  exam,
  userId,
}: {
  children: React.ReactNode;
  exam: ExamType;
  userId: string;
}) => (
  <Context.Provider value={useContextValue(exam, userId)}>
    {children}
  </Context.Provider>
);
export const useExam = () => useContext(Context);
