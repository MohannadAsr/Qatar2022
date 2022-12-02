import React from 'react'
import {Row , Col} from "react-bootstrap"
import stadiums from "../StadiumsAr"
import AOS from "aos"
import 'aos/dist/aos.css';
import { nanoid } from 'nanoid'

export default function StadiumsAr() {


    React.useEffect(()=>{
        AOS.init();
      },[])
    

  return (
    <section className='stadiums-section py-4 bg-dark' id='stadiums' >
        <h1 className='my-3 text-light text-center mb-5'>ملاعب البطولة</h1>

        {stadiums ? 
        stadiums.map(stadium => {
            return <Row className='g-0 stadiums' dir='rtl'key={nanoid()} >
                        <Col lg={6} className="stadium-info" data-aos="fade-left" data-aos-duration="1000" >
                            <div className='text-light'>
                                <h1 >{stadium.name}</h1>
                                <span className='my-2 mx-4' style={{fontSize: "13px"}}>{stadium.head}</span>
                                <hr/>
                                <div className='my-4' style={{fontSize: "12px"}}>
                                    <p>سعة الاستاد لكأس العالم   {stadium.capacity}</p>
                                    <p className='my-2'>*قد تتغير قليلاً سعة الاستاد في مباريات معيّنة.</p>
                                </div>
                                <hr/>
                                <p style={{fontSize: "14px"}}>
                                   الموقع : {stadium.location}
                                </p>
                                
                                

                            </div>

                        </Col>
                        <img src={require(`../images/Stadiums/${stadium.full_img}Icon.webp`)} alt="icon"  className='stadium-icon d-none d-lg-block' style={{zIndex : "3"}} />
                        <Col lg={6} className="stadium-img-container">
                            <div className='stadium-img d-none d-lg-block' data-aos="fade-right" data-aos-duration="1000"  style={{backgroundImage : `url(${require(`../images/Stadiums/${stadium.full_img}.JPG`)})`}}></div>
                            <img src={require(`../images/Stadiums/${stadium.full_img}.JPG`)} className="img-fluid  d-lg-none d-block" alt='stadiums' />
                        </Col>
                 </Row>
                 
        })
        :
        null
        }


    </section>
  )
}
