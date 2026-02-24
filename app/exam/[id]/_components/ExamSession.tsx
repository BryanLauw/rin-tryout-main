"use client";

import { Button } from "@/components/ui/button";
import { useExam } from "@/context/ExamContext";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import MD from "@/components/Markdown";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";
import { formatTimeLeft } from "@/lib/time";

export default function ExamSession() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mustReturnFullscreen, setMustReturnFullscreen] = useState(false);
  const [hasEnteredFullscreen, setHasEnteredFullscreen] = useState(true);
  const { penalizeTime } = useExam();

  const hasEnteredFullscreenRef = useRef(false);
  const lastViolationRef = useRef(0);

  useEffect(() => {
    const firstFullscreen = () => {
      if (!document.fullscreenElement) {
        setHasEnteredFullscreen(false);
      }
    };
    firstFullscreen();
  }, []);

  useEffect(() => {
    const penalize = (reason: string) => {
      const now = Date.now();
      if (now - lastViolationRef.current < 2000) return;

      lastViolationRef.current = now;

      console.log("Violation:", reason);
      penalizeTime(300);
      setMustReturnFullscreen(true);
    };

    const checkFocusLoss = () => {
      if (
        hasEnteredFullscreenRef.current &&
        !document.hasFocus()
      ) {
        penalize("Kehilangan fokus (Alt+Tab)");
      }
    };

    const handleVisibility = () => {
      if (
        document.hidden &&
        hasEnteredFullscreenRef.current
      ) {
        penalize("Tab tidak aktif");
      }
    };

    const handleFullscreenChange = () => {
      if (document.fullscreenElement) {
        hasEnteredFullscreenRef.current = true;
        setHasEnteredFullscreen(true);
        setMustReturnFullscreen(false);
      } else {
        if (hasEnteredFullscreenRef.current) {
          penalize("Keluar fullscreen");
        } else {
          setMustReturnFullscreen(true);
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    // 🔥 Ini yang bikin Alt+Tab pasti kena
    window.addEventListener("blur", checkFocusLoss);
    window.addEventListener("focus", checkFocusLoss);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      window.removeEventListener("blur", checkFocusLoss);
      window.removeEventListener("focus", checkFocusLoss);
    };
  }, [penalizeTime]);

  return (
    <div className="min-h-screen bg-blue-50/50">
      <Navbar
        onToggleSidebar={() =>
          setIsSidebarOpen(!isSidebarOpen)
        }
      />

      <div className="flex flex-1 flex-col md:flex-row mt-14 relative">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <div className="flex-1 flex flex-col md:ms-72">
          <Question />
        </div>
      </div>

      {mustReturnFullscreen && (
        <div className="fixed inset-0 bg-black/80 z-[999] flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl text-center max-w-md">
            <h2 className="text-xl font-bold mb-4">
              Anda keluar dari mode fullscreen atau berpindah tab.
            </h2>

            <p className="mb-6 text-gray-600">
              Waktu telah dikurangi 5 menit.
              Klik tombol di bawah untuk melanjutkan ujian.
            </p>

            <Button
              onClick={async () => {
                try {
                  await document.documentElement.requestFullscreen();
                  setMustReturnFullscreen(false);
                } catch (err) {
                  console.error("Fullscreen gagal:", err);
                }
              }}
            >
              Kembali ke Fullscreen
            </Button>
          </div>
        </div>
      )}
      {!hasEnteredFullscreen && (
        <div className="fixed inset-0 bg-black/80 z-[999] flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl text-center max-w-md">
            <h2 className="text-xl font-bold mb-4">
              Mohon aktifkan mode fullscreen untuk memulai ujian.
            </h2>

            <p className="mb-6 text-gray-600">
              Klik tombol di bawah untuk masuk ke mode fullscreen dan memulai ujian.
            </p>

            <Button
              onClick={async () => {
                try {
                  await document.documentElement.requestFullscreen();
                  setHasEnteredFullscreen(true);
                } catch (err) {
                  alert("Fullscreen harus diaktifkan untuk memulai ujian.");
                  console.error("Fullscreen gagal:", err);
                }
              }}
            >
              Aktifkan Fullscreen
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Question() {
  const { activeQuestionData: q } = useExam();

  return (
    <div className="overflow-y-scroll relative">
      <div className="max-w-4xl mx-auto flex flex-col gap-4 md:gap-6 p-3 md:p-6">
        <div className="bg-white rounded-xl shadow-lg border p-2 md:p-4 hover:shadow-xl transition-shadow">
          <div className="p-2">
            {q.imageUrl && (
              <div className="mb-4 md:mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={q.imageUrl}
                  alt="img"
                  className="w-2/3 md:w-1/2 mx-auto rounded-lg shadow-md"
                />
              </div>
            )}
            {q.txtField && (
              <div className="font-light pl-4 border-l-2 border-blue-400 mb-6 min-h-[30px]">
                <div className="prose prose-lg prose-gray max-w-none leading-relaxed text-gray-700 text-justify">
                  <MD text={q.txtField} />
                </div>
              </div>
            )}
            <div className="prose prose-gray max-w-none">
              <MD text={q.question} />
            </div>
          </div>

          <hr className="my-4 -mx-4" />

          <Answer />
        </div>

        <NextButton />
      </div>
    </div>
  );
}

function Answer() {
  const { activeQuestionData: q } = useExam();


  if (q.type === "MULTIPLE_CHOICE") return <MultipleChoice />;

  if (q.type === "MULTIPLE_SELECTION") return <MultipleSelection />;

  if (q.type === "ESSAY") return <Essay />;
}

function MultipleChoice() {
  const { activeQuestionData: q, setAnswerInput, answerInput } = useExam();

  return (
    <RadioGroup
      onValueChange={(value) => setAnswerInput([value])}
      value={answerInput[0]}
      className="flex flex-col gap-3"
    >
      {q.options.map((option: string, index: number) => (
        <div
          className="flex items-center rounded-lg hover:bg-gray-50 transition-colors pl-3"
          key={index}
        >
          <RadioGroupItem value={option} id={option} />
          <Label className="cursor-pointer flex-1 p-3 -ml-7 pl-10" htmlFor={option}>
            <MD text={option} />
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}

function MultipleSelection() {
  const { activeQuestionData: q, setAnswerInput, answerInput } = useExam();
  return (
    <div className="flex flex-col gap-3">
      {q.options.map((option: string, index: number) => (
        <div
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          key={index}
        >
          <Checkbox
            value={option}
            id={option}
            checked={answerInput.includes(option)}
            onCheckedChange={(checked) => {
              if (checked) {
                setAnswerInput([...answerInput, option]);
              } else {
                setAnswerInput(answerInput.filter((item) => item !== option));
              }
            }}
          />
          <Label className="cursor-pointer flex-1" htmlFor={option}>
            <MD text={option} />
          </Label>
        </div>
      ))}
    </div>
  );
}

function Essay() {
  const { setAnswerInput, answerInput } = useExam();
  return (
    <Input
      type="text"
      className="w-full p-3"
      placeholder="Isi jawaban disini"
      value={answerInput[0] || ""}
      onChange={(e) => setAnswerInput([e.target.value])}
    />
  );
}

function NextButton() {
  const {
    activeQuestionIndex,
    maxQuestionIndex,
    nextQuestion,
    nextSession,
  } = useExam();

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        if (activeQuestionIndex < maxQuestionIndex) {
          nextQuestion();
        } else {
          nextSession();
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="flex gap-2 mt-2">
      {activeQuestionIndex < maxQuestionIndex ? (
        <Button onClick={nextQuestion}>Soal Selanjutnya</Button>
      ) : (
        <ButtonFinishTestOrSession />
      )}
    </div>
  );
}

function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const {
    exam,
    activeSessionIndex,
    activeQuestionIndex,
    setActiveQuestionIndex,
    maxQuestionIndex,
  } = useExam();
  const sessionNames = exam.items.map((session: {name: string}) => session.name);

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-20 md:hidden"
          onClick={onClose}
        />
      )}
      <div
        className={cn(
          "fixed md:w-72 w-full border-r p-4 border-b h-[calc(100vh-3.5rem)] overflow-y-auto top-14 bg-white z-30 transition-transform md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <h1 className="mb-3">Sub Test:</h1>
        <div className="flex flex-col gap-4 text-sm max-h-[calc(50vh-6rem)] overflow-y-auto overflow-x-hidden">
          {sessionNames.map((name: string, index: number) => (
            <div
              key={index}
              className={cn(
                "rounded bg-gray-100 py-2 px-4 truncate text-gray-600 min-h-9 cursor-not-allowed",
                activeSessionIndex === index &&
                  "border-2 border-primary text-black bg-white"
              )}
            >
              {name}
            </div>
          ))}
        </div>
        <hr className="my-4 -mx-4" />
        <h1 className="mb-3">Nomor Soal:</h1>
        <div className="grid grid-cols-10 md:grid-cols-5 gap-1.5 md:gap-2 overflow-y-auto overflow-x-hidden">
          {Array.from({ length: maxQuestionIndex + 1 }, (_, index) => (
            <button
              className={cn(
                "p-1 md:p-2 rounded bg-gray-100 flex items-center justify-center aspect-square w-full text-sm md:text-base text-gray-600",
                activeQuestionIndex === index &&
                  "text-black bg-white border-2 border-primary"
              )}
              key={index}
              onMouseDown={() => setActiveQuestionIndex(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <ButtonFinishTestOrSession btnClassName="w-full mt-4" />
      </div>
    </>
  );
}

function Navbar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  const { activeQuestionIndex, maxQuestionIndex } = useExam();

  return (
    <div className="border-b flex justify-between p-4 fixed bg-white top-0 w-full z-30 items-center h-14">
      <div className="flex-1 flex items-center gap-2">
        <button
          onClick={onToggleSidebar}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <h1 className="md:block hidden">Rin Education</h1>
      </div>
      <div>
        <Timer />
      </div>
      <div className="flex-1 flex justify-end text-sm md:text-base">
        <p>
          Soal No. <b>{activeQuestionIndex + 1}</b> dari {maxQuestionIndex + 1}
        </p>
      </div>
    </div>
  );
}

export function Timer() {
  const { timeLeft, nextSession } = useExam();
  useEffect(() => {
    if (timeLeft <= 0) {
      nextSession();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  return (
    <p
      className={cn(
        "font-mono bg-primary text-white px-2 text-lg rounded-md",
        timeLeft < 300 && "animate-pulse"
      )}
    >
      {formatTimeLeft(timeLeft)}
    </p>
  );
}

function ButtonFinishTestOrSession({
  btnClassName,
}: {
  btnClassName?: string;
}) {
  const { nextSession, activeSessionIndex, maxSessionIndex } = useExam();
  const textFinishTest =
    activeSessionIndex === maxSessionIndex ? "Selesai" : "Selesai Sub Test";
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={btnClassName}>{textFinishTest}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{textFinishTest}</DialogTitle>
          <DialogDescription className="text-gray-700 pt-2">
            Pastikan jawaban anda sudah benar. Manfaatkan waktu yang tersisa
            untuk memeriksa kembali jawaban anda.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <div className="flex gap-2">
              <Button type="button" variant="outline">
                Kembali ke soal
              </Button>
              <Button type="button" onClick={nextSession}>
                {textFinishTest}
              </Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
