import React from "react";
import Loading from "./Components/Loading";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Groups from "./Components/Groups"
import Games from "./Components/Games"
// import axios from "axios";
import data from "./groups"
import StadiumsAr from "./Components/StadiumsAr";
import StadiumsEn from "./Components/StadiumsEn";
import Footer from "./Components/Footer";
import Info from "./Components/Info";
import FlowInfo from "./Components/FlowInfo";
import InfoList from "./Components/InfoList";
import schedule from "./Schedule"






function App() {


  const [gamesData,setGamesData] = React.useState()
  const [fullData , setFullData] = React.useState(null)
  const [showLoading , setShowLoading] = React.useState(true)
  const [list , setList] = React.useState(false)
  const [lang , setLang] = React.useState(()=>{
    const saved = localStorage.getItem("lang");
  const initialValue = JSON.parse(saved);
  return initialValue || "ar";
  })
  const [firstVisit ,setFirstVisit] = React.useState(()=>{
    const saved = localStorage.getItem("first");
  const initialValue = JSON.parse(saved);
  return initialValue || "true";
  })


  function firstTime(){

    setFirstVisit("false")
    window.localStorage.setItem("first", JSON.stringify("false"))

  }



  React.useEffect(()=>{

  setTimeout(() => {
    setGamesData(schedule)
  },11000);
  
    // axios.get(`https://cors-anywhere.herokuapp.com/https://fixturedownload.com/feed/json/fifa-world-cup-2022`).then(res => setGamesData(res.data)).then(er=> console.log(er))

   setTimeout(() => {

    setShowLoading(false)
    
   }, 5000);

  },[])

  React.useEffect(()=>{

    window.localStorage.setItem("lang", JSON.stringify(lang))

  },[lang])

  React.useEffect(()=>{

    setFullData(gamesData)

    if(gamesData) {
      data.forEach(element => {
    
       element[1].forEach(team=>{
       
        setFullData(previtems => previtems.map(item => {
            return item.HomeTeam === team.name ? 
            {...item , "HomeImg" : team.flag_img , "HomeNameAr" : team.nameAr } : item
          }))
        })
       })


       data.forEach(element => {
      
        element[1].forEach(team=>{
        
         setFullData(previtems => previtems.map(item => {
             return item.AwayTeam === team.name ? 
             {...item , "AwayImg" : team.flag_img  , "AwayNameAr" : team.nameAr} : item
           }))
         })
        })
      
      
      }

    
    
  },[gamesData])




  return (
    <>
   

    {showLoading ? 
    <Loading /> :

    firstVisit === "true" ? <Info lang={lang} setLang={setLang} firstTime={firstTime} /> : 


    <> 
        {list && <InfoList setList={setList} lang={lang}/> }
    <Navbar lang={lang} setLang={setLang} />
    <Landing lang={lang} />
    <Groups lang={lang} />
    <Games fullData={fullData} lang={lang} />
    {lang === "ar" ? <StadiumsAr /> : <StadiumsEn />}
    <FlowInfo setList={setList} />
 

    <Footer lang={lang} />
    </> 
    
     }
   
    </>
   
  );
}

export default App;
