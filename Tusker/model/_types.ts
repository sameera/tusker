
export interface Task {
    name: string;
    description: string;
    recurrence: number;
    lastPerformed: Date;
    roomId: string;
}

export interface Room {
    roomId: string,
    floor: string,
    name: string,
}