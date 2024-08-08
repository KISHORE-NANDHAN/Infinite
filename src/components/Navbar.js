import React from 'react';
import '../index.css';
import logo from '../images/logo.png';

function Navbar() {
  return (
    <div className="h-screen inline-flex">
      <nav className="bg-gray-800 text-center text-white w-45 h-full p-6 flex flex-col justify-around items-center">
        <img src={logo} alt='logo' className='w-full h-20 mb-8' />
        <ul className="space-y-8 w-full justify-center"><br/><br/><br/>
          <li className='flex items-center justify-center space-x-3'>
            <a href="/" className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12l8-8 8 8M6 10.5V19a1 1 0 001 1h3v-3a1 1 0 011-1h2a1 1 0 011 1v3h3a1 1 0 001-1v-8.5" />
              </svg>
              <span>Home</span>
            </a>
          </li>
          <li className='flex items-center justify-center space-x-3'>
            <a href="/search" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
              <span>Search</span>
            </a>
          </li>
          <li className='flex items-center justify-center space-x-3'>
            <a href="/post" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
              <span>Post</span>
            </a>
          </li>
          <li className='flex items-center justify-center space-x-3'>
            <a href="/profile" className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-4a4 4 0 110-8 4 4 0 010 8z" />
              </svg>
              <span>Profile</span>
            </a>
          </li>
        </ul>
        <ul className="space-y-8 w-full mt-auto">
          <li className='flex items-center justify-center space-x-3'>
            <a href="/logout" className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
              </svg>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
