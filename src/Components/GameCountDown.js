import React from 'react'

export default function GameCountDown(props) {

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
        setText(<span>المباراة انتهت</span>)
        return
    }

    if(GameDate > TodayDate) {
        setText(<span>المباراة في الايام القادمة</span>)
        return
    }
    


    if (TodayDate === GameDate ) {

        if(gapMinutes <= -115) {

            setText(<span>المباراة انتهت</span>)
            return
        }
       
        if(gapMinutes <= 0 && gapMinutes > -115 ) {
          
            setText(<span className='playing-now '>المباراة جارية الآن</span>)
            return
           
        }

        if(gapMinutes > 0) {
            setText(<span>المباراة بعد{gapInHours === 1 ? " ساعة و " : gapInHours === 2 ? " ساعتين و "  : gapInHours === 0 ? " " : ` ${gapInHours}  ساعات و `} {GapInMinutes <= 10 ? `${GapInMinutes}دقائق` : ` ${GapInMinutes} دقيقة`} </span>)
            return
        }

    }


  

    }

    setInterval(counter , 60000)
   



  return (
    <>{text}</>
 
  )
}



