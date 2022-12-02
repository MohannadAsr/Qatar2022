import React from 'react'
import {Container} from "react-bootstrap"
import landing from "../images/landing.jpg"
import cup from "../images/logo-qat.png"
import FinalCountDown from './FinalCountDown'

export default function Landing({lang}) {
  return (
    <section className='landing d-flex justify-content-center align-items-center' style={{backgroundImage : `url(${landing})`}} >
        <Container style={{zIndex : "2"}}>
        <div className='content text-center text-light'>
            <img src={cup} className='img-fluid cup' alt="worldcup" />
            {lang === "ar" ? <h1>كأس العالم لكرة القدم قطر 2022</h1> :  <h1>FIFA WORLD CUP QATAR 2022</h1>  }
        </div>
        <hr className='text-light'/>
        <div className='d-flex justify-content-center'>
        <h1 className='countdown-heading text-center text-light my-3'>
        {lang === "ar" ? "العد التنازلي للنهائي" : "Countdown to the Final"}
        </h1>
        </div>
        <FinalCountDown lang={lang} />

        </Container>
    </section>
  )
}
