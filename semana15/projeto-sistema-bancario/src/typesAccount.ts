import {Transaction} from "./typesTransaction"

export type Account ={
    name: string,
    CPF: string,
    dateOfBirth: Date,
    balance: number,
    statement : Array<Transaction>
}

