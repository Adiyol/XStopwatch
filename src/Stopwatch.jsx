import React, { useEffect, useState } from 'react'
let timer = null;
const Stopwatch = () => {
    
    const [time, setTime] = useState(0)
    const [isActive, setIsActive] = useState(false)
    // const [formattedTime,setFormattedTime] = useState("0:00")

    useEffect(() => {
        console.log(isActive)
        
        if(isActive) {

            timer = setInterval(() => {
                
                setTime((value) => value + 1)
            }, 1000)
        } else {
            clearInterval(timer)
        }
        // if(!isActive) {
            // return(() => clearInterval(timer))
        // }

    }, [isActive])

    function formatTime() {
        let mins = Math.floor(time/60);
        let seconds = time % 60;
        if(String(seconds).length === 1) {
            return(`${mins}:0${seconds}`)
        } else {
            return(`${mins}:${seconds}`)

        }
        
    }



    return (

        <>
        <p>Time: {formatTime()}</p>
        {!isActive && <button onClick={() => setIsActive((value) => !value)}>Start</button>}
        {isActive && <button onClick={() => setIsActive((value) => !value)}>Stop</button>}
        <button onClick={() => {
            setTime(0)
            setIsActive(false)}}>Reset</button>
        </>
    )
}

export default Stopwatch