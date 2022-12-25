export interface ITeacher {
    TeacherId : number,
    TeacherFirstName : string,
    TeacherSecondName: string
}

export interface IHalls{
    HallId: number,
    HallNumber: number,
    HallIsFree: number,

}


export interface IClasses{
    ClassId: number,
    ClassName: string,
    ClassProfession : string,
    ClassStudentsAmount: number
}