import { Button } from "@/components/ui/button";
import { useExam } from "../../../../context/ExamContext";
import { useEffect, useMemo } from "react";
import { formatTimeLeft } from "@/lib/time";

export default function RestSession() {
  const { nextSession, activeSessionIndex, timeLeft, exam } =
    useExam();

  const nextSessionName = useMemo(() => {
    return exam.items[activeSessionIndex + 1].name;
  }, [activeSessionIndex, exam.items]);

  useEffect(() => {
    if (timeLeft <= 0) {
      nextSession();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Break Time</h1>
          <p className="text-gray-600">
            Silakan beristirahat sejenak sebelum melanjutkan ke sesi berikutnya.
            Manfaatkan waktu ini untuk menenangkan pikiran dan mempersiapkan
            diri Anda.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="w-48 h-48 rounded-full bg-blue-100 flex items-center justify-center">
            <div className="font-mono text-4xl text-blue-500">
              {formatTimeLeft(timeLeft)}
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-4">
          Sub Test Selanjutnya: <span className="font-semibold">{nextSessionName}</span>
        </p>

        <Button
          onClick={nextSession}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
        >
          Mulai
        </Button>
      </div>
    </div>
  );
}
