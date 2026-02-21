import React from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Instagram, 
  Linkedin, 
  Github, 
  Mail, 
  ChevronRight,
  Globe
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="p-1.5 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-200">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                Siber<span className="text-indigo-600">Aman</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
              Platform edukasi keamanan siber terpercaya untuk masyarakat Indonesia. Membangun pertahanan digital dimulai dari kesadaran diri sendiri.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-widest mb-6">Navigasi</h4>
            <ul className="space-y-4">
              <FooterLink to="/" label="Beranda" />
              <FooterLink to="/library" label="Library Artikel" />
              <FooterLink to="/panduan-umum" label="Panduan Umum" />
              <FooterLink to="/tentang" label="Tentang Kami" />
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-widest mb-6">Kategori Utama</h4>
            <ul className="space-y-4">
              <FooterLink to="/category/social-engineering" label="Social Engineering" />
              <FooterLink to="/category/web-vulnerability" label="Web Vulnerability" />
              <FooterLink to="/category/network-security" label="Network Security" />
              <FooterLink to="/category/malware-analysis" label="Malware Analysis" />
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-widest mb-6">Legal & Kontak</h4>
            <ul className="space-y-4 mb-6">
              <FooterLink to="/privacy-policy" label="Kebijakan Privasi" />
              <FooterLink to="/privacy-policy" label="Syarat & Ketentuan" />
            </ul>
            <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 text-slate-600 mb-2">
                <Mail className="w-4 h-4 text-indigo-600" />
                <span className="text-xs font-bold">devitra.first@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Globe className="w-4 h-4 text-indigo-600" />
                <span className="text-xs font-bold">Surabaya, Indonesia</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs font-medium">
            © {currentYear} <span className="text-slate-900 font-bold">Devitra.id</span>. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-2">
             <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sistem Terenkripsi SSL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Sub-komponen untuk Link Footer
function FooterLink({ to, label }) {
  return (
    <li>
      <Link 
        to={to} 
        className="text-slate-500 hover:text-indigo-600 text-sm font-medium flex items-center gap-1 transition-all hover:translate-x-1"
      >
        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
        {label}
      </Link>
    </li>
  );
}

// Sub-komponen untuk Social Icons
function SocialIcon({ icon, href }) {
  return (
    <a 
      href={href} 
      className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-50 transition-all active:scale-90"
    >
      {icon}
    </a>
  );
}