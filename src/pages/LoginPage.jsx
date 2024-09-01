import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../components/loginPage/LoginForm';

const LoginPage = () => {
  const loginImg = 'https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg';
  const { loading } = useSelector((state) => state.auth);

  return (
    <div className="relative min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <img
              src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
              alt="Logo"
              className="w-32 mx-auto"
            />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign in</h1>
            <LoginForm />
          </div>
        </div>
        <div
          className="flex-1 bg-indigo-100 text-center hidden lg:flex bg-cover"
          style={{ backgroundImage: `url(${loginImg})` }}
        >
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"></div>
        </div>
      </div>

      {/* Full-Page Loading Overlay */}
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
