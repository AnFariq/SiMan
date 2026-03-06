import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Book, ArrowRight, Lock, ShieldCheck, Zap } from "lucide-react";
import Header from "../components/Header"
import Footer from "../components/Footer"   
import { Link } from "react-router-dom"; 
import LoadingOption from "../components/LoadingOption"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

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
                        className="fixed inset-0 z-[9999] bg-white"
                    >
                        <LoadingOption onComplete={() => setIsIntroFinished(true)} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Konten akan tampil jika intro selesai ATAU sudah pernah dilihat sebelumnya */}
            {isIntroFinished && (
                <motion.div
                    initial={sessionStorage.getItem('introViewed') === 'true' ? { opacity: 1 } : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="min-h-screen bg-white flex flex-col font-sans"
                >
                    <Header />

                    <div className="relative">
                        {/* Background Decor */}
                        <div className="fixed inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10 pointer-events-none" />

                        <motion.main
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex-1 flex flex-col items-center justify-center gap-6 px-6 py-28 text-center relative"
                        >
                            {/* Status Badge */}
                            <motion.span variants={itemVariants} className="inline-flex items-center gap-2 font-medium text-[12px] tracking-tight text-indigo-600 border border-indigo-100 bg-indigo-50/50 px-4 py-1.5 rounded-full uppercase">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                                </span>
                                Edukasi Siber Terpercaya
                            </motion.span>

                            {/* Main Heading */}
                            <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl font-extrabold text-slate-900 max-w-3xl leading-[1.1] tracking-tight">
                                Bangun Pertahanan Digital <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500">
                                    Tanpa Celah.
                                </span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p variants={itemVariants} className="text-slate-500 max-w-xl text-lg sm:text-xl leading-relaxed font-medium">
                                Pelajari cara mengenali, mencegah, dan melawan ancaman siber bersama <span className="text-slate-900 font-semibold">SiberAman</span>.
                            </motion.p>

                            {/* Action Buttons */}
                            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-4">
                                <Link to="/library">
                                    <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold shadow-lg shadow-indigo-200 transition-all active:scale-95 flex items-center gap-2">
                                        Mulai Belajar <ArrowRight className="w-4 h-4" />
                                    </button>
                                </Link>
                                <Link to="/panduan-umum">
                                    <button className="px-8 py-3 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full font-semibold transition-all">
                                        Lihat Panduan
                                    </button>
                                </Link>
                            </motion.div>

                            {/* Feature Cards Section */}
                            <motion.div
                                variants={containerVariants}
                                className="mt-20 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6"
                            >
                                <FeatureCard
                                    icon={<Shield className="w-6 h-6 text-indigo-600" />}
                                    title="Fundamental Keamanan"
                                    desc="Pahami prinsip dasar kerahasiaan, integritas, dan ketersediaan data (CIA Triad)."
                                />
                                <FeatureCard
                                    icon={<Lock className="w-6 h-6 text-indigo-600" />}
                                    title="Privasi Data"
                                    desc="Cara melindungi identitas digital dan data pribadi dari kebocoran di internet."
                                />
                                <FeatureCard
                                    icon={<Zap className="w-6 h-6 text-indigo-600" />}
                                    title="Respon Cepat"
                                    desc="Langkah-langkah praktis yang harus dilakukan saat perangkat Anda terkompromi."
                                />
                            </motion.div>
                        </motion.main>
                    </div>

                    <Footer />
                </motion.div>
            )}
        </>
    )
}

// Komponen Card Kecil dengan Hover Animasi
function FeatureCard({ icon, title, desc }) {
    return (
        <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all text-left group"
        >
            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
        </motion.div>
    );
}

{/* Oh ya catatan untuk sultan, jika mau menambahkan class pakai "className" jadi klo pake "class" maka akan error, btw ini udah tak tambahin tailwind yak */ }