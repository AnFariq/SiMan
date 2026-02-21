import React from "react";
import { Link } from "react-router-dom";
import { siberAmanData } from "../data/DataSheet";
import { ArrowRight, ShieldAlert, BookOpen } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CategoryPage({ targetCategory, description }) {
  // Filter data berdasarkan kategori yang diinginkan
  const filteredData = siberAmanData.filter(
    (item) => item.kategori === targetCategory
  );

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-indigo-100">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Kategori */}
        <div className="mb-12">
          <Link to="/library" className="text-sm font-bold text-indigo-600 flex items-center gap-2 mb-4 hover:underline">
            <BookOpen className="w-4 h-4" /> Library Utama
          </Link>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Panduan <span className="text-indigo-600">{targetCategory}</span>
          </h1>
          <p className="text-slate-500 max-w-2xl font-medium text-lg">
            {description}
          </p>
          <div className="mt-6 h-1 w-20 bg-indigo-600 rounded-full"></div>
        </div>

        {/* Grid Artikel */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredData.map((article) => (
              <div key={article.id} className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img src={article.image} alt={article.judul} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur shadow-sm rounded-full text-[10px] font-bold text-slate-900 uppercase">
                      {article.tingkat_risiko} Risk
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {article.judul}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {article.deskripsi}
                  </p>
                  <Link to={`/artikel/${article.id}`} className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-indigo-600 transition-all">
                    Pelajari Celah <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border-2 border-dashed border-slate-100 rounded-3xl">
            <ShieldAlert className="w-12 h-12 text-slate-200 mx-auto mb-4" />
            <p className="text-slate-400 font-medium">Belum ada artikel untuk kategori ini.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}