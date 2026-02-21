import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import Header from "../components/Header"
import Footer from "../components/Footer"
import LoadingOption from '../components/LoadingOption';
import { Users, Target, Rocket, ShieldCheck, Github, Instagram, Linkedin } from "lucide-react";

export default function About() {
    const teamMembers = [
        {
            name: "Sultan",
            role: "Ketua Tim & UI Designer",
            desc: "Bertanggung jawab atas visi proyek dan desain antarmuka pengguna.",
            image: "", // bisa di ganti foto yang asli
            color: "bg-indigo-50"
        },
        {
            name: "Dovan",
            role: "Frontend Content Developer",
            desc: "Fokus pada pengembangan konten edukatif dan struktur halaman About.",
            image: "",
            color: "bg-slate-50"
        },
        {
            name: "Andicha",
            role: "Lead Technical Developer",
            desc: "Menangani arsitektur sistem, keamanan platform, dan integrasi React.",
            image: "",
            color: "bg-indigo-50"
        }
    ];

    {/*ini untuk animasi loading yak*/ }
    const [isIntroFinished, setIsIntroFinished] = useState(false);

    useEffect(() => {
        if (!isIntroFinished) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        const timer = setTimeout(() => {
            setIsIntroFinished(true);
        }, 5000);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'unset';
        };
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="min-h-screen bg-white flex flex-col font-sans"
                >
                    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-indigo-100">
                        <Header />

                        {/* Hero Section - Visi Misi */}
                        <main className="flex-1">
                            {/* Section: Visi & Misi */}
                            <section className="py-24 px-6 border-b border-slate-50 relative overflow-hidden">
                                <div className="max-w-4xl mx-auto text-center relative z-10">
                                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">
                                        Tentang Devitra.id
                                    </span>
                                    <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mb-8">
                                        Membangun Kesadaran <br />
                                        <span className="text-indigo-600">Keamanan Digital.</span>
                                    </h1>
                                    <p className="text-lg sm:text-xl text-slate-500 leading-relaxed font-medium mb-12">
                                        SiberAman lahir dari keprihatinan kami terhadap tingginya angka kejahatan siber di Indonesia.
                                        Kami percaya bahwa edukasi adalah pertahanan terkuat dalam menghadapi ancaman di dunia maya.
                                    </p>

                                    {/* Visi Misi Cards */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-16">
                                        <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                                            <Target className="w-8 h-8 text-indigo-600 mb-4" />
                                            <h3 className="text-xl font-bold text-slate-900 mb-3">Visi Kami</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed">
                                                Menjadi platform literasi keamanan siber nomor satu yang mudah diakses oleh seluruh lapisan masyarakat Indonesia.
                                            </p>
                                        </div>
                                        <div className="p-8 bg-indigo-600 rounded-3xl text-white shadow-xl shadow-indigo-200">
                                            <Rocket className="w-8 h-8 text-indigo-200 mb-4" />
                                            <h3 className="text-xl font-bold mb-3">Misi Kami</h3>
                                            <p className="text-indigo-100 text-sm leading-relaxed">
                                                Menyediakan panduan teknis yang sederhana, terupdate, dan aplikatif untuk mencegah celah keamanan pada sistem digital.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section: Tim Kami */}
                            <section className="py-24 px-6 max-w-7xl mx-auto">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">Di Balik Layar</h2>
                                    <p className="text-slate-500 font-medium">Tim kreatif yang membangun SiberAman dengan semangat kolaborasi.</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {teamMembers.map((member) => (
                                        <div key={member.name} className="group">
                                            <div className={`aspect-square rounded-3xl overflow-hidden mb-6 relative ${member.color}`}>
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                                            <p className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-3">{member.role}</p>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-4">{member.desc}</p>

                                            <div className="flex gap-3">
                                                <button className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-indigo-600 transition-colors">
                                                    <Instagram className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-indigo-600 transition-colors">
                                                    <Linkedin className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Section: Komitmen Keamanan */}
                            <section className="py-20 px-6 bg-slate-50 text-center">
                                <div className="max-w-2xl mx-auto">
                                    <ShieldCheck className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Keamanan Anda adalah Prioritas Kami</h2>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-8">
                                        Kami terus memperbarui konten edukasi kami berdasarkan tren ancaman siber terbaru di Indonesia agar Anda selalu selangkah lebih maju dari para peretas.
                                    </p>
                                    <a href="/" className="inline-flex items-center justify-center px-8 py-3 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-900 hover:bg-indigo-50 hover:border-indigo-200 transition-all">
                                        Kembali ke Beranda
                                    </a>
                                </div>
                            </section>
                        </main>

                        <Footer />
                    </div>
                </motion.div>)}
        </>
    );
}

{/* Oh ya catatan untuk dovan, jika mau menambahkan class pakai "className" jadi klo pake "class" maka akan error, btw ini udah tak tambahin tailwind yak */ }