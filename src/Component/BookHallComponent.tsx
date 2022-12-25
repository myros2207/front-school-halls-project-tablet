import React, {useState} from 'react';
import axios from "axios";
import {IClasses, IHalls, ITeacher} from "./IBookHall";
import Select from "react-select/base";

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
];

const BookHallComponent = (data:(ITeacher & IClasses & IHalls)) => {

    const [selectedOption, setSelectedOption] = useState(null);

    // @ts-ignore
    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };




    const BookHall = async () => {
        axios.patch("http://localhost:3000/bookHall",{
            teacherId: data.TeacherId,
            hallId : data.HallId,
            classId : data.ClassId,
        })
    }

    return (
        <div>
            <h1>{data.TeacherId}</h1>
            <h1> {data.TeacherFirstName}</h1>
            <h2>{data.ClassName}</h2>
            {/*@ts-ignore*/}
            <Select
                value={selectedOption}
                onChange={handleChange}
                options={options}
                isSearchable={true}
            />
        </div>
    );
};

export default BookHallComponent;
