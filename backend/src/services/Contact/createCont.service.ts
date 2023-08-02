import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import { User } from "../../entities/user.entitie";
import { TContact, TCompleteContact, TUser } from "../../interfaces/users.interfaces";
import { AppError } from "../../errors/AppError";

const createContactService = async (data: TContact, userId: string): Promise<TContact> => {
    const { email, fullName, phone } = data;
    const ContactRepository = AppDataSource.getRepository(Contact);
    const UserRepository = AppDataSource.getRepository(User);

    const user = await UserRepository.findOne({ where: { id: userId } });

    if (!user) 
    {
        throw new AppError("The current logged-in user was not found", 404);
    }

    const findContact = await ContactRepository.findOne({ where: { email: email, user: {id: user.id} } });
    if (findContact) 
    {
        throw new AppError("Contact already exist", 409);
    }

    const contact = ContactRepository.create({
        fullName,
        email,
        phone,
        user: user,
    });

    await ContactRepository.save(contact);

    return {
        ...contact,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            registrationDate: user.registrationDate,
        },
    };
}

export { createContactService };
