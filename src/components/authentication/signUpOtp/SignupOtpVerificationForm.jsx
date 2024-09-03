import React, { useState } from 'react';
import ErrorAlertBox from '../../AlertBoxes/ErrorAlertBox';
import { SuccessAlert } from '../../alertMessages/SuccessAlert';

const SignupOtpVerificationForm = ({ userEmail }) => {
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');

  const handleSubmit = () => {
    if (!otp) {
      setOtpError("Please enter your OTP");
    } else if (otp.length !== 6) {
      setOtpError("OTP must be six digits");
    } else if (!/^\d+$/.test(otp)) {
      setOtpError("OTP must contain only numbers");
    } else {
      setOtpError(''); // Clear any existing errors
      SuccessAlert({ message: "OTP is correct" });
      
    }
  };

  return (
    <div className="w-full flex-1 mt-8">
      <div className="mx-auto max-w-2xl">
        <div className="flex mt-4 w-full">
          <div className='w-full flex flex-col'>
            <input
              name='OTP'
              value={otp} // Bind the value to state
              onChange={(e) => setOtp(e.target.value)} // Update state on change
              className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-50 shadow-sm border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-black focus:bg-white`}
              type="text"
              placeholder="Enter your received OTP"
            />
            {otpError && <ErrorAlertBox message={otpError} />} {/* Display error message */}
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-1 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
          <span className="ml-3">
            Verify
          </span>
        </button>
      </div>
    </div>
  );
};

export default SignupOtpVerificationForm;
