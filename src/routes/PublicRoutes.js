import { Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from '../pages/Error/NotFoundPage';

export const PublicRoutes = (
    <>
        <Route element={<HomePage />} path='/' />
        <Route element={<NotFoundPage />} path='*' />
    </>
)