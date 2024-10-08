import React, { useState } from 'react';
import SignupOtpVerificationForm from '../../components/authentication/signUpOtp/SignupOtpVerificationForm';
import { useLocation } from 'react-router-dom';
import ErrorAlertBox from '../../components/AlertBoxes/ErrorAlertBox';
import { SuccessAlert } from '../../components/alertMessages/SuccessAlert';

const SignUpOtpVarification = () => {
  const location = useLocation()
  const userEmail = location.state?.email

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
          email : {userEmail}
          <div className="mt-12 flex flex-col items-center">
            <h1  className="text-2xl xl:text-3xl font-extrabold">OTP Varification</h1>
            <SignupOtpVerificationForm userEmail={userEmail} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpOtpVarification