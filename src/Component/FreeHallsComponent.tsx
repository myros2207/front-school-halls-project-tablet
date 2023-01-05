import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Box, Container} from "@chakra-ui/react";

const FreeHallsComponent = () => {
    const [allFreeHalls, setAllFreeHalls] = useState([])
    const [minusOne, setMinusOne] = useState([])
    const [freeHallsNumber, setFreeHallsNumber] = useState([])

    useEffect(() => {
        GetFreeHalls()
    }, []);


    const GetFreeHalls = async () => {
        const response = await axios.get("http://localhost:3000/freeHalls")
const arr:number[] = []
        for (let i = 0; i < response.data.length; i++) {
            arr.push(
                response.data[i].hallNumber
            )
        }
        // @ts-ignore
        setFreeHallsNumber(arr)
        const checkFirstNumber = freeHallsNumber.filter( function (num) {

            // @ts-ignore
            return num.startsWith(1)
        })
        // console.log(response.data)

        console.log(freeHallsNumber)
        console.log(checkFirstNumber)
        setAllFreeHalls(response.data)
        console.log(response.data)
    }
    return (
        <Box>
            {
                allFreeHalls.map((free:any) =>
                    <>

                    <h2>{free.hallNumber}</h2>
                    </>
                )
            }
            <Box>
                <h2>-1 piętro</h2>
                {}
            </Box>
        </Box>
    );
};

export default FreeHallsComponent;
