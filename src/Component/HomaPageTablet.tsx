import React, {useEffect, useState} from 'react';
import Select from "react-select";
import {Box, Button, Center, Container, Flex, Select as SelectChakra, Text} from '@chakra-ui/react'
import axios from "axios";
import {color1, color2, color3, color4} from "./Color";

function HomePageTablet() {

    const [teachers, setTeachers] = useState<any>([])
    const [classes, setClasses] = useState<any>([])
    const [halls, setHalls] = useState<any>([])
    const [chosenTeacher, setChosenTeacher] = useState("")
    const [chosenClass, setChosenClass] = useState("")
    const [chosenHalls, setChosenHalls] = useState("")

    useEffect(() => {
        GetClasses()
        GetTeachers()
        GetHalls()
    }, [])

    const GetTeachers = async () => {
        const response = await axios.get("http://localhost:3000/teachers")

        const arr = []

        for (let i = 0; i < response.data.length; i++) {
            arr.push({
                label: response.data[i].teacherFirstName + " " + response.data[i].teacherSecondName,
                value: response.data[i].teacherId
            })
        }

        setTeachers(arr)
    }

    const GetClasses = async () => {
        const response = await axios.get("http://localhost:3000/classes")

        const arr = []

        for (let i = 0; i < response.data.length; i++) {
            arr.push({
                label: response.data[i].className,
                value: response.data[i].classId
            })
        }
        setClasses(arr)
    }

    const GetHalls = async () => {
        const response = await axios.get("http://localhost:3000/halls")

        const arr = []
        for (let i = 0; i < response.data.length; i++) {
            arr.push({
                    label: response.data[i].hallNumber + " " + response.data[i].hallType,
                    value: response.data[i].hallId
                }
            )
        }
        setHalls(arr)
    }

    const BookHall = async () => {
        const response = await axios.patch("http://localhost:3000/bookHall", {
            teacherId: chosenTeacher,
            hallId: chosenHalls,
            classId: chosenClass,
        })
        console.log(response.data)

    }
    const chooseTeacher = (e: any) => {
        setChosenTeacher(e.value)
        console.log(chosenTeacher)

    }

    const chooseClass = (e: any) => {
        setChosenClass(e.value)
    }
    const chooseHalls = (e: any) => {
        setChosenHalls(e.value)
    }

    const reactSelectStyles = {
        control: (base: any) => ({
            width: "20vw",
            border: "2px solid ",
            // margin: "2rem",
            height: "10vh",
            borderRadius: "5px"
        }),
        menu: (base: any) => ({
            // width: "10rem",
        }),
    }
    
    

    return (
        <div className="App">
            <div style={{display: "block", margin: "0"}}>
                <Center background={color1} w={"100vw"} h={"full"} minHeight={"100%"} flexDirection={"column"}>
                    <Box overflow={"auto"} w={"100vw"}  h={"85vh"}>
                        <h1>Book hall history</h1>
                        <Box margin={"auto"} h={"5rem"} borderRadius={"10px"} w={"95%"} background={color2}>
                            1
                        </Box>
                        <Box h={"5rem"} m={"auto"} mt={"1rem"} borderRadius={"10px"} w={"95%"} background={color2}>
                            2
                        </Box>
                        <Box h={"5rem"} m={"auto"} mt={"1rem"} borderRadius={"10px"} w={"95%"} background={color2}>
                            3
                        </Box>
                        <Box h={"5rem"} m={"auto"} mt={"1rem"} borderRadius={"10px"} w={"95%"} background={color2}>
                            4
                        </Box>
                        <Box h={"5rem"} m={"auto"} mt={"1rem"} borderRadius={"10px"} w={"95%"} background={color2}>
                            5
                        </Box>
                        <Box h={"5rem"} m={"auto"} mt={"1rem"} borderRadius={"10px"} w={"95%"} background={color2}>
                            6
                        </Box>
                        <Box h={"5rem"} m={"auto"} mt={"1rem"} borderRadius={"10px"} w={"95%"} background={color2}>
                            7
                        </Box>
                        <Box h={"5rem"} m={"auto"} mt={"1rem"} borderRadius={"10px"} w={"95%"} background={color2}>
                            7
                        </Box>
                        <Box h={"5rem"} m={"auto"} mt={"1rem"} borderRadius={"10px"} w={"95%"} background={color2}>

                        </Box>
                        <Box h={"5rem"} m={"auto"} mt={"1rem"} borderRadius={"10px"} w={"95%"} background={color2}>

                        </Box>
                        <Box h={"5rem"} m={"auto"} mt={"1rem"} borderRadius={"10px"} w={"95%"} background={color2}>

                        </Box>


                    </Box>
                    <Flex w={"100%"} h={"100%"} background={color3} justifyContent={"center"}  >
                        <Box m={"1rem"}>
                            <Text>Imię</Text>
                        <Select onChange={chooseTeacher} options={teachers} isSearchable={true}
                                     styles={reactSelectStyles}/>
                        </Box>
                        <Box m={"1rem"}>
                            <Text>Sala</Text>
                            <Select onChange={chooseHalls} options={halls} isSearchable={true} styles={reactSelectStyles}/>
                        </Box>
                        <Box m={"1rem"}>
                            <Text>Klasa</Text>
                        <Select onChange={chooseClass} options={classes} isSearchable={true}
                                styles={reactSelectStyles}/>
                        </Box>
                        <Button mt={"2.5rem"} h={"10vh"} onClick={BookHall}>book</Button>
                    </Flex>
                </Center>
            </div>
        </div>
    );
}

export default HomePageTablet;