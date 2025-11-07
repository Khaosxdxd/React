import React from 'react'

const FAQ = () => {
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
                  <button className='accordion'>Can I access my stored iterns anytime?</button>
                  <div className='panel'>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,there live the blind texts.Separated they in liveBookmarksgrove right at the coast</p>
                  </div>

                  <button className='accordion'>Do you offer climate-controlled storage units?</button>
                  <div className='panel'>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,there live the blind texts.Separated they in liveBookmarksgrove right at the coast</p>
                  </div>

                  <button className='accordion'>How long can I rent a storage unit?</button>
                  <div className='panel'>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,there live the blind texts.Separated they in liveBookmarksgrove right at the coast</p>
                  </div>

                  <button className='accordion'>Can I change the size of my storage unit if I need more space?</button>
                  <div className='panel'>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,there live the blind texts.Separated they in liveBookmarksgrove right at the coast</p>
                  </div>

                  <button className='accordion'>How do I pay for my storage unit?</button>
                  <div className='panel'>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,there live the blind texts.Separated they in liveBookmarksgrove right at the coast</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default FAQ