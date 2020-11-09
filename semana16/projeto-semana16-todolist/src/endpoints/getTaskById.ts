import { Response, Request } from "express";
import moment from "moment";
import selectTaskById from "../data/selectTakById";

export default async function getTaskById(
    req: Request,
    res: Response
){
    try {

        const result = await selectTaskById(req.params.id)

        if(!result){

            res.status(400).send({
                message:"Tarefa não encontrada"
            })

            return
        }
        res.status(200).send({
            ...result,
            deadline: moment(result.deadline, 'YYY-MM-DD').format('DDD/MM/YYYY'),
            status: result.status,
            authorId: result.author_id,
            authorNickname: result.nickname
        
        })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}