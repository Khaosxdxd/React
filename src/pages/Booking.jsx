import React from 'react'
import BookingHeader from '../components/BookingHeader'
import WhyChooseUs from '../components/WhyChooseUs'
import LookingForSecure from '../components/LookingForSecure'
import FAQ from '../components/FAQ'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import BookingUnit from '../components/BookingUnit'

const Booking = () => {
  return (
    <>
        <BookingHeader />
        <BookingUnit />
        <WhyChooseUs />
        <LookingForSecure />
        <FAQ />
        <Subscribe />
        <Footer />
    </>
  )
}

export default Booking