import React from 'react'
import { TiStarOutline } from "react-icons/ti";
import { TiStarFullOutline } from "react-icons/ti";
// import StarRating from './StarRating'

const Testimonial = ({rating, comment, avatarUrl, name, companyName}) => {
  return (
    <div className='card-left'>
        <div className='card-area'>
            <div className='card-stars'>
                {Array.from({ length: 5 }, (_,i) => (
                    <span key={i}> {i < rating ? <TiStarFullOutline/> : <TiStarOutline />} </span>
                ))}
            </div>

            <div className='card-text'>
                <p>{comment}</p>
            </div>

            <div className='card-info'>
                <div className='card-customer-info'>
                    <img className='card-image' src={avatarUrl} alt="user" />
                    <div className='card-customer-text'>
                        <h6 className='card-name'>{name}</h6>
                        <p className='card-job'>{companyName}</p>
                    </div>
                </div>
                <div className='card-quote'>
                    <img className='card-quote-icon' src="Icon.svg" alt="quote" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial