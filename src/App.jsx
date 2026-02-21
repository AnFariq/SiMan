import { useState } from 'react'
import { Route, BrowserRouter, Router, Routes } from 'react-router-dom'
import Home from './pages/home'
import './App.css'
import About from './pages/about'
import Library from './pages/library'
import ContentPage from './pages/artikel'
import PanduanLengkap from './pages/panduan'
import PrivacyPolicy from './pages/privacypolicy'
import CategoryPage from './pages/category'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tentang' element={<About/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/panduan-umum' element={<PanduanLengkap/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/artikel/:id' element={<ContentPage/>}/>
        <Route 
          path="/category/social-engineering" 
          element={<CategoryPage targetCategory="Social Engineering" description="Mempelajari teknik manipulasi psikologis untuk mencuri data sensitif." />} 
        />
        <Route 
          path="/category/malware-analysis" 
          element={<CategoryPage targetCategory="Malware Analysis" description="Analisis mendalam mengenai perangkat lunak berbahaya dan cara kerjanya." />} 
        />
        <Route 
          path="/category/network-security" 
          element={<CategoryPage targetCategory="Network Security" description="Panduan mengamankan lalu lintas data dan infrastruktur jaringan." />} 
        />
        <Route 
          path="/category/web-vulnerability" 
          element={<CategoryPage targetCategory="Web Vulnerability" description="Eksplorasi celah keamanan pada aplikasi web dan cara menutupnya." />} 
        />
        </Routes>
    </BrowserRouter>
  )
}

export default App
