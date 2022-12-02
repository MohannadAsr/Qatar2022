import React from 'react'
import {Container} from "react-bootstrap"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Navbar({lang , setLang}) {
  return (
    <nav className='nav-bar py-3' dir={lang === "ar" ? "rtl" : "ltr"}>
        <Container className="d-flex justify-content-between align-items-center">
        <h4 className='text-light'>{lang === "ar" ? "كأس العالم قطر 2022" :" Qatar2022 World Cup"}</h4>
        <div >
          <InputGroup  >
        <DropdownButton
         
          title={lang === "ar" ? "العربية" : "En"}
          id="input-group-dropdown-1"
          className='lang'
          dir="rtl"
        >
          <Dropdown.Item className='d-flex justify-content-between align-items-center'  active={lang === "ar" && true} onClick={()=>{setLang("ar")}}>العربية <img src={require(`../images/Langs/AR.JPG`)} style={{width: "20px" , height : "15px"}} alt="arabic" /> </Dropdown.Item>
          <Dropdown.Item className='d-flex justify-content-between align-items-center' active={lang === "en" && true} onClick={()=>{setLang("en")}}>English <img src={require(`../images/Langs/EN.JPG`)} style={{width: "20px" , height : "15px"}} alt="english" /></Dropdown.Item>
        </DropdownButton>
     
      </InputGroup></div>
        

        </Container>
        

    </nav>
  )
}
