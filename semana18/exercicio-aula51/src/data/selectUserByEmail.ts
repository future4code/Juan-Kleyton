import { connection } from '..'
import { User } from '../types'

export const selectUserByEmail = async (
    email:string
    ): Promise<User> => {
    try {
        const result = await connection('users_aula50')
        .select('*')
        .where({
            email
        })

        return {
            id: result[0].id,
            email: result[0].email,
            password: result[0].password,
            role: result[0].role
        }
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}