import React from 'react'
import ContactHeader from '../components/ContactHeader'
import Subscribe from '../components/Subscribe'
import FAQ from '../components/FAQ'
import FindUs from '../components/FindUs'
import GetInTouch from '../components/GetInTouch'

const ContactUs = () => {
  return (
    <>
        <ContactHeader />
        <GetInTouch />
        <FindUs />
        <FAQ />
        <Subscribe />
    </>
  )
}

export default ContactUs