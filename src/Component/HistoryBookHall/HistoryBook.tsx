import React, {useEffect, useState} from 'react';
import {IHistory} from "../mock";
import {IHistoryBook} from "../IHalls";
import HistoryBookComponent from "./HisotoryBookComponent";
import axios from "axios";
import {Box} from "@chakra-ui/react";

const HistoryBook = () => {
    const [history, setHistory] = useState<IHistoryBook[]>([])

    useEffect(() => {
        GetHistory()
    }, []);

    const GetHistory = async () => {
        const response = await axios.get("http://localhost:9087/history")
        console.log(response.data)
        const array = []
        for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].hall.building.buildingName === localStorage.getItem("Building")) {
                array.push( response.data[i])
            }
        }
        setHistory(array)
    }
    return (
        <Box overflow={"auto"} w={"100%"} h={"90vh"} justifyContent={"space-between"}>
            {
                history.map((his:IHistoryBook | any) =>
            <HistoryBookComponent Teacher={his.teacher.teacherFirstName + " " + his.teacher.teacherSecondName} ReservedDate={his.reservedDate} VacateDate={his.vacateDate} HallNumber={his.hall.hallNumber}/>
                )
            }
        </Box>
    );
};

export default HistoryBook;
