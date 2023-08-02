import { Response, Request } from "express";
import { getAllContactsService } from "../../services/Contact/getAllCont.service";

const getAllContactsController = async (_req: Request, res: Response) => {
  const userId = res.locals.userId;
  const contacts = await getAllContactsService(userId);
  return res.status(200).json(contacts);
};

export { getAllContactsController };
