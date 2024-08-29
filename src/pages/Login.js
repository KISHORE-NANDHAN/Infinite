import React, { useState } from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setData({
      ...data,
      password: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setData({
      ...data,
      email: e.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3500/login', data, { withCredentials: true });
      if (response.status === 200) {
        console.log('Login successful:', response.data);
        alert('Login successful');
        window.location.href = '/app/home'; // Redirect to home after successful login
      }
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.message;
        alert(`Error: ${errorMessage}`);
      } else {
        console.error('Error during login:', error);
        alert('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <div className="w-full md:w-6/12 flex items-center justify-center p-4 md:p-0">
        <img src="https://firebasestorage.googleapis.com/v0/b/infiniteconnect-19162.appspot.com/o/illustrate.png?alt=media&token=f187f4c7-61f3-4c70-afc2-803c961b3586" alt="illustration for login" className="w-10/12 h-auto md:w-full md:h-full object-cover" />
      </div>
      <div className="flex flex-col w-full md:w-6/12 items-center justify-center bg-white p-8 rounded-lg shadow-lg">
        <img src="https://firebasestorage.googleapis.com/v0/b/infiniteconnect-19162.appspot.com/o/logo.png?alt=media&token=da585e14-f4bd-4a00-ac98-cef73b6ccf54" alt="Logo" className="w-40 mb-4" />
        <h2 className="text-xl font-semibold mb-2 text-center">Login before continuing</h2>
        <form name="valid" className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email ID:</label>
            <input
              type="email"
              placeholder="user@gmail.com"
              className="w-full p-2 border border-gray-300 rounded"
              value={data.email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Enter password:</label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                name="password"
                id="passwordField"
                className="w-full p-2 border border-gray-300 rounded pr-10"
                value={data.password}
                onChange={handlePasswordChange}
                required
              />
              <span
                onClick={togglePasswordVisibility}
                className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>
          <div className="mb-4 text-center">
            <a href="/signup" className="text-blue-500 hover:underline">
              Not have an account?
            </a>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full md:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="mt-8 flex justify-center space-x-4">
          <button className="w-10 h-10 rounded bg-white-100 shadow">
            <img src="https://firebasestorage.googleapis.com/v0/b/infiniteconnect-19162.appspot.com/o/icons8-google.svg?alt=media&token=a6c9dd7d-35c7-45e1-845f-a1810a19636e" alt="google" />
          </button>
          <button className="w-10 h-10 rounded bg-white-100 shadow">
            <img src="https://firebasestorage.googleapis.com/v0/b/infiniteconnect-19162.appspot.com/o/wired-lineal-2540-logo-facebook.svg?alt=media&token=75ca23c3-8dbf-4993-92a8-db636e02ad2f" alt="facebook" />
          </button>
          <button className="w-10 h-10 rounded bg-white-100 shadow">
            <img src="https://firebasestorage.googleapis.com/v0/b/infiniteconnect-19162.appspot.com/o/wired-lineal-2549-logo-linkedin.svg?alt=media&token=a332e677-f440-4263-af36-c13a1e9b1e7b" alt="linkedin" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
