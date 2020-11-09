import express, {Express, Request, Response} from "express"
import cors from "cors"
import {accounts} from "./accounts"

const app:Express = express()

app.use(express.json)
   app.use(cors())

   app.post("/users/create", (req:Request,res:Response) =>{

    try{
        const {name,CPF,dateOfBirthAsString} = req.body

         const [day,month, year] = dateOfBirthAsString.split("/")

         const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)
        //validar as entradas de requisição
        const ageInMilisseconds: number = Date.now() - dateOfBirth.getTime()


        const ageInYears : number = ageInMilisseconds /100 /60/60/24/365

        if(ageInYears <18){
            res.statusCode = 406
            throw  new Error ("Idade deve ser maior que 18 anos")
        }


        // consultar ou alterar a base dados
         

         accounts.push({
             name,
             CPF,
             dateOfBirth,
             balance: 0,
             statement:[]
         })
        // validar os resultados da consulta
        // enviar as resposta

        res.status(201).send("Account create of sucess")
    } catch(error){
        console.log(error)
        res.send(error.message)
    }

   })
   app.get("/users/all", (req:Request, res: Response)=>{
       try {
           if(!accounts.length){
               res.statusCode = 404
               throw new Error("Nenhuma conta encontrada")
               
           }


           res.status(200).send(accounts)
       } catch (error) {
           res.send(error.message)
       }
   })
   app.listen(3003,()=>{
    console.log("Server is running in port 3003")
})



