import { connection } from "..";

export default async function selectUserBYId (

    id: string

){
    const result = await connection('to_do__inst_users')
    .select('*')
    .where({id})

    return result [0]
}