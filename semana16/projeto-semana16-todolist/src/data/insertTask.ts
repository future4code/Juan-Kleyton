import { connection } from "..";

export default async function insertTask(

    id: string,
    title: string,
    description: string,
    deadline: string,
    authorId: string
){
    await connection('to_do_list_task')
    .insert({
        id,
        title,
        description,
        deadline,
        author_id: authorId
    })
}