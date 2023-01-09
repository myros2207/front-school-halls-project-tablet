import React, {useEffect} from 'react';
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Text
} from "@chakra-ui/react";
import {color2, color3} from "../Color";
import Select from "react-select";
import axios from "axios";
import { IOccupiedHalls} from "../IHalls";


const OccupiedComponent = (halls: IOccupiedHalls) => {

    useEffect(() => {
        GetOccupiedHalls()
    }, []);


    const GetOccupiedHalls = async () => {
        const response = await axios.get("http://localhost:9087/occupiedHalls")
        console.log(response.data)
    }
    console.log(halls)
    const VacateHall = async () => {
        const response = await axios.patch("http://localhost:9087/vacateHall",{
            "hallId": halls.HallId
        })
        if (response.data === true) {
            window.location.reload()
        }
    }
    return (

        <Box>
            <Box  background={color2} mt={"5px"}>
                <Flex justifyContent={"space-between"}>
                    <Box maxWidth={"auto"}>
                        <Flex>
                            <Text fontWeight={"bold"} fontSize={"2rem"} p={"10px"}>{halls.HallNumber}</Text>
                            <Text fontSize={"2rem"} p={"10px"}>{halls.Teacher}</Text>
                            <Text fontSize={"2rem"} p={"10px"}>{halls.ClassName}</Text>
                        </Flex>
                    </Box>
                    <Box alignItems={"center"} maxWidth={"auto"}>
                        <Button h={"2rem"} colorScheme='blue' onClick={VacateHall}>Vacate</Button>
                    </Box>
                </Flex>

            </Box>

        </Box>
    );
};

export default OccupiedComponent;
