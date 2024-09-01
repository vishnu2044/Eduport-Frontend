import { Route } from "react-router-dom";
import InstructorPanel from "../pages/instructor/InstructorPanel";
import InstructorProtectedRoutes from "../services/utils/protectedRoutes/InstructorProtectedRoute";

export const InstructorRoutes = (
    <Route element={<InstructorProtectedRoutes />}>
        <Route element={<InstructorPanel/>} path='instructor-panel' />
    </Route>
)