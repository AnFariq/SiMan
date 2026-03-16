import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { siberAmanData } from "../data/DataSheet";
import { ArrowRight, ShieldAlert, BookOpen, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const riskColor = {
    high:     "text-red-400 bg-red-500/10 border-red-500/20",
    medium:   "text-amber-400 bg-amber-500/10 border-amber-500/20",
    low:      "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    critical: "text-rose-400 bg-rose-500/10 border-rose-500/20",
};

export default function CategoryPage({ targetCategory, description }) {
    const filteredData = siberAmanData.filter(
        (item) => item.kategori === targetCategory
    );

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

            <main className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-28">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16"
                >
                    <Link
                        to="/library"
                        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200 mb-6 group"
                    >
                        <BookOpen className="w-4 h-4" />
                        Library Utama
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </Link>

                    <p className="inline-flex items-center gap-2.5 text-[11px] font-medium text-cyan-400 tracking-widest uppercase mb-4 block">
                        <span className="block w-5 h-px bg-cyan-400" />
                        Kategori Artikel
                    </p>

                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-50 leading-[1.05] mb-5">
                        Panduan{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            {targetCategory}
                        </span>
                    </h1>

                    <p className="text-slate-400 max-w-2xl font-light text-lg leading-relaxed">
                        {description}
                    </p>

                    <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.07] bg-white/[0.03] text-sm text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {filteredData.length} artikel tersedia
                    </div>
                </motion.div>

                {filteredData.length > 0 ? (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredData.map((article) => {
                            const risk = article.tingkat_risiko?.toLowerCase();
                            const riskClass = riskColor[risk] || riskColor.medium;

                            return (
                                <motion.div
                                    key={article.id}
                                    variants={cardVariants}
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.25 }}
                                    className="group relative flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:border-cyan-500/25 hover:bg-white/[0.05] overflow-hidden transition-colors duration-300"
                                >
                                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                                    
                                    <div className="relative h-48 overflow-hidden bg-white/[0.02]">
                                        <img
                                            src={article.image}
                                            alt={article.judul}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#080F1E]/60 to-transparent" />

                                        <div className="absolute top-3 right-3">
                                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider border backdrop-blur-sm ${riskClass}`}>
                                                {article.tingkat_risiko} Risk
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-[17px] font-semibold text-slate-100 mb-3 leading-snug tracking-tight group-hover:text-cyan-300 transition-colors duration-200">
                                            {article.judul}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 font-light">
                                            {article.deskripsi}
                                        </p>

                                        <Link
                                            to={`/artikel/${article.id}`}
                                            className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-medium transition-all duration-300
                                                border border-white/[0.07] bg-white/[0.03] text-slate-400
                                                hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(0,114,255,0.3)]"
                                        >
                                            Pelajari Celah
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="py-24 text-center rounded-2xl border border-dashed border-white/[0.08]"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center mx-auto mb-5">
                            <ShieldAlert className="w-7 h-7 text-slate-600" />
                        </div>
                        <p className="text-slate-500 font-light text-base mb-2">Belum ada artikel untuk kategori ini.</p>
                        <p className="text-slate-600 text-sm">Konten sedang dipersiapkan, cek kembali nanti.</p>
                        <Link
                            to="/library"
                            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl border border-white/[0.07] bg-white/[0.03] text-sm text-slate-400 hover:text-cyan-400 hover:border-cyan-500/25 transition-all duration-200"
                        >
                            <BookOpen className="w-4 h-4" />
                            Kembali ke Library
                        </Link>
                    </motion.div>
                )}
            </main>

            <Footer />
        </div>
    );
}