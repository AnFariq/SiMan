import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
    Users,
    Target,
    Rocket,
    ShieldCheck,
    Github,
    Instagram,
    Linkedin,
} from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

const teamMembers = [
    {
        name: "Sultan",
        role: "Ketua Tim & UI Designer",
        desc: "Bertanggung jawab atas visi proyek dan desain antarmuka pengguna.",
        image: "sultan.webp",
    },
    {
        name: "Dovan",
        role: "Frontend Content Developer",
        desc: "Fokus pada pengembangan konten edukatif dan struktur halaman About.",
        image: "EqDvn.webp",
    },
    {
        name: "Andicha",
        role: "Lead Technical Developer",
        desc: "Menangani arsitektur sistem, keamanan platform, dan integrasi React.",
        image: "Andi.webp",
    },
];

export default function About() {
    const [activeMember, setActiveMember] = useState(null);

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

            <main className="relative z-10">

                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center text-center px-6 pt-28 pb-24 max-w-4xl mx-auto"
                >
                    <motion.span
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-[11px] font-medium tracking-widest uppercase text-cyan-400 border border-cyan-500/25 bg-cyan-500/[0.08] mb-9"
                    >
                        <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        Tentang Devitra.id
                    </motion.span>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl sm:text-7xl font-extrabold leading-[1.04] tracking-tight text-slate-50 mb-6"
                    >
                        Membangun Kesadaran<br />
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Keamanan Digital.
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mb-16"
                    >
                        SiberAman lahir dari keprihatinan kami terhadap tingginya angka kejahatan siber di Indonesia.
                        Kami percaya bahwa edukasi adalah pertahanan terkuat dalam menghadapi ancaman di dunia maya.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full text-left">
                        <motion.div
                            variants={itemVariants}
                            className="group p-8 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-cyan-500/30 hover:bg-white/[0.06] transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-all duration-300">
                                <Target className="w-5 h-5 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-100 mb-3 tracking-tight">Visi Kami</h3>
                            <p className="text-slate-400 text-sm leading-relaxed font-light">
                                Menjadi platform literasi keamanan siber nomor satu yang mudah diakses oleh seluruh lapisan masyarakat Indonesia.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="group p-8 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/20 to-cyan-600/10 hover:border-cyan-400/40 hover:from-blue-600/25 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/15 transition-all duration-300">
                                <Rocket className="w-5 h-5 text-cyan-300" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-50 mb-3 tracking-tight">Misi Kami</h3>
                            <p className="text-slate-300 text-sm leading-relaxed font-light">
                                Menyediakan panduan teknis yang sederhana, terupdate, dan aplikatif untuk mencegah celah keamanan pada sistem digital.
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                <div className="relative z-10 max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent mb-0" />

                <section className="py-24 px-6">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            {...fadeInUp}
                            className="relative rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-blue-950/40 to-cyan-950/20 backdrop-blur-md overflow-hidden p-10 sm:p-16"
                        >
                            <div
                                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                                style={{
                                    backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`,
                                    backgroundSize: '32px 32px'
                                }}
                            />

                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                                <div>
                                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                                        Our Organization
                                    </span>
                                    <h2 className="text-4xl sm:text-6xl font-black text-slate-50 tracking-tight mb-4">
                                        DEVITRA<span className="text-cyan-400">.ID</span>
                                    </h2>
                                    <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-8" />
                                    <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
                                        Terbentuk dari kumpulan mahasiswa{' '}
                                        <span className="text-slate-100 font-medium">Universitas Dinamika (Stikom Surabaya)</span>{' '}
                                        yang memiliki jiwa semangat belajar & berkompetisi.
                                        Kami hadir untuk mengatasi masalah nyata di masyarakat terkait bidang Teknologi,
                                        khususnya bagi para pengembang perangkat lunak.
                                    </p>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.93 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                                >
                                    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.04] backdrop-blur-sm hover:border-cyan-500/25 hover:bg-white/[0.07] transition-all duration-300">
                                        <Users className="text-cyan-400 mb-4 w-5 h-5" />
                                        <h4 className="text-slate-50 font-bold text-xl mb-1">Teamwork</h4>
                                        <p className="text-slate-500 text-[11px] uppercase font-bold tracking-wider">Kolaborasi Intensif</p>
                                    </div>
                                    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.04] backdrop-blur-sm hover:border-cyan-500/25 hover:bg-white/[0.07] transition-all duration-300">
                                        <Target className="text-emerald-400 mb-4 w-5 h-5" />
                                        <h4 className="text-slate-50 font-bold text-xl mb-1">Solution</h4>
                                        <p className="text-slate-500 text-[11px] uppercase font-bold tracking-wider">Berorientasi Masalah</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <div className="relative z-10 max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

                <section className="py-24 px-6 max-w-5xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <p className="inline-flex items-center gap-2.5 text-[11px] font-medium text-cyan-400 tracking-widest uppercase mb-4">
                            <span className="block w-5 h-px bg-cyan-400" />
                            Di Balik Layar
                            <span className="block w-5 h-px bg-cyan-400" />
                        </p>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-50 tracking-tight mb-4">
                            Tim Kami
                        </h2>
                        <div className="h-px w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-5" />
                        <p className="text-slate-400 font-light text-lg max-w-md mx-auto">
                            Tim kreatif yang membangun SiberAman dengan semangat kolaborasi.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                onClick={() => setActiveMember(activeMember === member.name ? null : member.name)}
                                className="group cursor-pointer"
                            >
                                <motion.div
                                    whileTap={{ scale: 0.98 }}
                                    className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative border border-white/5 group-hover:border-cyan-500/30 transition-all duration-300"
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className={`w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100
                                            ${activeMember === member.name ? 'grayscale-0 scale-100' : 'grayscale group-hover:grayscale-0'}`}
                                    />

                                    <div className={`absolute inset-0 bg-gradient-to-t from-[#080F1E]/90 via-[#080F1E]/20 to-transparent transition-opacity duration-500 flex items-end p-6
                                        ${activeMember === member.name ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                        <p className="text-slate-200 text-xs font-light leading-relaxed italic">
                                            "{member.desc}"
                                        </p>
                                    </div>

                                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.div>

                                <div className="text-center sm:text-left px-1">
                                    <h3 className={`text-xl font-bold tracking-tight transition-colors duration-200 ${activeMember === member.name ? 'text-cyan-400' : 'text-slate-100 group-hover:text-cyan-400'}`}>
                                        {member.name}
                                    </h3>
                                    <p className="text-cyan-500 font-medium text-[11px] uppercase tracking-widest mt-1">
                                        {member.role}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Divider */}
                <div className="relative z-10 max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

                <motion.section
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="py-24 px-6"
                >
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-col items-center text-center px-10 sm:px-14 py-16 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-blue-950/40 to-cyan-950/20 backdrop-blur-md relative overflow-hidden">
                            <div
                                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                style={{
                                    backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`,
                                    backgroundSize: '40px 40px'
                                }}
                            />
                            <div className="relative z-10">
                                <motion.div
                                    animate={{ rotate: [0, 8, -8, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="inline-block mb-8"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto">
                                        <ShieldCheck className="w-8 h-8 text-cyan-400" />
                                    </div>
                                </motion.div>

                                <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-50 tracking-tight mb-5">
                                    Keamanan Anda Prioritas Kami
                                </h2>
                                <p className="text-slate-400 text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto">
                                    Kami terus memperbarui konten edukasi kami berdasarkan tren ancaman siber terbaru di Indonesia
                                    agar Anda selalu selangkah lebih maju dari para peretas.
                                </p>
                                <motion.a
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                    href="/panduan-umum"
                                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[15px] font-medium shadow-[0_0_36px_rgba(0,114,255,0.3)] hover:shadow-[0_0_52px_rgba(0,198,255,0.45)] transition-all duration-300"
                                >
                                    Eksplorasi Panduan Umum
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </motion.section>

            </main>

            <Footer />
        </div>
    );
}