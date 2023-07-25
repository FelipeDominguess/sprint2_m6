import { z } from "zod"


const userSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    registrationDate: z.date()
})

const userSchemaRequest = userSchema.omit({
    id: true,
    registrationDate: true
})

const userSchemaResponse = userSchema.omit({
    password: true
})


const contactSchema = z.object({
    fullName: z.string(),
    email: z.string().email(),
    phone: z.string(),
    registrationDate: z.date()
})

const contactSchemaResponse = contactSchema.omit({
    registrationDate: true
})

export { userSchema, userSchemaRequest, userSchemaResponse, contactSchema, contactSchemaResponse }