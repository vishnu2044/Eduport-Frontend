import React from 'react';
import { Route } from 'react-router-dom';

//  Protected routes section
import LoginPageCheckRouter from '../services/utils/protectedRoutes/LoginRouteCheck';
import SignUpPageCheckRouter from '../services/utils/protectedRoutes/SignUpRouteCheck';
import SignUpOtpVarification from '../pages/authentication/SignUpOtpVarification';

// Lazy load the components
const LoginPage = React.lazy(() => import('../pages/authentication/LoginPage'));
const SignUpPage = React.lazy(() => import('../pages/authentication/SignUpPage'));



export const AuthenticationRoutes = (
  <>
    <Route element={<LoginPageCheckRouter />} >
      <Route element={<LoginPage />} path='/login' />
    </Route>

    <Route element={<SignUpPageCheckRouter/>}>
      <Route element={<SignUpPage />} path='/signup' />
    </Route>
    <Route element={<SignUpOtpVarification />} path='/signup-otp' />
  </>
);
