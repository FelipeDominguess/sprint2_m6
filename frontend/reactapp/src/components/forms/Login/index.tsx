import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { UserContext } from '../../../providers/UserProvider';
import { useContext } from 'react';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

export interface LoginProps {
  email: string,
  password: string
}

export const LoginDataSchema = yup.object({
  email: yup.string().email("Deve ser um e-mail").required("Campo obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});

const DivFooterLogin = styled(Box)`
  width: 260px;
  display: flex;
  flex-direction: row;
  height: 60px;
  gap: 50px;
  margin-top: 10px;

`

export default function InputWithIconLogin() {
  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(LoginDataSchema)
  });

  const { LoginUser } = useContext(UserContext)

  const submit: SubmitHandler<LoginProps> = (data) => {
    LoginUser(data)
  }

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl component="form" variant="standard" onSubmit={handleSubmit(submit)}>
        <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
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
        <DivFooterLogin>
          <Button type="submit" variant="contained">
            Entrar
          </Button>
          <Button component={Link} to="/" variant="contained">
           Ir para registro
        </Button>

        </DivFooterLogin>

      </FormControl>
    </Box>
  );
}
