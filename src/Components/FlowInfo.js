import React from 'react'

export default function FlowInfo({setList}) {
  return (
    <div className='flow-info' onClick={()=>{setList(true)}}>
      <i className="fa-solid fa-envelope-open-text text-light fs-4"></i>
    </div>
  )
}
