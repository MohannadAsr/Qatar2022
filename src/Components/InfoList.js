import React from 'react'
import { Container } from 'react-bootstrap'
import bg from "../images/fifa2022.jpg"
import tips from "../tips"
import tipsEn from "../TipsEn"
import { nanoid } from 'nanoid'


export default function InfoList({lang,setList}) {
  return (
    <section className='info-page d-flex justify-content-center py-4' style={{backgroundImage: `url(${bg})` , zIndex : "99999999"}}>
    <Container>
    <div className='my-4'>
        <h1 className='text-light text-center my-2'>{lang === "ar" ? "تنبيهات وملاحظات" : "Alerts and notes" }</h1>
        <div className=' bg-dark tips wide p-4'>
 <ul className='text-light d-flex flex-column gap-2' style={{fontSize : "14px" , listStyleType : "disc"}} dir={lang === "ar" ? "rtl" : "ltr"}>
   {lang === "ar" ? <>{tips.map(tip=>{
    return <li key={nanoid()}>-{tip}.</li>
   })}</> : <>{tipsEn.map(tip=>{
    return <li key={nanoid()}>-{tip}.</li>
   })}</>}
 </ul>
        </div>
        
        <div className='text-center my-2'>
        <button className='start-btn text-center' onClick={()=>{setList(false)}}>{lang === "ar" ? " متابعة " : "Continue" }</button>
        </div>
    </div>
    </Container>
  </section>
  )
}
