import React from 'react'

const Hero = () => {
  return (
    <>
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
    </>
  )
}

export default Hero