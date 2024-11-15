import React from 'react'
import Products from './components/Products'
import Navbar from './components/Navbar'
import Contact from './components/contact'
import Cartproduct from './components/Cartproduct'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Totalproducts from './components/Totalproducts'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Products />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/cart' element={<Cartproduct />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/product' element={<Totalproducts />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App