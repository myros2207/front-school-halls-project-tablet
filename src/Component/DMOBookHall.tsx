import React, {useEffect, useState} from 'react';
import Select from "react-select";
import {Box, Button, Center, Container, Flex, Select as SelectChakra, Text} from '@chakra-ui/react'
import axios from "axios";
import {color1, color2, color3, color4} from "./Color";
import {IHistory, MockHistoryBookHall} from "./mock";

function DMOBookHall() {

    const [teachers, setTeachers] = useState<any>([])
    const [classes, setClasses] = useState<any>([])
    const [halls, setHalls] = useState<any>([])
    const [chosenTeacher, setChosenTeacher] = useState("")
    const [chosenClass, setChosenClass] = useState("")
    const [chosenHalls, setChosenHalls] = useState("")
    const [bookLesson, setBookLesson] = useState<IHistory[]>([])
    const [history, setHistory] = useState<IHistory[]>([])

    useEffect(() => {
        GetClasses()
        GetTeachers()
        GetHalls()
        GetHistory()
    }, [])

    const GetHistory = () => {
        setHistory(MockHistoryBookHall)
    }
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
            if (response.data[i].building.buildingName === "DMO") {
                arr.push({
                        label: response.data[i].hallNumber + " " + response.data[i].hallType,
                        value: response.data[i].hallId
                    }
                )
            }
        }
        setHalls(arr)
    }

    const BookHall = async () => {
        const response = await axios.patch("http://localhost:3000/bookHall", {
            teacherId: chosenTeacher,
            hallId: chosenHalls,
            classId: chosenClass,
        })
        const d = new Date();
        const hours = d.getHours();
        const minutes = d.getMinutes()
        if (response.data === true) {
            console.log("you book")
            MockHistoryBookHall.push(
                {
                    name: chosenTeacher,
                    data: hours +":"+minutes,
                    hall: 201,
                    class: "2k"
                }
            )
            GetHistory()
            console.log(history)
        }
        else {
            console.log("hall is book other user ")
        }

        await GetHistory()
    }
    const chooseTeacher = (e: any) => {
        setChosenTeacher(e.value)

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
                <Center background={color1} w={"100%"} h={"full"} minHeight={"100%"} flexDirection={"column"}>
                    <Box overflow={"auto"} w={"100%"} h={"85vh"}>
                        <h1>Book hall history</h1>
                        <Box margin={"auto"} h={"5rem"} borderRadius={"10px"} w={"95%"} background={color2}>
                            1
                        </Box>
                        {
                            history.reverse().map((mock) =>
                                <Box h={"5rem"} m={"auto"} mt={"1rem"} borderRadius={"10px"} w={"95%"}
                                     background={color2}>
                                    <h2>{mock.name}</h2>
                                    <h2>{mock.data}</h2>
                                </Box>
                            )
                        }
                    </Box>
                    <Flex p={"1rem"} w={"99vw"} h={"100%"} background={color3} justifyContent={"center"}>
                        <Box>
                            <Text>Imię</Text>
                            <Select onChange={chooseTeacher} options={teachers} isSearchable={true}
                                    styles={reactSelectStyles}/>
                        </Box>
                        <Box>
                            <Text>Sala</Text>
                            <Select onChange={chooseHalls} options={halls} isSearchable={true}
                                    styles={reactSelectStyles}/>
                        </Box>
                        <Box>
                            <Text>Klasa</Text>
                            <Select onChange={chooseClass} options={classes} isSearchable={true}
                                    styles={reactSelectStyles}/>
                        </Box>
                        <Button h={"10vh"} onClick={BookHall}>book</Button>
                    </Flex>
                </Center>
                {/*<button onClick={BookNew}>chek</button>*/}
            </div>
        </div>
    );
}

export default DMOBookHall;