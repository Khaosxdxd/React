import React from 'react'

const GetInTouchForm = () => {



  return (
    <>
         <div className='git-forms'>
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
        </div>

        <button id='submit-bu' className='btn'>Submit</button>
    </>
  )
}

export default GetInTouchForm