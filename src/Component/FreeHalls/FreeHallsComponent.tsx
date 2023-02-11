import React, {MouseEventHandler, useEffect, useState} from 'react';
import axios from "axios";
import {
    Box,
    Button,
    Container,
    Drawer, DrawerBody,
    DrawerContent, DrawerHeader,
    DrawerOverlay, Flex,
    Radio,
    RadioGroup,
    Stack, Text,
    useDisclosure
} from "@chakra-ui/react";
import {color2, color3} from "../Styled/Color";
import {IFreeHals} from "../IHalls";
import Select from "react-select";
import {ButtonToOpenGetVacate} from "../Styled/GlobalStyled";


const FreeHallsComponent = (halls: IFreeHals) => {
        const [teachers, setTeachers] = useState<any>([])
        const [classes, setClasses] = useState<any>([])
        const [chosenTeacher, setChosenTeacher] = useState("")
        const [chosenClass, setChosenClass] = useState("")

        useEffect(() => {
            GetTeachers()
            GetClasses()
        }, []);

        const BookHall = async () => {
            const response = await axios.patch("http://localhost:9087/bookHall", {
                teacherId: chosenTeacher,
                hallId: halls.HallId,
                classId: chosenClass,
            })
            console.log(response.data)
            if (response.data === true) {
                window.location.reload()
            }
        }
        const GetTeachers = async () => {
            const response = await axios.get("http://localhost:9087/teachers")
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
            const response = await axios.get("http://localhost:9087/classes")

            const arr = []

            for (let i = 0; i < response.data.length; i++) {
                arr.push({
                    label: response.data[i].className,
                    value: response.data[i].classId
                })
            }
            setClasses(arr)
        }
        const {isOpen, onOpen, onClose} = useDisclosure()
        const [placement, setPlacement] = React.useState('bottom')
        const chooseTeacher = (e: any) => {
            setChosenTeacher(e.value)

        }

        const chooseClass = (e: any) => {
            setChosenClass(e.value)
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
            <Box>
                <Box background={color2} mt={"5px"}>
                    <Flex justifyContent={"space-between"}>
                        <Box maxWidth={"auto"}>
                            <Flex>
                                <Text fontWeight={"bold"} fontSize={"2rem"} p={"10px"}>{halls.HallNumber}</Text>
                                <Text fontSize={"2rem"} p={"10px"}>{halls.HallType}</Text>
                                <Text fontSize={"2rem"} p={"10px"}>Liczba mejsc: {halls.SeatsAmount}</Text>
                            </Flex>
                        </Box>
                        <Box alignItems={"center"} maxWidth={"auto"}>
                            <ButtonToOpenGetVacate onClick={onOpen}> Open </ButtonToOpenGetVacate>
                        </Box>
                    </Flex>
                </Box>
                {/*@ts-ignore*/}
                <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay/>
                    <DrawerContent>
                        <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                        <DrawerBody>
                            <h2>{halls.HallId}</h2>
                            <Flex p={"h1rem"} w={"100vw"} h={"100%"} background={color3} justifyContent={"center"}>
                                <Select placeholder={"Imie Nazwisko"} onChange={chooseTeacher} options={teachers}
                                        isSearchable={true}
                                        styles={reactSelectStyles}/>
                                <Select placeholder={"Klasa"} onChange={chooseClass} options={classes} isSearchable={true}
                                        styles={reactSelectStyles}/>
                                <Button h={"10vh"} onClick={BookHall}>book</Button>
                            </Flex>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        );
    }
;

export default FreeHallsComponent;
