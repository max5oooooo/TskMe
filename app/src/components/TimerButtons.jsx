import React from "react";

import { useEffect, useRef, useState } from "react"

const TimerButtons = () => {
    const [isRuning, setIsRuning] = useState(false)
    const interdvalIdRef = useRef(null)
    let startTimeRef = useRef(0);
    const [totalRuningTime, setTotalRuningTime ] = useState(0)

    useEffect(() => {
        if (isRuning) {
            interdvalIdRef.current = setInterval(() => {
                setTotalRuningTime( Date.now() - startTimeRef.current + totalRuningTime)
            }, 1000)
        } 
        
        return () =>  {
            clearInterval(interdvalIdRef.current)
            
        }
    }, [isRuning])

        function start () {
            setIsRuning(true)
            startTimeRef.current = Date.now()
        }

        function pause () {
            if (isRuning) {
                setIsRuning(false) // pero non si conta
                //mi serve un timer per contare il tempo quanto e stato attivo il bottone pause
            }
        }
  
        function stop () {
            setTotalRuningTime(0)
            setIsRuning(false)  
            
        }                

        function formatTime (){

            let hours = Math.floor(totalRuningTime / (1000* 60 * 60))
            let minutes = Math.floor(totalRuningTime / (1000* 60 * 60) % 60)
            let seconds  = Math.floor(totalRuningTime / (1000) % 60)
            return `${hours} : ${minutes} : ${seconds}`
        }

    return (
        <div>
            <div>
                <p> {formatTime()}</p>
                <button className=""
                    type="button"
                    onClick={start} disabled={isRuning}
                ><i className="text-primary fa-solid fa-hourglass-start"></i>
                    Start</button>
            </div>
            <div>
                <button className=""
                    type="button"
                    onClick={pause}
                ><i className="text-primary fa-solid fa-stop"></i>
                    Pause</button>
            </div>
            <div>
                <button className="  "
                    type="button"
                    onClick={stop} disabled={!isRuning}
                ><i className="text-primary fa-solid fa-pause"></i>
                    Stop </button>
            </div>
            <div>
                <button className=" "
                    type="button"
                ><i className=" text-primary fa-solid fa-pen-to-square"></i>
                    Edit</button>
            </div>
        </div>
    )
}
export default TimerButtons