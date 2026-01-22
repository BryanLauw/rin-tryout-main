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
import { FormEvent } from "react";
import { useLoading } from "@/context/LoadingContext";
import { login } from "@/be/action/user";

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
      alert("Akun ini sudah digunakan");
      setLoading(false)
    }
  }

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
              <div className="flex items-center">
                <Label>Kode Ujian</Label>
              </div>
              <Input
                name="kode_ujian"
                type="password"
                placeholder="Masukan Kode Ujian"
                required
              />
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
