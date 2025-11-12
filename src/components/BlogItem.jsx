import React from 'react'

const BlogItem = ({imageUrl, created, description, title}) => {
  return (
    <>
        <div className='blog-card-area'>
            <div className='blog-card-content'>
                <a className='blog-card' href='#'>
                    <div className='blog-card-upper'>
                        <div className='blog-card-image'>
                            <img src={imageUrl} alt="blog-bg" />
                        </div>
                    </div>
                    <div className='blog-card-lower'>
                        <div className='blog-card-date'>
                            <img className='blog-date-image' src="Blog-date-icon.svg" alt="blog-date-icon" />
                            <p className='blog-date-text'>{created}</p>
                        </div>
                        <div className='blog-card-text'>
                            <h6 className='blog-card-title'>{title}</h6>
                            <p className='blog-card-paragraph'>{description}</p>
                        </div>
                        <div className='blog-card-link'>
                            <a className='blog-link-text' href="#">Read More -></a>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </>
  )
}

export default BlogItem