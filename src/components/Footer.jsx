import { useState } from "react";
import {
  Shield, Menu, X, ChevronDown, BookOpen, AlertTriangle,
  Cpu, Lock, Users, Search, Terminal, Mail, Twitter,
  Github, Youtube, ArrowRight, Radio,
} from "lucide-react";

export default function Footer () {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">

      {/* Bottom bar */}
      <div className="relative border-t border-gray-800/60 px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 flex-wrap">
          <p className="font-mono text-[11px] text-gray-600">
            © 2026 <span className="text-cyan-400">SiberAman</span>. Dibuat untuk keamanan digital Indonesia.
          </p>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-gray-600">
            <Shield className="w-3 h-3 text-green-400" />
            Konten terverifikasi oleh pakar keamanan siber
          </div>
          <div className="hidden sm:flex items-center gap-5">
            {["Privasi", "Syarat", "Cookie", "Sitemap"].map((item) => (
              <a key={item} href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}