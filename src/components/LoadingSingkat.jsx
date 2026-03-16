import React, { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";

export default function LoadingSingkat() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const steps = [
            { target: 40,  delay: 0,   speed: 30  },
            { target: 70,  delay: 250, speed: 50  },
            { target: 88,  delay: 500, speed: 80  },
            { target: 100, delay: 900, speed: 60  },
        ];

        const timers = steps.map(({ target, delay, speed }) =>
            setTimeout(() => {
                const interval = setInterval(() => {
                    setProgress((prev) => {
                        if (prev >= target) { clearInterval(interval); return prev; }
                        return prev + 2;
                    });
                }, speed);
                return interval;
            }, delay)
        );

        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <div className="fixed inset-0 z-[9999] bg-[#080F1E] flex flex-col items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,160,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,160,255,0.04) 1px, transparent 1px)`,
                    backgroundSize: '52px 52px'
                }}
            />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,114,255,0.1) 0%, transparent 65%)' }}
            />

            <div className="relative flex flex-col items-center gap-8 px-8">
                <div className="relative flex items-center justify-center">
                    <span className="absolute inline-flex w-20 h-20 rounded-full bg-cyan-500/10 animate-ping" />
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_0_40px_rgba(0,198,255,0.35)]">
                        <ShieldCheck className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                </div>

                <div className="text-center space-y-1.5">
                    <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-cyan-400">
                        Memuat Artikel
                    </p>
                    <p className="text-[10px] font-light tracking-widest uppercase text-slate-600">
                        SiberAman · Devitra.id
                    </p>
                </div>

                <div className="w-56 space-y-2">
                    <div className="w-full h-[3px] bg-white/[0.06] rounded-full overflow-hidden">
                        <div
                            className="h-full rounded-full transition-all duration-150 ease-out"
                            style={{
                                width: `${progress}%`,
                                background: 'linear-gradient(90deg, #0072FF, #00C6FF)',
                                boxShadow: '0 0 12px rgba(0,198,255,0.6)',
                            }}
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] font-mono text-slate-600">{progress}%</span>
                        <span className="flex items-center gap-1.5 text-[10px] text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            SSL Secured
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}