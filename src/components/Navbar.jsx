import React from 'react'

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
                    <div className='storaid-logo'>
                        <img src="Logo.svg" alt="logo" />
                    </div>
                    
                    <div className='storaid-navlinks'>
                        <a className='home' href="#">Home</a>
                        <a className='about' href="#">About Us</a>
                        <a className='service' href="#">Services</a>
                        <a className='contact' href="#">Contact Us</a>
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