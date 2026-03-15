import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    Info,
    ShieldCheck,
    ShieldQuestion,
    Lock,
    Eye,
    Wifi,
    HardDrive,
    AlertTriangle,
    KeyRound,
    Smartphone,
    RefreshCw,
    Link2,
    Mail,
    Server,
    ChevronRight,
} from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const mainSteps = [
    {
        icon: KeyRound,
        title: "Gunakan Kata Sandi Kuat & Unik",
        desc: "Gunakan minimal 12 karakter yang mengombinasikan huruf besar, huruf kecil, angka, dan simbol khusus. Jangan pernah menggunakan kata sandi yang sama di lebih dari satu akun.",
        tip: "Gunakan password manager seperti Bitwarden atau 1Password untuk menyimpan dan membuat kata sandi unik di setiap platform.",
    },
    {
        icon: Smartphone,
        title: "Aktifkan Two-Factor Authentication (2FA)",
        desc: "Tambahkan lapisan keamanan kedua pada semua akun penting Anda. Bahkan jika kata sandi Anda bocor, penyerang tidak bisa masuk tanpa kode autentikasi kedua.",
        tip: "Gunakan aplikasi autentikator seperti Google Authenticator atau Authy. Hindari 2FA berbasis SMS jika memungkinkan karena rentan terhadap SIM Swapping.",
    },
    {
        icon: RefreshCw,
        title: "Selalu Perbarui Sistem & Aplikasi",
        desc: "Pembaruan perangkat lunak tidak hanya membawa fitur baru, tapi juga menutup celah keamanan yang ditemukan oleh peneliti. Menunda pembaruan berarti membiarkan pintu terbuka bagi penyerang.",
        tip: "Aktifkan pembaruan otomatis pada sistem operasi dan browser Anda. Untuk server, tetapkan jadwal maintenance rutin setiap bulan.",
    },
    {
        icon: Link2,
        title: "Waspadai Tautan & Lampiran Mencurigakan",
        desc: "Phishing adalah metode serangan terpopuler. Penyerang menyamar sebagai entitas terpercaya untuk mencuri kredensial atau menyebarkan malware melalui tautan atau file berbahaya.",
        tip: "Hover pada tautan untuk melihat URL aslinya sebelum mengklik. Gunakan tools seperti VirusTotal untuk memindai file sebelum diunduh.",
    },
    {
        icon: Wifi,
        title: "Berhati-hati dengan Jaringan Publik",
        desc: "Wi-Fi publik di kafe, bandara, atau hotel sangat rentan terhadap serangan Man-in-the-Middle (MitM). Penyerang bisa mencegat data yang Anda kirim tanpa Anda sadari.",
        tip: "Gunakan VPN terpercaya saat terhubung ke jaringan publik. Hindari mengakses akun perbankan atau informasi sensitif di jaringan publik.",
    },
    {
        icon: HardDrive,
        title: "Backup Data Secara Berkala",
        desc: "Ransomware dan kegagalan hardware bisa menghancurkan data penting Anda dalam hitungan menit. Backup yang konsisten adalah satu-satunya cara memastikan pemulihan data.",
        tip: "Terapkan strategi 3-2-1: 3 salinan data, 2 media berbeda, 1 disimpan di lokasi terpisah (cloud). Uji restore backup Anda secara berkala.",
    },
];

const advancedTips = [
    {
        icon: Eye,
        title: "Monitor Aktivitas Akun",
        desc: "Aktifkan notifikasi login dan secara rutin periksa riwayat aktivitas akun Anda di semua platform penting. Respons cepat saat ada akses mencurigakan adalah kunci.",
    },
    {
        icon: Mail,
        title: "Verifikasi Identitas Pengirim Email",
        desc: "Periksa alamat email pengirim secara mendetail. Domain palsu seperti 'paypa1.com' atau 'g00gle.com' sering digunakan dalam serangan spear phishing yang ditargetkan.",
    },
    {
        icon: Lock,
        title: "Enkripsi Data Sensitif",
        desc: "Enkripsi disk penuh (Full Disk Encryption) seperti BitLocker atau FileVault memastikan data Anda tidak bisa dibaca meski perangkat dicuri secara fisik.",
    },
    {
        icon: Server,
        title: "Pisahkan Jaringan Kerja & Personal",
        desc: "Gunakan VLAN atau router terpisah untuk perangkat IoT dan perangkat kerja. Satu perangkat yang terkompromi tidak akan langsung mengancam seluruh jaringan.",
    },
];

const threats = [
    { label: "Phishing",      desc: "Email/pesan palsu yang mencuri kredensial",     color: "text-red-400 bg-red-500/10 border-red-500/20" },
    { label: "Ransomware",    desc: "Malware yang mengenkripsi dan menyandera data",  color: "text-rose-400 bg-rose-500/10 border-rose-500/20" },
    { label: "MitM Attack",   desc: "Penyadapan komunikasi di jaringan",              color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
    { label: "SQL Injection",  desc: "Manipulasi database melalui input berbahaya",   color: "text-orange-400 bg-orange-500/10 border-orange-500/20" },
    { label: "Social Engineering", desc: "Manipulasi psikologis untuk mencuri data", color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20" },
    { label: "Zero-Day",      desc: "Eksploitasi celah yang belum ditambal",          color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
];

export default function PanduanLengkap() {
    return (
        <div className="min-h-screen bg-[#080F1E] text-slate-100 font-sans relative overflow-hidden">
            <div
                className="fixed inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,160,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,160,255,0.04) 1px, transparent 1px)`,
                    backgroundSize: '52px 52px'
                }}
            />
            <div
                className="fixed -top-64 -right-48 w-[700px] h-[700px] rounded-full pointer-events-none z-0"
                style={{ background: 'radial-gradient(circle, rgba(0,80,255,0.13) 0%, transparent 65%)' }}
            />
            <div
                className="fixed -bottom-32 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
                style={{ background: 'radial-gradient(circle, rgba(0,200,255,0.07) 0%, transparent 65%)' }}
            />

            <Header />

            <main className="relative z-10 max-w-4xl mx-auto w-full px-6 py-28">

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-[11px] font-medium tracking-widest uppercase text-cyan-400 border border-cyan-500/25 bg-cyan-500/[0.08] mb-8"
                    >
                        <motion.span
                            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        Standard Security Protocol
                    </motion.span>

                    <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-50 leading-[1.05] mb-6">
                        Panduan Umum{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Keamanan Siber
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                        Langkah dasar yang wajib dilakukan setiap pengguna digital. Keamanan siber bukan sekadar urusan IT — ini adalah tanggung jawab setiap individu yang hidup di era digital.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <p className="inline-flex items-center gap-2.5 text-[11px] font-medium text-cyan-400 tracking-widest uppercase mb-4">
                        <span className="block w-5 h-px bg-cyan-400" />
                        Kenali Ancamannya
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-50 tracking-tight mb-3">
                        Ancaman Siber yang Paling Umum
                    </h2>
                    <p className="text-slate-400 font-light text-[15px] leading-relaxed mb-8 max-w-2xl">
                        Sebelum bisa melindungi diri, Anda perlu memahami musuh yang dihadapi. Berikut ancaman paling sering menyerang pengguna digital Indonesia.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {threats.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07, duration: 0.45 }}
                                className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.03] hover:border-white/[0.12] transition-all duration-200"
                            >
                                <span className={`mt-0.5 px-2 py-0.5 rounded-md text-[10px] font-medium border flex-shrink-0 ${t.color}`}>
                                    {t.label}
                                </span>
                                <p className="text-slate-500 text-xs leading-relaxed font-light">{t.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent mb-20" />

                <div className="mb-20">
                    <p className="inline-flex items-center gap-2.5 text-[11px] font-medium text-cyan-400 tracking-widest uppercase mb-4">
                        <span className="block w-5 h-px bg-cyan-400" />
                        Langkah Perlindungan
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-50 tracking-tight mb-3">
                        6 Kebiasaan Wajib Pengguna Digital
                    </h2>
                    <p className="text-slate-400 font-light text-[15px] leading-relaxed mb-10 max-w-2xl">
                        Terapkan enam kebiasaan ini secara konsisten untuk membangun pertahanan digital yang solid.
                    </p>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="space-y-4"
                    >
                        {mainSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative flex items-start gap-5 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:border-cyan-500/25 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                                    <span className="text-[10px] font-bold text-slate-600 tabular-nums">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-all duration-300">
                                        <step.icon className="w-5 h-5 text-cyan-400" strokeWidth={1.8} />
                                    </div>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-[17px] font-semibold text-slate-100 mb-2 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed font-light mb-3">
                                        {step.desc}
                                    </p>
                                    <div className="flex items-start gap-2 p-3 rounded-xl bg-cyan-500/[0.05] border border-cyan-500/10">
                                        <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-wider flex-shrink-0 mt-0.5">Tip</span>
                                        <p className="text-slate-500 text-xs leading-relaxed font-light">{step.tip}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent mb-20" />

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <p className="inline-flex items-center gap-2.5 text-[11px] font-medium text-cyan-400 tracking-widest uppercase mb-4">
                        <span className="block w-5 h-px bg-cyan-400" />
                        Tingkat Lanjut
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-50 tracking-tight mb-3">
                        Tips Keamanan Tingkat Lanjut
                    </h2>
                    <p className="text-slate-400 font-light text-[15px] leading-relaxed mb-10 max-w-2xl">
                        Setelah menguasai dasar-dasarnya, tingkatkan perlindungan Anda dengan langkah-langkah berikut.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {advancedTips.map((tip, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:border-cyan-500/25 hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-all duration-300">
                                    <tip.icon className="w-5 h-5 text-cyan-400" strokeWidth={1.8} />
                                </div>
                                <h3 className="text-[16px] font-semibold text-slate-100 mb-2 tracking-tight">{tip.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed font-light">{tip.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent mb-20" />

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <p className="inline-flex items-center gap-2.5 text-[11px] font-medium text-red-400 tracking-widest uppercase mb-4">
                        <span className="block w-5 h-px bg-red-400" />
                        Jika Terjadi Insiden
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-50 tracking-tight mb-3">
                        Respons Darurat: Apa yang Harus Dilakukan?
                    </h2>
                    <p className="text-slate-400 font-light text-[15px] leading-relaxed mb-8 max-w-2xl">
                        Jika Anda merasa akun atau perangkat telah disusupi, bertindak cepat adalah segalanya. Ikuti langkah berikut secara urut.
                    </p>

                    <div className="space-y-3">
                        {[
                            { step: "01", action: "Putuskan koneksi internet segera", detail: "Cabut kabel LAN atau matikan Wi-Fi untuk mencegah penyebar malware atau pencurian data lebih lanjut." },
                            { step: "02", action: "Ganti semua kata sandi dari perangkat lain", detail: "Gunakan perangkat yang aman (HP lain/komputer lain) untuk mengubah kata sandi akun email, media sosial, dan perbankan." },
                            { step: "03", action: "Aktifkan 2FA di semua akun penting", detail: "Segera aktifkan two-factor authentication jika belum, untuk mencegah akses ulang oleh penyerang." },
                            { step: "04", action: "Jalankan pemindaian malware penuh", detail: "Gunakan antivirus terpercaya (Malwarebytes, Kaspersky, Windows Defender) untuk memindai seluruh perangkat." },
                            { step: "05", action: "Laporkan insiden ke pihak terkait", detail: "Hubungi BSSN (Badan Siber dan Sandi Negara) di bssn.go.id atau lapor ke platform yang terdampak untuk investigasi lebih lanjut." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.45 }}
                                className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.06] bg-white/[0.03] hover:border-red-500/20 hover:bg-red-500/[0.02] transition-all duration-200 group"
                            >
                                <span className="text-[11px] font-bold text-red-400/70 tabular-nums flex-shrink-0 mt-0.5">{item.step}</span>
                                <div>
                                    <p className="text-sm font-medium text-slate-200 mb-1 group-hover:text-red-300 transition-colors duration-200">{item.action}</p>
                                    <p className="text-xs text-slate-500 leading-relaxed font-light">{item.detail}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="relative p-10 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-blue-950/40 to-cyan-950/20 backdrop-blur-md overflow-hidden text-center"
                >
                    <div
                        className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }}
                    />
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

                    <motion.div
                        animate={{ rotate: [0, 8, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="inline-block mb-6"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto">
                            <ShieldCheck className="w-7 h-7 text-cyan-400" />
                        </div>
                    </motion.div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-50 tracking-tight mb-4 relative z-10">
                        Keamanan Adalah Kebiasaan, Bukan Opsi
                    </h3>
                    <p className="text-slate-400 leading-relaxed font-light text-[15px] mb-8 max-w-lg mx-auto relative z-10">
                        Keamanan siber bukan sekadar konfigurasi sistem — melainkan sebuah kebiasaan harian. Selalu waspada terhadap setiap interaksi digital adalah kunci utama perlindungan data pribadi Anda dan orang-orang di sekitar Anda.
                    </p>
                    <a
                        href="/library"
                        className="relative z-10 inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[15px] font-medium shadow-[0_0_36px_rgba(0,114,255,0.3)] hover:shadow-[0_0_52px_rgba(0,198,255,0.45)] transition-all duration-300"
                    >
                        Pelajari Lebih Lanjut di Library
                        <ChevronRight className="w-4 h-4" />
                    </a>
                </motion.div>

            </main>
            <Footer />
        </div>
    );
}