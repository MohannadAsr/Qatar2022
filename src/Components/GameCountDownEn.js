import React from 'react'

export default function GameCountDownEn(props) {
    const [text,setText] = React.useState("")

    React.useEffect(()=>{
     counter()
    },[])
  
  
      function counter (){
    
          const TodayDate = new Date().toISOString().split("T")[0]
          const GameDate = props.gameTime.split(" ")[0]
          
  
  
      const gameDate = new Date (props.gameTime)
      const todayDate = new Date ()
  
  
      // Constant  Parameters 
  
      const second = 1000
      const minute = second * 60 
      const hour = minute * 60
      const day = hour * 24
  
      // gaps 
  
      const gap = gameDate -  todayDate
      const gapInHours = Math.floor((gap % day) / hour )
      const GapInMinutes = Math.floor((gap % hour) / minute)
      const gapMinutes = ((gameDate -  todayDate)/1000)/60
  
  
      if(TodayDate > GameDate ) {
          setText(<span>Match Ended</span>)
          return
      }
  
      if(GameDate > TodayDate) {
          setText(<span> The Match in the next days </span>)
          return
      }
      
  
  
      if (TodayDate === GameDate ) {
  
          if(gapMinutes <= -115) {
  
              setText(<span>Match Ended </span>)
              return
          }
         
          if(gapMinutes <= 0 && gapMinutes > -115 ) {
            
              setText(<span className='playing-now '>Live Now </span>)
              return
             
          }
  
          if(gapMinutes > 0) {
              setText(<span> Match After {gapInHours === 0 ? "" : gapInHours === 1 ? `One Hour and` : `${gapInHours} Hours and`} {GapInMinutes === 1 ? "One Minute":`${GapInMinutes} Minutes`} </span>)
              return
          }
  
      }
  
  
    
  
      }
  
      setInterval(counter , 60000)
     
  
  
  
    return (
      <>{text}</>
   
    )
  }
  
  
  
  
