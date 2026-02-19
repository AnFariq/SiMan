import { 
  ShieldCheck, 
  Github, 
  Twitter, 
  Youtube, 
  Mail, 
  ExternalLink,
  Lock,
  ArrowUpRight
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-6 group">
              <ShieldCheck className="w-6 h-6 text-indigo-600" />
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                Siber<span className="text-indigo-600">Aman</span>
              </span>
            </a>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              Pusat panduan dan edukasi celah keamanan sistem untuk masyarakat Indonesia. Dibangun dengan standar dokumentasi modern.
            </p>
            <div className="flex items-center gap-3">
              <SocialIcon icon={<Github className="w-4 h-4" />} />
              <SocialIcon icon={<Twitter className="w-4 h-4" />} />
              <SocialIcon icon={<Youtube className="w-4 h-4" />} />
              <SocialIcon icon={<Mail className="w-4 h-4" />} />
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:ml-auto">
            <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-4">
              <FooterLink label="Beranda" href="/" />
              <FooterLink label="Panduan Celah" href="/ancaman" />
              <FooterLink label="Tentang Kami" href="/tentang" />
              <FooterLink label="Library" href="/materi" />
            </ul>
          </div>

          <div className="md:ml-auto">
            <h4 className="text-slate-900 font-bold mb-6 text-sm uppercase tracking-wider">Sumber Daya</h4>
            <ul className="space-y-4">
              <FooterLink label="Dokumentasi" href="#" />
              <FooterLink label="Cara Mengatasi" href="#" />
              <FooterLink label="Laporan Isu" href="#" isExternal />
              <FooterLink label="Komunitas" href="#" isExternal />
            </ul>
          </div>

          {/* Status Column - Light Version */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h4 className="text-slate-900 font-bold mb-4 text-sm flex items-center gap-2">
              <Lock className="w-4 h-4 text-indigo-600" />
              Status Update
            </h4>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs text-slate-700 font-semibold">Database Terupdate</span>
            </div>
            <p className="text-[12px] text-slate-500 leading-relaxed">
              Tim <span className="text-slate-900 font-medium">Devitra.id</span> memperbarui data kerentanan setiap minggu untuk memastikan panduan tetap relevan.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[13px] text-slate-500 flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <span>© {currentYear} SiberAman oleh <span className="text-slate-900 font-semibold underline decoration-indigo-500/30 underline-offset-4">Devitra.id</span></span>
            <div className="flex gap-4 font-medium">
              <a href="#" className="hover:text-indigo-600 transition-colors">Privasi</a>
              <a href="#" className="hover:text-indigo-600 transition-colors">Ketentuan</a>
            </div>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.1em]">
              Verified Education Content
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ label, href, isExternal }) {
  return (
    <li>
      <a 
        href={href} 
        className="text-sm text-slate-500 hover:text-indigo-600 font-medium flex items-center gap-1 transition-colors group"
      >
        {label}
        {isExternal && <ArrowUpRight className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />}
      </a>
    </li>
  );
}

function SocialIcon({ icon }) {
  return (
    <a href="#" className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-indigo-600 hover:border-indigo-600/30 hover:bg-indigo-50 transition-all shadow-sm">
      {icon}
    </a>
  );
}