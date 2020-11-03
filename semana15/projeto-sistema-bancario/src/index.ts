import express, {Express, Request, Response} from "express"
import cors from "cors"
import {accounts} from "./accounts"

const app:Express = express()

app.use(express.json)
   app.use(cors())

   app.post("/users/create", (req:Request,res:Response) =>{

    try{
        //validar as entradas de requisição
        // consultar ou alterar a base dados
         const {name,CPF,dateOfBirthAsString} = req.body

         const [day,month, year] = dateOfBirthAsString.split("/")

         const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)

         accounts.push({
             name,
             CPF,
             dateOfBirth,
             balance: 0,
             statement:[]
         })
        // validar os resultados da consulta
        // enviar as resposta

        res.status(201).send("Account Send of Sucess")
    } catch(error){
        res.status(400).send(error.message)
        console.log(error)
    }

   })

   app.listen(3003,()=>{
    console.log("Server is running in port 3003")
})



