export interface IFreeHals {
    HallId: number;
    HallType: string;
    HallNumber: string;
    SeatsAmount: number
};

export interface IOccupiedHalls {
    HallId: number;
    Class: number | null;
    HallNumber: string;
    Teacher: string;
}