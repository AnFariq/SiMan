import { useState, useEffect, useCallback } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  ShieldCheck,
  Menu,
  X,
  ChevronDown,
  AlertTriangle,
  Cpu,
  Lock,
  Search,
  Radio,
  BookOpen
} from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Menggunakan useCallback untuk stabilitas fungsi saat scroll
  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    if (offset > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    // Tambahkan passive: true untuk performa scroll yang lebih baik di mobile
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;
  const isPanduanActive = location.pathname.startsWith("/category");

  const ancamanItems = [
    { icon: AlertTriangle, label: "Social Engineering", href: "/category/social-engineering", desc: "Manipulasi psikologis" },
    { icon: Cpu, label: "Malware Analysis", href: "/category/malware-analysis", desc: "Bedah software berbahaya" },
    { icon: Radio, label: "Network Security", href: "/category/network-security", desc: "Keamanan lalu lintas data" },
    { icon: Lock, label: "Web Vulnerability", href: "/category/web-vulnerability", desc: "Celah aplikasi web" },
  ];

  return (
    // Gunakan 'fixed' alih-alih 'sticky' jika parent container bermasalah dengan height
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled 
      ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-md py-0" 
      : "bg-white border-b border-transparent py-2"
    }`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="p-1 bg-indigo-600 rounded-lg group-hover:bg-indigo-500 transition-colors shadow-lg">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                Siber<span className="text-indigo-600">Aman</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              <NavLink to="/" label="Beranda" active={isActive("/")} />
              
              <div className="relative group">
                <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all rounded-lg hover:bg-slate-50 ${
                  isPanduanActive ? "text-indigo-600 bg-indigo-50/50" : "text-slate-600"
                }`}>
                  <span>Category</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform group-hover:rotate-180 ${isPanduanActive ? "text-indigo-600" : "text-slate-400"}`} />
                </button>
                
                <div className="absolute top-full left-0 mt-0 w-[480px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xl grid grid-cols-2 gap-2 mt-4">
                    {ancamanItems.map((item) => (
                      <Link 
                        key={item.label} 
                        to={item.href} 
                        className={`flex items-start gap-3 p-3 rounded-xl transition-all group/item ${
                          isActive(item.href) ? "bg-indigo-50" : "hover:bg-slate-50"
                        }`}
                      >
                        <div className={`p-2 rounded-lg transition-all ${
                          isActive(item.href) 
                          ? "bg-white shadow-sm text-indigo-600" 
                          : "bg-slate-100 text-slate-500 group-hover/item:bg-white group-hover/item:text-indigo-600"
                        }`}>
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className={`text-sm font-bold ${isActive(item.href) ? "text-indigo-600" : "text-slate-900"}`}>{item.label}</p>
                          <p className="text-[10px] text-slate-400 font-medium mt-0.5">{item.desc}</p>
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

            <div className="h-6 w-px bg-slate-200 mx-1 hidden md:block" />

            <Link 
              to="/library" 
              className={`hidden md:flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl transition-all active:scale-95 ${
                isActive("/library") 
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" 
                : "text-indigo-600 bg-indigo-50 hover:bg-indigo-100"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Library</span>
            </Link>

            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-[110] transition-all duration-300 ${
        mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}>
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 p-6 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-slate-900">Menu</span>
              <button onClick={() => setMobileOpen(false)}><X className="w-5 h-5 text-slate-400" /></button>
            </div>
            <MobileNavLink to="/" label="Beranda" active={isActive("/")} />
            <MobileNavLink to="/tentang" label="Tentang Kami" active={isActive("/tentang")} />
            <MobileNavLink to="/library" label="Perpustakaan" active={isActive("/library")} />
            <div className="h-px bg-slate-100 my-4" />
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-3">Kategori</h3>
            {ancamanItems.map((item) => (
              <MobileNavLink key={item.label} to={item.href} label={item.label} active={isActive(item.href)} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, label, active }) {
  return (
    <Link 
      to={to} 
      className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
        active 
        ? "text-indigo-600 bg-indigo-50/50" 
        : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
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
      className={`block p-3 rounded-xl text-sm font-bold transition-all ${
        active 
        ? "bg-indigo-600 text-white shadow-lg" 
        : "text-slate-600 hover:bg-slate-50"
      }`}
    >
      {label}
    </Link>
  );
}