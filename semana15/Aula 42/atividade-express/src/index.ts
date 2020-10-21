import express, { Express, Request, Response }from "express"
import cors from "cors"
import { countries, country } from "./countries"

const app: Express = express();


app.use(express.json())
app.use(cors())

app.listen(3003, ()=> {
    console.log("O servidor está iniciado")
})
// exercicio 01
app.get("/countries/all",(req:Request, res:Response) =>{
    res.status(200).send(countries)

})
// exercicio 02
app.get('/countries/:id', (req:Request, res:Response) => {
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    )

    res.status(200).send(result)
})
// exercicio 03
app.get('/countries/search', (req:Request, res:Response) => {
    let errorCode = 400

    try {
        if(!req.query){
            throw new Error()
        }

        let result: country[] = countries

        if(req.query.name) {
            result = result.filter(
                country => country.name.toLowerCase().includes(String(req.query.name).toLowerCase())
            )
        }
        if(req.query.capital) {
            result = result.filter(
                country => country.capital.toLowerCase().includes(String(req.query.capital).toLowerCase())
            )
        }

        if(req.query.continent) {
            result = result.filter(
                country => country.continent.toLowerCase().includes(String(req.query.continent).toLowerCase())
            )
        }

        res.status(200).send(result)

    } catch (error) {
        res.send(errorCode).end()
    }
})
// exercicio 04
app.put('/countries/edit/:id', (req:Request, res:Response) => {
    let errorCode: number = 400
    try {

        if(!req.headers.authorization || req.headers.authorization.length < 10 || typeof req.headers.authorization !== 'string'){
            errorCode = 401
            throw new Error()
        } else if(!req.params || !req.body){
            errorCode = 400
            throw new Error()
        } else {
            const result: country | undefined = countries.find(
                country => country.id === Number(req.params.id)
            )

            if(!result){
                errorCode = 404
                throw new Error();
            } else {
                result.capital = req.body.capital
                result.name = req.body.name
            }

            res.status(200).end()
        }

    } catch (error) {
        res.status(errorCode).end()
    }
})