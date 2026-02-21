import React from "react";
import { Link } from "react-router-dom";
import { siberAmanData } from "../data/DataSheet";
import { 
  BookOpen, 
  ArrowRight, 
  ShieldAlert, 
  Layers 
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Library() {
  // Mengelompokkan data berdasarkan kategori secara otomatis
  const categories = [...new Set(siberAmanData.map((item) => item.kategori))];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-indigo-100">
      <Header />

      {/* Hero Section Library */}
      <section className="bg-slate-50 border-b border-slate-100 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3 h-3" />
            Knowledge Base
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Perpustakaan <span className="text-indigo-600">SiberAman</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            Jelajahi dokumentasi lengkap mengenai ancaman siber dan langkah mitigasi teknis untuk menjaga keamanan digital Anda.
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        {categories.map((category) => (
          <section key={category} className="mb-20 last:mb-0">
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
              <div className="p-2 bg-indigo-600 rounded-lg text-white">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{category}</h2>
                <p className="text-xs text-slate-400 font-medium">
                  {siberAmanData.filter((item) => item.kategori === category).length} Artikel Tersedia
                </p>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siberAmanData
                .filter((item) => item.kategori === category)
                .map((article) => (
                  <div 
                    key={article.id} 
                    className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-indigo-100 transition-all duration-300 flex flex-col"
                  >
                    {/* Image Preview */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.judul} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`px-2 py-1 rounded-lg text-[9px] font-bold uppercase tracking-tighter backdrop-blur-md border ${
                          article.tingkat_risiko === "High" || article.tingkat_risiko === "Critical"
                          ? "bg-red-500/10 text-red-500 border-red-500/20"
                          : "bg-indigo-500/10 text-indigo-500 border-indigo-500/20"
                        }`}>
                          {article.tingkat_risiko} Risk
                        </span>
                      </div>
                    </div>

                    {/* Content Preview */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                         <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded uppercase">
                            {article.kategori}
                         </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                        {article.judul}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                        {article.deskripsi}
                      </p>

                      <div className="pt-5 border-t border-slate-50">
                        <Link 
                          to={`/artikel/${article.id}`} 
                          className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-indigo-600 transition-all active:scale-95 group/btn"
                        >
                          View Article
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}