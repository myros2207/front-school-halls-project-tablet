import {Box, Button, Center} from '@chakra-ui/react';
import React from 'react';
import {useNavigate} from "react-router-dom";


const StartPage = () => {
    const a = "Mira"
    // @ts-ignore
    // console.log(a.split(''))
    // const arry = a.split('')
    // if (arry[0] === "M"){
    //     console.log("okkk")
    // }
    const languages = ["Java", "TypeScript", "C#", "JavaScript", "Julia"]

    const jLanguages = languages.filter(function (language) {
        return language.startsWith("J")
    })


    console.log(jLanguages)
    const navigate = useNavigate()
    return (
        <Center h={"100vh"}>
            <Box border={"1px solid"} p={"50px"} borderRadius={"5px"}>
               <Button m={"10px"} onClick={() => {
                   navigate("/global")
                   localStorage.setItem("Building", "PKO")
               }
               }>PKO</Button>
               <Button m={"10px"} onClick={() =>
               {navigate("/global")
                localStorage.setItem("Building", "DMO")
               }}>Dmowskiego</Button>
            </Box>
        </Center>
    );
};

export default StartPage;
