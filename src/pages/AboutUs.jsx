import React, { useState } from 'react'
import About from '../components/About'
import Brands from '../components/Brands'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'
import Subscribe from '../components/Subscribe'
import Header from '../components/Header'

const AboutUs = () => {
  return (
    <>
        <Header />
        <About />
        <Brands />
        <Testimonials />
        <WhyChooseUs />
        <Subscribe />
    </>
  )
}

// function AboutTitle() {
//   const [title, setTitle] = useState("About");

//   return (
//     <h1>{title}</h1>
//   )
// }

export default AboutUs