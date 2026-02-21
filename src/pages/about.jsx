import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion"; // Tambahkan ini
import {
  Users,
  Target,
  Rocket,
  ShieldCheck,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function About() {
  // Variabel animasi untuk reuse
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const teamMembers = [
    {
      name: "Sultan",
      role: "Ketua Tim & UI Designer",
      desc: "Bertanggung jawab atas visi proyek dan desain antarmuka pengguna.",
      image: "sultan.webp",
      color: "bg-indigo-50",
    },
    {
      name: "Dovan",
      role: "Frontend Content Developer",
      desc: "Fokus pada pengembangan konten edukatif dan struktur halaman About.",
      image: "EqDvn.webp",
      color: "bg-slate-50",
    },
    {
      name: "Andicha",
      role: "Lead Technical Developer",
      desc: "Menangani arsitektur sistem, keamanan platform, dan integrasi React.",
      image: "Andi.webp",
      color: "bg-indigo-50",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-indigo-100 overflow-x-hidden">
      <Header />

      <main className="flex-1">
        {/* Section: Visi & Misi */}
        <section className="py-24 px-6 border-b border-slate-50 relative overflow-hidden">
          {/* Background Decor Animasi */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-50 rounded-full blur-3xl -z-10"
          />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-6"
            >
              Tentang Devitra.id
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-7xl font-extrabold text-slate-900 tracking-tight mb-8"
            >
              Membangun Kesadaran <br />
              <span className="text-indigo-600">Keamanan Digital.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-500 leading-relaxed font-medium mb-12"
            >
              SiberAman lahir dari keprihatinan kami terhadap tingginya angka
              kejahatan siber di Indonesia. Kami percaya bahwa edukasi adalah
              pertahanan terkuat dalam menghadapi ancaman di dunia maya.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-16">
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.5 }}
                className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-indigo-200 transition-colors group"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Visi Kami
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Menjadi platform literasi keamanan siber nomor satu yang mudah
                  diakses oleh seluruh lapisan masyarakat Indonesia.
                </p>
              </motion.div>

              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.6 }}
                className="p-8 bg-indigo-600 rounded-3xl text-white shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Rocket className="w-6 h-6 text-indigo-200" />
                </div>
                <h3 className="text-xl font-bold mb-3">Misi Kami</h3>
                <p className="text-indigo-100 text-sm leading-relaxed">
                  Menyediakan panduan teknis yang sederhana, terupdate, dan
                  aplikatif untuk mencegah celah keamanan pada sistem digital.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              DEVITRA.ID
            </h2>
            <div className="h-1.5 w-20 bg-indigo-600 mx-auto rounded-full mb-6" />
            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed font-medium mb-12">
              DEVITRA.ID terbentuk dari kumpulan mahasiswa Universitas Dinamika
              yang memiliki jiwa semangat belajar & berkompetisi, Tidak hanya
              itu DEVITRA.ID terbentuk untuk mengatasi masalah yang ada di
              masyarakat terkait bidang Teknologi khususnya Programmer.
            </p>
          </motion.div>
        </section>

        {/* Section: Tim Kami */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Di Balik Layar
            </h2>
            <div className="h-1.5 w-20 bg-indigo-600 mx-auto rounded-full mb-6" />
            <p className="text-slate-500 font-medium text-lg">
              Tim kreatif yang membangun SiberAman dengan semangat kolaborasi.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div
                  className={`aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 relative shadow-2xl shadow-slate-200 ${member.color}`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <p className="text-white text-xs font-medium leading-relaxed italic">
                      "{member.desc}"
                    </p>
                  </div>
                </div>
                <div className="px-2">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">
                    {member.role}
                  </p>

                  <div className="flex gap-3">
                    <SocialButton icon={<Instagram size={18} />} />
                    <SocialButton icon={<Linkedin size={18} />} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section: Komitmen Keamanan */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="py-32 px-6 bg-slate-950 text-center relative overflow-hidden"
        >
          {/* Grid Pattern Background */}
          <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px]" />

          <div className="max-w-3xl mx-auto relative z-10">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block mb-8"
            >
              <ShieldCheck className="w-16 h-16 text-indigo-500" />
            </motion.div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Keamanan Anda Prioritas Kami
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              Kami terus memperbarui konten edukasi kami berdasarkan tren
              ancaman siber terbaru di Indonesia agar Anda selalu selangkah
              lebih maju dari para peretas.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/panduan-umum"
              className="inline-flex items-center justify-center px-10 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-500/20"
            >
              Eksplorasi Panduan Umum
            </motion.a>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}

function SocialButton({ icon }) {
  return (
    <motion.button
      whileHover={{ y: -3, backgroundColor: "#f8fafc" }}
      className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-400 hover:text-indigo-600 transition-all shadow-sm"
    >
      {icon}
    </motion.button>
  );
}

{
  /* Oh ya catatan untuk dovan, jika mau menambahkan class pakai "className" jadi klo pake "class" maka akan error, btw ini udah tak tambahin tailwind yak */
}
