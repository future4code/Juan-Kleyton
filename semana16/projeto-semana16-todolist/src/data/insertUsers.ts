import { connection } from "../index";

export default async function insertUsers(

    id: string,
    name: string,
    niokname: string,
    email: string

){
    await connection.insert(
        {
    id,
    name,
    niokname,
    email
    }).into('to_di_list_use')
}