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