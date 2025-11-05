import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Brands from '../components/Brands';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import PricingPlan from '../components/PricingPlan';
import LookingForSecure from '../components/LookingForSecure';
import Blog from '../components/Blog';
import Subscribe from '../components/Subscribe';

const Home = () => {
  return (
    <>
        <Hero />
        <About />
        <Brands />
        <Services />
        <Testimonials />
        <WhyChooseUs />
        <PricingPlan />
        <LookingForSecure />
        <Blog />
        <Subscribe />
    </>
  )
}

export default Home