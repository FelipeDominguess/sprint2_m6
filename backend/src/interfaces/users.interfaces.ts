import { z } from "zod"
import { contactSchema, contactSchemaResponse, userSchema, userSchemaRequest, userSchemaResponse } from "../schemas/users.schema"


type TUser = z.infer<typeof userSchema>
type TUserRequest = z.infer<typeof userSchemaRequest>
type TUserResponse = z.infer<typeof userSchemaResponse>


type TContact = z.infer<typeof contactSchema>
type TContactResponse = z.infer<typeof contactSchemaResponse>


type TLoginRequest = {
    email: string
    password: string
}



export { TUser, TUserRequest, TUserResponse, TContact, TContactResponse, TLoginRequest }