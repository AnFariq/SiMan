import { useState } from "react";
import {
  Shield, Menu, X, ChevronDown, BookOpen, AlertTriangle,
  Cpu, Lock, Users, Search, Terminal, Mail, Twitter,
  Github, Youtube, ArrowRight, Radio,
  PersonStanding,
  UsersRound,
} from "lucide-react";
import { href } from "react-router-dom";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ancamanOpen, setAncamanOpen] = useState(false);
  const [materiOpen, setMateriOpen] = useState(false);

  const ancamanItems = [
    { icon: AlertTriangle, label: "Phishing & Social Engineering", desc: "Teknik manipulasi pengguna",      color: "text-red-400" },
    { icon: Cpu,           label: "Malware & Ransomware",          desc: "Perangkat lunak berbahaya",       color: "text-orange-400" },
    { icon: Radio,         label: "DDoS & Network Attack",         desc: "Serangan jaringan terdistribusi", color: "text-yellow-400" },
    { icon: Lock,          label: "SQL Injection & XSS",           desc: "Kerentanan aplikasi web",         color: "text-cyan-400" },
  ];

  const materiItems = [
    { icon: BookOpen, label: "Panduan Pemula",  desc: "Mulai dari dasar keamanan siber" },
    { icon: Terminal, label: "Lab Interaktif",  desc: "Praktik langsung di lingkungan aman", badge: "NEW" },
    { icon: Users,    label: "Forum Diskusi",   desc: "Belajar bersama komunitas" },
  ];

  const ticker = [
    "SIAGA: Serangan phishing meningkat 34% di Q1 2025",
    "UPDATE: Celah CVE-2025-0187 ditemukan pada OpenSSL",
    "INFO: Workshop Keamanan Siber — Jakarta, 25 Feb 2025",
    "ALERT: Kampanye malware baru menargetkan pengguna Indonesia",
  ];
  const marquee = [...ticker, ...ticker].join("   ·   ");

  return (
    <header className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur border-b border-gray-800">

      {/* Top glow scan line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />

      {/* Live ticker */}
      <div className="bg-gray-900/60 border-b border-gray-800/60 px-4 py-1.5 flex items-center gap-3 overflow-hidden">
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
        </span>
        <span className="font-mono text-[10px] text-green-400 tracking-widest flex-shrink-0">LIVE</span>
        <span className="text-gray-700 text-xs flex-shrink-0">|</span>
        <div className="overflow-hidden flex-1 relative">
          <p className="font-mono text-[10px] text-gray-400 animate-marquee whitespace-nowrap">
            {marquee}
          </p>
        </div>
      </div>

      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-6">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 flex-shrink-0 group">
          <div className="relative w-10 h-10 flex items-center justify-center bg-gray-900 border border-cyan-500/50 rounded-lg shadow-[0_0_14px_rgba(0,212,255,0.18)] group-hover:shadow-[0_0_22px_rgba(0,212,255,0.35)] transition-shadow">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_5px_#4ade80]" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-mono text-[17px] font-bold text-white tracking-tight">
              Siber<span className="text-cyan-400">Aman</span>
            </span>
            <span className="font-mono text-[9px] text-green-400 tracking-[0.18em] uppercase mt-0.5">
              Platform Edukasi
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex items-center gap-0.5 flex-1"
          onMouseLeave={() => { setAncamanOpen(false); setMateriOpen(false); }}
        >
          <a href="/"
            className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5 border border-transparent hover:border-cyan-400/20 transition-all">
            Beranda
          </a>

          {/* Ancaman dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5 border border-transparent hover:border-cyan-400/20 transition-all"
              onMouseEnter={() => { setAncamanOpen(true); setMateriOpen(false); }}
            >
              <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
              Ancaman Siber
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${ancamanOpen ? "rotate-180" : ""}`} />
              <span className="font-mono text-[9px] font-bold bg-red-500 text-white px-1.5 py-px rounded-sm ml-0.5">
                PENTING
              </span>
            </button>
            {ancamanOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-xl p-2 shadow-2xl shadow-black/60 z-50"
                onMouseEnter={() => setAncamanOpen(true)}
                onMouseLeave={() => setAncamanOpen(false)}
              >
                <div className="absolute -top-1.5 left-5 w-3 h-3 bg-gray-900 border-l border-t border-gray-700 rotate-45" />
                {ancamanItems.map(({ icon: Icon, label, desc, color }) => (
                  <a key={label} href="#"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-cyan-400/5 transition-colors group/item">
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-800 border border-gray-700 group-hover/item:border-cyan-400/30 rounded-lg flex-shrink-0 transition-colors">
                      <Icon className={`w-4 h-4 ${color}`} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-200">{label}</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">{desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/tentang"
            className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5 border border-transparent hover:border-cyan-400/20 transition-all">
            Tentang
          </a>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 ml-auto">
          <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-gray-900 border border-gray-700 hover:border-cyan-400/40 rounded-md font-mono text-[11px] text-gray-500 hover:text-cyan-400 transition-all">
            <Search className="w-3.5 h-3.5" />
            Cari...
            <span className="bg-gray-800 text-gray-600 text-[9px] px-1.5 py-px rounded border border-gray-700 font-mono">
              ⌘K
            </span>
          </button>

          {/* Burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-9 h-9 bg-gray-900 border border-gray-700 hover:border-cyan-400/40 rounded-md text-gray-400 hover:text-cyan-400 transition-all"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-800 px-4 pt-4 pb-6 space-y-1">
          <p className="font-mono text-[9px] tracking-widest text-gray-600 uppercase px-2 mb-2">Navigasi</p>
          {[
            { href: "/",          icon: Shield,         label: "Beranda" },
            { href: "/ancaman",   icon: AlertTriangle,  label: "Ancaman Siber" },
            { href: "/tentang",   icon: UsersRound, label: "Tentang Kami"}
          ].map(({ href, icon: Icon, label }) => (
            <a key={label} href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5 border border-transparent hover:border-cyan-400/20 transition-all">
              <Icon className="w-4 h-4 text-cyan-400" />
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}