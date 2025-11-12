import React, { useEffect, useState } from 'react'
import Testimonial from './Testimonial'

const Testimonials = () => {
const [testimonials, setTestimonials] = useState ([])

    
    useEffect (() => {
        
        const getTestimonials = async () => {
            try {
                const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/testimonials')
                const result = await res.json()
                // setBlog(res)
                console.log('GETBLOG', result)
                setTestimonials(result)
                
            } catch (error) {
                console.log(error)
            }
            // const data = await res.json()
        }

        getTestimonials()
    }, [])
    console.log()

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

                            {
                                testimonials.map((item) => (
                                    <Testimonial key={testimonials.id} comment={item.comment} avatarUrl={item.avatarUrl} companyName={item.companyName} name={item.name} rating={item.rating} />
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Testimonials