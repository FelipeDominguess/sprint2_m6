import InputWithIconLogin from '../../components/forms/Login'

import { Box, styled } from "@mui/material";

export const Main = styled(Box)`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 30px;
`

export const LoginPage = () => {
    return(
        <>
        <Main>
        <InputWithIconLogin/>
        </Main>
        
        </>
    )
}