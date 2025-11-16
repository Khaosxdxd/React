import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Service'
import ContactUs from './pages/ContactUs'

import Navbar from './components/navbar';
import Footer from './components/Footer';
import Booking from './pages/Booking'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/errorpage' element={<ErrorPage />} />
          </Routes>
        </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App