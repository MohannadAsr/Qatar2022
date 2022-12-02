import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'

export default function Footer({lang}) {
  return (
    <footer className='footer-section py-2 ' dir={lang === "ar" ? "rtl" : "ltr"} >
        <Container>
            <Row className='py-4'>
                <Col lg={4} className="p-3">
                    <h5 style={{color :"#8a1538"}}>{lang === "ar" ?  " روابط مباشرة" : "QUICK LINKS"}</h5>
                    <hr/>
                    <ul className='my-2 d-flex flex-column gap-2'>
                      <li><a href='https://www.qatar2022.qa/'>{lang === "ar" ? "موقع البطولة الرسمي قطر 2022" : "Qatar2022 Official Site"}</a></li>
                      <li><a href='https://www.qatar2022.qa/en/coming-to-qatar'>{lang === "ar" ? "السفر لقطر" : "Traveling To Qatar"}</a></li>
                      <li><a href='https://www.qatar2022.qa/en/news'>{lang === "ar" ? "الاخبار" : "News"}</a></li>
                    </ul>

                </Col>
                <Col lg={4} className="p-3">
                    <h5 style={{color :"#8a1538"}} >{lang === "ar" ? "استكشاف" : "Discovering"}</h5>
                    <hr/>
                    <ul className='my-2  d-flex flex-column gap-2'>
                      <li><a href='#groups'>{lang === "ar" ? "المجموعات" : "Groups"}</a></li>
                      <li><a href='#matches'>{lang === "ar" ? "دول المباريات" : "Match Schedule"}</a></li>
                      <li><a href='#stadiums'>{lang === "ar" ? "الملاعب" : "Stadiums"}</a></li>
                    </ul>

                </Col>
                <Col lg={4} className="p-3">
                    <h5 style={{color :"#8a1538"}}>{lang === "ar" ? "تواصل معي " : "Contact Me" }</h5>
                    <hr/>
                    <div className='d-flex gap-4 mt-3 text-light '>
            <a href='https://www.facebook.com/mohannad.ala2sar' ><i className="fa-brands fa-facebook fa-2x facebook"></i></a>
            <a href='https://api.whatsapp.com/send/?phone=963964539647'  ><i className="fa-brands fa-whatsapp fa-2x whatsapp"></i></a>
            <a href='https://github.com/MohannadAsr'  ><i className="fa-brands fa-github fa-2x github"></i></a>

            </div>

                </Col>

            </Row>
            <hr/>
            <div className='text-center text-muted pt-2'>
             
              
              
            {lang === "ar" ? "تم التصميم والانشاء من قبل مهند عدنان الاعسر باستخدام مكتبة REACTJS" : "Designed and created By Mohannad Adnan Alassar Using REACTJS"}
              <br/>
              {lang === "ar" ? "جميع الحقوق محفوظة©2022" : "©2022 All rights reserved."} 

            </div>
        </Container>

    </footer>
  )
}
