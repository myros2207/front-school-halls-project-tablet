import React, {useEffect, useState} from 'react';
import FreeHallsComponent from "./FreeHallsComponent";
import axios from "axios";
import {IFreeHals} from "../IHalls";
import {Box, Text} from "@chakra-ui/react";

const FreeHalls = () => {
    const [allFreeHalls, setAllFreeHalls] = useState<IFreeHals[]>([])
    const [emptyFreeHalls, setEmptyFreeHalls] = useState<any>("")

    useEffect(() => {
        GetFreeHalls()
    }, []);


    const GetFreeHalls = async () => {
        const response = await axios.get("http://localhost:9087/freeHalls")

        console.log(response.data)
        const array = []
        for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].building.buildingName === localStorage.getItem("Building")) {
                array.push( response.data[i])
            }
        }
        setAllFreeHalls(array)
        if  (array.length === 0 ){
            setEmptyFreeHalls(
                <>
                    <Text fontSize={"4rem"} color={"red"}>Niema wolnych sall!</Text>
                </>
            )
        }
    }

    return (
        <Box overflow={"auto"} w={"100%"} h={"90vh"} justifyContent={"space-between"}>
            {
                allFreeHalls.map((halls:IFreeHals | any) =>
            <FreeHallsComponent HallId={halls.hallId} HallType={halls.hallType} HallNumber={halls.hallNumber} SeatsAmount={halls.seatsAmount}/>)
            }
            <Box justifyContent={"center"} display={"flex"} alignItems={"center"}>{
                emptyFreeHalls
            }</Box>
        </Box>
    );
};

export default FreeHalls;
