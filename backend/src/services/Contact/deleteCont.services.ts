import { Contact } from "../../entities/contact.entities";
import { AppDataSource } from "../../data-source";
import { FindOneOptions } from "typeorm";

const deleteContactService = async (email: string): Promise<void> => {
  const contactRepository = AppDataSource.getRepository(Contact);


  const options: FindOneOptions<Contact> = {
    where: { email },
  };

  const contact = await contactRepository.findOne(options);
  if (!contact) {
    throw new Error("contact not found");
  }

  await contactRepository.remove(contact);
};

export { deleteContactService };
