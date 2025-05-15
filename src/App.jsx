import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
