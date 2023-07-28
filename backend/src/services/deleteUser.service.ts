

import { FindOneOptions } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entitie";

const deleteUserService = async (id: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  // Crie um objeto FindOneOptions com a propriedade where para buscar pelo id.
  const options: FindOneOptions<User> = {
    where: { id },
  };

  const user = await userRepository.findOne(options);
  if (!user) {
    throw new Error("User not found");
  }

  await userRepository.remove(user);
};

export { deleteUserService };
