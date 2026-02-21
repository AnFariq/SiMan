import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { siberAmanData } from "../data/DataSheet";
import { motion, AnimatePresence } from "framer-motion";
import LoadingSingkat from "../components/LoadingSingkat";
import { ArrowLeft, ShieldCheck, AlertOctagon, CheckCircle2, Clock } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContentPage() {
  const { id } = useParams();
  const [isIntroFinished, setIsIntroFinished] = useState(false);
  useEffect(() => {
    if (!isIntroFinished) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    const timer = setTimeout(() => {
      setIsIntroFinished(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [isIntroFinished]);

  const article = siberAmanData.find((item) => item.id === parseInt(id));

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <AlertOctagon className="w-12 h-12 text-slate-300 mb-4" />
        <p className="text-slate-500 font-medium">Artikel tidak ditemukan.</p>
        <Link to="/" className="mt-4 text-indigo-600 font-bold hover:underline">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  // Helper untuk mengumpulkan semua paragraf yang ada
  const paragraphs = [
    article["artikel-par1"],
    article["artikel-par2"],
    article["artikel-par3"],
    article["artikel-par4"],
    article["artikel-par5"]
  ].filter(Boolean); // Menghapus jika ada par yang kosong

  return (
    <>
      <AnimatePresence mode="wait">
        {!isIntroFinished && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[9999] bg-white"
          >
            <LoadingSingkat onComplete={() => setIsIntroFinished(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {isIntroFinished && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="min-h-screen bg-white flex flex-col font-sans"
        >
          <div className="min-h-screen bg-white flex flex-col font-sans">
            <Header />
            <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-12">

              {/* Navigasi Balik */}
              <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-slate-400 mb-8 hover:text-indigo-600 transition-colors group">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Kembali ke Katalog
              </Link>

              {/* Header Artikel */}
              <header className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${article.tingkat_risiko === "Critical" || article.tingkat_risiko === "High"
                      ? "bg-red-50 text-red-600 border-red-100"
                      : "bg-indigo-50 text-indigo-600 border-indigo-100"
                    }`}>
                    {article.tingkat_risiko} Risk
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                    <Clock className="w-3.5 h-3.5" /> {article.waktu_baca || "5 Menit"}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
                  {article.judul}
                </h1>
              </header>

              {/* Gambar Utama */}
              <div className="rounded-3xl overflow-hidden mb-12 shadow-xl border border-slate-100">
                <img
                  src={article.image}
                  alt={article.judul}
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>

              {/* Isi Artikel Per Paragraf */}
              <div className="prose prose-slate max-w-none">
                <div className="space-y-6">
                  {paragraphs.map((par, index) => (
                    <p key={index} className="text-slate-600 text-lg leading-relaxed">
                      {par}
                    </p>
                  ))}
                </div>

                {/* Solution Box - Mitigasi */}
                <section className="bg-slate-900 rounded-3xl p-8 sm:p-10 my-16 text-white relative shadow-2xl overflow-hidden">
                  {/* Aksen Background */}
                  <ShieldCheck className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 -rotate-12" />

                  <h2 className="text-2xl font-bold flex items-center gap-3 mb-8 relative z-10 text-white">
                    <AlertOctagon className="text-indigo-400 w-7 h-7" />
                    Langkah Mitigasi & Solusi
                  </h2>

                  <div className="grid gap-4 relative z-10">
                    {article.solusi.map((step, index) => (
                      <div key={index} className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                        <p className="text-slate-200 font-medium">{step}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </main>
            <Footer />
          </div>
        </motion.div>
      )}
    </>
  );
}