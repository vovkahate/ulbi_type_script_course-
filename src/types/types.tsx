import { NumberLiteralType } from "typescript";

export interface IAddress {
    city: string;
    street: string;
    zipcode: number;
}

export interface IUser {
    name: string;
    id: number;
    email: string;
    address: IAddress;
}

export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}
