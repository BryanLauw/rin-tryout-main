"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { getFormData } from "@/lib/getFormData";
import { FormEvent, useState } from "react";
import { useLoading } from "@/context/LoadingContext";
import { login } from "@/be/action/user";
import { Eye, EyeOff } from "lucide-react";

export function LoginForm() {
  const router = useRouter();
  const { setLoading } = useLoading();
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    setLoading(true);
    e.preventDefault();
    const data = getFormData(e);
    const clientId = crypto.randomUUID();
    localStorage.setItem(data["kode_ujian"] + "-clientId", clientId);
    const { success, error } = await login(
      data["kode_ujian"],
      data["name"],
      data["phone"],
      clientId
    );
    if (success) router.push(`/exam/${data["kode_ujian"]}`);
    else {
      console.error("Login error:", error);
      alert("Terdapat kesalahan saat login. Pastikan data Anda benar.");
      setLoading(false)
    }
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Masukan Code Ujian yang Telah Anda Terima
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label>Nama Peserta</Label>
              <Input
                name="name"
                type="text"
                placeholder="Masukan Nama Peserta"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label>Nomor Telepon</Label>
              <Input
                name="phone"
                type="tel"
                placeholder="Masukan Nomor Telepon"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label>Kode Ujian</Label>

              <div className="relative">
                <Input
                  name="kode_ujian"
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukan Kode Ujian"
                  required
                  className="pr-10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
