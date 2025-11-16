import React from 'react'

const ErrorHeader = () => {
  return (
    <>
        <header className='error-page'>
            <div className='container'>
                <div className='error-title'>
                    <h5 className='error-text'>Oops!</h5>
                    <h1 className='error-highlight'>Page Not Found</h1>
                    <p className='error-paragraph'>Sorry, the page you are looking for does not exist. It may have been moved, removed altogether or is temporarily unavailable.</p>
                    <a className='btn-dark' href="/">Back To Home</a>
                </div>
            </div>
        </header>
    </>
  )
}

export default ErrorHeader