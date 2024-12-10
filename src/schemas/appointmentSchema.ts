import { z } from 'zod'

export const AppointmentSchema = z.object({
    email: z.string().email({message: "Invalid Email"}),
    password: z.string().min(8, {message: "Password must be at least 8 characters"})
})