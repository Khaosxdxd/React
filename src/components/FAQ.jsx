import React, { useEffect, useState } from 'react'
import AccordionItem from './AccordionItem'

const FAQ = () => {
const [faq, setFaq] = useState ([])

  
  useEffect (() => {
      
    const getFAQ = async () => {
        try {
            const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/faqs')
            const result = await res.json()
            // setBlog(res)
            console.log('GETBLOG', result)
            setFaq(result)
            
        } catch (error) {
            console.log(error)
        }
        // const data = await res.json()
    }

      getFAQ()
  }, [])
  console.log()

  return (
    <>
        <section className='faq' >
          <div className='container'>
            <div className='faq-area'>
              <div className='faq-content'>
                <div className='faq-title'>
                  <div className='faq-highlight'>
                    <h4 className='highlight-text'>FAQs</h4>
                  </div>
                  <div className='faq-text'>
                    <h3 className='faq-title-text'>Frequently Ask Questions</h3>
                    <p className='faq-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  </div>
                </div>

                <div className='accordion-area'>
                  {/* <button className='accordion'>Can I access my stored iterns anytime?</button>
                  <div className='panel'>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,there live the blind texts.Separated they in liveBookmarksgrove right at the coast</p>
                  </div> */}

                    {
                      faq.map((item) => (
                        <AccordionItem key={faq.id} title={item.title} description={item.description} />
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

export default FAQ