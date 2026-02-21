import { useState } from 'react'
import { Route, BrowserRouter, Router, Routes } from 'react-router-dom'
import Home from './pages/home'
import './App.css'
import About from './pages/about'
import ContentPage from './pages/contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tentang' element={<About/>}/>
        <Route path='/artikel/:id' element={<ContentPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
