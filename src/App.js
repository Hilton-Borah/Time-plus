import logo from './logo.svg';
import './App.css';
import Stoptimer from './Componants/Stoptimer';
import Timer from './Componants/Timer';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Stack, Image, Flex, Box, Tag, Text, Divider } from '@chakra-ui/react'
import { FaHourglassStart } from "react-icons/fa"
// import images from "../public/images"

function App() {

  return (

    <Box border={"1px solid #f3f4f6"} w="380px"  display={"grid"} alignItems="center" justifyContent={"center"} m={"auto"} borderRadius={"10px"} >
      {/* <Flex display={"flex"} justifyContent={"space-around"} height="100%" m={"10px"} border={"1px solid"}> */}

      {/* <Box display={"grid"} alignItems="flex-end"  justifyContent={"flex-start"} bottom={-30} border={"1px solid"} gap={"200px"}> */}
      <Box w={"360px"} display={"flex"} alignItems="center" justifyContent={"flex-start"} m={"auto"} fontFamily={"cursive"} fontSize='5xl' gap={"10px"}>
      <Text>TimePlus</Text>
      <Box><Image w="40px" src='./images/animatedClock.svg'/></Box>
      </Box>
      {/* <img style={{ width: "350px", height: "350px" }} src='./images/67011-code-time.gif' /> */}
      {/* </Box> */}
      <Divider w={"360px"} border="1px solid #f3f4f6" color={"#f3f4f6"} m="auto" />
      <Box w={"360px"} display={"flex"} alignItems="center" justifyContent={"space-between"} m={"auto"} ><Box lineHeight={"25px"} mt={"10px"} border={"1px solid lightgray"} borderRadius={"10px"} w={"200px"} p={"10px"}><Text fontSize='2xl' mb={"10px"}>Welcome buddy</Text><Text fontSize='14px' lineHeight={"20px"}>Do you know, "Time and Tide wait for none"</Text>
        <Box display={"flex"} alignItems="center"  gap={"5px"}>
          <Text mt={"10px"} fontSize="17px">Please Start</Text>
          <Text mt={"10px"}><Image w={"20px"} src='./images/77650-stopwatch.gif'/></Text>
        </Box>

      </Box><Image style={{ width: "150px", height: "150px" }} src="./images/121673-company-employees-sharing-thoughts-and-ideas.gif" /></Box>

      <Tag borderRadius={"10px"} w={"360px"} h={"270px"} bgColor={"#f3f4f6"} mb={"180px"} display={"flex"} m="auto" mt={"10px"}>
        <Tabs w={"350px"} h={"270px"} textAlign="center" m="auto" >
          <TabList mt={"20px"} gap={"100px"} display="flex" justifyContent={"space-around"}>
            <Tab>Stopwatch</Tab>
            <Tab>Timer</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Stoptimer />
            </TabPanel>
            <TabPanel>
              <Timer />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Tag>
      <Box w={"360px"} display={"flex"} alignItems="center" justifyContent={"flex-start"} m={"auto"} >
        <Image style={{ width: "150px", height: "150px", marginTop: "10px" }}  src='./images/67011-code-time.gif' />
        <Box lineHeight={"25px"} mt={"10px"} border={"1px solid lightgray"} borderRadius={"10px"} w={"200px"} p={"10px"}>
        <Box display={"flex"} alignItems="center"  gap={"5px"}>
          <Text fontSize={"2xl"} mb={"10px"}>About</Text>
          <Text mb={"5px"}><Image w={"20px"} src='./images/26168-about-page.gif'/></Text>
          </Box>
          <Text fontSize={"14px"} lineHeight={"20px"}>Do a work in a bounded time using TimePlus</Text>
        </Box>
      </Box>

      <Divider w={"360px"} m="auto" mt={"10px"} mb="5px" border="1px solid #f3f4f6" color={"#f3f4f6"} />

      <Flex w={"360px"} display={"flex"} alignItems="center" justifyContent={"center"} textAlign="center" m={"auto"} fontSize="13px" lineHeight={"15px"}>
        {/* <Flex> */}
        Designed and build by Hilton Kumar Borah, 2022 All rights reserved.
        {/* </Flex> */}
      </Flex>
      {/* </Flex> */}
    </Box>
  );
}

export default App;
