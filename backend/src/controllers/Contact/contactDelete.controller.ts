import { Response, Request } from "express";
import { deleteContactService } from "../../services/Contact/deleteCont.services";


const deleteContactController = async (req: Request, res: Response) => {
  const { email } = req.params;

  await deleteContactService(email);

  return res.status(204).json({ message: "Contact deleted successfully" });
};

export { deleteContactController };
