import React from 'react'
import { Container , Row , Col ,Button } from 'react-bootstrap'
import LoadingContent from './LoadingContent'
import stadium from "../images/stadium.png"
import time from "../images/timedate.png"
import unknown from "../images/flags/unflag.jpg"
import GameCountDown from './GameCountDown'
import GameCountDownEn from './GameCountDownEn'
import MediaQuery from 'react-responsive'





export default function Games({fullData , lang}) {

const todayDate = new Date().toISOString()	
const [Games , setGames] = React.useState(null)
const [filter , setFitler] = React.useState(0)
const [gamesShow ,setGamesShow] = React.useState(4)





React.useEffect(()=>{
  setGames(null)
  if(filter === 30) {
    setGames(fullData)
    setGamesShow(4)
  }

  else {
    var games = []
    const dateOnly = todayDate.split("T")[0]
    var filterDate = parseInt(dateOnly.split("-")[2]) + filter

if(`${filterDate}`.length < 2) {
  filterDate = `0${filterDate}`
}
   if(fullData){   
    fullData.forEach(element => {  
      if (element.DateUtc.split(" ")[0] === `${dateOnly.split("-")[0]}-${dateOnly.split("-")[1]}-${filterDate}` )  {
        games.push(element)
        
      }  
    });
    if(games.length > 0 ) { setGames(games)}
    else {setGames(null)}
   }
  }

},[fullData,filter])




  return (
   <section className='today-games py-4' id='matches'>
    <h1 className='text-center text-dark my-3'>{lang === "ar" ? "مباريات البطولة" : "Competition Matches"}</h1>
    <Container>

      <div className='filtering d-flex align-items-center gap-4 mt-5 flex-wrap' dir={lang === "ar" ? "rtl" : "ltr"}>
{"2022-12-18" >= todayDate.split("T")[0] && <>  <Button className={filter === -1 && "active"} onClick={()=>{setFitler(-1) }} >{lang === "ar" ? "مباريات الامس" : "Yesterday Matches"}</Button>
      <Button className={filter ===  0 && "active"} onClick={()=>{setFitler(0)}}>{lang === "ar" ? "مباريات اليوم" : "Today Matches"} </Button>
      <Button className={filter ===  1 && "active"} onClick={()=>{setFitler(1)}}>{lang === "ar" ? "مباريات الغد" : "Tomorrow Matches"} </Button> </>}
     
      <Button className={filter === 30 && "active"} onClick={()=>{setFitler(30) }}> {lang === "ar" ? "جميع المباريات" : "All Matches"} </Button>


      </div>
      <hr className='black-hr ' />
    


        {fullData ? 
        <>
        {Games ? 
        <>
        <MediaQuery minWidth={200}>

          <MediaQuery maxWidth={767}>
            <Row className='games my-5 mx-1'>
            {Games.slice(0,gamesShow).map(game=>{
        return <Row className='g-0 game p-4' key={Math.random()}>
          <Col lg={12} className="text-center my-1 text-danger px-5">
                      <span>{lang === "ar" ? "الجولة" : "Round"} {game.RoundNumber} , {lang === "ar" ? "المباراة" : " Match"} {game.MatchNumber}</span>
                    </Col>  
          <Col sm={12} className='d-flex justify-content-between align-items-center my-2' dir={lang=== "ar" ? "rtl" : "ltr"} >
            <span className='d-flex gap-3'>
              <img src={game.HomeImg ? require(`../images/flags/${game.HomeImg}.webp`) :unknown} style={{width:"40px" , height:"25px" }} alt="home-flag"/>
              <span>   <span className={game.HomeTeamScore > game.AwayTeamScore ? " winner" : game.HomeTeamScore < game.AwayTeamScore ? " text-muted":""}>{lang === "ar" ? game.HomeNameAr ? game.HomeNameAr : game.HomeTeam  : game.HomeTeam}</span></span>
            </span>
            <span className='px-4'>
           {(game.HomeTeamScore !== null) ? game.HomeTeamScore > game.AwayTeamScore ? <span className='winner'>{game.HomeTeamScore}</span> :  game.HomeTeamScore < game.AwayTeamScore ? <span className='text-muted'>{game.HomeTeamScore}</span> : <span >{game.HomeTeamScore}</span> : <span>---</span> }
            </span>
            
          </Col>
          <Col sm={12}  className='d-flex justify-content-between align-items-center my-2' dir={lang=== "ar" ? "rtl" : "ltr"}>
          <span className='d-flex gap-3'>
              <img src={game.AwayImg ? require(`../images/flags/${game.AwayImg}.webp`) : unknown} style={{width:"40px" , height:"25px" }} alt="away-flag"/>
              <span><span className={game.AwayTeamScore > game.HomeTeamScore ? " winner" : game.AwayTeamScore < game.HomeTeamScore ? "text-muted" : "away-team" }>{lang === "ar" ? game.AwayNameAr ? game.AwayNameAr : game.AwayTeam : game.AwayTeam}</span> </span>
            </span>
            <span className='px-4'>
            {(game.AwayTeamScore !== null) ? game.HomeTeamScore < game.AwayTeamScore ? <span className='winner'>{game.AwayTeamScore}</span> :  game.HomeTeamScore > game.AwayTeamScore ? <span className='text-muted'>{game.AwayTeamScore}</span> : <span >{game.AwayTeamScore}</span> : <span>---</span> }
            </span>

          </Col>
          <hr/>
          <Col sm={12} className="text-center my-1">
          {lang === "ar" ? <GameCountDown gameTime={game.DateUtc}  /> : <GameCountDownEn gameTime={game.DateUtc}  />}
          </Col>
          <hr/>
          <Col sm={12} >
          <img src={stadium} alt="stadium" style={{width:"30px" , height : "20px"}} />
          <span className=' mx-2' style={{fontSize: "12px"}}> {game.Location} </span>

          </Col>
          <Col sm={12} className="px-1">
          <img src={time} alt="stadium" style={{width:"22px" , height : "25px"}} />
          <span className=' mx-2' style={{fontSize: "12px"}}> {game.DateUtc} </span>
          
          </Col>


            
       


          
          
           </Row>





   
             
            })}

{Games.length > 4 && gamesShow < Games.length ? <div className='my-2 d-flex justify-content-center align-items-center' onClick={()=>{setGamesShow(Games.length)}}>

<Button className='m-auto px-4'>{lang === "ar" ? "مشاهدة الكل " : "See All"} </Button>

</div>
:null}

            </Row>


          </MediaQuery>

        <MediaQuery minWidth={768}>
        <Row className='games my-5 mx-2'>
            {Games.slice(0,gamesShow).map(game=>{
        return  <Col lg={{span: 10, offset: 1}}offset={2} className={game.DateUtc === "2022-12-18 15:00:00Z" ? "game py-3 finall" : "game py-3"} key={Math.random()} >
                  <Row className='g-0' >
                    {(game.MatchNumber && game.RoundNumber) && 
                    <Col lg={12} className="text-center my-1 text-danger px-5">
                      <span>{lang === "ar" ? "الجولة" : "Round"} {game.RoundNumber} , {lang === "ar" ? "المباراة" : " Match"} {game.MatchNumber}</span>
                    </Col>  
                    }
                    <Col  className="d-flex align-items-center justify-content-center fs-5 my-2">
                         <img className='team-img mx-2' src={game.HomeImg ? require(`../images/flags/${game.HomeImg}.webp`) : unknown} style ={{width : "70px" , height : "45px"}} alt="hometeam" /> 
                         <span className={game.HomeTeamScore > game.AwayTeamScore ? "home-team winner" : game.HomeTeamScore < game.AwayTeamScore ? "home-team text-muted":"home-team"}>{lang === "ar" ? game.HomeNameAr ? game.HomeNameAr : game.HomeTeam  : game.HomeTeam}</span>
                    </Col>

                    <Col   className="d-flex align-items-center justify-content-center fs-4 my-3 ">
                      {(game.HomeTeamScore !== null)  ? <span>   {game.HomeTeamScore > game.AwayTeamScore ? <span className='winner-score'>{game.HomeTeamScore}</span> : game.HomeTeamScore < game.AwayTeamScore ? <span className='text-muted'>{game.HomeTeamScore}</span> : <span>{game.HomeTeamScore}</span> } : {game.HomeTeamScore < game.AwayTeamScore ? <span className='winner-score'>{game.AwayTeamScore}</span> : game.HomeTeamScore > game.AwayTeamScore ? <span className='text-muted'>{game.AwayTeamScore}</span> : <span>{game.AwayTeamScore}</span> } </span> : <span className='fs-6'>------</span>}
                    </Col>

                    <Col    className="d-flex align-items-center justify-content-center fs-5 my-2">
                      <span className={game.AwayTeamScore > game.HomeTeamScore ? "away-team winner" : game.AwayTeamScore < game.HomeTeamScore ? "away-team text-muted" : "away-team" }>{lang === "ar" ? game.AwayNameAr ? game.AwayNameAr : game.AwayTeam  : game.AwayTeam}</span> 
                    <img className='team-img mx-2' src={game.AwayImg ? require(`../images/flags/${game.AwayImg}.webp`) : unknown } style ={{width : "70px" , height : "45px"}} alt="awayteam" />  
                    </Col>
                    <hr/>
                    <Row lg={12} className="text-center m-auto px-5" >
                      <Col  className='stadium d-flex align-items-center'>
                        <img src={stadium} alt="stadium" style={{width:"30px" , height : "20px"}} />
                       <span className=' mx-2' style={{fontSize: "12px"}}> {game.Location} </span>

                      </Col>
                      <Col className='d-flex justify-content-center fs-6'>
                          {lang === "ar" ? <GameCountDown gameTime={game.DateUtc}  /> : <GameCountDownEn gameTime={game.DateUtc}  />}
                      </Col>
                      <Col className='time d-flex align-items-center justify-content-end '>
                      <span className=' mx-2' style={{fontSize: "12px"}}> {game.DateUtc} </span>
                        <img src={time} alt="stadium" style={{width:"22px" , height : "25px"}} />

                      </Col>
                    </Row>

                   
                  </Row>
                  
              </Col>
 
             
            })}
            
            {Games.length > 4 && gamesShow < Games.length ? <div className='my-2 d-flex justify-content-center align-items-center' onClick={()=>{setGamesShow(Games.length)}}>

              <Button className='m-auto px-4'>{lang === "ar" ? "مشاهدة الكل " : "See All"} </Button>

            </div>
            :null}
            

        </Row> 
        </MediaQuery>

        </MediaQuery> 
        </> 
        : 
        <div className='empty-matches'>{lang === "ar" ? `لايوجد مباريات في هذا اليوم` : `There Are No Games in this Day` }</div> }
        </> 
        : 
        <>
        <LoadingContent />
        </> }
       
       
    </Container>
   </section>
  )
}
