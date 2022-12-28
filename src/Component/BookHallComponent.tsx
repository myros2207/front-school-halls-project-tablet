import React, {useState} from 'react';
import axios from "axios";
import {IClasses, IHalls, ITeacher} from "./IBookHall";
import { Select } from '@chakra-ui/react';

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
];

const BookHallComponent = (data:[(ITeacher & IClasses & IHalls)]) => {

    const [selectedOption, setSelectedOption] = useState(null);

    // @ts-ignore
    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    console.log(data.map(d => d.TeacherFirstName))

    console.log("test")
    // const BookHall = async () => {
    //     axios.patch("http://localhost:3000/bookHall",{
    //         teacherId: data.TeacherId,
    //         hallId : data.HallId,
    //         classId : data.ClassId,
    //     })
    // }

    return (
        <div>
            <ul>
            <li>{data.map(d => d.TeacherId)}</li>
            </ul>
            {/*<h1> {data.TeacherFirstName}</h1>*/}
            {/*<h2>{data.ClassName}</h2>*/}

            {/*<Select placeholder='Select option'>*/}
            {/*    <option value={data.TeacherId}>{data.TeacherFirstName}</option>*/}
            {/*</Select>*/}

        </div>
    );
};

export default BookHallComponent;
