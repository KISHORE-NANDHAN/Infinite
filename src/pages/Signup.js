import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Signup() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    dob: '',
    gender: '',
    mobile: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (name === 'password') {
      setPasswordStrength(getPasswordStrength(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3500/auth/register', user)
      .then(response => {
        console.log('User registered:', response.data);
        if (response.status === 201) {
          alert('User registered successfully');
          window.location.href = '/'
        }
      })
      .catch(error => {
        if (error.response) {
          const errorMessage = error.response.data.message;
          alert(`Error: ${errorMessage}`);
        } else {
          console.error('Error registering user:', error);
          alert('An unexpected error occurred. Please try again later.');
        }
      });
  };

  const getPasswordStrength = (password) => {
    const hasAlphabet = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[@_]/.test(password);
  
    if (password.length < 8) {
      return 'Very Weak';
    } else if (hasAlphabet && !hasNumber && !hasSpecialChar) {
      return 'Weak';
    } else if (hasAlphabet && hasNumber && !hasSpecialChar) {
      return 'Strong';
    } else if (hasAlphabet && hasNumber && hasSpecialChar) {
      return 'Very Strong';
    } else {
      return 'Weak';
    }
  };
  

  return (
    <div className="flex flex-col md:flex-row min-h-screen justify-center bg-white-100">
      <div className="flex flex-col w-full md:w-6/12 items-center bg-white p-8 rounded-lg shadow-lg">
        <img src="https://firebasestorage.googleapis.com/v0/b/infiniteconnect-19162.appspot.com/o/logo.png?alt=media&token=da585e14-f4bd-4a00-ac98-cef73b6ccf54" alt="Logo" className="w-40 mb-4" />
        <h2 className="text-xl font-semibold mb-2">Create an Account</h2><br/><br/>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 w-full max-w-md">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Username:</label>
            <input
              type="text"
              placeholder="Infine_user"
              value={user.username}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              name="username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email:</label>
            <input
              type="email"
              placeholder="user@gmail.com"
              value={user.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Date of Birth:</label>
            <input
              type="date"
              value={user.dob}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              name="dob"
              min='31-12-1950'
              max='31-12-2015'
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Gender:</label>
            <select
              value={user.gender}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              name="gender"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Mobile:</label>
            <input
              type="tel"
              placeholder="1234567890"
              value={user.mobile}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              name="mobile"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1">Password:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              value={user.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              name="password"
              required
            />
            <span
              onClick={togglePasswordVisibility}
              className="cursor-pointer absolute right-3 top-11 transform -translate-y-1/2 text-gray-600"
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
            <p className={`text-sm mt-1 ${passwordStrength === 'Weak' ? 'text-red-500' : passwordStrength === 'Strong' ? 'text-yellow-500' : passwordStrength === 'Very Strong' ? 'text-green-500' : ''}`}>
              {passwordStrength && `Password Strength: ${passwordStrength}`}
            </p>
          </div>
          <div className="col-span-2 text-center">
            
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
            <p className="mt-8">
              Already have an account? <a href="/" className="text-blue-500 ">Login</a>
            </p>
          </div>
        </form>
        <div className="mt-8 flex flex-row space-x-4">
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
      <div className="w-full md:w-6/12 h-max md:mt-0">
        <img src="https://firebasestorage.googleapis.com/v0/b/infiniteconnect-19162.appspot.com/o/signup.png?alt=media&token=be905e98-9d11-4bcd-b3f9-cba04acf7f07" className='mt-24' alt="illustration for signup" />
      </div>
    </div>
  );
}

export default Signup;
