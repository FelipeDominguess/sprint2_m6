import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import { User } from "../../entities/user.entitie";
import { AppError } from "../../errors/AppError";
import { TContactResponse } from "../../interfaces/users.interfaces";

const getAllContactsService = async (userId: string): Promise<TContactResponse[]> => {
  
  const UserRepository = AppDataSource.getRepository(User);
  const user = await UserRepository.findOne({ where: { id: userId } });
  
  if (!user) 
  {
      throw new AppError("The current logged-in user was not found", 404);
  }

  const contactRepository = AppDataSource.getRepository(Contact);

  const contacts = await contactRepository.find({ where: { user: {id: user.id} } });

  return contacts.map((Contact) => ({
    fullName: Contact.fullName,
    email: Contact.email,
    registrationDate: Contact.registrationDate,
    phone: Contact.phone,
    user: Contact.user
  }));
};

export { getAllContactsService };
