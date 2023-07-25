import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entities";
import { TContact, TContactResponse } from "../../interfaces/users.interfaces";
import { AppError } from "../../errors/AppError";




const createContactService = async (data: TContact): Promise<TContactResponse> => {
    const { email, fullName, phone } = data
    const ContactRepository = AppDataSource.getRepository(Contact)
    const findUser = await ContactRepository.findOne({
        where: {
            email
        }
    })

    if (findUser) {
        throw new AppError("user already exists", 409)
    }

    
    const contact = ContactRepository.create({
        fullName,
        email,
        phone,
    })

    await ContactRepository.save(contact)



    return {
        fullName: contact.fullName,
        email: contact.email,
        phone: contact.phone
      };
}


export { createContactService }