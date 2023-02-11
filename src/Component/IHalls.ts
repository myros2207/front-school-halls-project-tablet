import {Box, Text} from "@chakra-ui/react";
import React from "react";

export interface IFreeHals {
    HallId: number;
    HallType: string;
    HallNumber: string;
    SeatsAmount: number
};

export interface IOccupiedHalls {
    HallId: number;
    ClassName:string;
    HallNumber: string;
    Teacher: string;
}

export interface IHistoryBook {
    Teacher: string;
    ReservedDate: string;

    VacateDate: string;
    HallNumber: string
}