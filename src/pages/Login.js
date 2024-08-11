import React, { useState } from 'react';
import '../index.css';
import illustrate from '../images/illustrate.png';
import logo from '../images/logo.png';
import google from '../images/icons8-google.svg';
import linkedin from '../images/wired-lineal-2549-logo-linkedin.svg';
import facebook from '../images/wired-lineal-2540-logo-facebook.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen justify-center bg-gray-100">
      <div className="flex w-6/12 h-12/12 flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg">
        <img src={logo} alt="Logo" className="w-40 mb-4" />
        <h2 className="text-xl font-semibold mb-2">Login before continuing</h2>
        <form name="valid" className="w-full">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email ID:</label>
            <input
              type="text"
              placeholder="user@gmail.com"
              pattern="^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1">Enter password:</label>
            <div className="flex items-center">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                name="password"
                id="passwordField"
                className="w-full p-2 border border-gray-300 rounded"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="cursor-pointer ml-2 text-gray-600"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>
          <div className="mb-4 text-center">
            <a href="./Signup.js" className="text-blue-500 hover:underline">
              Not have an account?
            </a>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="mt-8 flex flex-row space-x-4">
          <button className="w-10 h-10 rounded bg-white-100 shadow">
            <img src={google} alt="google" />
          </button>
          <button className="w-10 h-10 rounded bg-white-100 shadow">
            <img src={facebook} alt="facebook" />
          </button>
          <button className="w-10 h-10 rounded bg-white-100 shadow">
            <img src={linkedin} alt="linkedin" />
          </button>
        </div>
      </div>
      <div className="w-full h-full">
        <img src={illustrate} alt="illustration for login" />
      </div>
    </div>
  );
}

export default Login;
