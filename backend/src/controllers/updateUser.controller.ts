import { Response, Request } from "express";
import { updateUserService } from "../services/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const updatedUser = await updateUserService(id, { name, email });

  return res.status(200).json(updatedUser);
};

export { updateUserController };
