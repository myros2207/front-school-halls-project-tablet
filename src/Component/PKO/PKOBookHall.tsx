import React, {useEffect, useState} from 'react';
import Select from "react-select";
import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    Select as SelectChakra,
    Tab, TabPanel,
    TabPanels,
    Tabs,
    Text
} from '@chakra-ui/react'
import axios from "axios";
import {color1, color2, color3, color4} from "../Color";
import {IHistory, MockHistoryBookHall} from "../mock";
import HisotoryBookComponent from "../HisotoryBookComponent";
import FreeHallsComponent from "../FreeHalls/FreeHallsComponent";
import FreeHalls from "../FreeHalls/FreeHalls";

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
        const response = await axios.get("http://localhost:3000/freeHalls")
        const arr = []
        for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].building.buildingName === "PKO") {
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
                    data: hours + ":" + minutes,
                    hall: 201,
                    class: "2k"
                }
            )
            GetHistory()
            console.log(history)
        } else {
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
        <Box background={color1} w={"100%"} h={"100vh"} minHeight={"100%"} flexDirection={"column"}>
            <Tabs w={"100%"} height={"90vh"}>
                <Center>
                    <Flex>
                        <Tab>Free hall</Tab>
                        <Tab>History</Tab>
                    </Flex>
                </Center>
                <TabPanels>
                    <TabPanel>
                        <FreeHalls/>
                    </TabPanel>
                    <TabPanel>
                        <HisotoryBookComponent/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
}

export default DMOBookHall;