import { Route } from "react-router-dom";
import StudentPanel from "../pages/student/StudentPanel";
import StudentProtectedRoutes from "../services/utils/protectedRoutes/StudentProtectedRoutes";

export const StudentRoutes = (
    <Route element={<StudentProtectedRoutes/>}>
        <Route element={<StudentPanel/>} path='student-panel' />
    </Route>
)