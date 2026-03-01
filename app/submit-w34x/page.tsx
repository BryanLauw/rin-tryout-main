"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ExamProvider, useExam } from "@/context/ExamContext"; // Import keduanya
import { fetchExamByUserId } from "@/be/fetch/question";
import { postAnswer } from "@/be/action/exam";

// 1. Ini komponen "Internal" yang akan memakai useExam
function AdminSubmitAction() {
  const { getFinishAnswer, userId } = useExam();

  const handleProcess = () => {
    const rawData = localStorage.getItem(`${userId}-answer`);

    if (!rawData) {
      alert(`Data dengan key [${userId}-answer] tidak ditemukan di LocalStorage browser ini.`);
      return;
    }

    try {
      const parsedAnswers = JSON.parse(rawData);
      const finishAnswer = getFinishAnswer(parsedAnswers);

      console.log("Hasil konversi skor:", finishAnswer);
      postAnswer(userId, finishAnswer);
      alert("Submit darurat berhasil dikirim ke database!");
    } catch (e) {
      console.error(e);
      alert("Gagal memproses data. Pastikan format JSON di LocalStorage benar.");
    }
  };

  return (
    <div className="p-4 border-2 border-dashed border-blue-200 rounded-lg bg-blue-50">
      <p className="text-sm font-medium mb-3 text-blue-700">
        Data soal untuk <b>{userId}</b> berhasil dimuat.
      </p>
      <Button onClick={handleProcess} className="w-full">
        Proses & Kirim Jawaban
      </Button>
    </div>
  );
}

// 2. Ini Komponen Utama Page
export default function SubmitPage() {
  const [kodeUjian, setKodeUjian] = useState("");
  const [examData, setExamData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckID = async () => {
    if (!kodeUjian) return;
    setIsLoading(true);
    try {
        console.log("Mengecek ID Ujian:", kodeUjian);
      const data = await fetchExamByUserId(kodeUjian);
      setExamData(data);
    } catch (err) {
        console.error("Error fetching exam data:", err);
      alert("ID Ujian tidak ditemukan di database!");
      setExamData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold border-b pb-2">Submit Darurat Admin</h1>
      
      <div className="space-y-2">
        <Label>Masukkan Kode Ujian / User ID</Label>
        <div className="flex gap-2">
          <Input 
            value={kodeUjian} 
            onChange={(e) => setKodeUjian(e.target.value)} 
            placeholder="Kode Ujian yang diberikan kepada Anda"
          />
          <Button onClick={handleCheckID} disabled={isLoading}>
            {isLoading ? "Checking..." : "Cek Data Soal"}
          </Button>
        </div>
      </div>

      {/* RENDER PROVIDER HANYA JIKA EXAM DATA SUDAH ADA */}
      {examData && (
        <ExamProvider exam={examData} userId={kodeUjian}>
          <AdminSubmitAction />
        </ExamProvider>
      )}
    </div>
  );
}