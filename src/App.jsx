import React from 'react';
import Navbar from './components/navbar';
import About from './components/About';

const App = () => {
  return (
    <>
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

      <About />

      <section className='brands'>
        <div className='container'>
          <div className='brands-area'>
            <div className='brands-content'>
              <img src="Logoipsum 1.svg" alt="brand-1" />
              <img src="Logoipsum 2.svg" alt="brand-2" />
              <img src="Logoipsum 3.svg" alt="brand-3" />
              <img src="Logoipsum 4.svg" alt="brand-4" />
              <img src="Logoipsum 5.svg" alt="brand-5" />
            </div>
          </div>
        </div>
      </section>

      <section className='services'>
        <div className='container'>
          <div className='services-area'>
            <div className='service-info'>
              <div className='service-highlight'>
                <h4 className='service-welcome'>Our Services</h4>
              </div>

              <div className='service-title'>
                <h3 className='service-text'>Specialized Storage for Every Special Item</h3>
                <p className='service-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
              </div>
            </div>

            <div className='services-content'>
              <div className='service-tiles'>
                <a className='tiles' href="#">
                  <h4 className='tile-title'>Diverse Unit Sizes</h4>
                  <p className='tile-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </a>
              </div>

              <div className='service-image'>
                <img src="Bg Img.svg" alt="bg-image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App