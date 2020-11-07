import {Request, Response} from "express";
import insertUsers from "../data/insertUsers";


export default async function createUser(
    req:Request,
    res:Response
){
    try{

        if (
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email
        ){
            
            res.status(400).send('Preencha os campos "name", "nickname" e "email"')
        
            return
        }

            const id: string = Date.now() + Math.random().toString()

        await insertUsers (
             id,
            req.body.name,
            req.body.nickname,
            req.body.email

        )

        res.status(200)
        .send("Usuário criado com sucesso!")

    } catch (error) {
        res.status(400). send ({
            message: error.message || error.sqlMessage
        })
    }
}