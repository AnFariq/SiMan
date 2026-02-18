import Header from "../components/Header"
import Footer from "../components/Footer"

export default function About () {
    return (
        <div className="min-h-screen bg-gray-950 flex flex-col font-sans">
            <style>{`
                @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
                .animate-marquee { animation: marquee 28s linear infinite; display: inline-block; white-space: nowrap; }
            `}</style>

            <Header />

            {/* Placeholder area — tim Anda isi di sini */}
            <main className="flex-1 flex flex-col items-center justify-center gap-4 px-6 py-28 text-center">
                <span className="font-mono text-[11px] tracking-widest text-cyan-400 border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 rounded-md uppercase">
                // Tambahin konten disini, untuk tema jangan berubah ya
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-xl leading-tight">
                Lindungi Diri dari{" "}
                <span className="text-cyan-400">Ancaman Siber</span>
                </h1>
                <p className="text-gray-500 max-w-md text-sm leading-relaxed">
                Bagian ini akan diisi oleh tim Anda — hero section, daftar materi, statistik, dan konten edukasi lainnya.
                </p>
            </main>

            <Footer />
        
        </div>
    )
}

{/* Oh ya catatan untuk dovan, jika mau menambahkan class pakai "className" jadi klo pake "class" maka akan error, btw ini udah tak tambahin tailwind yak */}