import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Navbar() {
  return (
    <div className="h-screen inline-flex">
      <nav className="bg-gray-800 text-center text-white w-45 h-full p-6 flex flex-col justify-around items-center">
        <img src="https://firebasestorage.googleapis.com/v0/b/infiniteconnect-19162.appspot.com/o/logo.png?alt=media&token=da585e14-f4bd-4a00-ac98-cef73b6ccf54" alt='logo' className='w-full h-20 mb-8' />
        <ul className="space-y-8 w-full justify-center">
          <li className='flex items-center justify-center space-x-3'>
            <Link to="/app/home" className="flex items-center space-x-2">
              {/* SVG Icon */}
              <span>Home</span>
            </Link>
          </li>
          <li className='flex items-center justify-center space-x-3'>
            <Link to="/app/search" className="flex items-center space-x-2">
              {/* SVG Icon */}
              <span>Search</span>
            </Link>
          </li>
          <li className='flex items-center justify-center space-x-3'>
            <Link to="/app/post" className="flex items-center space-x-2">
              {/* SVG Icon */}
              <span>Post</span>
            </Link>
          </li>
          <li className='flex items-center justify-center space-x-3'>
            <Link to="/app/profile" className="flex items-center space-x-2">
              {/* SVG Icon */}
              <span>Profile</span>
            </Link>
          </li>
        </ul>
        <ul className="space-y-8 w-full mt-auto">
          <li className='flex items-center justify-center space-x-3'>
            <Link to="/logout" className="flex items-center space-x-2">
              {/* SVG Icon */}
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
