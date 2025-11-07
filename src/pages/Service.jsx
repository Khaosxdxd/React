import React from 'react'
import ServiceHeader from '../components/ServiceHeader'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import LookingForSecure from '../components/LookingForSecure'
import Subscribe from '../components/Subscribe'
import FAQ from '../components/FAQ'

const Service = () => {
  return (
    <>
        <ServiceHeader />
        <Services />
        <Testimonials />
        <FAQ />
        <LookingForSecure />
        <Subscribe />
    </>
  )
}

export default Service