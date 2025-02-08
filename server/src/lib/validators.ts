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

export const createTradeValidator = z.object({
    courseId: z.number().int(),
    futureId: z.number().int(),
    reason: z.string(),
})

export const deleteTradeValidator = z.object({
    id: z.number().int(),
})