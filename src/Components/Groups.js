import React from 'react'
import {Container } from "react-bootstrap"
import data from "../groups"
import groupbg from "../images/groupbg.jpg"
import AOS from "aos"
import 'aos/dist/aos.css';
import { nanoid } from 'nanoid'





export default function Groups({lang}) {

  
  React.useEffect(()=>{
    AOS.init();
  },[])



  return (
    <section className='groups-section py-4 text-light' dir={lang === "ar" ? "rtl" : "ltr"} id="groups">
        <Container  >
            <h2 className='text-center fw-bold'>{lang === "ar" ? "المجموعات" : "Groups"}</h2>
            <hr/>

            <div className='d-flex justify-content-center flex-wrap align-items-center gap-2 text-center' >

                { data.map(element=>{
                  return <div key={nanoid()}  className=" group p-4" data-aos="flip-left" data-aos-duration="2000"  style={{minWidth : "270px" , backgroundImage : `url(${groupbg})`}} >
                    <div className='text-center mb-4 group-name'> {lang === "ar" ? "المجموعة" : "Group"} { element[0].group } </div>
                    <div className='d-flex flex-column'>{element[1].map(team=>{
                        return <div key={nanoid()}> <div  className='d-flex align-items-center gap-2'> <img className='team-img' src={require(`../images/flags/${team.name}.webp`)}  style ={{width : "60px" , height : "40px"}} alt="team-flag" /> <span className='fw-bold'>{lang === "ar" ? team.nameAr :team.name}</span>  </div> <hr/></div>
                    })}</div>
                     </div>
                })}
           
           </div>

        </Container>

    </section>
  )
}
