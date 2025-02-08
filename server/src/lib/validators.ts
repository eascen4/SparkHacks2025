import {z} from 'zod'

export const registerValidator = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
})

export const loginValidator = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})