import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DefaultLayout from './layouts/DefaultLayout'

import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
