import React, { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";

export default function LoadingScreen({ onComplete }) {
    const [seconds, setSeconds]     = useState(5);
    const [progress, setProgress]   = useState(0);
    const [phase, setPhase]         = useState(0); 

    useEffect(() => {
        if (seconds > 0) {
            const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
            return () => clearTimeout(t);
        }
    }, [seconds]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((p) => {
                if (p >= 100) { clearInterval(interval); return 100; }
                const step = p < 60 ? 3 : p < 85 ? 1.5 : 0.8;
                return Math.min(p + step, 100);
            });
        }, 50);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const t1 = setTimeout(() => setPhase(1), 800);
        const t2 = setTimeout(() => setPhase(2), 3500);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    const statusLines = [
        "Initializing secure environment...",
        "Loading threat database...",
        "Establishing SSL connection...",
        "Ready.",
    ];
    const activeLines = Math.min(Math.floor((progress / 100) * statusLines.length) + 1, statusLines.length);

    return (
        <div className="fixed inset-0 z-[9999] bg-[#080F1E] flex flex-col items-center justify-center overflow-hidden select-none">

            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,160,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,160,255,0.04) 1px, transparent 1px)`,
                    backgroundSize: '52px 52px'
                }}
            />

            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none transition-opacity duration-1000"
                style={{
                    background: 'radial-gradient(circle, rgba(0,114,255,0.12) 0%, transparent 65%)',
                    opacity: phase >= 1 ? 1 : 0,
                }}
            />

            <div
                className="absolute left-0 right-0 h-px pointer-events-none transition-opacity duration-500"
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(0,198,255,0.4), transparent)',
                    opacity: phase === 1 ? 1 : 0,
                    animation: phase === 1 ? 'scanLine 2s ease-in-out infinite' : 'none',
                }}
            />

            <style>{`
                @keyframes scanLine {
                    0%   { top: 10%; }
                    50%  { top: 90%; }
                    100% { top: 10%; }
                }
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(8px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .fade-slide-up {
                    animation: fadeSlideUp 0.4s ease forwards;
                }
            `}</style>

            <div className="relative flex flex-col items-center gap-10 px-8 w-full max-w-xs">
                <div className="relative flex items-center justify-center">
                    <span
                        className="absolute w-28 h-28 rounded-full border border-cyan-500/10 transition-all duration-1000"
                        style={{ transform: phase >= 1 ? 'scale(1)' : 'scale(0.6)', opacity: phase >= 1 ? 1 : 0 }}
                    />
                    <span
                        className="absolute w-20 h-20 rounded-full border border-cyan-500/15 animate-ping"
                        style={{ animationDuration: '2s', opacity: phase >= 1 ? 0.6 : 0 }}
                    />
                    <div
                        className="absolute w-24 h-24 rounded-full border-2 border-transparent border-t-cyan-400 animate-spin"
                        style={{ animationDuration: '1.2s', opacity: phase >= 1 ? 1 : 0, transition: 'opacity 0.5s' }}
                    />
                    <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-700"
                        style={{
                            background: 'linear-gradient(135deg, #0063E5, #00C6FF)',
                            boxShadow: phase >= 2
                                ? '0 0 48px rgba(0,198,255,0.55)'
                                : '0 0 24px rgba(0,114,255,0.35)',
                            transform: phase >= 1 ? 'scale(1)' : 'scale(0.8)',
                            opacity: phase >= 0 ? 1 : 0,
                        }}
                    >
                        <ShieldCheck className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                </div>

                <div
                    className="text-center fade-slide-up"
                    style={{ animationDelay: '0.3s', opacity: 0 }}
                >
                    <h2 className="text-2xl font-bold text-slate-50 tracking-tight mb-1.5">
                        Siber<span className="text-cyan-400">Aman</span>
                    </h2>
                    <div className="flex items-center justify-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <p className="text-[10px] font-medium text-slate-500 uppercase tracking-[0.25em]">
                            Secure Connection
                        </p>
                    </div>
                </div>

                <div className="w-full space-y-3 fade-slide-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
                    {/* Progress bar */}
                    <div className="w-full h-[3px] bg-white/[0.06] rounded-full overflow-hidden">
                        <div
                            className="h-full rounded-full transition-all duration-100 ease-out"
                            style={{
                                width: `${progress}%`,
                                background: 'linear-gradient(90deg, #0072FF, #00C6FF)',
                                boxShadow: '0 0 10px rgba(0,198,255,0.7)',
                            }}
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-[10px] font-mono text-slate-600 tabular-nums">
                            {Math.floor(progress)}%
                        </span>
                        <div className="flex items-center gap-1.5">
                            <span className="text-[11px] font-mono font-bold text-cyan-400 tabular-nums">
                                {seconds}s
                            </span>
                            <span className="text-[10px] text-slate-600">remaining</span>
                        </div>
                    </div>
                </div>

                <div
                    className="w-full space-y-2 fade-slide-up"
                    style={{ animationDelay: '0.7s', opacity: 0 }}
                >
                    {statusLines.slice(0, activeLines).map((line, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2.5 fade-slide-up"
                            style={{ animationDelay: `${i * 0.15}s` }}
                        >
                            <span
                                className={`w-1 h-1 rounded-full flex-shrink-0 ${
                                    i === activeLines - 1 && progress < 100
                                        ? 'bg-cyan-400 animate-pulse'
                                        : 'bg-emerald-500'
                                }`}
                            />
                            <span className={`text-[11px] font-mono ${
                                i === activeLines - 1 && progress < 100
                                    ? 'text-slate-400'
                                    : 'text-slate-600'
                            }`}>
                                {line}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-10 flex flex-col items-center gap-1.5 fade-slide-up" style={{ animationDelay: '0.9s', opacity: 0 }}>
                <p className="text-[9px] font-mono text-slate-700 uppercase tracking-[0.3em]">
                    Devitra.id · Defense Platform v1.0
                </p>
            </div>
        </div>
    );
}