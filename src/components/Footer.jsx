import React from "react";
import { Link } from "react-router-dom";
import {
    ShieldCheck,
    Mail,
    Globe,
    ChevronRight,
    Instagram,
    Linkedin,
    Github,
} from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-white/[0.07] bg-[#060D1A] overflow-hidden">

            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,160,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,160,255,1) 1px, transparent 1px)`,
                    backgroundSize: '52px 52px'
                }}
            />
            <div
                className="absolute -bottom-40 -right-40 w-[480px] h-[480px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,80,255,0.08) 0%, transparent 65%)' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <Link to="/" className="inline-flex items-center gap-2.5 mb-6 group">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_0_16px_rgba(0,198,255,0.3)] group-hover:shadow-[0_0_24px_rgba(0,198,255,0.5)] transition-all duration-300">
                                <ShieldCheck className="w-4 h-4 text-white" strokeWidth={2.5} />
                            </div>
                            <span className="text-[18px] font-bold text-slate-100 tracking-tight">
                                Siber<span className="text-cyan-400">Aman</span>
                            </span>
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed font-light mb-8">
                            Platform edukasi keamanan siber terpercaya untuk masyarakat Indonesia. Membangun pertahanan digital dimulai dari kesadaran diri sendiri.
                        </p>
                        <div className="flex items-center gap-2">
                            <SocialIcon icon={<Instagram className="w-4 h-4" />} href="#" />
                            <SocialIcon icon={<Linkedin  className="w-4 h-4" />} href="#" />
                            <SocialIcon icon={<Github    className="w-4 h-4" />} href="#" />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-6">
                            Navigasi
                        </h4>
                        <ul className="space-y-3">
                            <FooterLink to="/"            label="Beranda" />
                            <FooterLink to="/library"     label="Library Artikel" />
                            <FooterLink to="/panduan-umum" label="Panduan Umum" />
                            <FooterLink to="/tentang"     label="Tentang Kami" />
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-6">
                            Kategori Utama
                        </h4>
                        <ul className="space-y-3">
                            <FooterLink to="/category/social-engineering" label="Social Engineering" />
                            <FooterLink to="/category/web-vulnerability"  label="Web Vulnerability" />
                            <FooterLink to="/category/network-security"   label="Network Security" />
                            <FooterLink to="/category/malware-analysis"   label="Malware Analysis" />
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-6">
                            Legal & Kontak
                        </h4>
                        <ul className="space-y-3 mb-6">
                            <FooterLink to="/privacy-policy" label="Kebijakan Privasi" />
                            <FooterLink to="/privacy-policy" label="Syarat & Ketentuan" />
                        </ul>

                        <div className="p-4 rounded-xl border border-white/[0.07] bg-white/[0.03] space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                                </div>
                                <span className="text-xs text-slate-400 font-light">devitra.first@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center flex-shrink-0">
                                    <Globe className="w-3.5 h-3.5 text-cyan-400" />
                                </div>
                                <span className="text-xs text-slate-400 font-light">Surabaya, Indonesia</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/[0.07] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-600 text-xs font-light">
                        © {currentYear}{' '}
                        <span className="text-slate-400 font-medium">Devitra.id</span>
                        . Hak Cipta Dilindungi.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="text-[10px] font-medium text-slate-600 uppercase tracking-widest">
                            Sistem Terenkripsi SSL
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ to, label }) {
    return (
        <li>
            <Link
                to={to}
                className="group inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-cyan-400 font-light transition-all duration-200 hover:translate-x-1"
            >
                <ChevronRight className="w-3 h-3 text-slate-700 group-hover:text-cyan-400 transition-colors duration-200" />
                {label}
            </Link>
        </li>
    );
}

function SocialIcon({ icon, href }) {
    return (
        <a
            href={href}
            className="w-9 h-9 rounded-xl border border-white/[0.07] bg-white/[0.03] flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/[0.08] transition-all duration-200 active:scale-90"
        >
            {icon}
        </a>
    );
}