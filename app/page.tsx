import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">Rin Education</div>
          <Link href="/login">
            <Button>Masuk</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                Persiapkan SNBT Anda Bersama Kami
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Tryout online SNBT terlengkap dengan soal-soal berkualitas dan pembahasan detail
              </p>
              <Link href="/login">
                <Button size="lg" className="text-lg px-8">
                  Mulai Tryout Sekarang
                </Button>
              </Link>
            </div>
            <div className="flex-1">
              <svg
                className="w-full max-w-lg mx-auto"
                viewBox="0 0 500 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background */}
                <rect width="500" height="400" />
                
                {/* Student figure */}
                <path
                  d="M200 150C200 130 220 120 250 120C280 120 300 130 300 150V250H200V150Z"
                  fill="#3B82F6"
                />
                <circle cx="250" cy="100" r="30" fill="#3B82F6" />
                
                {/* Desk */}
                <path
                  d="M150 250H350V270C350 270 300 280 250 280C200 280 150 270 150 270V250Z"
                  fill="#1D4ED8"
                />
                
                {/* Books stack */}
                <rect x="220" y="200" width="60" height="10" fill="#EF4444" />
                <rect x="225" y="190" width="50" height="10" fill="#F59E0B" />
                <rect x="230" y="180" width="40" height="10" fill="#10B981" />
                
                {/* Floating elements */}
                <circle cx="150" cy="100" r="20" fill="#F59E0B" opacity="0.6" />
                <circle cx="350" cy="120" r="15" fill="#10B981" opacity="0.6" />
                <circle cx="180" cy="300" r="25" fill="#EF4444" opacity="0.6" />
                <circle cx="320" cy="280" r="18" fill="#3B82F6" opacity="0.6" />
                
                {/* Mathematical symbols */}
                <text x="140" y="90" fill="#1D4ED8" fontSize="24">∑</text>
                <text x="330" y="110" fill="#1D4ED8" fontSize="24">π</text>
                <text x="170" y="280" fill="#1D4ED8" fontSize="24">∫</text>
                <text x="310" y="260" fill="#1D4ED8" fontSize="24">√</text>
                
                {/* Decorative lines */}
                <path
                  d="M100 50C150 80 200 50 250 80C300 110 350 80 400 110"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  d="M100 350C150 320 200 350 250 320C300 290 350 320 400 290"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Kenapa Memilih Rin Education?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500 text-white flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Siap Menghadapi SNBT?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Bergabung sekarang dan tingkatkan peluang Anda masuk PTN favorit!
          </p>
          <Link href="/login">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 bg-white text-blue-600 hover:bg-blue-50"
            >
              Daftar Sekarang
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Rin Education</h3>
              <p>Platform tryout online terpercaya untuk persiapan SNBT Anda</p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Kontak</h3>
              <p>Email: rin.education0@gmail.com</p>
              <p>Phone: 0822-1938-8457</p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Ikuti Kami</h3>
              <div className="flex gap-4">
                <a href="https://www.youtube.com/@rineducation" className="hover:text-white">Youtube</a>
                <a href="https://www.instagram.com/rineducation/" className="hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; 2025 Rin Education. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: (
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
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),
    title: "Soal Berkualitas",
    description: "Dikembangkan oleh pengajar yang berpengalaman sesuai standar SNBT terbaru"
  },
  {
    icon: (
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
          d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
    title: "Pembahasan Lengkap",
    description: "Setiap soal dilengkapi pembahasan detail dan mudah dipahami"
  },
  {
    icon: (
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
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
        />
      </svg>
    ),
    title: "Analisis Hasil",
    description: "Dapatkan analisis detail kemampuan Anda di setiap bidang"
  }
];
