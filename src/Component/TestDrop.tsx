import React, {useEffect, useState} from 'react';
import Select from "react-select";
import {Box, Button, Center, Container, Flex, Select as SelectChakra} from '@chakra-ui/react'
import axios from "axios";

function TestDrop() {

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
            width: "10rem",
            border: "2px solid orange"
        }),
        menu: (base: any) => ({
            // width: "10rem",
            overflow: "scroll"
        }),
    }

    return (
        <div className="App">
            <div style={{display: "block", margin: "0"}}>
                <Center w={"100vw"} flexDirection={"column"}>
                    <Box overflow={"auto"} w={"100vw"} background={"green"} h={"50vh"}>
                        <h1>Book hall history</h1>
                        <Box h={"5rem"} borderRadius={"10px"} w={"95%"} background={"purple"}>

                        </Box>
                        <Box h={"5rem"} m={"auto"} mt={"1rem"} borderRadius={"10px"} w={"95%"} background={"purple"}>

                        </Box>
                        <Box h={"5rem"} m={"auto"} mt={"1rem"} borderRadius={"10px"} w={"95%"} background={"purple"}>

                        </Box>
                        <Box h={"5rem"} m={"auto"} mt={"1rem"} borderRadius={"10px"} w={"95%"} background={"purple"}>

                        </Box>
                        <Box h={"5rem"} m={"auto"} mt={"1rem"} borderRadius={"10px"} w={"95%"} background={"purple"}>

                        </Box>
                        <Box h={"5rem"} m={"auto"} mt={"1rem"} borderRadius={"10px"} w={"95%"} background={"purple"}>

                        </Box>
                        <Box h={"5rem"} m={"auto"} mt={"1rem"} borderRadius={"10px"} w={"95%"} background={"purple"}>

                        </Box>
                        <Box h={"5rem"} m={"auto"} mt={"1rem"} borderRadius={"10px"} w={"95%"} background={"purple"}>

                        </Box>
                        <Box h={"5rem"} m={"auto"} mt={"1rem"} borderRadius={"10px"} w={"95%"} background={"purple"}>

                        </Box>



                    </Box>
                    <Flex h={"10vh"}>
                        <Box>
                            <Flex>
                            {/*    @ts-ignore*/}
                            <Select onChange={chooseTeacher} options={teachers} isSearchable={true} styles={reactSelectStyles}/>
                                {/*    @ts-ignore*/}
                            <Select onChange={chooseClass} options={classes} isSearchable={true} styles={reactSelectStyles}/>
                                {/*    @ts-ignore*/}
                            <Select onChange={chooseHalls} options={halls} isSearchable={true} styles={reactSelectStyles}/>
                            </Flex>
                        </Box>
                        <Button h={"5rem"} onClick={BookHall}>book</Button>
                    </Flex>
                </Center>
            </div>
        </div>
    );
}

export default TestDrop;