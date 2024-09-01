import { Outlet, Navigate } from "react-router-dom";

const LoginPageCheckRouter = () => {
    const userType = localStorage.getItem('userType');
    const accessToken = localStorage.getItem('accessToken');


    if (accessToken && userType) {
        if (userType === 'Student') {
            return <Navigate to='/student-panel' />;
        } else if (userType === 'Instructor') {
            return <Navigate to='/instructor-panel' />;
        }
    }


    return <Outlet />;
};

export default LoginPageCheckRouter;
