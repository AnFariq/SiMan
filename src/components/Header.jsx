import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { useLocation, Link } from "react-router-dom";
import {
    ShieldCheck,
    Menu,
    X,
    ChevronDown,
    AlertTriangle,
    Cpu,
    Lock,
    Radio,
    BookOpen
} from "lucide-react";

const ancamanItems = [
    { icon: AlertTriangle, label: "Social Engineering", href: "/category/social-engineering", desc: "Manipulasi psikologis" },
    { icon: Cpu,           label: "Malware Analysis",   href: "/category/malware-analysis",   desc: "Bedah software berbahaya" },
    { icon: Radio,         label: "Network Security",   href: "/category/network-security",   desc: "Keamanan lalu lintas data" },
    { icon: Lock,          label: "Web Vulnerability",  href: "/category/web-vulnerability",  desc: "Celah aplikasi web" },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled]     = useState(false);
    const location = useLocation();

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > 20);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    useEffect(() => { setMobileOpen(false); }, [location]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    const isActive        = (path) => location.pathname === path;
    const isPanduanActive = location.pathname.startsWith("/category");

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
                scrolled
                    ? "bg-[#080F1E]/90 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                    : "bg-transparent border-b border-transparent"
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">

                        <div className="flex items-center gap-10">
                            <Link to="/" className="flex items-center gap-2.5 group">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_0_16px_rgba(0,198,255,0.35)] group-hover:shadow-[0_0_24px_rgba(0,198,255,0.55)] transition-all duration-300">
                                    <ShieldCheck className="w-4 h-4 text-white" strokeWidth={2.5} />
                                </div>
                                <span className="text-[18px] font-bold text-slate-100 tracking-tight">
                                    Siber<span className="text-cyan-400">Aman</span>
                                </span>
                            </Link>

                            <nav className="hidden md:flex items-center gap-1">
                                <NavLink to="/" label="Beranda" active={isActive("/")} />

                                <div className="relative group">
                                    <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                                        hover:bg-white/[0.06] hover:text-slate-100
                                        ${isPanduanActive ? "text-cyan-400 bg-cyan-500/[0.08]" : "text-slate-400"}`}>
                                        Category
                                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180
                                            ${isPanduanActive ? "text-cyan-400" : "text-slate-500"}`} />
                                    </button>

                                    <div className="absolute top-full left-0 mt-3 w-[460px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                                        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
                                        <div className="bg-[#0D1B30]/95 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-3 shadow-[0_16px_48px_rgba(0,0,0,0.6)] grid grid-cols-2 gap-2">
                                            {ancamanItems.map((item) => (
                                                <Link
                                                    key={item.label}
                                                    to={item.href}
                                                    className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-200 group/item
                                                        ${isActive(item.href)
                                                            ? "bg-cyan-500/[0.1] border border-cyan-500/20"
                                                            : "hover:bg-white/[0.05] border border-transparent hover:border-white/[0.06]"
                                                        }`}
                                                >
                                                    <div className={`p-2 rounded-lg transition-all duration-200 flex-shrink-0
                                                        ${isActive(item.href)
                                                            ? "bg-cyan-500/20 text-cyan-400"
                                                            : "bg-white/[0.05] text-slate-500 group-hover/item:bg-cyan-500/10 group-hover/item:text-cyan-400"
                                                        }`}>
                                                        <item.icon className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <p className={`text-sm font-medium ${isActive(item.href) ? "text-cyan-400" : "text-slate-200"}`}>
                                                            {item.label}
                                                        </p>
                                                        <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <NavLink to="/tentang" label="Tentang Kami" active={isActive("/tentang")} />
                            </nav>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="h-5 w-px bg-white/10 mx-1 hidden md:block" />

                            <Link
                                to="/library"
                                className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 active:scale-95
                                    ${isActive("/library")
                                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_24px_rgba(0,114,255,0.35)]"
                                        : "text-cyan-400 border border-cyan-500/25 bg-cyan-500/[0.08] hover:bg-cyan-500/[0.15] hover:border-cyan-500/40 hover:shadow-[0_0_16px_rgba(0,198,255,0.2)]"
                                    }`}
                            >
                                <BookOpen className="w-4 h-4" />
                                Library
                            </Link>

                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="md:hidden p-2 text-slate-400 hover:text-slate-100 hover:bg-white/[0.06] rounded-xl transition-all duration-200"
                                aria-label="Toggle menu"
                            >
                                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {createPortal(
                <div
                    className={`md:hidden fixed inset-0 transition-all duration-300 ${
                        mobileOpen
                            ? "opacity-100 visible pointer-events-auto"
                            : "opacity-0 invisible pointer-events-none"
                    }`}
                    style={{ zIndex: 9999 }}
                >
                    <div
                        className="absolute inset-0 bg-[#080F1E]/80 backdrop-blur-sm"
                        onClick={() => setMobileOpen(false)}
                    />

                    <div
                        className={`absolute right-0 top-0 h-full w-72 bg-[#0D1B30] border-l border-white/[0.08] shadow-2xl flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                            ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
                    >
                        <div className="flex justify-between items-center px-6 py-5 border-b border-white/[0.07]">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                                    <ShieldCheck className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                                </div>
                                <span className="text-sm font-bold text-slate-100">SiberAman</span>
                            </div>
                            <button
                                onClick={() => setMobileOpen(false)}
                                className="p-1.5 text-slate-500 hover:text-slate-200 hover:bg-white/[0.06] rounded-lg transition-all"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-1 px-4 py-4 flex-1 overflow-y-auto">
                            <MobileNavLink to="/"        label="Beranda"      active={isActive("/")} />
                            <MobileNavLink to="/tentang" label="Tentang Kami" active={isActive("/tentang")} />
                            <MobileNavLink to="/library" label="Perpustakaan" active={isActive("/library")} />

                            <div className="h-px bg-white/[0.07] my-3" />

                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 px-3">Kategori</p>
                            {ancamanItems.map((item) => (
                                <MobileNavLink key={item.label} to={item.href} label={item.label} active={isActive(item.href)} />
                            ))}
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}

function NavLink({ to, label, active }) {
    return (
        <Link
            to={to}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                ${active
                    ? "text-cyan-400 bg-cyan-500/[0.08]"
                    : "text-slate-400 hover:text-slate-100 hover:bg-white/[0.06]"
                }`}
        >
            {label}
        </Link>
    );
}

function MobileNavLink({ to, label, active }) {
    return (
        <Link
            to={to}
            className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                ${active
                    ? "bg-gradient-to-r from-blue-600/80 to-cyan-500/80 text-white shadow-[0_0_16px_rgba(0,114,255,0.25)]"
                    : "text-slate-400 hover:text-slate-100 hover:bg-white/[0.05]"
                }`}
        >
            {label}
        </Link>
    );
}