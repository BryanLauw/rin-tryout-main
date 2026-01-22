import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";
import Loading from "@/components/Loading";
import { LoadingProvider } from "@/context/LoadingContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rin Education SNBT",
  description: "Platform tryout SNBT online terpercaya dengan soal berkualitas, pembahasan lengkap, dan analisis hasil yang detail untuk persiapan ujian masuk PTN impian Anda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        <LoadingProvider>
          <Loading />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
