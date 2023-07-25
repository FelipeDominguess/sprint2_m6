import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import {  FindOneOptions } from "typeorm";
import { TContactResponse } from "../../interfaces/users.interfaces";

const updateContactService = async (email: string, newData: { fullName: string; phone: string }): Promise<TContactResponse> => {
  const contactRepository = AppDataSource.getRepository(Contact);

 
  const options: FindOneOptions<Contact> = {
    where: { email },
  };

  let contact = await contactRepository.findOne(options);
  if (!contact) {
    throw new Error("contact not found");
  }

  contact.fullName = newData.fullName;
  contact.phone = newData.phone;

  await contactRepository.save(contact);

  return {
    fullName: contact.fullName,
    email: contact.email,
    phone: contact.phone,
  };
};

export { updateContactService };
