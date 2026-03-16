import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText, Scale, Info } from "lucide-react";

export default function PrivacyPolicy() {
    const [activeTab, setActiveTab] = useState("privacy");

    return (
        <div className="min-h-screen bg-[#080F1E] text-slate-100 font-sans relative overflow-hidden">
            <div
                className="fixed inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,160,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,160,255,0.04) 1px, transparent 1px)`,
                    backgroundSize: '52px 52px'
                }}
            />
            <div
                className="fixed -top-64 -right-48 w-[700px] h-[700px] rounded-full pointer-events-none z-0"
                style={{ background: 'radial-gradient(circle, rgba(0,80,255,0.13) 0%, transparent 65%)' }}
            />
            <div
                className="fixed -bottom-32 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
                style={{ background: 'radial-gradient(circle, rgba(0,200,255,0.07) 0%, transparent 65%)' }}
            />

            <Header />

            <main className="relative z-10 max-w-3xl mx-auto w-full px-6 py-28">
                <div className="text-center mb-14">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-[11px] font-medium tracking-widest uppercase text-cyan-400 border border-cyan-500/25 bg-cyan-500/[0.08] mb-8"
                    >
                        <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        Legal Documentation
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-50 mb-5 leading-tight"
                    >
                        Pusat{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Privasi & Legal
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-400 font-light text-lg leading-relaxed"
                    >
                        Komitmen kami untuk melindungi data Anda dan transparansi penggunaan platform SiberAman.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex p-1 bg-white/[0.04] border border-white/[0.07] rounded-2xl mb-12"
                >
                    <TabButton
                        active={activeTab === "privacy"}
                        onClick={() => setActiveTab("privacy")}
                        icon={<Lock className="w-4 h-4" />}
                        label="Kebijakan Privasi"
                    />
                    <TabButton
                        active={activeTab === "terms"}
                        onClick={() => setActiveTab("terms")}
                        icon={<Scale className="w-4 h-4" />}
                        label="Syarat & Ketentuan"
                    />
                </motion.div>

                <AnimatePresence mode="wait">
                    {activeTab === "privacy" ? (
                        <motion.div
                            key="privacy"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.35 }}
                            className="space-y-6"
                        >
                            <ContentCard
                                icon={<Eye className="w-5 h-5 text-cyan-400" />}
                                title="1. Pengumpulan Informasi"
                            >
                                <p className="text-slate-400 leading-relaxed font-light text-[15px]">
                                    SiberAman mengumpulkan informasi minimal untuk meningkatkan pengalaman belajar Anda. Informasi yang kami kumpulkan mencakup data analitik anonim (seperti jenis browser dan lama kunjungan) serta informasi yang Anda berikan secara sukarela melalui formulir kontak.
                                </p>
                            </ContentCard>

                            <ContentCard title="2. Penggunaan Data">
                                <p className="text-slate-400 leading-relaxed font-light text-[15px] mb-4">
                                    Data yang dikumpulkan digunakan semata-mata untuk:
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Menyediakan konten edukasi yang relevan dengan tren ancaman siber.",
                                        "Menganalisis performa website untuk perbaikan teknis.",
                                        "Menanggapi pertanyaan atau masukan yang Anda kirimkan.",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-[15px] text-slate-400 font-light">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </ContentCard>

                            <ContentCard title="3. Keamanan Data">
                                <p className="text-slate-400 leading-relaxed font-light text-[15px]">
                                    Sebagai platform keamanan siber, kami menerapkan standar enkripsi SSL/TLS untuk melindungi transmisi data. Kami tidak pernah memperjualbelikan data pengguna kepada pihak ketiga.
                                </p>
                            </ContentCard>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="terms"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.35 }}
                            className="space-y-6"
                        >
                            <ContentCard
                                icon={<FileText className="w-5 h-5 text-cyan-400" />}
                                title="1. Penerimaan Ketentuan"
                            >
                                <p className="text-slate-400 leading-relaxed font-light text-[15px]">
                                    Dengan mengakses SiberAman, Anda dianggap telah membaca dan menyetujui seluruh ketentuan layanan ini. Ketentuan ini berlaku bagi seluruh pengunjung website tanpa terkecuali.
                                </p>
                            </ContentCard>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="relative p-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-blue-950/40 to-cyan-950/20 overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Info className="w-4 h-4 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-slate-100 mb-2 tracking-tight">
                                            Penggunaan yang Diperbolehkan
                                        </h3>
                                        <p className="text-slate-400 text-[14px] leading-relaxed font-light">
                                            Seluruh konten di SiberAman ditujukan untuk tujuan{' '}
                                            <span className="text-cyan-400 font-medium">EDUKASI SAJA</span>.
                                            Penyalahgunaan informasi dalam website ini untuk kegiatan ilegal atau merusak sistem pihak lain
                                            adalah pelanggaran hukum berat dan di luar tanggung jawab tim Devitra.id.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <ContentCard title="2. Kekayaan Intelektual">
                                <p className="text-slate-400 leading-relaxed font-light text-[15px]">
                                    Seluruh teks, kode, desain grafis, dan aset visual dalam website ini dimiliki oleh tim{' '}
                                    <span className="text-slate-200 font-medium">Devitra.id</span>.
                                    Dilarang menduplikasi atau mendistribusikan ulang konten tanpa mencantumkan sumber asli SiberAman.
                                </p>
                            </ContentCard>

                            <ContentCard title="3. Batasan Tanggung Jawab">
                                <p className="text-slate-400 leading-relaxed font-light text-[15px]">
                                    Kami berusaha memberikan informasi yang akurat, namun teknologi siber berkembang sangat cepat. Tim Devitra.id tidak bertanggung jawab atas kerugian yang timbul akibat ketidakakuratan data atau kelalaian pengguna dalam menerapkan mitigasi keamanan.
                                </p>
                            </ContentCard>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-20 pt-8 border-t border-white/[0.07] text-center">
                    <p className="text-slate-600 text-[11px] font-medium uppercase tracking-widest">
                        Terakhir Diperbarui: 21 Februari 2026
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}

function TabButton({ active, onClick, icon, label }) {
    return (
        <button
            onClick={onClick}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all duration-300
                ${active
                    ? "bg-gradient-to-r from-blue-600/80 to-cyan-500/80 text-white shadow-[0_0_20px_rgba(0,114,255,0.25)] border border-cyan-500/20"
                    : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.04]"
                }`}
        >
            {icon}
            {label}
        </button>
    );
}

function ContentCard({ icon, title, children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative p-7 rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:border-cyan-500/20 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
        >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex items-center gap-3 mb-4">
                {icon && (
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center flex-shrink-0">
                        {icon}
                    </div>
                )}
                <h2 className="text-[17px] font-semibold text-slate-100 tracking-tight">
                    {title}
                </h2>
            </div>

            <div className={icon ? "" : ""}>{children}</div>
        </motion.div>
    );
}