import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../services/redux/slices/AuthSlice';
import { ErrorMessage } from '../alertMessages/ErrorAlert';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { loading } = useSelector((state) => state.auth);

  const handleLogin = () => {
    if (username === '') {
      ErrorMessage({ message: 'Please enter your username' });
    } else if (password === '') {
      ErrorMessage({ message: 'Please enter your password' });
    } else {
      console.log('Login is working from login form');
      dispatch(login({ username, password, navigate }));
    }
  };

  return (
    <div className="relative w-full flex-1 mt-8">
      <div className="mx-auto max-w-xs">
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          value={username}
        />
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          value={password}
        />
        <button
          onClick={handleLogin}
          className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-1 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
        >
          <span className="ml-3">Sign In</span>
        </button>
      </div>


    </div>
  );
};

export default LoginForm;
