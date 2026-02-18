import { useState } from 'react'
import { Route, BrowserRouter, Router, Routes } from 'react-router-dom'
import Home from './pages/home'
import './App.css'
import About from './pages/about'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tentang' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
