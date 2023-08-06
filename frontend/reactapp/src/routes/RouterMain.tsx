import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/Dashboard/index";
import { LoginPage } from "../pages/Login/index";
import { RegisterPage } from "../pages/Register/index";
import { ProtectedRoutes } from "./ProtectedRoutes";


export const RoutesMain = () => {
   return (
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoutes />}>
               <Route path="/dashboard" element={<DashboardPage />} />
         </Route>
         
         
      </Routes>
   );
};