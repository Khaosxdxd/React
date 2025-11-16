import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='footer'>
            <div className='container'>
                <div className='footer-area'>
                    <div className='footer-content'>
                        <div className='footer-rights'>
                            <p>&#169;</p>
                            <p>2025 StorAid, All rights reserved.</p>
                        </div>
                        <div className='footer-eula'>
                            <div className='footer-terms'>
                                <img className='terms-image' src="Footer-arrow-icon.svg" alt="arrow-icon" />
                                <a className='terms-link' href="/errorpage">
                                    <p className='terms-text'>Terms & Conditions</p>
                                </a>
                            </div>
                            <div className='footer-policy'>
                                <img className='policy-image' src="Footer-arrow-icon.svg" alt="arrow-icon" />
                                <a className='policy-link' href="/errorpage">
                                    <p className='policy-text'>Privacy Policy</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer