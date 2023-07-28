// services/getAllUsers.service.ts


import { TUserResponse } from "../../src/interfaces/users.interfaces";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entitie";

const getAllUsersService = async (): Promise<TUserResponse[]> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  return users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    registrationDate: user.registrationDate,
  }));
};

export { getAllUsersService };
