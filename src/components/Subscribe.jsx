import React from 'react'
import { Link } from 'react-router-dom';

const Subscribe = () => {

  return (
    <>
        <section className='subscribe'>
            <div className='container'>
                <div className='sub-area'>
                    <div className='sub-content'>
                        <div className='sub-text'>
                            <h3 className='sub-title'>Subscribe Our Newsletter</h3>
                            <p className='sub-paragraph'>Subscribe to our newsletter to receive early discount offers, updates and info</p>
                        </div>

                        <form id='subForm' className='sub-form'>
                            <div className='form-group'>
                                <label for="email" className='form-label'></label>
                                <input id='email' type="text" className='form-input' placeholder='Enter your Email'/>
                            </div>
                            <button id='submit-btn' className='btn'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Subscribe