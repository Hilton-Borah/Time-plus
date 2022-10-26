import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const useStopwatch = () => {
    const [sec, setSec] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour,setHour] = useState(0);
    const [mili,setMili] = useState(0);
    const [dis,setDis] = useState(false);
    const initial = useRef(null);

    const startTimer=()=>{
        setDis(true);
        initial.current = setInterval(() => {
            setMili((prev)=>prev+1)
        }, 10);
    }

    if (mili===100){
        setSec((prev)=>prev+1)
        setMili(0)
    }

    if (sec === 60){
        setMinute((prev)=>prev+1)
        setSec(0);
    }

    if (minute === 60){
        setHour((prev)=>prev+1)
        setSec(0);
        setMinute(0);
        setMili(0)
    }

    const stopTimer=()=>{
        setDis(false);
        clearInterval(initial.current);
    }

    const resetTimer=()=>{
        setSec(0);
        setMinute(0);
        setHour(0);
        setMili(0)
    }

    return {dis,mili,hour,sec,minute,startTimer,stopTimer,resetTimer}
}

export default useStopwatch
