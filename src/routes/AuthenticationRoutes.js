import { Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import LoginPageCheckRouter from '../services/utils/protectedRoutes/LoginRouteCheck';
import SignUpPageCheckRouter from '../services/utils/protectedRoutes/SignUpRouteCheck';

export const AuthenticationRoutes = (
  <>
    <Route element={<LoginPageCheckRouter />} >
      <Route element={<LoginPage />} path='/login' />
    </Route>

    <Route element={<SignUpPageCheckRouter/>}>
      <Route element={<SignUpPage />} path='/signup' />
    </Route>
  </>
);
