import { Box, Button, Input, Stack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useRef } from 'react';

const useTimeout = () => {
    // const [sec, setSec] = useState(57);
    // const [minute, setMinute] = useState(59);
    // const [hour,setHour] = useState(0);
    // const [mili,setMili] = useState(0);
    const [dis, setDis] = useState(false);

    const [secText, setSecText] = useState(0);
    const [minText, setMinText] = useState(0);
    const [hourText, setHourText] = useState(0);

    const initial = useRef(null)

    const startTimer = () => {
        setMinText(minText - 1)
        setSecText(59)
        setDis(true);
        initial.current = setInterval(() => {
            setSecText((prev) => prev - 1)
        }, 1000);
    }

    // if (!secText && minText){
    //     // setSecText(60)
    //     setSecText(60-1)
    //     setMinText(minText+1)


    // }   

    if (minText < 0) {
        setMinText(0)
        setSecText(0)
        setHourText(0)
        clearInterval(initial.current)
    }


    if (secText === 1) {
        setSecText(0)
        setSecText(59);
        setMinText((prev) => prev - 1)
    }

    // if (minText === 0){
    //     setSecText(59);
    // }

    const stopTimer = () => {
        setDis(false);
        clearInterval(initial.current);
    }

    const resetTimer = () => {
        setHourText(0);
        setMinText(0);
        setSecText(0);
    }

    // return {secText,setMinText,setHourText,startTimer,stopTimer,rse}

    return (
        <Box>
            <h2>{hourText < 10 ? `0${hourText}` : `${hourText}`}:{minText < 10 ? `0${minText}` : `${minText}`}:{secText < 10 ? `0${secText}` : `${secText}`}</h2>
            <Input type="number" onChange={(e) => setMinText(e.target.value)} w={"50px"}/>
            <Stack textAlign={"center"} justifyContent="space-evenly" alignItems={"center"} spacing={2} direction='row' align='center'>
                <Button disabled={dis} colorScheme='teal' size='xs'  onClick={startTimer}>
                start
                </Button>
                <Button colorScheme='teal' size='xs' onClick={stopTimer}>
                Stop
                </Button>
                <Button colorScheme='teal' size='xs' onClick={resetTimer}>
                Reset
                </Button>
            </Stack>
        </Box>
    )
}

export default useTimeout
