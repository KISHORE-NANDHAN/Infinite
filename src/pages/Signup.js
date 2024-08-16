import React, { useState } from 'react';
import logo from '../images/logo.png';
import signup from '../images/signup.png';
import google from '../images/icons8-google.svg';
import linkedin from '../images/wired-lineal-2549-logo-linkedin.svg';
import facebook from '../images/wired-lineal-2540-logo-facebook.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

// Reusable Input Component
function Input({ type = 'text', placeholder = '', value, onChange, label, name, children }) {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium mb-1">{label}</label>}
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full p-2 border border-gray-300 rounded"
          name={name}
          required
        />
        {children}
      </div>
    </div>
  );
}

// Reusable Select Component for Dropdown
function Select({ value, onChange, label, name, options }) {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium mb-1">{label}</label>}
      <select
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded"
        name={name}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

// Signup Component
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3500/register', user)
      .then(response => {
        console.log('User registered:', response.data);
      })
      .catch(error => {
        console.error('Error registering user:', error);
      });
  };

  return (
    <div className="flex min-h-screen justify-center bg-white-100">
      <div className="flex flex-col w-6/12 h-12/12 items-center bg-white p-8 rounded-lg shadow-lg">
        <img src={logo} alt="Logo" className="w-40 mb-4" />
        <h2 className="text-xl font-semibold mb-2">Create an Account</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 w-full">
          <Input
            type="text"
            placeholder="Infine_user"
            value={user.username}
            onChange={handleChange}
            label="Username:"
            name="username"
          />
          <Input
            type="email"
            placeholder="user@gmail.com"
            value={user.email}
            onChange={handleChange}
            label="Email:"
            name="email"
          />
          <Input
            type="date"
            placeholder="Date of Birth"
            value={user.dob}
            onChange={handleChange}
            label="Date of Birth:"
            name="dob"
          />
          <Select
            value={user.gender}
            onChange={handleChange}
            label="Gender:"
            name="gender"
            options={[
              { label: 'Select Gender', value: '' },
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
              { label: 'Other', value: 'other' },
            ]}
          />
          <Input
            type="tel"
            placeholder="1234567890"
            value={user.mobile}
            onChange={handleChange}
            label="Mobile:"
            name="mobile"
          />
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
            value={user.password}
            onChange={handleChange}
            label="Password:"
            name="password"
          >
            <span
              onClick={togglePasswordVisibility}
              className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </Input>

          <div className="col-span-2 text-center">
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
      <div className="w-6/12 h-max mt-20">
        <img src={signup} alt="illustration for signup" />
      </div>
    </div>
  );
}

export default Signup;
