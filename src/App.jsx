import React from 'react';
import Navbar from './components/navbar';
import About from './components/About';
import Brands from './components/Brands';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import LookingForSecure from './components/LookingForSecure';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

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

      <Services />

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

      <WhyChooseUs />

      <section className='pricing-plan'>
        <div className='container'>
          <div className='pricing-area'>
            <div className='pricing-info'>
              <h4 className='pricing-highlight'>Pricing Plan</h4>
              <h3 className='pricing-title'>Find the Perfect Plan for Your Storage Needs</h3>
            </div>
              
            <div className='pricing-cards-content'>
              <div className='pricing-cards'>
                <div className='pricing-cards-area'>
                  <div className='pricing-cards-content'>
                    <a className='pricing-card' href="#">
                      <div className='pricing-card-upper'>
                        <div className='pricing-card-text'>
                          <h5 className='price-plan'>Small Unit</h5>
                        </div>
                        <div className='price-cost'>
                          <div className='price-gold'>
                            <h6 className='price-dollar'>$</h6>
                            <h3 className='price-amount'>50</h3>
                          </div>
                          <div className='price-black'>
                            <p className='price-monthly'>/month</p>
                          </div>
                        </div>
                        <div className='price-info'>
                          <p className='price-text'>Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
                        </div>
                        
                      </div>
                      <hr className='hr' />
                      <div className='pricing-card-lower'>
                        <div className='card-list'>
                          <ul className='card-list-items'>
                            <li className='card-item-1'>Nam nec ipsum in dolor</li>
                            <li className='card-item-2'>Fusce nec ligula ut arcu</li>
                            <li className='card-item-3'>Aliquam pulvinar arcu in</li>
                            <li className='card-item-4'>Duis gravida enim porta</li>
                            <li className='card-item-5'>Etiam eget libero non ligula</li>
                          </ul>
                        </div>
                        <div className='pricing-card-button'>
                          <a className='button-dark' href="#">Rent Now</a>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className='pricing-cards'>
                <div className='pricing-cards-area'>
                  <div className='pricing-cards-content'>
                    <a className='pricing-card' href="#">
                      <div className='pricing-card-upper'>
                        <div className='pricing-card-text'>
                          <h5 className='price-plan'>Medium Unit</h5>
                        </div>
                        <div className='price-cost'>
                          <div className='price-gold'>
                            <h6 className='price-dollar'>$</h6>
                            <h3 className='price-amount'>100</h3>
                          </div>
                          <div className='price-black'>
                            <p className='price-monthly'>/month</p>
                          </div>
                        </div>
                        <div className='price-info'>
                          <p className='price-text'>Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
                        </div>
                        
                      </div>
                      <hr className='hr' />
                      <div className='pricing-card-lower'>
                        <div className='card-list'>
                          <ul className='card-list-items'>
                            <li className='card-item-1'>Nam nec ipsum in dolor</li>
                            <li className='card-item-2'>Fusce nec ligula ut arcu</li>
                            <li className='card-item-3'>Aliquam pulvinar arcu in</li>
                            <li className='card-item-4'>Duis gravida enim porta</li>
                            <li className='card-item-5'>Etiam eget libero non ligula</li>
                          </ul>
                        </div>
                        <div className='pricing-card-button'>
                          <a className='button-dark' href="#">Rent Now</a>
                        </div>
                      </div>
                    </a>
                    
                  </div>
                </div>
              </div>

              <div className='pricing-cards'>
                <div className='pricing-cards-area'>
                  <div className='pricing-cards-content'>
                    <a className='pricing-card' href="#">
                      <div className='pricing-card-upper'>
                        <div className='pricing-card-text'>
                          <h5 className='price-plan'>Large Unit</h5>
                        </div>
                        <div className='price-cost'>
                          <div className='price-gold'>
                            <h6 className='price-dollar'>$</h6>
                            <h3 className='price-amount'>150</h3>
                          </div>
                          <div className='price-black'>
                            <p className='price-monthly'>/month</p>
                          </div>
                        </div>
                        <div className='price-info'>
                          <p className='price-text'>Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
                        </div>
                        
                      </div>
                      <hr className='hr' />
                      <div className='pricing-card-lower'>
                        <div className='card-list'>
                          <ul className='card-list-items'>
                            <li className='card-item-1'>Nam nec ipsum in dolor</li>
                            <li className='card-item-2'>Fusce nec ligula ut arcu</li>
                            <li className='card-item-3'>Aliquam pulvinar arcu in</li>
                            <li className='card-item-4'>Duis gravida enim porta</li>
                            <li className='card-item-5'>Etiam eget libero non ligula</li>
                          </ul>
                        </div>
                        <div className='pricing-card-button'>
                          <a className='button-dark' href="#">Rent Now</a>
                        </div>
                      </div>
                    </a>
                    
                  </div>
                </div>
              </div>

              <div className='pricing-cards'>
                <div className='pricing-cards-area'>
                  <div className='pricing-cards-content'>
                    <a className='pricing-card' href="#">
                      <div className='pricing-card-upper'>
                        <div className='pricing-card-text'>
                          <h5 className='price-plan'>Executive Unit</h5>
                        </div>
                        <div className='price-cost'>
                          <div className='price-gold'>
                            <h6 className='price-dollar'>$</h6>
                            <h3 className='price-amount'>200</h3>
                          </div>
                          <div className='price-black'>
                            <p className='price-monthly'>/month</p>
                          </div>
                        </div>
                        <div className='price-info'>
                          <p className='price-text'>Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
                        </div>
                        
                      </div>
                      <hr className='hr' />
                      <div className='pricing-card-lower'>
                        <div className='card-list'>
                          <ul className='card-list-items'>
                            <li className='card-item-1'>Nam nec ipsum in dolor</li>
                            <li className='card-item-2'>Fusce nec ligula ut arcu</li>
                            <li className='card-item-3'>Aliquam pulvinar arcu in</li>
                            <li className='card-item-4'>Duis gravida enim porta</li>
                            <li className='card-item-5'>Etiam eget libero non ligula</li>
                          </ul>
                        </div>
                        <div className='pricing-card-button'>
                          <a className='button-dark' href="#">Rent Now</a>
                        </div>
                      </div>
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LookingForSecure />

      <section className='blog'>
        <div className='container'>
          <div className='blog-area'>
            <div className='blog-info'>
              <div className='blog-highlight'>
                <h4 className='blog-highlight-text'>Lastest Blogs and News</h4>
              </div>
              <div className='blog-title'>
                <h3 className='blog-text'>Check Out Our Latest Blog and News Update</h3>
                <p className='blog-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
              </div>
            </div>

            <div className='blog-content'>
              <div className='blog-card-area'>
                <div className='blog-card-content'>
                  <a className='blog-card' href='#'>
                    <div className='blog-card-upper'>
                      <div className='blog-card-image'>
                        <img src="Blog-bg.svg" alt="blog-bg" />
                      </div>
                    </div>
                    <div className='blog-card-lower'>
                      <div className='blog-card-date'>
                        <img className='blog-date-image' src="Blog-date-icon.svg" alt="blog-date-icon" />
                        <p className='blog-date-text'>August 17, 2025</p>
                      </div>
                      <div className='blog-card-text'>
                        <h6 className='blog-card-title'>Safe and Secure: The Importance of Choosing the Right Storage</h6>
                        <p className='blog-card-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</p>
                      </div>
                      <div className='blog-card-link'>
                        <a className='blog-link-text' href="#">Read More -></a>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className='blog-card-area'>
                <div className='blog-card-content'>
                  <a className='blog-card' href='#'>
                    <div className='blog-card-upper'>
                      <div className='blog-card-image'>
                        <img src="Blog-bg.svg" alt="blog-bg" />
                      </div>
                    </div>
                    <div className='blog-card-lower'>
                      <div className='blog-card-date'>
                        <img className='blog-date-image' src="Blog-date-icon.svg" alt="blog-date-icon" />
                        <p className='blog-date-text'>July 12, 2025</p>
                      </div>
                      <div className='blog-card-text'>
                        <h6 className='blog-card-title'>Storage Trends 2024: What’s New in the World of Storage</h6>
                        <p className='blog-card-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</p>
                      </div>
                      <div className='blog-card-link'>
                        <a className='blog-link-text' href="#">Read More -></a>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className='blog-card-area'>
                <div className='blog-card-content'>
                  <a className='blog-card' href='#'>
                    <div className='blog-card-upper'>
                      <div className='blog-card-image'>
                        <img src="Blog-bg.svg" alt="blog-bg" />
                      </div>
                    </div>
                    <div className='blog-card-lower'>
                      <div className='blog-card-date'>
                        <img className='blog-date-image' src="Blog-date-icon.svg" alt="blog-date-icon" />
                        <p className='blog-date-text'>April 8, 2025</p>
                      </div>
                      <div className='blog-card-text'>
                        <h6 className='blog-card-title'>Free Up Your Space, Free Up Your Life: The Power of Decluttering</h6>
                        <p className='blog-card-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</p>
                      </div>
                      <div className='blog-card-link'>
                        <a className='blog-link-text' href="#">Read More -></a>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Subscribe />

      <Footer />
    </>
  )
}

export default App