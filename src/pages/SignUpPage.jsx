import React from 'react'
import SignUpForm from '../components/SignUpPage/SignUpForm';
import { useSelector } from 'react-redux';

const SignUpPage = () => {
  const { loading } = useSelector((state) => state.auth);
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-2/3 xl:w-7/12 p-6 sm:p-12 ">
          <div>
            <img
              src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
              alt="Logo"
              className="w-32 mx-auto"
            />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign Up</h1>
            <SignUpForm />
          </div>
        </div>
      </div>
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
        </div>
      )}
    </div>
  )
}

export default SignUpPage