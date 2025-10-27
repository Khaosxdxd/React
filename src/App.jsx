import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      {/* <nav className='navbar'>
        <div className='nav-container'>
          <div className='domain'>
            <div className='domain-contact'>
              <p className='domain-phone'>+46 8 123 122 44</p>
              <p className='domain-email'>contact@domain.com</p>
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
      </section> */}

      <Navbar />

      <section className='hero'>
        <div className='container'>
          <div className='hero-content'>
            <div className='hero-text'>
              <h4 className='hero-welcome'>Welcome to StorAid</h4>
              <h1 className='hero-title'>Space Simplified, Storage Perfected</h1>
              <p className='hero-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.</p>
              
              <div className='hero-button'>
                <a className='button-dark' href="#">Discover More</a>
              </div>
            </div>

            <div className='hero-image'>
              <img className='hero-icon' src="Greyhuman.svg" alt="grey human" />
            </div>
          </div>
        </div>
      </section>

      <section className='about-us'>
        <div className='container'>
          <div className='about-content'>
            <div className='about-images'>
              <img className='about-image' src="Img.svg" alt="stats" />
            </div>

            <div className='about-area'>
              <div className='about-text'>
                <h4 className='about-welcome'>About Us</h4>
                <h3 className='about-title'>Providing a Safe Space for Your Treasured Items</h3>
                <p className='about-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. Phasellus eget elit gravida.</p>
              </div>

              <div className='about-tiles'>
                <div className='about-tile'>
                  <a className='tiles' href="#">
                    <h5 className='tile-title'>Vision</h5>
                    <p className='tile-text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p>
                  </a>
                </div>

                <div className='about-tile'>
                  <a className='tiles' href="#">
                    <h5 className='tile-title'>Mission</h5>
                    <p className='tile-text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p>
                  </a>
                </div>
              </div>

              <div className='about-contact'>

                <div className='about-button'>
                  <a className='button' href="#">Discover More</a>
                </div>
                
                <div className='about-information'>
                  <div className='about-informaton-icon'>
                    <img className='information-icon' src="Phone-colored.svg" alt="about phone" />
                  </div>
                  <div className='about-information-text'>
                    <h5 className='information-title'>More Information</h5>
                    <p className='information-text'>+46 8 123 122 44</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default App