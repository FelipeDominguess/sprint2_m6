// services/getAllUsers.service.ts

import { AppDataSource } from "../../src/data-source";
import { User } from "../../src/entities/user.entitie";
import { TUserResponse } from "../../src/interfaces/users.interfaces";

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
