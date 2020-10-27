//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';
//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());


let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]
// exercicio-01
app.get("/users", (req: Request, res: Response): void =>{

    try{
        res.status(200).send(users);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});


// a) GET
// b)/users



// exercicio-02
app.get("/users/:type", (req: Request, res: Response): void =>{

    try{
        const usersByType = users.filter((user)=>user.type === req.params.type
        )
        res.status(200).send(usersByType);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});
// a)
/*
    type User = {
    id: number,
    name: UserName,
    email: string,
    age: number,
    type: string
}
// cade um correspode ao tipo de dados que vai receber, por exemplo "age" que é um number
*/

/* b) enum UserName{
 JUAN = "JUAN"
 JOAO = "JOAO"
 MATEUS = "MATEUS"
}
// Fazendo assim posso restringir que o tipo do nome esperado seja uma string

*/


// exercicio-03
app.get("/users/query", (req: Request, res: Response): void =>{

    const name = req.query.name;

    console.log("o nome que chegou: ", name);
    try{

        const user = users.filter((u)=> u.name === name);

        if(!user){
            throw new Error();
        }

        res.status(200).send(user);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});

// a) Query parameters
/* b)
    catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });

*/


// exercicio-04
app.put("/users", (req: Request, res: Response): void=>{
    try{
        const {id, name, email, age, type} = req.body;
        const user = {
            id,
            name,
            email,
            age,
            type
        }

        users.push(user);
        res.status(200).send({message: "User created successfully"});
    }catch(error){
        res.status(400).send({
            message: "Error inserting for users"
        });
    }
})

//a)não houve mudança, pois o metodo post e put fazem a mesma coisa
//b) não, pq o put só serve apenas para inserir informações, já o post, além de inserir, verifica as infomações no banco de dados


// exercicio-05
app.put("/users", (req: Request, res: Response): void=>{

    try{

        const { name } = req.body;

        const userIndex = users.findIndex((u)=> u.name === name);

        if(userIndex === -1){
            throw new Error();
        }

        users[userIndex].name = name;

        res.status(200).send({message: "User updated successfully"});
    }catch(error){
        res.status(400).send({
            message: "Error inserting users"
        });
    }
});
// exercicio-06
app.patch("/users", (req: Request, res: Response): void=>{

    try{

        const { name } = req.body;

        const userIndex = users.findIndex((u)=> u.name === name);

        if(userIndex === -1){
            throw new Error();
        }

        users[userIndex].name = name;

        res.status(200).send({message: "User updated successfully"});
    }catch(error){
        res.status(400).send({
            message: "Error inserting users"
        });
    }
});

// exercicio-07

app.delete ("/users/:id", (req: Request, res: Response)=>{

    try{

        const id = Number(req.params.id);

        const userIndex = users.findIndex((u)=> u.id === id);

        users[userIndex].id = id;

        users.splice(userIndex, 1)

        res.status(204).send({message: "User deleted successfully"});
    }catch(error){
        res.status(400).send({
            message: "User not deleted"
        });
    }
});



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
