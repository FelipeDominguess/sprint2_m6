import { api } from '../services/api';
import { toast } from 'react-toastify';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Providers from './Provider';
import React from 'react';
import { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { RegisterProps } from '../components/forms/Register';
import { LoginProps } from '../components/forms/Login';

export interface User {
  id: string;
  name: string;
  email: string;
  registrationDate: string;
}

interface IUserContext {
  setUser: React.Dispatch<React.SetStateAction<User[]>>;
  user: User[];
}

interface IUserChildren {
  children: ReactNode;
}

export const UserContext = React.createContext({}as IUserContext);

export const UserProvider = ({children}: IUserChildren) => {
    const [user, setUser] = useState<User[]>([]);

    const navigate = useNavigate();
  
    // const token = localStorage.getItem('@TOKEN');
    // const AutoLogin = () => {
    //   if (token) {
    //     navigate('/dashboard');
    //   } else navigate('/register');
    // };
  
    // useEffect(() => {
    //   AutoLogin();
    // }, []);

    const registerUser = async (data: RegisterProps) => {
      try {
        const response = await api.post("/users/", data);
        localStorage.setItem('@TOKEN', response.data.token);
        setUser(response.data);
        // console.log("User after registration:", response.data)
        toast.success('Cadastro feito com sucesso');
        navigate("/login");
      } catch (error) {
        console.error(error);
        toast.error('Algo deu errado');
      }
    }
  


    const LoginUser = async (data: LoginProps) => {
        try {
          const response = await api.post('/login', data);
         localStorage.setItem('@TOKEN', response.data.token);
         setUser(response.data);
        //  console.log(response.data)
          navigate('/dashboard');
        } catch (error) {
          console.log(error);
        }
      };


    return <UserContext.Provider value={{ registerUser,LoginUser, user }}>{children}</UserContext.Provider>;
}

