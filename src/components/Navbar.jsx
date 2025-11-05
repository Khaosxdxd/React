import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
            <div className='nav-container'>
                <div className='domain'>
                    <div className='domain-contact'>
                        <div className='domain-phone'>
                            <img className='domain-phone-icon' src="Phone-white.svg" alt="phone" />
                            <p className='domain-phone-text'>+46 8 123 122 44</p>
                        </div>
                        <div className='domain-email'>
                            <img className='domain-email-icon' src="Email-white.svg" alt="email" />
                            <p className='domain-email-text'>contact@domain.com</p>
                        </div>
                    </div>
                    
                    <div className='domain-media'>
                        <img className='facebook' src="Facebook.svg" alt="facebook" />
                        <img className='twitter' src="Humble.svg" alt="twitter" />
                        <img className='instagram' src="Instagram.svg" alt="instagram" />
                        <img className='youtube' src="Youtube.svg" alt="youtube" />
                    </div>
                </div>
            </div>
        </nav>

        <section className='storaid'>
            <div className='nav-container'>
                <div className='storaid-content'>
                    <Link className='storaid-logo' to="/">
                        <img src="Logo.svg" alt="logo" />
                    </Link>
                    
                    <div className='storaid-navlinks'>
                        <NavLink className='home' to="/">Home</NavLink>
                        <NavLink className='about' to="/about">About Us</NavLink>
                        <NavLink className='service' to="/services">Services</NavLink>
                        <NavLink className='contact' to="/contact">Contact Us</NavLink>
                        <NavLink className='booking' to="/booking">Booking</NavLink>
                    </div>

                    <div className='storaid-button'>
                        <a className='button' href="#">Book Now</a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Navbar