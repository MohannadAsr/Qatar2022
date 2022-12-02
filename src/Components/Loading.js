import React from 'react'
import bg from "../images/fifa2022.jpg"
import logo from "../images/FIFA.png"



export default function Loading() {
  return (
    <section className='loading-page d-flex justify-content-center align-items-center flex-column py-4' style={{backgroundImage: `url(${bg})`}}>
        <h1 className='text-light '>Qatar 2022 WorldCup </h1>
        <img src={logo} className='img-fluid logo' alt='la3eeb' />
        <h1 className='text-light'>Loading<span className='loading-dot'> .</span><span className='loading-dot'> .</span><span className='loading-dot'> .</span></h1>
        
        

    </section>
  )
}
