import React, {useEffect, useState} from 'react';
import {Box, Button, Flex, Text} from "@chakra-ui/react";
import {color2} from "../Color";
import {IHistory, MockHistoryBookHall} from "../mock";
import axios from 'axios';
import FreeHallsComponent from "../FreeHalls/FreeHallsComponent";

const HistoryBookComponent = () => {
    const [history, setHistory] = useState([])
    const [sliceDate, setSliceDate] = useState<any>()
    const [sliceTime, setSliceTime] = useState("")

    useEffect(() => {
        GetHistory()
    }, []);

    const GetHistory = async () => {
        const response = await axios.get("http://localhost:9087/history")
        setHistory(response.data)
    }
    return (
        <Box overflow={"auto"} w={"100%"} h={"90vh"} justifyContent={"space-between"}>
            {
                history.map((his: any) =>
                    <Box mt={"5px"} background={color2}>
                        <Flex>
                            <h2></h2>
                            <Text fontWeight={"bold"} fontSize={"2rem"}
                                  p={"10px"}>{his.teacher.teacherFirstName} {his.teacher.teacherSecondName}</Text>
                            <Text fontSize={"2rem"} p={"10px"}>{his.reservedDate.slice(0, 10)}</Text>
                            <Text fontSize={"2rem"} p={"10px"}>{his.reservedDate.slice(11, 19)}</Text>
                            {/*<Text fontSize={"2rem"} p={"10px"}>{halls.ClassName}</Text>*/}
                        </Flex>
                    </Box>
                )
            }


        </Box>
);
};

export default HistoryBookComponent;
