import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, Zap, ArrowRight, BookOpen, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import LoadingOption from "../components/LoadingOption";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

function FeatureCard({ icon, title, desc, linkLabel, to }) {
    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="relative group p-8 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-cyan-500/30 hover:bg-white/[0.06] transition-all duration-300 overflow-hidden backdrop-blur-sm"
        >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/35 transition-all duration-300">
                {React.cloneElement(icon, { size: 22, className: "text-cyan-400", strokeWidth: 2 })}
            </div>

            <h3 className="font-bold text-[17px] text-slate-100 mb-3 leading-snug tracking-tight">
                {title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed font-light mb-6">
                {desc}
            </p>

            <Link
                to={to || "/library"}
                className="inline-flex items-center gap-1.5 text-[13px] text-cyan-400 font-medium hover:gap-3 transition-all duration-200"
            >
                {linkLabel || "Pelajari"}
                <ChevronRight size={13} />
            </Link>
        </motion.div>
    );
}

export default function Home() {
    const [isIntroFinished, setIsIntroFinished] = useState(() => {
        return sessionStorage.getItem('introViewed') === 'true';
    });

    useEffect(() => {
        if (!isIntroFinished) {
            document.body.style.overflow = 'hidden';
            const timer = setTimeout(() => {
                setIsIntroFinished(true);
                sessionStorage.setItem('introViewed', 'true');
            }, 5000);
            return () => {
                clearTimeout(timer);
                document.body.style.overflow = 'unset';
            };
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isIntroFinished]);

    return (
        <>
            <AnimatePresence mode="wait">
                {!isIntroFinished && (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="fixed inset-0 z-[9999] bg-[#080F1E]"
                    >
                        <LoadingOption onComplete={() => setIsIntroFinished(true)} />
                    </motion.div>
                )}
            </AnimatePresence>

            {isIntroFinished && (
                <motion.div
                    initial={sessionStorage.getItem('introViewed') === 'true' ? { opacity: 1 } : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
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
                        style={{ background: 'radial-gradient(circle, rgba(0,80,255,0.13) 0%, transparent 65%)' }}
                    />
                    <div
                        className="fixed -bottom-32 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
                        style={{ background: 'radial-gradient(circle, rgba(0,200,255,0.07) 0%, transparent 65%)' }}
                    />

                    <Header />

                    <motion.section
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-20"
                    >
                        {/* Badge */}
                        <motion.span
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-[11px] font-medium tracking-widest uppercase text-cyan-400 border border-cyan-500/25 bg-cyan-500/[0.08] mb-9"
                        >
                            <motion.span
                                className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                                animate={{ opacity: [1, 0.3, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            Edukasi Siber Terpercaya
                        </motion.span>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl sm:text-7xl font-extrabold leading-[1.04] tracking-tight text-slate-50 max-w-4xl mb-6"
                        >
                            Bangun Pertahanan Digital<br />
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Tanpa Celah.
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed max-w-xl mb-12"
                        >
                            Pelajari cara mengenali, mencegah, dan melawan ancaman siber bersama{' '}
                            <span className="text-slate-200 font-medium">SiberAman</span>
                            {' '}— platform edukasi keamanan digital untuk semua orang.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-20">
                            <Link to="/library">
                                <motion.button
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[15px] font-medium cursor-pointer border-0 shadow-[0_0_36px_rgba(0,114,255,0.3)] hover:shadow-[0_0_52px_rgba(0,198,255,0.45)] transition-all duration-300"
                                >
                                    <BookOpen size={16} />
                                    Mulai Belajar
                                </motion.button>
                            </Link>
                            <Link to="/panduan-umum">
                                <motion.button
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-transparent border border-white/10 text-slate-400 hover:text-slate-200 hover:border-cyan-500/30 hover:bg-cyan-500/[0.05] text-[15px] font-normal cursor-pointer transition-all duration-300"
                                >
                                    Lihat Panduan
                                    <ArrowRight size={15} />
                                </motion.button>
                            </Link>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex w-full max-w-[620px] rounded-2xl border border-white/[0.07] overflow-hidden bg-white/[0.03] backdrop-blur-md"
                        >
                            {[
                                { number: '50+', label: 'Artikel Edukasi' },
                                { number: '3', label: 'Modul Utama' },
                                { number: '100%', label: 'Gratis & Terbuka' },
                            ].map((s, i) => (
                                <div
                                    key={i}
                                    className={`flex-1 py-6 px-4 text-center hover:bg-cyan-500/[0.05] transition-colors duration-200 ${i < 2 ? 'border-r border-white/[0.07]' : ''}`}
                                >
                                    <span className="block text-3xl font-extrabold text-cyan-400 tracking-tight mb-1">
                                        {s.number}
                                    </span>
                                    <span className="text-[11px] uppercase tracking-widest text-slate-500">
                                        {s.label}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.section>

                    <div className="relative z-10 max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent mb-20" />

                    <motion.section
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="relative z-10 max-w-5xl mx-auto px-6 pb-24"
                    >
                        <motion.p variants={itemVariants} className="inline-flex items-center gap-2.5 text-[11px] font-medium text-cyan-400 tracking-widest uppercase mb-4">
                            <span className="block w-5 h-px bg-cyan-400" />
                            Apa yang Anda Pelajari
                        </motion.p>
                        <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-extrabold text-slate-50 tracking-tight leading-tight mb-3">
                            Tiga Pilar Keamanan Digital
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-[15px] text-slate-400 font-light leading-relaxed max-w-md mb-12">
                            Dari fundamental hingga respons insiden — semua yang Anda butuhkan untuk berselancar dengan aman.
                        </motion.p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <FeatureCard
                                icon={<Shield />}
                                title="Fundamental Keamanan"
                                desc="Pahami prinsip dasar CIA Triad — kerahasiaan, integritas, dan ketersediaan data yang menjadi fondasi keamanan siber modern."
                                linkLabel="Pelajari Dasar"
                                to="/library"
                            />
                            <FeatureCard
                                icon={<Lock />}
                                title="Privasi & Perlindungan Data"
                                desc="Cara melindungi identitas digital dan data pribadi dari kebocoran, phishing, dan ancaman privasi lainnya di internet."
                                linkLabel="Jaga Privasi"
                                to="/library"
                            />
                            <FeatureCard
                                icon={<Zap />}
                                title="Respons Insiden Cepat"
                                desc="Langkah-langkah praktis dan terstruktur yang harus dilakukan saat perangkat atau akun Anda terkompromi."
                                linkLabel="Pelajari Respons"
                                to="/panduan-umum"
                            />
                        </div>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative z-10 max-w-5xl mx-auto px-6 pb-28"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-10 sm:px-14 py-14 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-blue-950/40 to-cyan-950/20 backdrop-blur-md">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-50 tracking-tight leading-tight mb-3">
                                    Ancaman siber nyata.<br />
                                    Pertahanan Anda juga harus nyata.
                                </h2>
                                <p className="text-[15px] text-slate-400 font-light leading-relaxed max-w-md">
                                    Setiap hari ribuan serangan siber terjadi di Indonesia. Mulai perkuat pertahanan digital Anda sekarang — gratis, mudah, dan praktis.
                                </p>
                            </div>
                            <div className="flex gap-3 flex-shrink-0 flex-wrap justify-center">
                                <Link to="/panduan-umum">
                                    <motion.button
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[15px] font-medium cursor-pointer border-0 shadow-[0_0_36px_rgba(0,114,255,0.3)] hover:shadow-[0_0_52px_rgba(0,198,255,0.45)] transition-all duration-300"
                                    >
                                        Mulai Sekarang
                                        <ArrowRight size={15} />
                                    </motion.button>
                                </Link>
                                <Link to="/library">
                                    <motion.button
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-transparent border border-white/10 text-slate-400 hover:text-slate-200 hover:border-cyan-500/30 hover:bg-cyan-500/[0.05] text-[15px] font-normal cursor-pointer transition-all duration-300"
                                    >
                                        Lihat Artikel
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </motion.section>

                    <Footer />
                </motion.div>
            )}
        </>
    );
}