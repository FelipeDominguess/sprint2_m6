import { Response, Request } from "express";
import { createContactService } from "../../services/Contact/createCont.service";


const createContactController = async (req: Request, res: Response) => {

    const newContact = await createContactService(req.body)

    return res.status(201).json(newContact)
}

export { createContactController }