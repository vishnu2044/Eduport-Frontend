import { Outlet, Navigate } from "react-router-dom";

const StudentProtectedRoutes = () => {
    const isStudent = localStorage.getItem('userType') === 'Student';
    const accessToken = localStorage.getItem('accessToken');

    // Check if both the user is an Instructor and the accessToken is present
    if (isStudent && accessToken) {
        return <Outlet />;
    } else {
        return <Navigate to='/login' />;
    }
};

export default StudentProtectedRoutes;