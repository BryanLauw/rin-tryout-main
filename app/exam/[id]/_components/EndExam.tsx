"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useExam } from "@/context/ExamContext";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { AlertCircle, CheckCircle2, RefreshCw } from "lucide-react";

export default function EndExam() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const { submitExam } = useExam();

  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  const handleFinalSubmit = async () => {
    setStatus('loading');
    const success = await submitExam();
    if (success) {
      setStatus('success');
      toast.success("Jawaban berhasil diamankan di server.");
    } else {
      setStatus('error');
      toast.error("Gagal mengirim jawaban. Silakan coba lagi.");
    }
  };

  // Jalankan submit otomatis saat masuk halaman ini
  useEffect(() => {
    handleFinalSubmit();
  }, []);

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Email berhasil diperbarui");
    setOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Ujian Telah Selesai
          </h1>
          <p className="text-gray-600">
            {status === 'error' 
              ? "Ups! Ada kendala saat mengirim jawaban Anda." 
              : "Terima kasih telah menyelesaikan ujian. Hasil ujian akan diumumkan setelah semua peserta selesai mengerjakan ujian."}
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 mb-8">
          {/* Ikon Dinamis berdasarkan Status */}
          <div className={`w-24 h-24 rounded-full flex items-center justify-center transition-colors ${
            status === 'success' ? "bg-green-100" : status === 'error' ? "bg-red-100" : "bg-blue-100"
          }`}>
            {status === 'loading' && <RefreshCw className="w-12 h-12 text-blue-600 animate-spin" />}
            {status === 'success' && <CheckCircle2 className="w-12 h-12 text-green-600" />}
            {status === 'error' && <AlertCircle className="w-12 h-12 text-red-600" />}
          </div>

          {/* Tombol Kirim Ulang jika Error */}
          {status === 'error' && (
            <div className="flex flex-col gap-3 items-center">
              <p className="text-sm text-red-500 font-medium">Terdapat masalah ketika submit jawabanmu. Pastikan koneksi internet kamu stabil klik kirim ulang jawaban.</p>
              <Button 
                onClick={handleFinalSubmit}
                variant="destructive"
                className="flex gap-2 items-center shadow-lg"
              >
                <RefreshCw className="w-4 h-4" />
                Kirim Ulang Jawaban
              </Button>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            {status === 'success' 
              ? "Silakan meninggalkan halaman ini. Hasil ujian akan dikirimkan di grup WhatsApp."
              : "Mohon jangan tutup halaman ini sampai jawaban berhasil terkirim."}
          </p>
          
          {/* Tombol Ganti Email hanya aktif jika sudah sukses atau sebagai opsional */}
          <Button variant="outline" onClick={() => setOpen(true)} className="mt-4">
            Ganti Email Notifikasi
          </Button>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Ganti Email</DialogTitle>
              <DialogDescription>
                Masukkan alamat email baru untuk menerima hasil ujian
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmitEmail} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan email baru"
                  required
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit">Simpan</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}