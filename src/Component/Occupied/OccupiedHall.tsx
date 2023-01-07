import React, {useEffect} from 'react';
import axios from "axios";
import {IOccupiedHalls} from "../IHalls";
import {useState} from 'react';
import OccupiedComponent from './OccupiedComponent';

const Occupied = () => {
    const [allOccupeidHalls, setAllOccupedHalls] = useState<IOccupiedHalls[]>([])
    useEffect(() => {
        GetOccupiedHalls()
    }, []);


    const GetOccupiedHalls = async () => {
        const response = await axios.get("http://localhost:9087/occupiedHalls")
        setAllOccupedHalls(response.data)
    }
    return (

        <div>
            {
                allOccupeidHalls.map((halls:any) =>
                    <OccupiedComponent HallId={halls.hallId} Class={halls.class} HallNumber={halls.hallNumber} Teacher={halls.teacher}/>
                )
            }
        </div>
    );
};

export default Occupied;
