import { Response, Request } from "express";
import { getAllUsersService } from "../services/getAllUsers.service";

const getAllUsersController = async (_req: Request, res: Response) => {
  const users = await getAllUsersService();

  return res.status(200).json(users);
};

export { getAllUsersController };
