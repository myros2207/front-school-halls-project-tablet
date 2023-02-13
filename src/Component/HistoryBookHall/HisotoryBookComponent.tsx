import React, {useEffect, useState} from 'react';
import {Box, Button, Flex, Text} from "@chakra-ui/react";
import {color2} from "../Styled/Color";
import axios from 'axios';
import {IHistoryBook} from "../IHalls";

const HistoryBookComponent = (his: IHistoryBook) => {
    const [history, setHistory] = useState<any>([])

    useEffect(() => {
        GetHistory()
    }, []);

    const GetHistory = async () => {
        const response = await axios.get("http://localhost:9087/history")
        console.log(response.data)
        const array = []
        for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].hall.building.buildingName === localStorage.getItem("Building")) {
                array.push(response.data[i])
            }
        }
        setHistory(array)
    }
    // console.log(new Date())
    // const newDate = new Date()
    // console.log(newDate.getFullYear())

    // @ts-ignore
    const sliceData = his.VacateDate.slice(0, 10)
    // console.log(typeof sliceData)
    return (
        <Box mt={"5px"} background={color2}>
            <Flex>

                <Text w="17vw" fontWeight={"bold"} fontSize={"2rem"}
                      p={"10px"}>{his.Teacher}</Text>
                <Box mr={"10px"}>
                    <Text>Data wzącia:</Text>
                    <Text fontSize={"2rem"}>{his.ReservedDate.slice(0, 10)} {his.ReservedDate.slice(11, 19)}</Text>
                </Box>
                <Box>
                    <Text>Data oddania:</Text>
                    {/*<Text fontSize={"2rem"}>{his.VacateDate.slice(0, 10)} {his.VacateDate.slice(11, 19)}  </Text>*/}
                </Box>
            </Flex>
        </Box>
    );
};
export default HistoryBookComponent;