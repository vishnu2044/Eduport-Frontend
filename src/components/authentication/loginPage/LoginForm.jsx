import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../services/redux/slices/AuthSlice'
import ErrorAlertBox from '../../AlertBoxes/ErrorAlertBox';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const handleLogin = () => {
    // Clear previous error messages
    setUsernameError('');
    setPasswordError('');

    let hasError = false;

    if (username === '') {
      setUsernameError('Please enter your username');
      hasError = true;
    }
    if (password === '') {
      setPasswordError('Please enter your password');
      hasError = true;
    }

    if (!hasError) {
      console.log('Login is working from login form');
      dispatch(login({ username, password, navigate }));
    }
  };

  return (
    <div className="relative w-full flex-1 mt-8">
      {usernameError && (
        <ErrorAlertBox message={usernameError} onClose={true} />
      )}
      {passwordError && (
        <ErrorAlertBox message={passwordError} onClose={true} />
      )}
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
