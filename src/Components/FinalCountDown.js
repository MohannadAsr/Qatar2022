import React from 'react'

export default function FinalCountDown({lang}) {

    const [textDay,setTextDay] = React.useState()
    const [textMinute,setTextMinute] = React.useState()
    const [textHour,setTextHour] = React.useState()


    //"September 12 , 2022 00:00:00:00"


    React.useEffect(()=>{
        counter()
    })

  function counter () {
   const targetDate = new Date("2022-12-18T15:00:00Z").getTime()
   const nowDate = new Date().getTime()
   const gap = targetDate - nowDate 

   // Time 

   const second = 1000
   const minute = second * 60 
   const hour = minute * 60
   const day = hour * 24

   



   if(gap < 0) {
    setTextDay(0) 
   setTextHour(0) 
   setTextMinute(0) 

   }

   else {
    
   setTextDay(Math.floor(gap / day)) 
   setTextHour(Math.floor((gap % day) / hour )) 
   setTextMinute(Math.floor((gap % hour) / minute)) 


   }

  

  }

  setInterval(counter , 60000)

  return (
<>
    { lang === "ar" ? <div className='d-flex justify-content-center align-items-center gap-4  final-counter'>
    <div className='d-flex flex-column  justify-content-center align-items-center'>
     <div className='count-num'>{textDay}</div>
     <div className='count-text'>يوم</div>
    </div>
    .
    <div className='d-flex flex-column justify-content-center align-items-center'>
     <div className='count-num'>{textHour}</div>
     <div className='count-text'>ساعة</div>
    </div>
    .
    <div className='d-flex flex-column justify-content-center align-items-center'>
     <div className='count-num'>{textMinute}</div>
     <div className='count-text'>دقيقة</div>
    </div>
 </div>
 :
 <div className='d-flex justify-content-center align-items-center gap-4  final-counter'>
    <div className='d-flex flex-column  justify-content-center align-items-center'>
     <div className='count-num'>{textDay}</div>
     <div className='count-text'>Days</div>
    </div>
    .
    <div className='d-flex flex-column justify-content-center align-items-center'>
     <div className='count-num'>{textHour}</div>
     <div className='count-text'>Hours</div>
    </div>
    .
    <div className='d-flex flex-column justify-content-center align-items-center'>
     <div className='count-num'>{textMinute}</div>
     <div className='count-text'>Mins</div>
    </div>
 </div>

}
</>
    
   
  )
}
