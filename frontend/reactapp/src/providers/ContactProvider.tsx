import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { CreateContactProps } from "../components/forms/Contact";

interface IContactContext {

    setContact: React.Dispatch<React.SetStateAction<IContact[]>>;
    contact: IContact[];
  }

  interface IContactChildren {
    children: ReactNode;
  }

interface IContact {
    fullName: string;
    email: string;
    phone: string;
  }

export const ContactContext = React.createContext({} as IContactContext)

export const ContactProvider = ({ children }: IContactChildren) => {
    const [contact, setContact] = useState<IContact[]>([])
    const [loading, setLoading] = useState(true)

    const createContact = async (data: CreateContactProps) => {
        try {
            const response = await api.post("/users/contact", data)
            setContact(response.data)
            toast.success('Criação feito com sucesso')
            await getAllContact();
        } catch (error) {
            console.error(error);
            toast.error('Algo deu errado')
        }
    }

    const updateContact = async (email, updatedData) => {
        try {
            const response = await api.patch(`/users/contact/${email}`, updatedData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setContact(response.data.contact);
            toast.success('Contato atualizado com sucesso');
            await getAllContact();
        } catch (error) {
            console.error(error);
            toast.error('Algo deu errado ao atualizar o contato');
        }
    }

    const getAllContact = async (data) => {
        try {
            const response = await api.get("/users/contact", data)
            setContact(response.data)
            setLoading(false)
            // console.log("########################",response.data)
        } catch (error) {
            console.error(error);
            toast.error('Algo deu errado')
        }
    }

    const deleteContact = async (email) => {
        try {
            const response = await api.delete(`/users/contact/${email}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setContact(response.data.contact);
            toast.success('Contato excluído com sucesso');
            await getAllContact();
        } catch (error) {
            console.error(error);
            toast.error('Algo deu errado ao excluir o contato');
        }
    }


    return <ContactContext.Provider value={{ createContact, getAllContact, deleteContact, updateContact,  setContact, loading, contact }}>{children}</ContactContext.Provider>
}