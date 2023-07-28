

import { TUserResponse } from "../../src/interfaces/users.interfaces";
import { getRepository, FindOneOptions } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entitie";

const updateUserService = async (id: string, data: Partial<TUserResponse>): Promise<TUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  // Crie um objeto FindOneOptions com a propriedade where para buscar pelo id.
  const options: FindOneOptions<User> = {
    where: { id },
  };

  let user = await userRepository.findOne(options);
  if (!user) {
    throw new Error("User not found");
  }

  // Atualize as propriedades individualmente como no exemplo anterior.
  if (data.name) {
    user.name = data.name;
  }
  if (data.email) {
    user.email = data.email;
  }


  await userRepository.save(user);

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    registrationDate: user.registrationDate,
  };
};

export { updateUserService };
