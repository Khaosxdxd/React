import React from 'react'

const About = () => {
  return (
    <>
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

export default About