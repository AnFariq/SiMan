import React, { useState } from "react";

export default function Home() {
  const [quizResult, setQuizResult] = useState(null);

  const cards = [
    {
      title: "Apa itu Phishing?",
      desc: "Penipuan yang menyamar sebagai pihak resmi untuk mencuri data seperti password, OTP, dan informasi bank lewat link palsu.",
      img: "/phishing.png",
    },
    {
      title: "Bahaya Ransomware",
      desc: "Virus yang mengunci semua file dan meminta tebusan. Tanpa backup, data bisa hilang permanen.",
      img: "/ransomware.png",
    },
    {
      title: "Pentingnya 2FA",
      desc: "Lapisan keamanan tambahan berupa kode verifikasi sehingga akun tetap aman walaupun password bocor.",
      img: "/2fa.png",
    },
  ];

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-indigo-600 text-lg">SiAman</h1>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#hero" className="hover:text-indigo-600">Beranda</a>
            <a href="#edukasi" className="hover:text-indigo-600">Edukasi</a>
            <a href="#tips" className="hover:text-indigo-600">Tips</a>
            <a href="#quiz" className="hover:text-indigo-600">Quiz</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="text-center py-24 px-6 bg-gradient-to-b from-white to-indigo-50">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
          Jangan Sampai Kamu Jadi{" "}
          <span className="text-indigo-600">Korban Scam Berikutnya</span>
        </h2>

        <p className="max-w-2xl mx-auto text-slate-500 text-lg mb-10">
          Pelajari cara mengenali phishing, ransomware, dan melindungi akunmu sebelum semuanya terlambat.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg">
            Mulai Belajar
          </button>

          <button className="border border-slate-300 px-8 py-3 rounded-full font-semibold hover:bg-slate-100">
            Cek Seberapa Aman Kamu
          </button>
        </div>
      </section>

      {/* EDUKASI */}
      <section id="edukasi" className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center text-indigo-600 mb-14">
          Kenali Ancaman Digital
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white border rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
              <img src={card.img} alt={card.title} className="w-full h-48 object-cover" />

              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TIPS */}
      <section id="tips" className="bg-indigo-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-indigo-600 mb-12">
            3 Langkah Supaya Tidak Kena Scam
          </h3>

          <div className="grid md:grid-cols-3 gap-6 text-slate-600">
            <div className="bg-white p-6 rounded-xl shadow">
              Jangan klik link mencurigakan
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Aktifkan 2FA di semua akun penting
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              Selalu cek ulang informasi
            </div>
          </div>
        </div>
      </section>

      {/* QUIZ */}
      <section id="quiz" className="py-20 px-6 text-center">
        <h3 className="text-3xl font-bold text-indigo-600 mb-6">
          Uji Pengetahuan Kamu
        </h3>

        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Kamu menerima email dari "Bank" yang meminta reset password lewat link aneh. Ini aman atau scam?
        </p>

        <div className="flex justify-center gap-4">
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
          <div className="mt-6 text-lg font-semibold">
            {quizResult === "benar"
              ? "Benar! Itu adalah phishing."
              : "Salah. Itu phishing, bukan aman."}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-indigo-50 to-white">
        <h3 className="text-3xl font-bold text-indigo-600 mb-6">
          Lindungi Dirimu Sekarang
        </h3>

        <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 shadow-lg">
          Mulai Sekarang
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-100 text-center py-6 text-sm text-slate-500">
        © 2026 SiAman - Edukasi Siber Aman
      </footer>
    </div>
  );
}