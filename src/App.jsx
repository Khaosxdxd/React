import React from 'react';
import Navbar from './components/navbar';
import About from './components/About';
import Brands from './components/Brands';

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

      <Brands />

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
              <div className='service-tiles-left'>
                <div className='diverse'>
                  <a className='tiles' href="#">
                    <h4 className='tile-title'>Diverse Unit Sizes</h4>
                    <p className='tile-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  </a>
                </div>
                <div className='moving'>
                  <a className='tiles' href="#">
                    <h4 className='tile-title'>Moving Assistance</h4>
                    <p className='tile-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  </a>
                </div>
              </div>

              <div className='service-image'>
                <img src="Bg Img.svg" alt="bg-image" />
              </div>
              
              <div className='service-tiles-right'>
                <div className='vehicle'>
                  <a className='tiles' href="#">
                    <h4 className='tile-title'>Vehicle Storage</h4>
                    <p className='tile-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  </a>
                </div>
                
                <div className='security'>
                  <a className='tiles' href="#">
                    <h4 className='tile-title'>Top-Notch Security</h4>
                    <p className='tile-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='testimonials'>
        <div className='container'>
          <div className='testimonials-area'>
            <div className='testimonials-title'>
              <h4 className='testimonials-highlight'>Testimonials</h4>
              <h3 className='testimonials-text'>See What Our Client Have to Say</h3>
              <p className='testimonials-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
            </div>

            <div className='testimonials-cards'>
              <div className='testimonials-cards-area'>
                <div className='card-left'>
                  <div className='card-area'>
                    <div className='card-stars'>
                      <img src="4-Stars.svg" alt="rating" />
                    </div>

                    <div className='card-text'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipis 
                        cing elit. Ut libero lectus, porta nec turpis sit 
                        amet, lobortis fringilla ante.</p>
                    </div>

                    <div className='card-info'>
                      <div className='card-customer-info'>
                        <img className='card-image' src="Customer-image.svg" alt="user" />
                        <div className='card-customer-text'>
                          <h6 className='card-name'>Aiden Harvey</h6>
                          <p className='card-job'>Customer</p>
                        </div>
                        
                      </div>
                      <div className='card-quote'>
                        <img className='card-quote-icon' src="Icon.svg" alt="quote" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='card-middle'>
                  <div className='card-area'>
                    <div className='card-stars'>
                      <img src="4-Stars.svg" alt="rating" />
                    </div>

                    <div className='card-text'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipis 
                        cing elit. Ut libero lectus, porta nec turpis sit 
                        amet, lobortis fringilla ante.</p>
                    </div>

                    <div className='card-info'>
                      <div className='card-customer-info'>
                        <img className='card-image' src="Customer-image.svg" alt="user" />
                        <div className='card-customer-text'>
                          <h6 className='card-name'>Carrisa Jocelyn</h6>
                          <p className='card-job'>Customer</p>
                        </div>
                        
                      </div>
                      <div className='card-quote'>
                        <img className='card-quote-icon' src="Icon.svg" alt="quote" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='card-right'>
                  <div className='card-area'>
                    <div className='card-stars'>
                      <img src="4-Stars.svg" alt="rating" />
                    </div>

                    <div className='card-text'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipis 
                        cing elit. Ut libero lectus, porta nec turpis sit 
                        amet, lobortis fringilla ante.</p>
                    </div>

                    <div className='card-info'>
                      <div className='card-customer-info'>
                        <img className='card-image' src="Customer-image.svg" alt="user" />
                        <div className='card-customer-text'>
                          <h6 className='card-name'>Celvin Gabriel</h6>
                          <p className='card-job'>Customer</p>
                        </div>
                        
                      </div>
                      <div className='card-quote'>
                        <img className='card-quote-icon' src="Icon.svg" alt="quote" />
                      </div>
                    </div>
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