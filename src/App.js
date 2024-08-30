import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import UserProtectedRoutes from './services/utils/protectedRoutes/UserProtectedRoute';

import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/Error/NotFoundPage';
import LoaderAnimation from './pages/loader/LoaderAnimation';

function App() {
  return (
      <BrowserRouter>

        <Suspense fallback={<LoaderAnimation />}>
          <Routes>
            <Route element={<LoginPage />} path='/login'  />

            <Route element={<UserProtectedRoutes/>}>
              <Route element={<HomePage />} path='/'  />
            </Route>

            <Route element={<SignUpPage />} path='/signup'  />
            <Route element={<NotFoundPage />} path='*'  />
          </Routes>

        </Suspense>
      </BrowserRouter>
  );
}

export default App;
