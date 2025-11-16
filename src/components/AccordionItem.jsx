import React, { useState } from 'react'

const AccordionItem = ({title, description}) => {

  const [isOpen, setIsOpen] = useState(false)

    const toggleAccordion = () => {
      setIsOpen(!isOpen)
    }

    return (
      <>
        <button className={`accordion ${isOpen ? 'active': ''}`} onClick={toggleAccordion}>{title}</button>
        {
          isOpen && (
            <div className={`panel ${isOpen ? 'active': ''}`}>
              <p>{description}</p>
            </div>
          )
        }
      </>
    )
}

export default AccordionItem