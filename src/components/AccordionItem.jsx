import React from 'react'

const AccordionItem = ({title, description}) => {
  return (
    <>
        <button className='accordion'>{title}</button>
        <div className='panel'>
        <p>{description}</p>
        </div>
</>
  )
}

export default AccordionItem