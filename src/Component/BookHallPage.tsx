import React, {useState} from 'react';
import {IClasses, IHalls, ITeacher} from "./IBookHall";
import BookHallComponent from "./BookHallComponent";
import { useEffect } from 'react';
import axios from "axios";

const BookHallPage = () => {

    const [allTeachers, setAlTeachers] = useState<ITeacher[]>([])
    const [allClasses, setAllClasses] = useState<IClasses[]>([])
    const [allHalls, setAllHalls] = useState<IHalls[]>([])

    const all = [{
        teacher: allTeachers,
        classes: allClasses,
        halls: allHalls
    }]
    useEffect(() => {
        const GetAllTeacher = async () => {
            const teacher = await axios.get("http://localhost:3000/teachers")
            setAlTeachers(teacher.data)
            await GetAllClasses()
            await GetAllHalls()
        }
        GetAllTeacher()

    }, []);


    const GetAllClasses = async () => {
        const classes = await axios.get("http://localhost:3000/classes")
        setAllClasses(classes.data)
        console.log(allClasses)
    }
    const GetAllHalls = async () => {
        const halls = await axios.get("http://localhost:3000/halls")
        setAllHalls(halls.data)
    }
    return (
        <div>
            {
                all.map((allInfo) =>
                    // @ts-ignore
                    <BookHallComponent TeacherId={allInfo.teacher.map(t=>t.teacherId)} TeacherFirstName={allInfo.teacher.map(t=>t.teacherFirstName)} TeacherSecondName={allInfo.teacher.map(t=>t.teacherSecondName)} ClassId={allInfo.classes.map(c=>c.classId)} ClassName={allInfo.classes.map(c=>c.className)} ClassProfession={allInfo.classes.map(c=>c.classProfession)} ClassStudentsAmount={allInfo.classes.map(c=>c.classStudentsAmount)} HallId={allInfo.halls.map(h=>h.hallId)} HallNumber={allInfo.halls.map(h=>h.hallNumber)} HallIsFree={allInfo.halls.map(h=>h.hallIsFree)}/>
                )
                }

        </div>
    );
};

export default BookHallPage;
