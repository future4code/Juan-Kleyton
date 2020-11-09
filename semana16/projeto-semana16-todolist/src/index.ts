import express from "express";
import knex from "knex";
import dotenv from "dotenv";
import createUsers from "./endpoints/createUsers"
import editeUser from "./endpoints/editUser"
import createTask from "./endpoints/createTask"
import getTaskById from "./endpoints/getTaskById";


dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app =  express();
app.use(express.json());

app.put('/user', createUsers)
app.get('/user/:id, getUserById')
app.post('/user/edit/:id', editeUser)
app.put('/task', createTask)
app.get('/task/:id', getTaskById)

app.listen( 3003, () => {
   
      console.log(`Server is running in port 3003`);
   } 
);
