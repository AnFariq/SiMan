import { useState, useEffect } from "react";
import {
  ShieldCheck, Menu, X, ChevronDown, AlertTriangle,
  Cpu, Lock, Search, Radio, UsersRound,
  LayoutDashboard, BookOpen, Command
} from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ancamanItems = [
    { icon: AlertTriangle, label: "Social Engineering", desc: "Manipulasi psikologis" },
    { icon: Cpu,           label: "Malware Analysis",  desc: "Bedah software berbahaya" },
    { icon: Radio,         label: "Network Security",  desc: "Keamanan lalu lintas data" },
    { icon: Lock,          label: "Web Vulnerability", desc: "Celah aplikasi web" },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${
      scrolled 
      ? "bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm" 
      : "bg-white border-b border-transparent"
    }`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex items-center gap-10">
            <a href="/" className="flex items-center gap-2 group">
              <ShieldCheck className="w-6 h-6 text-indigo-600" />
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                Siber<span className="text-indigo-600">Aman</span>
              </span>
            </a>

            {/* Desktop Navigation - Clean Editorial Style */}
            <nav className="hidden md:flex items-center gap-2">
              <NavLink href="/" label="Beranda" />
              
              {/* Dropdown Dokumentasi/Artikel */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors rounded-lg hover:bg-slate-50">
                  <span>Panduan</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                </button>
                
                {/* Dropdown Menu - White & Sharp */}
                <div className="absolute top-full left-0 mt-1 w-[480px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xl grid grid-cols-2 gap-2 mt-2">
                    {ancamanItems.map((item) => (
                      <a key={item.label} href="#" className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item">
                        <div className="p-2 bg-slate-100 rounded-lg group-hover/item:bg-white group-hover/item:shadow-sm transition-all text-slate-600 group-hover/item:text-indigo-600">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{item.label}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <NavLink href="/tentang" label="Tentang Kami" />
            </nav>
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-3">
            {/* Search Bar ala W3Schools/Documentation */}
            <div className="hidden sm:flex items-center relative group">
              <Search className="absolute left-3 w-4 h-4 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
              <input 
                type="text" 
                placeholder="Cari celah sistem..." 
                className="bg-slate-50 border border-slate-200 text-sm rounded-lg py-1.5 pl-10 pr-12 w-64 focus:outline-none focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all text-slate-900"
              />
              <div className="absolute right-2 px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-mono text-slate-400">
                ⌘K
              </div>
            </div>

            <div className="h-6 w-px bg-slate-200 mx-2 hidden md:block" />

            <button className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-bold text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all active:scale-95">
              <BookOpen className="w-4 h-4" />
              <span>Library</span>
            </button>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 p-4 space-y-2 animate-in fade-in slide-in-from-top-4">
          <a href="/" className="block p-3 rounded-xl hover:bg-slate-50 text-slate-900 font-semibold">Beranda</a>
          <a href="/ancaman" className="block p-3 rounded-xl hover:bg-slate-50 text-slate-900 font-semibold">Panduan Ancaman</a>
          <a href="/tentang" className="block p-3 rounded-xl hover:bg-slate-50 text-slate-900 font-semibold">Tentang Kami</a>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, label }) {
  return (
    <a href={href} className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-all">
      {label}
    </a>
  );
}