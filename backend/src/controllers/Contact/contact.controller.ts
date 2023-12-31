import { Response, Request } from "express";
import { createContactService } from "../../services/Contact/createCont.service";

const createContactController = async (req: Request, res: Response) => {

    const userId = res.locals.userId;
    const newContact = await createContactService(req.body, userId);

    return res.status(201).json(newContact);
};

export { createContactController };
