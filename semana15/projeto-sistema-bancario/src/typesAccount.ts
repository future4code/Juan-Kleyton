import {Transaction} from "./typesTransaction"

export type Account ={
    name: string,
    cpf: string,
    dateOfBirth: Date,
    balance: number,
    statement : Array<Transaction>
}

