import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { siberAmanData } from "../data/DataSheet";
import { BookOpen, ArrowRight, Layers } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
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

export default function Library() {
    const categories = [...new Set(siberAmanData.map((item) => item.kategori))];

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

            <motion.section
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 border-b border-white/[0.06] py-28 px-6"
            >
                <div className="max-w-7xl mx-auto text-center">
                    <motion.span
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
                        Knowledge Base
                    </motion.span>

                    <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-50 leading-[1.05] mb-6">
                        Perpustakaan{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            SiberAman
                        </span>
                    </h1>
                    <p className="text-slate-400 max-w-xl mx-auto font-light text-lg leading-relaxed mb-10">
                        Jelajahi dokumentasi lengkap mengenai ancaman siber dan langkah mitigasi teknis untuk menjaga keamanan digital Anda.
                    </p>

                    <div className="w-full overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        <div className="inline-flex items-center gap-px rounded-2xl border border-white/[0.07] bg-white/[0.07] overflow-hidden min-w-max mx-auto">
                            {categories.map((cat) => (
                                <div key={cat} className="flex flex-col items-center justify-center py-4 px-6 bg-[#080F1E] hover:bg-white/[0.03] transition-colors duration-200 min-w-[110px]">
                                    <span className="text-lg font-bold text-cyan-400 tabular-nums">
                                        {siberAmanData.filter(d => d.kategori === cat).length}
                                    </span>
                                    <span className="text-[9px] text-slate-500 uppercase tracking-wider text-center leading-tight mt-0.5">{cat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            <main className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
                {categories.map((category, catIndex) => (
                    <motion.section
                        key={category}
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-24 last:mb-0"
                    >
                        <div className="flex items-center justify-between mb-8 pb-5 border-b border-white/[0.07]">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                    <Layers className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-100 tracking-tight">{category}</h2>
                                    <p className="text-[11px] text-slate-500 uppercase tracking-widest mt-0.5">
                                        {siberAmanData.filter((item) => item.kategori === category).length} Artikel Tersedia
                                    </p>
                                </div>
                            </div>
                            <Link
                                to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                                className="hidden sm:inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200 group"
                            >
                                Lihat Semua
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                            </Link>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                        >
                            {siberAmanData
                                .filter((item) => item.kategori === category)
                                .map((article) => {
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

                                            <div className="relative h-44 overflow-hidden bg-white/[0.02] flex-shrink-0">
                                                <img
                                                    src={article.image}
                                                    alt={article.judul}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-75 group-hover:opacity-95"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#080F1E]/70 to-transparent" />

                                                <div className="absolute top-3 right-3">
                                                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider border backdrop-blur-sm ${riskClass}`}>
                                                        {article.tingkat_risiko} Risk
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="p-5 flex flex-col flex-1">
                                                <span className="inline-flex items-center self-start px-2.5 py-0.5 rounded-full text-[10px] font-medium text-cyan-400 bg-cyan-500/[0.08] border border-cyan-500/15 mb-3 uppercase tracking-wider">
                                                    {article.kategori}
                                                </span>

                                                <h3 className="text-[16px] font-semibold text-slate-100 mb-2.5 leading-snug tracking-tight line-clamp-2 group-hover:text-cyan-300 transition-colors duration-200">
                                                    {article.judul}
                                                </h3>
                                                <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-2 font-light flex-1">
                                                    {article.deskripsi}
                                                </p>

                                                <div className="pt-4 border-t border-white/[0.05]">
                                                    <Link
                                                        to={`/artikel/${article.id}`}
                                                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                                                            border border-white/[0.07] bg-white/[0.03] text-slate-400
                                                            hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(0,114,255,0.3)]"
                                                    >
                                                        View Article
                                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 duration-200" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                        </motion.div>
                    </motion.section>
                ))}
            </main>

            <Footer />
        </div>
    );
}