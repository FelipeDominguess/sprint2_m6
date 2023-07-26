import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import { TContactResponse } from "../../interfaces/users.interfaces";

const getAllContactsService = async (): Promise<TContactResponse[]> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contacts = await contactRepository.find();

  return contacts.map((Contact) => ({
    fullName: Contact.fullName,
    email: Contact.email,
    registrationDate: Contact.registrationDate,
    phone: Contact.phone,
    user: Contact.user
  }));
};

export { getAllContactsService };
