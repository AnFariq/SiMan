import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText, Scale, Info } from "lucide-react";

export default function PrivacyPolicy() {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-indigo-100">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
            Legal Documentation
          </motion.div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Pusat <span className="text-indigo-600">Privasi & Legal</span>
          </h1>
          <p className="text-slate-500 font-medium">
            Komitmen kami untuk melindungi data Anda dan transparansi penggunaan platform SiberAman.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex p-1 bg-slate-100 rounded-2xl mb-12">
          <button
            onClick={() => setActiveTab("privacy")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${
              activeTab === "privacy" 
              ? "bg-white text-indigo-600 shadow-sm" 
              : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <Lock className="w-4 h-4" /> Kebijakan Privasi
          </button>
          <button
            onClick={() => setActiveTab("terms")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${
              activeTab === "terms" 
              ? "bg-white text-indigo-600 shadow-sm" 
              : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <Scale className="w-4 h-4" /> Syarat & Ketentuan
          </button>
        </div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          {activeTab === "privacy" ? (
            <motion.div
              key="privacy"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="prose prose-slate max-w-none"
            >
              <section className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <Eye className="text-indigo-600" /> 1. Pengumpulan Informasi
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    SiberAman mengumpulkan informasi minimal untuk meningkatkan pengalaman belajar Anda. Informasi yang kami kumpulkan mencakup data analitik anonim (seperti jenis browser dan lama kunjungan) serta informasi yang Anda berikan secara sukarela melalui formulir kontak.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">2. Penggunaan Data</h2>
                  <p className="text-slate-600 leading-relaxed">
                    Data yang dikumpulkan digunakan semata-mata untuk:
                  </p>
                  <ul className="list-disc pl-6 text-slate-600 space-y-2 font-medium">
                    <li>Menyediakan konten edukasi yang relevan dengan tren ancaman siber.</li>
                    <li>Menganalisis performa website untuk perbaikan teknis.</li>
                    <li>Menanggapi pertanyaan atau masukan yang Anda kirimkan.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">3. Keamanan Data</h2>
                  <p className="text-slate-600 leading-relaxed">
                    Sebagai platform keamanan siber, kami menerapkan standar enkripsi SSL/TLS untuk melindungi transmisi data. Kami tidak pernah memperjualbelikan data pengguna kepada pihak ketiga.
                  </p>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="terms"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="prose prose-slate max-w-none"
            >
              <section className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="text-indigo-600" /> 1. Penerimaan Ketentuan
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Dengan mengakses SiberAman, Anda dianggap telah membaca dan menyetujui seluruh ketentuan layanan ini. Ketentuan ini berlaku bagi seluruh pengunjung website tanpa terkecuali.
                  </p>
                </div>

                <div className="p-6 bg-indigo-50 border border-indigo-100 rounded-3xl">
                  <h3 className="text-lg font-bold text-indigo-900 mb-3 flex items-center gap-2">
                    <Info className="w-5 h-5" /> Penggunaan yang Diperbolehkan
                  </h3>
                  <p className="text-indigo-800 text-sm leading-relaxed">
                    Seluruh konten di SiberAman ditujukan untuk tujuan <span className="font-bold">EDUKASI SAJA</span>. Penyalahgunaan informasi dalam website ini untuk kegiatan ilegal atau merusak sistem pihak lain adalah pelanggaran hukum berat dan di luar tanggung jawab tim Devitra.id.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">2. Kekayaan Intelektual</h2>
                  <p className="text-slate-600 leading-relaxed">
                    Seluruh teks, kode, desain grafis, dan aset visual dalam website ini dimiliki oleh tim <span className="font-bold">Devitra.id</span>. Dilarang menduplikasi atau mendistribusikan ulang konten tanpa mencantumkan sumber asli SiberAman.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">3. Batasan Tanggung Jawab</h2>
                  <p className="text-slate-600 leading-relaxed">
                    Kami berusaha memberikan informasi yang akurat, namun teknologi siber berkembang sangat cepat. Tim Devitra.id tidak bertanggung jawab atas kerugian yang timbul akibat ketidakakuratan data atau kelalaian pengguna dalam menerapkan mitigasi keamanan.
                  </p>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Update Date Footer */}
        <div className="mt-20 pt-8 border-t border-slate-100 text-center">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            Terakhir Diperbarui: 21 Februari 2026
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}