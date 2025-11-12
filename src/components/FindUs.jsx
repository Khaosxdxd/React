import React from 'react'

const FindUs = () => {
  return (
    <>
        <section className='find-us-on'>
            <div className='container'>
                <div className='find-area'>
                    <div className='find-content'>
                        <div className='find-image'>
                            <img src="Grey-female.svg" alt="grey-female" />
                        </div>
                        
                        <div className='find-info'>
                            <div className='find-title'>
                                <h3 className='find-text'>Find Us On:</h3>
                                <p className='find-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            </div>
                            <div className='find-contact'>
                                <div className='call-center'>
                                    <img className='cc-image' src="Phone-colored.svg" alt="phone-icon" />
                                    <div className='call-center-text'>
                                        <h5 className='cc-title'>Call Center</h5>
                                        <p className='cc-paragraph'>+46 8 123 122 44</p>
                                    </div>
                                </div>

                                <div className='email-address'>
                                    <img className='ea-image' src="Letter-icon.svg" alt="email" />
                                    <div className='email-address-text'>
                                        <h5 className='ea-title'>Email Address</h5>
                                        <p className='ea-paragraph'>contact@domain.com</p>
                                    </div>
                                </div>

                                <div className='location'>
                                    <img className='l-image' src="Location-icon.svg" alt="location" />
                                    <div className='location-text'>
                                        <h5 className='l-title'>Location</h5>
                                        <p className='l-paragraph'>Klarabergsviadukten 90, Stockholm</p>
                                    </div>
                                </div>
                            </div>

                            <div className='find-social-media'>
                                <h5 className='sm-text'>Our Social Media</h5>
                                <hr className='find-hr' />
                                <div className='sm-icons'>
                                    <img src="Facebook.svg" alt="facebook" />
                                    <img src="Humble.svg" alt="twitter" />
                                    <img src="Instagram.svg" alt="instagram" />
                                    <img src="Youtube.svg" alt="youtube" />
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

export default FindUs