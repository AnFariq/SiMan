import React, { useState, useEffect } from "react";
import { Database, Search, FileText, Layout } from "lucide-react";

export default function LoadingSingkat() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    /* PERBAIKAN: Menggunakan 'fixed inset-0' dan 'z-[9999]' agar loading 
       melayang di atas konten artikel dan tidak mendorong layout ke bawah */
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

      <div className="relative flex flex-col items-center max-w-sm w-full px-8">
        
        {/* Scanning Animation Area */}
        <div className="relative mb-12 w-24 h-24">
          <div className="absolute inset-0 flex items-center justify-center">
            <Database className="w-10 h-10 text-indigo-600 animate-[bounce_2s_infinite]" />
          </div>
          
          <div className="absolute inset-0 border-2 border-indigo-100 rounded-full animate-ping opacity-20"></div>
          <div className="absolute inset-0 border-4 border-indigo-600/10 rounded-full border-t-indigo-600 animate-spin"></div>
        </div>

        {/* Branding & Status Info */}
        <div className="text-center w-full space-y-6">
          <div className="space-y-1">
            <h2 className="text-sm font-black text-slate-900 uppercase tracking-[0.3em]">
              Fetching <span className="text-indigo-600">Article</span>
            </h2>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              Devitra Technical Database
            </p>
          </div>

          {/* Progress Section */}
          <div className="space-y-3">
            <div className="flex justify-between items-end">
              <span className="text-[10px] font-mono font-bold text-indigo-600 flex items-center gap-1">
                <Search className="w-3 h-3" /> ANALYZING_RESOURCES...
              </span>
              <span className="text-xs font-mono font-black text-slate-900">
                {progress}%
              </span>
            </div>
            
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden p-[2px] border border-slate-200 shadow-inner">
              <div 
                className="h-full bg-indigo-600 rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(79,70,229,0.5)]"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Activity Log */}
          <div className="flex items-center justify-center gap-4 py-3 border-y border-slate-100">
            <div className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-[9px] font-bold text-slate-400">INDEXING</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-200"></div>
            <div className="flex items-center gap-1.5">
              <Layout className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-[9px] font-bold text-slate-400">RENDERING</span>
            </div>
          </div>
        </div>
      </div>

      {/* Security Token Label */}
      <div className="absolute bottom-12 flex flex-col items-center gap-2">
        <div className="px-3 py-1 rounded-lg border border-slate-200 bg-white shadow-sm flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-[9px] font-mono font-bold text-slate-500 tracking-tight">TOKEN: SECURED_ENVIRONMENT</span>
        </div>
      </div>
    </div>
  );
}