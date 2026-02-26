import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, Zap, ArrowRight, Eye, LifeBuoy, Cpu, Wifi, GlobeLock, AlertCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";   
import { Link } from "react-router-dom"; 
import LoadingOption from "../components/LoadingOption";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
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

            {isIntroFinished && (
                <motion.div
                    initial={sessionStorage.getItem('introViewed') === 'true' ? { opacity: 1 } : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="min-h-screen bg-[#FAFAFB] flex flex-col font-sans selection:bg-indigo-600 selection:text-white"
                >
                    <Header />

                    <div className="relative">
                        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-100/40 blur-[120px]" />
                            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-violet-100/40 blur-[120px]" />
                        </div>

                        <motion.main
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex-1 px-6 pb-24"
                        >
                            {/* HERO SECTION */}
                            <section className="pt-24 pb-12 text-center max-w-4xl mx-auto">
                                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
                                    <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
                                    <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Pusat Literasi Keamanan Siber</span>
                                </motion.div>
                                
                                <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
                                    Pahami Pola. <br />
                                    <span className="text-indigo-600">Cegah Serangan.</span>
                                </motion.h1>

                                <motion.p variants={itemVariants} className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                                    Eksplorasi pustaka artikel kami yang membedah anatomi ancaman digital serta langkah konkret untuk memperkuat pertahanan siber Anda.
                                </motion.p>
                            </section>

                            {/* CATEGORY GRID (Sesuai Gambar Kamu) */}
                            <motion.section variants={itemVariants} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                                <CategoryItem 
                                    icon={<AlertCircle className="w-5 h-5" />} 
                                    title="Social Engineering" 
                                    desc="Manipulasi psikologis" 
                                />
                                <CategoryItem 
                                    icon={<Cpu className="w-5 h-5" />} 
                                    title="Malware Analysis" 
                                    desc="Bedah software berbahaya" 
                                />
                                <CategoryItem 
                                    icon={<Wifi className="w-5 h-5" />} 
                                    title="Network Security" 
                                    desc="Keamanan lalu lintas data" 
                                />
                                <CategoryItem 
                                    icon={<GlobeLock className="w-5 h-5" />} 
                                    title="Web Vulnerability" 
                                    desc="Celah aplikasi web" 
                                />
                            </motion.section>

                            {/* BENTO GRID - FEATURED & SOLUTIONS */}
                            <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Artikel Utama */}
                                <motion.div variants={itemVariants} className="md:col-span-2 bg-white border border-slate-200 rounded-[2.5rem] p-10 flex flex-col justify-between group hover:shadow-2xl hover:shadow-indigo-100 transition-all cursor-pointer relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Shield className="w-40 h-40" />
                                    </div>
                                    <div>
                                        <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center mb-6">
                                            <Eye className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Evolusi Teknik <br/>Phishing Modern</h2>
                                        <p className="text-slate-500 text-lg leading-relaxed max-w-sm">Mengenali bagaimana peretas menggunakan teknik spoofing canggih untuk melewati sistem keamanan terbaru.</p>
                                    </div>
                                    <div className="mt-12 flex items-center gap-4">
                                        <span className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-bold uppercase tracking-wider">Artikel Terpopuler</span>
                                        <span className="text-slate-400 text-sm italic">8 Menit Baca</span>
                                    </div>
                                </motion.div>

                                {/* Solusi & Database */}
                                <div className="flex flex-col gap-4">
                                    <motion.div variants={itemVariants} className="flex-1 bg-indigo-600 rounded-[2.5rem] p-8 text-white group hover:bg-indigo-700 transition-colors cursor-pointer flex flex-col justify-between">
                                        <div>
                                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                                                <LifeBuoy className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-2">Pusat Solusi</h3>
                                            <p className="text-indigo-100 text-sm leading-relaxed mb-6">Panduan langkah-demi-langkah mitigasi saat terjadi kebocoran data pribadi.</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest">
                                            Eksplorasi Solusi <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="bg-white border border-slate-200 rounded-[2.5rem] p-8 flex items-center justify-between group hover:border-indigo-200 transition-all">
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900">Database Ancaman</h3>
                                            <p className="text-slate-500 text-xs">Informasi kerentanan 0-day terbaru</p>
                                        </div>
                                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-all">
                                            <Zap className="w-6 h-6" />
                                        </div>
                                    </motion.div>
                                </div>
                            </section>

                            {/* LATEST ARTICLES LIST */}
                            <section className="max-w-7xl mx-auto mt-20">
                                <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                                    <div className="text-left">
                                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Pembahasan Terbaru</h2>
                                        <p className="text-slate-500 italic">Materi edukasi siber terkini</p>
                                    </div>
                                    <Link to="/library" className="text-indigo-600 font-bold text-sm uppercase tracking-widest hover:text-indigo-800 transition-colors">
                                        Lihat Semua Pustaka
                                    </Link>
                                </motion.div>

                                <div className="grid grid-cols-1 gap-3">
                                    <ArticleRow tag="Web Security" title="Mengamankan Rest API dari Serangan Cross-Site Scripting (XSS)" date="Feb 24, 2026" />
                                    <ArticleRow tag="Malware" title="Cara Kerja Ransomware LockBit dalam Mengenkripsi Database" date="Feb 22, 2026" />
                                    <ArticleRow tag="Network" title="Implementasi Zero Trust Architecture pada Jaringan Skala Kecil" date="Feb 20, 2026" />
                                </div>
                            </section>
                        </motion.main>
                    </div>

                    <Footer />
                </motion.div>
            )}
        </>
    );
}

// Komponen Item Kategori (Sesuai Gambar User)
function CategoryItem({ icon, title, desc }) {
    return (
        <div className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center shrink-0">
                {icon}
            </div>
            <div className="text-left">
                <h4 className="text-[15px] font-bold text-slate-900 leading-tight">{title}</h4>
                <p className="text-slate-400 text-xs mt-1 leading-tight">{desc}</p>
            </div>
        </div>
    );
}

function ArticleRow({ tag, title, date }) {
    return (
        <motion.div 
            variants={itemVariants}
            className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-white border border-slate-100 rounded-3xl hover:border-indigo-200 hover:shadow-lg transition-all cursor-pointer"
        >
            <div className="flex items-center gap-6">
                <span className="w-24 text-[10px] font-black uppercase tracking-widest text-indigo-400 shrink-0">{tag}</span>
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors leading-snug">{title}</h3>
            </div>
            <div className="flex items-center gap-8 mt-4 md:mt-0">
                <span className="text-slate-400 text-sm font-medium">{date}</span>
                <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm shrink-0">
                    <ArrowRight className="w-4 h-4" />
                </div>
            </div>
        </motion.div>
    );
}