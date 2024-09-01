import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import LoaderAnimation from './pages/loader/LoaderAnimation';

// Routes
import { AdminRoutes } from './routes/AdminRoutes';
import { AuthenticationRoutes } from './routes/AuthenticationRoutes';
import { InstructorRoutes } from './routes/InstructorRoutes';
import { StudentRoutes } from './routes/StudentRoutes';
import { PublicRoutes } from './routes/PublicRoutes';


function App() {
  return (
      <BrowserRouter>

        <Suspense fallback={<LoaderAnimation />}>
          <Routes>

            {AuthenticationRoutes}
            {AdminRoutes}
            {InstructorRoutes}
            {StudentRoutes}
            {PublicRoutes}

          </Routes>

        </Suspense>
      </BrowserRouter>
  );
}

export default App;
