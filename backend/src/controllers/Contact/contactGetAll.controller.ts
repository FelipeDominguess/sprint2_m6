import { Response, Request } from "express";
import { getAllContactsService } from "../../services/Contact/getAllCont.service";

const getAllContactsController = async (_req: Request, res: Response) => {
  const contacts = await getAllContactsService();

  return res.status(200).json(contacts);
};

export { getAllContactsController };
