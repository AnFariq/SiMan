import React, { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";

export default function LoadingSingkat() {
  const [seconds, setSeconds] = useState(1);

  // Logika Timer Mundur
  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40 -z-10" />

      <div className="relative flex flex-col items-center">
        
        {/* Animated Logo Container */}
        <div className="relative mb-10 group">
          <div className="absolute -inset-4 border-2 border-indigo-50 border-t-indigo-600 rounded-full animate-spin [animation-duration:1.5s]"></div>
          
          <div className="relative w-20 h-20 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-100">
            <ShieldCheck className="w-10 h-10 text-indigo-600 animate-pulse" />
          </div>
        </div>

        {/* Branding & Status */}
        <div className="text-center space-y-4">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Siber<span className="text-indigo-600">Aman</span>
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
                Secure Connection
              </p>
            </div>
          </div>

          {/* Tampilan Timer */}
          <div className="mt-6 flex flex-col items-center">
            <span className="text-3xl font-mono font-black text-indigo-600 tabular-nums">
              {seconds < 1 ? `${seconds}` : seconds}
            </span>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
              Seconds Remaining
            </span>
          </div>

          {/* Progress Bar Minimalis */}
          <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden relative">
            <div className="absolute inset-y-0 bg-indigo-600 rounded-full animate-progressLine"></div>
          </div>

          {/* Loading Text */}
          <div className="flex flex-col gap-1">
            <p className="text-slate-500 text-xs font-medium animate-bounce">
              Memuat Database Celah Keamanan...
            </p>
            <p className="text-slate-300 text-[10px] font-mono italic">
              Devitra.id Environment v1.0
            </p>
          </div>
        </div>
      </div>

      {/* Footer Loading */}
      <div className="absolute bottom-10">
        <p className="text-slate-300 text-[10px] uppercase tracking-widest font-bold">
          Defense Platform
        </p>
      </div>

      {/* Keyframes Custom */}
      <style>{`
        @keyframes progressLine {
          0% { left: -40%; width: 40%; }
          50% { left: 40%; width: 60%; }
          100% { left: 100%; width: 40%; }
        }
      `}</style>
    </div>
  );
}