import {Request, Response} from "express";
import selectUserBYId from "../data/selectUserById";

export default async function getuserById(
    req:Request,
    res:Response
){
    try{

        const user = await selectUserBYId(req.params.id)

        if(!user){
            res.status(400).send({
                message: "Usuário não encontrado"
            })
            return
        }

        res.status(200).send({
            id: user.id,
            nickname: user.nickname
        })

        

    } catch (error) {
        res.status(400). send ({
            message: error.message || error.sqlMessage
        })
    }
}