import React, {useEffect, useState} from 'react';
import FreeHallsComponent from "./FreeHallsComponent";
import axios from "axios";
import {IFreeHals} from "../IHalls";
import {Box} from "@chakra-ui/react";

const FreeHalls = () => {
    const [allFreeHalls, setAllFreeHalls] = useState<IFreeHals[]>([])

    useEffect(() => {
        GetFreeHalls()
    }, []);


    const GetFreeHalls = async () => {
        const response = await axios.get("http://localhost:9087/freeHalls")
        setAllFreeHalls(response.data)
    }

    return (
        <Box overflow={"auto"} w={"100%"} h={"90vh"} justifyContent={"space-between"}>
            {
                allFreeHalls.map((halls) =>
              // @ts-ignore
            <FreeHallsComponent HallId={halls.hallId} HallType={halls.hallType} HallNumber={halls.hallNumber} SeatsAmount={halls.seatsAmount}/>
                )
            }
        </Box>
    );
};

export default FreeHalls;
