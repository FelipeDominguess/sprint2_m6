import { Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAtuh"



export const ProtectedRoutes = () => {
    const { loading } = useAuth()

    if (loading) {
        return <div>Carregando...</div>
    }

    return <Outlet />
}