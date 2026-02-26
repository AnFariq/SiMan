import React, { useState } from "react";
import { Shield, Lock, Zap, ArrowRight } from "lucide-react";

export default function Home() {
  const [quizResult, setQuizResult] = useState(null);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* HERO */}
      <section className="px-6 py-24 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6">
          Jangan Sampai Kamu Jadi{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
            Korban Scam Berikutnya
          </span>
        </h1>

        <p className="text-slate-500 max-w-xl mx-auto text-lg mb-8">
          Pelajari cara mengenali phishing, ransomware, dan melindungi akunmu
          sebelum semuanya terlambat.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition">
            Mulai Belajar <ArrowRight className="inline ml-2 w-4 h-4" />
          </button>
          <button className="px-8 py-3 border border-slate-300 rounded-full text-slate-600 hover:bg-slate-100 transition">
            Cek Seberapa Aman Kamu
          </button>
        </div>
      </section>

      {/* EDUKASI CARD */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-600">
          Kenali Ancaman Digital
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <Card
            icon={<Shield className="w-6 h-6 text-indigo-600" />}
            title="Apa itu Phishing?"
            desc="Penipuan yang menyamar sebagai pihak resmi untuk mencuri username, password, dan data pribadi kamu."
          />

          <Card
            icon={<Zap className="w-6 h-6 text-indigo-600" />}
            title="Bahaya Ransomware"
            desc="Virus yang mengunci file kamu dan meminta uang tebusan agar data bisa diakses kembali."
          />

          <Card
            icon={<Lock className="w-6 h-6 text-indigo-600" />}
            title="Pentingnya 2FA"
            desc="Lapisan keamanan tambahan agar akun tetap aman meskipun password kamu bocor."
          />

        </div>
      </section>

      {/* LANGKAH AMAN */}
      <section className="bg-slate-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-indigo-600">
          3 Langkah Supaya Tidak Kena Scam
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <Step number="1" title="Cek Sumber Link">
            Jangan pernah klik link dari pesan mencurigakan atau tidak dikenal.
          </Step>

          <Step number="2" title="Aktifkan 2FA">
            Tambahkan verifikasi ganda di semua akun penting kamu.
          </Step>

          <Step number="3" title="Jangan Panik">
            Scam selalu memancing emosi. Tenang dan cek dulu sebelum bertindak.
          </Step>

        </div>
      </section>

      {/* QUIZ INTERAKTIF */}
      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600">
          Uji Pengetahuan Kamu
        </h2>

        <p className="text-slate-500 mb-8">
          Kamu menerima email dari “Bank” yang meminta reset password lewat link aneh. Ini aman atau scam?
        </p>

        <div className="flex justify-center gap-6">
          <button
            onClick={() => setQuizResult("salah")}
            className="px-6 py-3 border rounded-full hover:bg-slate-100"
          >
            Aman
          </button>

          <button
            onClick={() => setQuizResult("benar")}
            className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
          >
            Scam
          </button>
        </div>

        {quizResult && (
          <p className="mt-6 font-semibold">
            {quizResult === "benar"
              ? "Benar! Itu adalah contoh phishing."
              : "Salah. Itu adalah phishing, bukan pesan aman."}
          </p>
        )}
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Lindungi Dirimu Sekarang
        </h2>
        <p className="mb-6 text-indigo-100">
          Jangan tunggu sampai jadi korban. Mulai belajar keamanan digital hari ini.
        </p>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-100">
          Mulai Sekarang
        </button>
      </section>

    </div>
  );
}

/* COMPONENT CARD */
function Card({ icon, title, desc }) {
  return (
    <div className="p-6 border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition text-left">
      <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-slate-500 text-sm">{desc}</p>
    </div>
  );
}

/* COMPONENT STEP */
function Step({ number, title, children }) {
  return (
    <div>
      <div className="text-4xl font-extrabold text-indigo-600 mb-3">{number}</div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-slate-500 text-sm">{children}</p>
    </div>
  );
}