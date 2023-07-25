import { Response, Request } from "express";
import { updateContactService } from "../../services/Contact/updateCont.service";

const updateContactController = async (req: Request, res: Response) => {
  const { email } = req.params;
  const { fullName, phone } = req.body;

  const updatedContact = await updateContactService(email, {fullName, phone});

  return res.status(200).json(updatedContact);
};

export { updateContactController };
