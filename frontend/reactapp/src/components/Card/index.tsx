import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button, FormControl, Input, InputAdornment, InputLabel, Modal, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Main } from './style';
import TextField from '@mui/material/TextField';
import { ContactContext } from '../../providers/ContactProvider';
import { useContext, useEffect } from 'react';
import * as yup from "yup";
import { api } from '../../services/api';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
interface FormValues {
  fullName: string;
  phone: string;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const schema = yup.object({
  fullName: yup.string().required("Campo obrigatório"),
  phone:yup.string().required('Telefone inválido.'),
});

export default function RecipeReviewCard() {
  const { register, handleSubmit, formState:{errors}, } = useForm({
    resolver: yupResolver(schema)
  });
 

  const { createContact, getAllContact, loading, setContact, contact, deleteContact, updateContact} = useContext(ContactContext)


  useEffect(() => {
    getAllContact();
}, []);



  const submit: SubmitHandler<FormValues> = (data) => {
    createContact(data)
  };
  
  const [expanded, setExpanded] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleExpandClick = (contactClicado) => {
    // Clone o array de contatos existente para evitar mutar o estado original
    const contatosAtualizados = contact.map((c) => ({
      ...c,
      expanded: c === contactClicado ? !c.expanded : false,
    }));
  
    setContact(contatosAtualizados);
  };
  const [updateData, setUpdateData] = React.useState({
    fullName: '',
    phone: '',
  });

  const handleUpdateClick = (contactData) => {
    setUpdateData(contactData);
    handleOpen();
  };

  const handleUpdateSubmit = async (updatedData) => {
    try {
        await updateContact(updateData.email, updatedData);
        handleClose();
    } catch (error) {
        console.error(error);
        toast.error('Algo deu errado ao atualizar o contato');
    }
};
// console.log(contact)

  return (
    <Main>

       { loading ? <h1>Carregando</h1> :
        contact && contact.length > 0 ? contact.map((callback)  => (
        <Card key={callback} sx={{ maxWidth: 345 }}>
          <CardHeader 
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={callback.fullName} 
            subheader={callback.email} 
          />
      <CardContent>
      </CardContent>
      <CardActions disableSpacing>
       <Typography>
        {callback.phone}
       </Typography>
        <ExpandMore
           expand={callback.expanded}
           onClick={() => handleExpandClick(callback)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={callback.expanded} timeout="auto" unmountOnExit>
      <button onClick={() => deleteContact(callback.email)}>Excluir</button>
        <Button onClick={() => handleUpdateClick(callback)}>Atualizar informações</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
      
        <form onSubmit={handleSubmit(handleUpdateSubmit)}>
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
        {...register('fullName')}
        defaultValue={updateData.fullName}
        />
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
        defaultValue={updateData.phone}
      />
        <button type='submit'>Salvar</button>
        </form>

        </Box>
      </Modal>
        <CardContent>
        </CardContent>
      </Collapse>
    </Card>
      )):( 
        <p>Nenhum contato adicionado!</p>
      )}
    </Main>
  );
}
