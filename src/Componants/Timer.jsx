import { Box, Button, Text, Stack ,Image,FormControl} from '@chakra-ui/react';
import React, { useState } from 'react'
import { useRef } from 'react';

const useTimeout = () => {
    // const [mili,setMili] = useState(0);
    let [input,setInput] = useState("");
    const [dis, setDis] = useState(false);
    const [check,setCheck] = useState(false);
    const [secText, setSecText] = useState(0);
    let [minText, setMinText] = useState(0);
    const [dummy, setDummy] = useState(false);

    const initial = useRef(null)

    if (check){
        var startTimer = () => {
            setDis(true);
            initial.current = setInterval(() => {
                setSecText((prev) => prev - 1)
            }, 1000);
        }
    } else {
        var startTimer = () => {
            setCheck(true)
            minText = input;
            console.log(minText)
            setMinText(minText - 1)
            // setMinText("")
            setSecText(59)
            setDis(true);
            input=""
            initial.current = setInterval(() => {
                setSecText((prev) => prev - 1)
            }, 1000);
        }
    }

    if (minText < 0) {
        setMinText(0)
        setSecText(0)
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
        setMinText(0);
        setSecText(0);
        input=0
    }

    // return {secText,setMinText,setHourText,startTimer,stopTimer,rse}

    return (
        <Box lineHeight={"10px"}>
            {dis?<Box display={"flex"} alignItems="center" justifyContent={"center"} m="auto" mb="-10px"><Image textAlign={"center"} w={"50px"}  src={"./images/animation_500_l9jyemwf.gif"}/></Box>:null}
            <Text mt={"20px"} mb={"20px"} fontSize='4xl'>{minText < 10 ? `0${minText}` : `${minText}`}<span style={{ fontSize:"20px"}}>m</span> : {secText < 10 ? `0${secText}`  :  `${secText}`}<span style={{ fontSize:"20px"}}>s</span></Text>
            <form>
            <input  type="number" placeholder="Enter here" onChange={(e) =>{
                // return (
                    setInput(e.target.value);
                    setDummy(true)
                // )
            }} style={{width:"100px",outline:"none",textAlign:"center",borderBottom:"1px solid lightgray",marginBottom:"20px", background:"#f3f4f6"}} maxLength="2" required/>
            {dummy ? <Stack mt={"10px"} textAlign={"center"} justifyContent="space-evenly" alignItems={"center"} spacing={2} direction='row' align='center'>
                <Button disabled={dis} colorScheme='teal' size='xs' w={"100px"}  onClick={startTimer}>
                Start
                </Button>
                <Button colorScheme='teal' size='xs' w={"100px"} onClick={stopTimer}>
                Stop
                </Button>
                <Button disabled={dis} colorScheme='teal' size='xs' w={"100px"} onClick={resetTimer}>
                Reset
                </Button>
            </Stack> : <Text fontSize={"2xl"} mt={"20px"}>Please enter duration</Text>}
            </form>

        </Box>
    )
}

export default useTimeout

















// import { Box, Button, Input, Stack } from '@chakra-ui/react';
// import React, { useState } from 'react'
// import { useRef } from 'react';
// import useTimeout from '../Hooks/useTimeout';

// const Timer = () => {

//     const {dis,secText,minText,hourText,startTimer,stopTimer,resetTimer,setMinText} = useTimeout()

//     return (
//         <Box>
//             <h2>{hourText < 10 ? `0${hourText}` : `${hourText}`}:{minText < 10 ? `0${minText}` : `${minText}`}:{secText < 10 ? `0${secText}` : `${secText}`}</h2>
//             <Input type="number" onChange={(e) => setMinText(e.target.value)} w={"50px"}/>
//             <Stack textAlign={"center"} justifyContent="space-evenly" alignItems={"center"} spacing={2} direction='row' align='center'>
//                 <Button disabled={dis} colorScheme='teal' size='xs'  onClick={startTimer}>
//                 start
//                 </Button>
//                 <Button colorScheme='teal' size='xs' onClick={stopTimer}>
//                 Stop
//                 </Button>
//                 <Button colorScheme='teal' size='xs' onClick={resetTimer}>
//                 Reset
//                 </Button>
//             </Stack>
//         </Box>
//     )
// }

// export default Timer
