import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/Dashboard/index";
import { LoginPage } from "../pages/Login/index";
import { RegisterPage } from "../pages/Register/index";

export const RoutesMain = () => {
   return (
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
         <Route path="/" element={<DashboardPage />} />
         <Route path="/login" element={<LoginPage />} />
      </Routes>
   );
};