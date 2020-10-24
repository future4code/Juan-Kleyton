import express, {Express, Request, Response} from "express"
import cors from "cors"
import {accounts} from "./accounts"

const app:Express = express()

app.use(express.json)
   app.use(cors())

   app.post("/users/create", (Request,Response) =>{

    try{
        //validar as entradas de requisição
        // consultar ou alterar a base dados
        // validar os resultados da consulta
        // enviar as resposta
    } catch(error){

    }

   })

   app.listen(3003,()=>{
    console.log("Server is running in port 3003")
})



