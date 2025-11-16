import React from 'react'

const GetInTouch = () => {

  return (
    <>
        <section className='get-in-touch'>
            <div className='container'>
                <div className='git-area'>
                    <div className='git-content'>
                        <div className='git-left'>
                            <div className='git-info'>
                                <div className='git-highlight'>
                                    <h4>Get in Touch</h4>
                                </div>
                                <div className='git-title'>
                                    <h3 className='git-text'>Get Personalized Assistance – Contact Us</h3>
                                    <p className='git-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                                </div>
                            </div>
                            <div className='git-image'>
                                <img src="GetInTouch-bg.svg" alt="get-in-touch background" />
                            </div>
                        </div>

                        <div className='git-right'>
                            <div id='regForm' className='git-forms'>
                                <form className='git-name-form'>
                                    <div className='git-form-group'>
                                        <p className='form-name'>Your name</p>
                                        <label for="name" className='form-label' value="" ></label>
                                        <input id='name' type="text" className='form-input' placeholder='Your name'/>
                                    </div>
                                </form>

                                <form className='git-email-form'>
                                    <div className='git-form-group'>
                                        <p className='form-name'>Email</p>
                                        <label for="name" className='form-label' value="" ></label>
                                        <input id='name' type="text" className='form-input' placeholder='Email'/>
                                    </div>
                                </form>

                                <form className='git-telephone-form'>
                                    <div className='git-form-group'>
                                        <p className='form-name'>Telephone</p>
                                        <label for="name" className='form-label' value="" ></label>
                                        <input id='name' type="text" className='form-input' placeholder='Telephone'/>
                                    </div>
                                </form>

                                <form className='git-subject-form'>
                                    <div className='git-form-group'>
                                        <p className='form-name'>Subject</p>
                                        <label for="name" className='form-label' value="" ></label>
                                        <input id='name' type="text" className='form-input' placeholder='How can we help you'/>
                                    </div>
                                </form>

                                <form className='git-comment-form'>
                                    <div className='git-form-group'>
                                        <p className='form-name'>Comments / Questions</p>
                                        <label for="name" className='form-label' value="" ></label>
                                        <input id='name' type="text" className='form-input' placeholder='Comments'/>
                                    </div>
                                </form>

                                <button id='submit-btn' className='btn'>Submit</button>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default GetInTouch