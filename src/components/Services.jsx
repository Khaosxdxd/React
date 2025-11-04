import React from 'react'

const Services = () => {
  return (
    <>
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
    </>
  )
}

export default Services