import { Route } from "react-router-dom";
import AdminProtectedRoutes from "../services/utils/protectedRoutes/AdminProtectedRoute";
import AdminPanel from "../pages/adminPanel/AdminPanel";

export const AdminRoutes = (
    <Route element={<AdminProtectedRoutes/>}>
        <Route element={<AdminPanel/>} path='/admin-panel' />
    </Route>
)