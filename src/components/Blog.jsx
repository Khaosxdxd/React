import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'

const Blog = () => {
    const [blog, setBlog] = useState ([])

    
    useEffect (() => {
        
        const getBlog = async () => {
            try {
                const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/blogs')
                const result = await res.json()
                // setBlog(res)
                console.log('GETBLOG', result)
                setBlog(result)
                
            } catch (error) {
                console.log(error)
            }
            // const data = await res.json()
        }

        getBlog()
    }, [])
    console.log()

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
                        {
                            blog.map((item) => (

                                <BlogItem key={item.id} created={item.created} description={item.description} imageUrl={item.imageUrl} title={item.title} item={item.data} />
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Blog