import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <style>{`
                @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
                .animate-marquee { animation: marquee 28s linear infinite; display: inline-block; white-space: nowrap; }
            `}</style>

            <Header />

            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10 pointer-events-none" />

            <main className="flex-1 flex flex-col items-center justify-center gap-6 px-6 py-28 text-center relative">
                
                <span className="inline-flex items-center gap-2 font-medium text-[12px] tracking-tight text-indigo-600 border border-indigo-100 bg-indigo-50/50 px-4 py-1.5 rounded-full uppercase">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                    </span>
                    Edukasi Siber Terpercaya
                </span>

                <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 max-w-3xl leading-[1.1] tracking-tight">
                    Bangun Pertahanan Digital <br /> 
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500">
                        Tanpa Celah.
                    </span>
                </h1>

                <p className="text-slate-500 max-w-xl text-lg sm:text-xl leading-relaxed font-medium">
                    Pelajari cara mengenali, mencegah, dan melawan ancaman siber bersama <span className="text-slate-900 font-semibold">SiberAman</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold shadow-lg shadow-indigo-200 transition-all active:scale-95">
                        Mulai Belajar
                    </button>
                    <button className="px-8 py-3 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-full font-semibold transition-all">
                        Lihat Panduan
                    </button>
                </div>

                {/* Lanjutin bagian ini sul */}
                <div className="mt-20 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Placeholder Card 1 */}
                    <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left group">
                        <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                            <svg className="w-6 h-6 text-indigo-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Konten Sultan 1</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Sultan bisa masukkan penjelasan tentang Phishing atau topik lainnya di sini.</p>
                    </div>
                    {/* Duplikasi */}
                </div>
            </main>

            <Footer />
        </div>
    )
}

{/* Oh ya catatan untuk sultan, jika mau menambahkan class pakai "className" jadi klo pake "class" maka akan error, btw ini udah tak tambahin tailwind yak */}