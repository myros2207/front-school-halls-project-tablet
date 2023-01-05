import React, {useEffect, useState} from 'react';
import {Box} from "@chakra-ui/react";
import {color2} from "./Color";
import {IHistory, MockHistoryBookHall} from "./mock";

const HistoryBookComponent = () => {
    const [history, setHistory] = useState<IHistory[]>([])

    useEffect(() => {
        GetHistory()
    }, []);

    const GetHistory = () => {
        setHistory(MockHistoryBookHall)
    }
    return (
            <Box overflow={"auto"} w={"100%"} h={"85vh"}>
                <h1>Book hall history</h1>
                <Box margin={"auto"} h={"5rem"} borderRadius={"10px"} w={"95%"} background={color2}>
                    1
                </Box>
                {
                    history.reverse().map((mock) =>
                        <Box h={"5rem"} m={"auto"} mt={"1rem"} borderRadius={"10px"} w={"95%"}
                             background={color2}>
                            <h2>{mock.name}</h2>
                            <h2>{mock.data}</h2>
                        </Box>
                    )
                }
            </Box>

    );
};

export default HistoryBookComponent;
