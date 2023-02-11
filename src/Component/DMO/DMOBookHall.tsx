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
import {color1, color2, color3, color4} from "../Styled/Color";
import {IHistory, MockHistoryBookHall} from "../mock";
import HisotoryBookComponent from "../HistoryBookHall/HisotoryBookComponent";
import FreeHallsComponent from "../FreeHalls/FreeHallsComponent";
import FreeHalls from "../FreeHalls/FreeHalls";
import OccupiedComponent from "../Occupied/OccupiedComponent";
import OccupiedHall from '../Occupied/OccupiedHall';
import HistoryBook from "../HistoryBookHall/HistoryBook";

function DMOBookHall() {


    const [halls, setHalls] = useState<any>([])

    const [chosenHalls, setChosenHalls] = useState("")
    const [bookLesson, setBookLesson] = useState<IHistory[]>([])
    const [history, setHistory] = useState<IHistory[]>([])

    useEffect(() => {
        // GetClasses()
        // GetTeachers()
        GetHalls()
        GetHistory()
    }, [])

    const GetHistory = () => {
        setHistory(MockHistoryBookHall)
    }

    const GetHalls = async () => {
        const response = await axios.get("http://localhost:9087/freeHalls")
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

    // const BookHall = async () => {
    //     const response = await axios.patch("http://localhost:9087/bookHall", {
    //         teacherId: chosenTeacher,
    //         hallId: chosenHalls,
    //         classId: chosenClass,
    //     })
    //     const d = new Date();
    //     const hours = d.getHours();
    //     const minutes = d.getMinutes()
    //     if (response.data === true) {
    //         console.log("you book")
    //         MockHistoryBookHall.push(
    //             {
    //                 name: chosenTeacher,
    //                 data: hours + ":" + minutes,
    //                 hall: 201,
    //                 class: "2k"
    //             }
    //         )
    //         GetHistory()
    //         console.log(history)
    //     } else {
    //         console.log("hall is book other user ")
    //     }
    //
    //     await GetHistory()
    // }
    //
    //


    return (
            <Box background={color1} w={"100%"} h={"100vh"} minHeight={"100%"} flexDirection={"column"}>
                <Tabs w={"100%"} height={"90vh"}>
                    <Center>
                        <Flex>
                            <Tab>Wolne sale</Tab>
                            <Tab>Zajęte sale</Tab>
                            <Tab>Historia wizęcia</Tab>
                        </Flex>
                    </Center>
                    <TabPanels>
                        <TabPanel>
                            <FreeHalls/>
                        </TabPanel>
                        <TabPanel>
                            <OccupiedHall/>
                        </TabPanel>
                        <TabPanel>
                            <HistoryBook/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
    );
}

export default DMOBookHall;