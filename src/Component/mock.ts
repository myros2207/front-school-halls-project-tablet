export interface IHistory {
    name: string,

    data: string,
    hall: number,
    class: string
}
const d = new Date();
let hours = d.getHours();
const minutes = d.getMinutes()
export const MockHistoryBookHall: IHistory[] = [
    {
        name: "Grzegorz" + " " + "Bartko",
        data: hours + ":" + minutes,
        hall: 206,
        class: "2k"
    },
    {
        name: "Grzegorz" + " " + "Bartko",
        data: hours + ":" + minutes,
        hall: 206,
        class: "2k"
    }, {
        name: "Grzegorz" + " " + "Bartko",
        data: hours + ":" + minutes,
        hall: 206,
        class: "2k"
    }, {
        name: "Grzegorz" + " " + "Bartko",
        data: hours + ":" + minutes,
        hall: 206,
        class: "2k"
    }, {
        name: "Grzegorz" + " " + "Bartko",
        data: hours + ":" + minutes,
        hall: 206,
        class: "2k"
    }, {
        name: "Grzegorz" + " " + "Bartko",
        data: hours + ":" + minutes,
        hall: 206,
        class: "2k"
    }, {
        name: "Grzegorz" + " " + "Bartko",
        data: hours + ":" + minutes,
        hall: 206,
        class: "2k"
    }, {
        name: "Grzegorz" + " " + "Bartko",
        data: hours + ":" + minutes,
        hall: 206,
        class: "2k"
    },
]