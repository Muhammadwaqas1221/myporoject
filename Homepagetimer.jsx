import React, { useEffect, useRef, useState } from 'react'

const Homepagetimer = () => {
const [time, setTime]=useState(0);
const [isAactive, setIsActive]=useState(false);
const [isPause, setIsPause]=useState(false)
const intervalRef=useRef(null)
const handelinput =(event)=>{
    setTime(parseInt(event.target.value * 60))
}
const formatTime = () =>{
    const min = String(Math.floor(time/60)).padStart(2,'0')
    const sec = String(time%60).padStart(2, '0')
       return `${min} : ${sec}`
}
const handelStart = () => {
     setIsActive(true)
     setIsPause(false)
}
 useEffect(()=>{
    if(isAactive && !isPause && time>0){
      intervalRef . current = setInterval(()=>{
        setTime((prev)=> prev-1)
    },1000)
    }
     else if (time === 0){
        clearInterval(intervalRef.current);
        setIsActive(false);
        alert('Time is up')
     }
      return () => clearInterval(intervalRef.current)
 },[isAactive, isPause, time])
 const handelpause = () =>{
     setIsPause(isPause)
 }
 const handelReset = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setIsPause(false);
    setTime(0)
 }
// const handelpause = () =>{
//     setIsPause()
// }
  return (
    <div className='mainwriper'>
      <h1 className='heading'>Countdown Timer</h1>
      <div  className='inputbar'>
      <input 
      id='inputbar'
       class="form-control" type='number' placeholder='Enter time in minutes' min={0} 
      onChange={handelinput}/>
      </div>
      <div className='timeshowing'>
        {formatTime()}
         </div>
      <div className='wripertow'>
        <button type='button' id='start' class="btn btn-primary" onClick={handelStart} disabled={isAactive&& !isPause}>Start</button>
        <button type='button' id='resum' class="btn btn-primary"  onClick={handelpause} disabled={!isAactive}>{isPause ? 'Resume' : 'pause'}</button>
        <button type='button' id='reset' class="btn btn-primary"  onClick={handelReset}>Reset</button>
      </div>
    </div>
  )
}

export default Homepagetimer
