import { useContext } from "react";
import RecipeReviewCard from "../../components/Card"
import BasicModal from "../../components/modal"
import { UserContext } from "../../providers/UserProvider";
import { HeaderDash } from "./style"
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';



export const DashboardPage = () => {


  return (
    <>
      <HeaderDash>
        <BasicModal />
        <Button component={Link} to="/login" variant="contained">
          Sair
      </Button>
      </HeaderDash>
      <RecipeReviewCard />

    </>
  );
}