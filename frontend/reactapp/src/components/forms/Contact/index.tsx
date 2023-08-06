import * as React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { UserContext } from '../../../providers/UserProvider';
import { useContext } from 'react';
import { ContactContext } from '../../../providers/ContactProvider';

export interface CreateContactProps {
  fullName: string,
  email: string,
  phone: string
}

export const schema = yup.object({
  fullName: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Deve ser um e-mail").required("Campo obrigatório"),
  phone:yup.string().required('Telefone inválido. Use o formato (99) 9999-9999.'),
});


export default function FormContact() {
  const { register, handleSubmit, formState:{errors}, } = useForm({
    resolver: yupResolver(schema)
  });

  const { createContact } = useContext(ContactContext);
  
  const submit: SubmitHandler<CreateContactProps> = (data) => {
    createContact(data)
  };
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <form  onSubmit={handleSubmit(submit)}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Nome de contato
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        {...register('fullName')}
        />
         {errors.fullName && <p>{errors.fullName.message}</p>}
         <TextField
        id="input-with-icon-textfield"
        label="Email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
        {...register('email')}
      />
       {errors.email && <p>{errors.email.message}</p>}


       <TextField
        id="input-with-icon-textfield"
        label="Telefone"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
        {...register('phone')}
      />
        {errors.phone && <p>{errors.phone.message}</p>}
      <Button variant="contained" type='submit'>Criar Contato</Button>
      </FormControl>
      </form>
    </Box>
  );
}
