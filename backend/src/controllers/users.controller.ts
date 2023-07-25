import { Response, Request } from "express";
import { createUserService } from "../services/createUser.service";


const createUserController = async (req: Request, res: Response) => {

    const newUser = await createUserService(req.body)

    return res.status(201).json(newUser)
}

export { createUserController }