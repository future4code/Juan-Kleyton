import { promises } from "dns";
import { connection } from "..";

export default async function selectTaskById(

    id: string

): Promise<any>{
    const result = await connection.raw(`
    
    SELECT taks.*, nickname FROM to_do_list_tasks As taks
    join to_do_list_users As users
    ON author_id = users.id
    WHERE task.id = '${id}'
    `)

    return result[0][0]
}