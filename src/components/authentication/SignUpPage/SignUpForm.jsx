import React, { useState } from 'react';
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../../services/redux/slices/AuthSlice';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    userType: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const newErrors = {};
    
    if (!formData.username) newErrors.username = 'Please enter your username!';
    if (!formData.email) newErrors.email = 'Please enter your email!';
    if (!formData.firstName) newErrors.firstName = 'Please enter your first name!';
    if (!formData.lastName) newErrors.lastName = 'Please enter your last name!';
    if (!formData.gender) newErrors.gender = 'Please select your gender!';
    if (!formData.userType) newErrors.userType = 'Please select your user type!';
    if (!formData.password) newErrors.password = 'Please enter your password!';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password!';
    if (formData.password !== formData.confirmPassword) newErrors.passwordMissMatch = 'Passwords do not match!';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; 
    }
    const signupData = {
      username : formData.username,
      email : formData.email,
      first_name : formData.firstName,
      last_name : formData.lastName,
      gender : formData.gender,
      user_type : formData.userType,
      password : formData.password,
    }
    console.log('Form Data:', signupData);
    dispatch(signup({signupData, navigate}))
  };

  return (
    <div className="w-full flex-1 mt-8">
      <div className="mx-auto max-w-2xl">

        <form onSubmit={handleSubmit}>
            <div className="flex mt-4 w-full">
              <div className='w-full flex flex-col'>
                <input
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                    className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-50 shadow-sm border 
                        ${errors.username ? 'border-red-500' : 'border-gray-300'} 
                        placeholder-gray-500 text-sm focus:outline-none focus:border-black focus:bg-white`}
                    type="text"
                    placeholder="Username"
                />
                {errors.username && <p className='text-red-400 text-xs mt-1'>{errors.username}</p>}
            </div>


                <div className='w-full flex flex-col ml-2'>
                    <input
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-8 py-4 rounded-lg font-medium focus:border-black bg-gray-50 shadow-sm border ${errors.email ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-300 focus:bg-white`}
                    type="email"
                    placeholder="Email"
                    />
                    {errors.email && <p className='text-red-400 text-xs mt-1'>{errors.email}</p>}
                </div>
            </div>


          <div className="flex mt-4 w-full">
            <div className='w-full flex flex-col'>
                <input
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-8 py-4 rounded-lg font-medium focus:border-black bg-gray-50 shadow-sm border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-300 focus:bg-white`}
                    type="text"
                    placeholder="First name"
                    />
                    {errors.firstName && <p className='text-red-400 text-xs mt-1'>{errors.firstName}</p>}
            </div>
            <div className='w-full flex flex-col'>
                <input
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full ml-2 px-8 py-4 rounded-lg font-medium focus:border-black bg-gray-50 shadow-sm border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-300 focus:bg-white`}
                    type="text"
                    placeholder="Last name"
                    />
                    {errors.lastName && <p className='text-red-400 text-xs mt-1'>{errors.lastName}</p>}
            </div>


          </div>

          <div className="flex mt-4 w-full">
            <div className='w-full flex flex-col'>
                <select
                    name='gender'
                    value={formData.gender}
                    onChange={handleChange}
                    className={`w-full px-8 py-4 rounded-lg font-medium focus:border-black bg-gray-50 shadow-sm border ${errors.gender ? 'border-red-500' : 'border-gray-300'} text-sm focus:outline-none focus:border-gray-300 focus:bg-white`}
                    aria-label="Select gender"
                    >
                    <option value="" disabled>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                    {errors.gender && <p className='text-red-400 text-xs mt-1'>{errors.gender}</p>}
            </div>
            <div className='w-full flex flex-col'>
                <select
                    name='userType'
                    value={formData.userType}
                    onChange={handleChange}
                    className={`w-full ml-2 px-8 py-4 rounded-lg font-medium focus:border-black bg-gray-50 shadow-sm border ${errors.userType ? 'border-red-500' : 'border-gray-300'} text-sm focus:outline-none focus:border-gray-300 focus:bg-white`}
                    aria-label="Select user type"
                    >
                    <option value="" disabled>Select User Type</option>
                    <option value="Instructor">Instructor</option>
                    <option value="Student">Student</option>
                </select>
                    {errors.userType && <p className='text-red-400 text-xs mt-1'>{errors.userType}</p>}
            </div>
          </div>

          <div className="flex mt-4 w-full">
            <div className='w-full flex flex-col ml-2'>
                <div className={`w-full  flex justify-between px-8 py-4 rounded-lg focus:border-black font-medium bg-gray-50 shadow-sm border ${errors.password || errors.passwordMissMatch ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-300 focus:bg-white`}
                >
                    <input
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        className="bg-transparent border-none focus:border-transparent focus:outline-none"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                    />
                    {
                        showPassword ? (
                        <PiEyeBold className='mt-1 cursor-pointer' onClick={() => setShowPassword(false)} />
                        ) : (
                        <PiEyeClosedBold className='mt-1 cursor-pointer' onClick={() => setShowPassword(true)} />
                        )
                    }
                </div>
                    {errors.password && <p className='text-red-400 text-xs mt-1'>{errors.password}</p>}
                    {errors.passwordMissMatch && <p className='text-red-400 text-xs mt-1'>{errors.passwordMissMatch}</p>}
            </div>
            <div className='w-full flex flex-col ml-2'>
                <div className={`w-full flex justify-between px-8 py-4 rounded-lg focus:border-black font-medium bg-gray-50 shadow-sm border ${errors.confirmPassword || errors.passwordMissMatch ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-300 focus:bg-white`}
                >
                    <input
                        name='confirmPassword'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="bg-transparent border-none focus:border-transparent focus:outline-none"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                    />
                    {
                        showConfirmPassword ? (
                        <PiEyeBold className='mt-1 cursor-pointer' onClick={() => setShowConfirmPassword(false)} />
                        ) : (
                        <PiEyeClosedBold className='mt-1 cursor-pointer' onClick={() => setShowConfirmPassword(true)} />
                        )
                    }
                </div>
                {errors.confirmPassword && <p className='text-red-400 text-xs mt-1'>{errors.confirmPassword}</p>}
            </div>
          </div>

          <button
            type='submit'
            className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-1 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
            <span className="ml-3">
              Sign Up
            </span>
          </button>

        </form>

        <p className="mt-6 text-xs text-gray-600 text-center">
                I agree to abide by templatana's
                <span> </span>
                <a href="#" className="border-b border-gray-500 border-dotted">
                    Terms of Service
                </a>
                <span> </span>
                and its <span> </span>
                <a href="#" className="border-b border-gray-500 border-dotted">
                    Privacy Policy
                </a>
            </p>
      </div>
    </div>
  );
};

export default SignUpForm;
