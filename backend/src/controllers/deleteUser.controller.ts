import { Response, Request } from "express";
import { deleteUserService } from "../services/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteUserService(id);

  return res.status(204).json({ message: "User deleted successfully" });
};

export { deleteUserController };
