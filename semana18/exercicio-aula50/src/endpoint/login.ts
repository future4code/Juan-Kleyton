import { Request, Response } from 'express'
import { generateToken } from '../services/auth'
import { User } from '../types'
import { selectUserByEmail } from '../data/selectUserByEmail'

export const login = async (
    req: Request,
    res:Response
    ) => {

    const { email, password } = req.body
    let message: string = 'User is loged.'

    try {
        if(!email || !email.includes('@')){
            res.statusCode = 400
            message = 'Invalid email.'
            throw new Error(message);
        }

        const user: User | undefined = await selectUserByEmail(email)

        if(!user){
            res.statusCode = 404
            message = "User not found or wrong password."
            throw new Error(message);
        }

        if(user.password !== password){
            res.statusCode = 401
            message = "User not found or wrong password."
            throw new Error(message);
        }

        const token: string = generateToken({
            id: user.id
        })

        res.send({
            message,
            token: token
        })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}