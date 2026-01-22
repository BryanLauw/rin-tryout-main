"use client";

import { Button } from "@/components/ui/button";
import { useExam } from "@/context/ExamContext";

export default function StartExam() {
  const { startExam } = useExam();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Try Out Online SNBT
          </h1>
          <div className="space-y-4">
            <p className="text-gray-600">
              Pastikan Anda sudah siap sebelum memulai ujian. Setelah ujian dimulai,
              timer akan berjalan dan Anda tidak dapat menghentikan ujian.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-12 h-12 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
          </div>
        </div>

        <Button
          onClick={startExam}
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
        >
          Mulai Ujian
        </Button>
      </div>
    </div>
  );
}
