import {Request, Response} from "express";
import updateUser from "../data/updateUser";

export default async function editeUser(
    req:Request,
    res:Response
){
    try{

        if(
            req.body.name === '' ||
            req.body.nickname === '' ||
            req.body.email ===''
        ){

            res.status(400).send({
                message: "Nenhum dos campos pode estar em branco"
            })
        }

            if(!req.body.name && !req.body.nickname && !req.body.email){
                res.status(400).send({
                    message: "Escolha ao menos uma valor para alterar"
                })
                return
            }

            await updateUser(

                req.params.id,
                req.params.name,
                req.params.nickname,
                req.params.email
            )


            

            res.status(200).send({
                message: "usuário atualizado"
            })

        }catch (error) {
        res.status(400). send ({
            message: error.message || error.sqlMessage
        })
    }
}