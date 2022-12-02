import React from 'react'
import logo from "../images/FIFA.png"

export default function 
LoadingContent() {
  return (
    <section className='loading-content d-flex justify-content-center align-items-center flex-column py-4 ' >
        
        <img src={logo} className='img-fluid logo-content' alt='la3eeb' />
        <h5 className='text-dark'>Loading<span className='loading-dot'> .</span><span className='loading-dot'> .</span><span className='loading-dot'> .</span></h5>
        
        

    </section>
  )
}
