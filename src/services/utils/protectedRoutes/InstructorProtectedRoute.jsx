import { Outlet, Navigate } from "react-router-dom";

const InstructorProtectedRoutes = () => {
    const isInstructor = localStorage.getItem('userType') === 'Instructor';
    const accessToken = localStorage.getItem('accessToken');

    // Check if both the user is an Instructor and the accessToken is present
    if (isInstructor && accessToken) {
        return <Outlet />;
    } else {
        return <Navigate to='/login' />;
    }
};

export default InstructorProtectedRoutes;
