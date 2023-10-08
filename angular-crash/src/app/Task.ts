export interface Task{
    id?: number; //? means that the field is optional
    text: string;
    day: string;
    reminder: boolean;
}