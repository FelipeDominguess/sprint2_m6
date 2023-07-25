import { hash } from "bcryptjs";
import { AppDataSource } from "../../src/data-source";
import { User } from "../../src/entities/user.entitie";
import { TUserRequest, TUserResponse } from "../../src/interfaces/users.interfaces";
import { AppError } from "../../src/errors/AppError";
import { userSchemaResponse } from "../../src/schemas/users.schema";



const createUserService = async (data: TUserRequest): Promise<TUserResponse> => {
    const { email, name, password } = data
    const userRepository = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOne({
        where: {
            email
        }
    })

    if (findUser) {
        throw new AppError("user already exists", 409)
    }

    const hashedPassword = await hash(password, 10)
    const user = userRepository.create({
        name,
        email,
        password: hashedPassword
    })

    await userRepository.save(user)



    return {
        id: user.id,
        name: user.name,
        email: user.email,
        registrationDate: user.registrationDate, 
      };
}


export { createUserService }