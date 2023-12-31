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
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';

export interface RegisterProps {
  name: string,
  email: string,
  password: string
}

export const schema = yup.object({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Deve ser um e-mail").required("Campo obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
  // confirmpassword: yup.string().required("Confirmar senha é obrigatória"),
});

const DivFooterRegister = styled(Box)`
  width: 260px;
  display: flex;
  flex-direction: row;
  height: 60px;
  gap: 50px;
  margin-top: 10px;

`


export default function InputWithIcon() {
  const { register, handleSubmit, formState:{errors}, } = useForm({
    resolver: yupResolver(schema)
  });

  const { registerUser } = useContext(UserContext);
  
  const submit: SubmitHandler<RegisterProps> = (data) => {
    registerUser(data)
  };

  const isRegistered = false;
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <form  onSubmit={handleSubmit(submit)}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Nome de usuário
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        {...register('name')}
        />
         {errors.name && <p>{errors.name.message}</p>}
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
        label="Senha"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
        {...register('password')}
      />
      {errors.password && <p>{errors.password.message}</p>}
        <DivFooterRegister>
        <Button variant="contained" type='submit'>Confirmar</Button>
        <Button component={Link} to="/login" variant="contained">
           Ir para login
        </Button>
        </DivFooterRegister>
      
      </FormControl>
      </form>

    </Box>
  );
}
