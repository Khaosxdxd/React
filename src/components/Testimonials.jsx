import React from 'react'

const Testimonials = () => {
  return (
    <>
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

export default Testimonials