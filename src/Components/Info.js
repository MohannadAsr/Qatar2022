import React from 'react'
import { Container } from 'react-bootstrap'
import bg from "../images/fifa2022.jpg"
import tips from "../tips"
import tipsEn from "../TipsEn"

export default function Info({lang,setLang , firstTime}) {
  return (
  <section className='info-page d-flex justify-content-center py-4' style={{backgroundImage: `url(${bg})`}}>
    <Container>
    <div className='my-4'>
        <h1 className='text-light text-center my-2'>{lang === "ar" ? "تنبيهات وملاحظات" : "Alerts and notes" }</h1>
        <div className=' bg-dark tips p-4'>
 <ul className='text-light d-flex flex-column gap-2' style={{fontSize : "14px" , listStyleType : "disc"}} dir={lang === "ar" ? "rtl" : "ltr"}>
   {lang === "ar" ? <>{tips.map(tip=>{
    return <li>-{tip}.</li>
   })}</> : <>{tipsEn.map(tip=>{
    return <li>-{tip}.</li>
   })}</>}
 </ul>
        </div>
        <h2 className='mt-4 text-center text-light'>{lang === "ar" ? "اختر لغة الموقع": "Choose The Site Language" }</h2>
        <div className='d-flex justify-content-center gap-4 fs-3 mt-4'>
            <span className={lang === "ar" ? "start-lang active" : "start-lang unactive" } onClick={()=>{setLang("ar")}}>العربية <img src={require(`../images/Langs/AR.JPG`)} style={{width: "40px" , height : "25px"}} alt="arabic" /></span>
            <span className={lang === "en" ? "start-lang active" : "start-lang unactive"} onClick={()=>{setLang("en")}}>English <img src={require(`../images/Langs/EN.JPG`)} style={{width: "40px" , height : "25px"}} alt="english" /></span>

        </div>
        <p className=' text-center' style={{fontSize : "15px"}}>{lang === "ar" ? "يمكنك تغيير هذا الاعداد لاحقا*" : "*You can change this setting later"}</p>
        <div className='text-center'>
        <button className='start-btn text-center' onClick={()=>{firstTime()}}>{lang === "ar" ? " متابعة " : "Continue" }</button>
        </div>
    </div>
    </Container>
  </section>
  )
}
