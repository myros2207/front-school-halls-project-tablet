import React, {useEffect} from 'react';
import axios from "axios";
import {IOccupiedHalls} from "../IHalls";
import {useState} from 'react';
import OccupiedComponent from './OccupiedComponent';

const Occupied = () => {
    const [allOccupiedHalls, setAllOccupiedHalls] = useState<IOccupiedHalls[]>([])
    const [emptyOccupiedHalls, setEmptyOccupiedHalls] = useState<any>("")
    useEffect(() => {
        GetOccupiedHalls()
    }, []);


    const GetOccupiedHalls = async () => {
        const response = await axios.get("http://localhost:9087/occupiedHalls")
        const array = []
        for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].building.buildingName === localStorage.getItem("Building")) {
                array.push( response.data[i])
            }
        }
        setAllOccupiedHalls(array)
        console.log(array)
        if  (array.length === 0 ){
            setEmptyOccupiedHalls(
                <>
                    <h2>niema jescze rezerwacji</h2>
                </>
            )
        }
    }
    return (

        <div>
            {
                allOccupiedHalls.map((halls:any) =>
                    <>
                    <OccupiedComponent HallId={halls.hallId} ClassName={halls.class.className} HallNumber={halls.hallNumber} Teacher={halls.teacher.teacherFirstName + " " + halls.teacher.teacherSecondName}/>
                        </>
                )
            }
            <div>
            {
                emptyOccupiedHalls
            }
            </div>
        </div>
    );
};

export default Occupied;
