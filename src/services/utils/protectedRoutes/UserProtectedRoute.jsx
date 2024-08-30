import { Outlet, Navigate } from "react-router-dom";

const UserProtectedRoutes = () => {
    const isUser = true; 
    return isUser ? <Outlet/> : <Navigate to='/login'/>;
}

export default UserProtectedRoutes;
