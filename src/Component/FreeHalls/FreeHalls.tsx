import React, {useEffect, useState} from 'react';
import FreeHallsComponent from "./FreeHallsComponent";
import axios from "axios";
import {IFreeHals} from "../IHalls";
import {Box} from "@chakra-ui/react";

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
                    <h2>niema wolnych sall</h2>
                </>
            )
        }
    }

    return (
        <Box overflow={"auto"} w={"100%"} h={"90vh"} justifyContent={"space-between"}>
            {
                allFreeHalls.map((halls) =>
              // @ts-ignore
            <FreeHallsComponent HallId={halls.hallId} HallType={halls.hallType} HallNumber={halls.hallNumber} SeatsAmount={halls.seatsAmount}/>
                )
            }
            <div>{
                emptyFreeHalls
            }</div>
        </Box>
    );
};

export default FreeHalls;
