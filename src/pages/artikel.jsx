import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { siberAmanData } from "../data/DataSheet";
import { motion, AnimatePresence } from "framer-motion";
import LoadingSingkat from "../components/LoadingSingkat";
import {
    ArrowLeft,
    ShieldCheck,
    AlertOctagon,
    CheckCircle2,
    Clock,
    ChevronRight,
    BookOpen,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const riskColor = {
    high:     "text-red-400 bg-red-500/10 border-red-500/20",
    medium:   "text-amber-400 bg-amber-500/10 border-amber-500/20",
    low:      "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    critical: "text-rose-400 bg-rose-500/10 border-rose-500/20",
};

export default function ContentPage() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    const article = siberAmanData.find((item) => item.id === parseInt(id));

    useEffect(() => {
        setIsLoading(true);
        if (isLoading) document.body.style.overflow = 'hidden';

        const timer = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = 'unset';
        }, 1500);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'unset';
        };
    }, [id]);

    if (!article) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#080F1E]">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center mb-5">
                    <AlertOctagon className="w-7 h-7 text-slate-600" />
                </div>
                <p className="text-slate-400 font-light mb-6">Artikel tidak ditemukan.</p>
                <Link
                    to="/library"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.07] bg-white/[0.03] text-sm text-slate-400 hover:text-cyan-400 hover:border-cyan-500/25 transition-all duration-200"
                >
                    <BookOpen className="w-4 h-4" />
                    Kembali ke Library
                </Link>
            </div>
        );
    }

    const paragraphs = [
        article["artikel-par1"],
        article["artikel-par2"],
        article["artikel-par3"],
        article["artikel-par4"],
        article["artikel-par5"],
    ].filter(Boolean);

    const risk      = article.tingkat_risiko?.toLowerCase();
    const riskClass = riskColor[risk] || riskColor.medium;

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-[9999]"
                    >
                        <LoadingSingkat />
                    </motion.div>
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="min-h-screen bg-[#080F1E] text-slate-100 font-sans relative overflow-hidden"
                    >
                        <div
                            className="fixed inset-0 pointer-events-none z-0"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0,160,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,160,255,0.04) 1px, transparent 1px)`,
                                backgroundSize: '52px 52px'
                            }}
                        />
                        <div
                            className="fixed -top-64 -right-48 w-[700px] h-[700px] rounded-full pointer-events-none z-0"
                            style={{ background: 'radial-gradient(circle, rgba(0,80,255,0.11) 0%, transparent 65%)' }}
                        />
                        <div
                            className="fixed -bottom-32 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
                            style={{ background: 'radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 65%)' }}
                        />

                        <Header />

                        <main className="relative z-10 max-w-3xl mx-auto w-full px-4 sm:px-6 pt-28 pb-24">

                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex items-center gap-1.5 text-xs text-slate-600 mb-10"
                            >
                                <Link to="/library" className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1 group">
                                    <BookOpen className="w-3.5 h-3.5" />
                                    Library
                                </Link>
                                <ChevronRight className="w-3 h-3" />
                                <span className="text-slate-500">{article.kategori}</span>
                                <ChevronRight className="w-3 h-3" />
                                <span className="text-slate-400 truncate max-w-[180px]">{article.judul}</span>
                            </motion.div>

                            <motion.header
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.05 }}
                                className="mb-10"
                            >
                                <div className="flex items-center flex-wrap gap-3 mb-6">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest border ${riskClass}`}>
                                        {article.tingkat_risiko} Risk
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest text-cyan-400 border border-cyan-500/20 bg-cyan-500/[0.08]">
                                        {article.kategori}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-slate-500 text-xs font-light">
                                        <Clock className="w-3.5 h-3.5" />
                                        {article.waktu_baca || "5 Menit"}
                                    </span>
                                </div>

                                <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-50 leading-[1.08] tracking-tight mb-6">
                                    {article.judul}
                                </h1>

                                <p className="text-slate-400 text-lg font-light leading-relaxed border-l-2 border-cyan-500/40 pl-4">
                                    {article.deskripsi}
                                </p>
                            </motion.header>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="rounded-2xl overflow-hidden mb-14 border border-white/[0.07] relative"
                            >
                                <img
                                    src={article.image}
                                    alt={article.judul}
                                    className="w-full h-auto object-cover max-h-[480px] opacity-90"
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080F1E] to-transparent" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.15 }}
                                className="space-y-6 mb-16"
                            >
                                {paragraphs.map((par, index) => (
                                    <p
                                        key={index}
                                        className="text-slate-400 text-[17px] leading-[1.85] font-light"
                                    >
                                        {par}
                                    </p>
                                ))}
                            </motion.div>

                            <motion.section
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                                className="relative rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-blue-950/40 to-cyan-950/20 backdrop-blur-md p-8 sm:p-10 overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
                                <ShieldCheck className="absolute -right-6 -bottom-6 w-44 h-44 text-white/[0.03]" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                                            <AlertOctagon className="w-5 h-5 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-slate-50 tracking-tight">
                                                Langkah Mitigasi & Solusi
                                            </h2>
                                            <p className="text-[11px] text-slate-500 mt-0.5">
                                                {article.solusi.length} langkah perlindungan
                                            </p>
                                        </div>
                                    </div>

                                    {/* Steps */}
                                    <div className="space-y-3">
                                        {article.solusi.map((step, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -12 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.07, duration: 0.45 }}
                                                className="flex items-start gap-4 p-4 rounded-xl border border-white/[0.05] bg-white/[0.04] hover:bg-white/[0.07] hover:border-cyan-500/15 transition-all duration-200 group"
                                            >
                                                <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                                </div>
                                                <p className="text-slate-300 text-sm leading-relaxed font-light group-hover:text-slate-200 transition-colors duration-200">
                                                    {step}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.section>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="mt-14 pt-10 border-t border-white/[0.07] flex items-center justify-between"
                            >
                                <Link
                                    to="/library"
                                    className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200 group"
                                >
                                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 duration-200" />
                                    Kembali ke Library
                                </Link>
                                <Link
                                    to={`/category/${article.kategori?.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200 group"
                                >
                                    Artikel {article.kategori} lainnya
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                                </Link>
                            </motion.div>

                        </main>

                        <Footer />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}