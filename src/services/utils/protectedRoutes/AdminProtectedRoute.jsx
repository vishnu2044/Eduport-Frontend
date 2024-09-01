import { Outlet, Navigate } from "react-router-dom";

const AdminProtectedRoutes = () =>{
    const isAdmin = true
    return isAdmin ? <Outlet/> : <Navigate to='/login'/>
}

export default AdminProtectedRoutes;