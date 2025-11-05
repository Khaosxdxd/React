import React from 'react'

const Blog = () => {
  return (
    <>
        <section className='blog'>
            <div className='container'>
                <div className='blog-area'>
                    <div className='blog-info'>
                        <div className='blog-highlight'>
                            <h4 className='blog-highlight-text'>Lastest Blogs and News</h4>
                        </div>
                        <div className='blog-title'>
                            <h3 className='blog-text'>Check Out Our Latest Blog and News Update</h3>
                            <p className='blog-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
                        </div>
                    </div>

                    <div className='blog-content'>
                        <div className='blog-card-area'>
                            <div className='blog-card-content'>
                                <a className='blog-card' href='#'>
                                    <div className='blog-card-upper'>
                                        <div className='blog-card-image'>
                                            <img src="Blog-bg.svg" alt="blog-bg" />
                                        </div>
                                    </div>
                                    <div className='blog-card-lower'>
                                        <div className='blog-card-date'>
                                            <img className='blog-date-image' src="Blog-date-icon.svg" alt="blog-date-icon" />
                                            <p className='blog-date-text'>August 17, 2025</p>
                                        </div>
                                        <div className='blog-card-text'>
                                            <h6 className='blog-card-title'>Safe and Secure: The Importance of Choosing the Right Storage</h6>
                                            <p className='blog-card-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</p>
                                        </div>
                                        <div className='blog-card-link'>
                                            <a className='blog-link-text' href="#">Read More -></a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className='blog-card-area'>
                            <div className='blog-card-content'>
                                <a className='blog-card' href='#'>
                                    <div className='blog-card-upper'>
                                        <div className='blog-card-image'>
                                            <img src="Blog-bg.svg" alt="blog-bg" />
                                        </div>
                                    </div>
                                    <div className='blog-card-lower'>
                                        <div className='blog-card-date'>
                                            <img className='blog-date-image' src="Blog-date-icon.svg" alt="blog-date-icon" />
                                            <p className='blog-date-text'>July 12, 2025</p>
                                        </div>
                                        <div className='blog-card-text'>
                                            <h6 className='blog-card-title'>Storage Trends 2024: What’s New in the World of Storage</h6>
                                            <p className='blog-card-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</p>
                                        </div>
                                        <div className='blog-card-link'>
                                            <a className='blog-link-text' href="#">Read More -></a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className='blog-card-area'>
                            <div className='blog-card-content'>
                                <a className='blog-card' href='#'>
                                    <div className='blog-card-upper'>
                                        <div className='blog-card-image'>
                                            <img src="Blog-bg.svg" alt="blog-bg" />
                                        </div>
                                    </div>
                                    <div className='blog-card-lower'>
                                        <div className='blog-card-date'>
                                            <img className='blog-date-image' src="Blog-date-icon.svg" alt="blog-date-icon" />
                                            <p className='blog-date-text'>April 8, 2025</p>
                                        </div>
                                        <div className='blog-card-text'>
                                            <h6 className='blog-card-title'>Free Up Your Space, Free Up Your Life: The Power of Decluttering</h6>
                                            <p className='blog-card-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</p>
                                        </div>
                                        <div className='blog-card-link'>
                                            <a className='blog-link-text' href="#">Read More -></a>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Blog