import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, Info, ShieldCheck, ShieldQuestion } from "lucide-react"; // ShieldInfo diganti ke ShieldQuestion atau Info

export default function PanduanLengkap() {
    const steps = [
        { title: "Gunakan Kata Sandi Kuat", desc: "Minimal 12 karakter dengan kombinasi simbol, angka, dan huruf." },
        { title: "Aktifkan 2FA", desc: "Gunakan aplikasi autentikator untuk setiap akun penting Anda." },
        { title: "Update Rutin", desc: "Selalu perbarui sistem operasi dan aplikasi untuk menutup celah keamanan." },
        { title: "Waspadai Link Asing", desc: "Jangan pernah mengeklik tautan atau mengunduh file dari pengirim tak dikenal." }
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-indigo-100">
            <Header />
            <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-25">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-widest mb-6">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Standard Security Protocol
                    </div>
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
                        Panduan Umum <span className="text-indigo-600">Keamanan Siber</span>
                    </h1>
                    <p className="text-slate-500 text-lg font-medium">Langkah dasar yang wajib dilakukan setiap pengguna digital di Indonesia.</p>
                </motion.div>

                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-indigo-200 hover:bg-white hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="mt-1 p-2 bg-white rounded-xl shadow-sm group-hover:bg-indigo-600 transition-colors duration-300">
                                <CheckCircle2 className="w-6 h-6 text-indigo-600 group-hover:text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-slate-500 leading-relaxed font-medium">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Info Card - Penutup */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 p-8 bg-indigo-600 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl shadow-indigo-200"
                >
                    <ShieldQuestion className="absolute -right-4 -top-4 w-32 h-32 opacity-10 -rotate-12 text-white" />
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Info className="w-6 h-6" /> Informasi Penting
                        </h3>
                        <p className="text-indigo-100 leading-relaxed font-medium">
                            Keamanan siber bukan sekadar konfigurasi sistem, melainkan sebuah kebiasaan. Selalu waspada terhadap interaksi digital Anda adalah kunci utama perlindungan data pribadi.
                        </p>
                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}