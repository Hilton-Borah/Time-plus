import { Button, Stack, Text ,Image, Box} from '@chakra-ui/react'
import React from 'react'
import useStopwatch from '../Hooks/useStopwatch'

const Stoptimer = () => {

  const { dis, hour, sec, minute, mili, startTimer, stopTimer, resetTimer } = useStopwatch()

  return (
    <div>
      {dis?<Box display={"flex"} alignItems="center" justifyContent={"center"} m="auto" mb="-10px"><Image textAlign={"center"} w={"50px"}  src={"./images/animation_500_l9jxrfmj.gif"}/></Box>:null}
      <Text mt={"30px"} mb={"30px"} fontSize='4xl'>{hour < 10 ? `0${hour}` : `${hour}`}<span style={{ fontSize: "20px" }}>h</span> : {minute < 10 ? `0${minute}` : `${minute}`}<span style={{ fontSize: "20px" }}>m</span> : {sec < 10 ? `0${sec}` : `${sec}`}<span style={{ fontSize: "20px" }}>s</span> : {mili < 10 ? `0${mili}` : `${mili}`}<span style={{ fontSize: "20px" }}>ms</span></Text>


      <Stack mt={"10px"} textAlign={"center"} justifyContent="space-evenly" alignItems={"center"} spacing={2} direction='row' align='center'>
        <Button disabled={dis} colorScheme='teal' size='xs' w={"100px"} onClick={startTimer}>
          Start
        </Button>
        <Button colorScheme='teal' size='xs' w={"100px"} onClick={stopTimer}>
          Stop
        </Button>
        <Button disabled={dis} colorScheme='teal' size='xs' w={"100px"} onClick={resetTimer}>
          Reset
        </Button>
        
      </Stack>
    </div>
  )
}

export default Stoptimer
