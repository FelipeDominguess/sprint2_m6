import { styled, Box } from '@mui/material'
import InputWithIcon from '../../components/forms/Register/index'

export const Main = styled(Box)`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 30px;
`


export const RegisterPage = () => {
    return(
        <>
        <Main>
        <InputWithIcon/>
        </Main>
        </>
    )
}