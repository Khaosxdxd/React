import React from 'react'

const BookingUnit = () => {
  return (
    <>
        <section className='booking-unit'>
            <div className='container'>
                <div className='booking-unit-area'>
                        <div className='booking-info'>
                            <h4 className='booking-highlight'>Booking Unit</h4>
                            <div className='booking-text'>
                                <h3 className='booking-title'>Book Your Storage Unit Now & Simplify Your Life!</h3>
                                <p className='booking-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                            </div>
                        </div>


                    <div className='booking-unit-content'>
                        <div className='booking-left'>
                            <img className='booking-image' src="Booking-bg.svg" alt="background" />
                        </div>
                        <div className='booking-right'>
                            <div className='booking-forms'>
                                <form className='book-name-form'>
                                    <div className='book-form-group'>
                                        <p className='form-name'>Your name</p>
                                        <label for="name" className='form-label' value="" ></label>
                                        <input id='name' type="text" className='form-input' placeholder='Your name'/>
                                    </div>
                                </form>
                                <form className='book-email-form'>
                                    <div className='book-form-group'>
                                        <p className='form-name'>Email</p>
                                        <label for="name" className='form-label' value="" ></label>
                                        <input id='name' type="text" className='form-input' placeholder='Email'/>
                                    </div>
                                </form>
                                <form className='book-unit-form'>
                                    <div className='book-form-group'>
                                        <p className='form-name'>Choose Unit</p>
                                        <label for="name" className='form-label' value="" ></label>
                                        <input id='name' type="text" className='form-input' placeholder='Choose Unit'/>
                                    </div>
                                </form>
                                <form className='book-purpose-form'>
                                    <div className='book-form-group'>
                                        <p className='form-name'>Storage Purpose</p>
                                        <label for="name" className='form-label' value="" ></label>
                                        <input id='name' type="text" className='form-input' placeholder='Describe your storage purpose so that we can match your request'/>
                                    </div>
                                </form>
                                <button className='btn'>Book Unit</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default BookingUnit