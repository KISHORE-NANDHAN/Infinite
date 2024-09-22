import React, { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="h-screen flex">
      <nav className="bg-gray-800 text-center text-white w-45 h-full p-6 flex flex-col justify-between items-center">
        {/* Logo */}
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/infiniteconnect-19162.appspot.com/o/logo.png?alt=media&token=da585e14-f4bd-4a00-ac98-cef73b6ccf54" 
          alt="logo" 
          className="w-full h-20 mb-8"
        />

        {/* Navigation Links */}
        <ul className="space-y-8 flex-grow flex flex-col justify-center items-center">
          <li className="flex items-center justify-center space-x-3">
            <Link to="/app/home" className="flex items-center space-x-2">
              <span>Home</span>
            </Link>
          </li>
          <li className="flex items-center justify-center space-x-3">
            <Link to="/app/search" className="flex items-center space-x-2">
              <span>Search</span>
            </Link>
          </li>
          <li className="flex items-center justify-center space-x-3">
            <Link to="/app/post" className="flex items-center space-x-2">
              <span>Post</span>
            </Link>
          </li>
          <li className="flex items-center justify-center space-x-3">
            <Link to="/app/profile" className="flex items-center space-x-2">
              <span>Profile</span>
            </Link>
          </li>
        </ul>

        {/* More Button */}
        <div
          className="relative mb-8"
          onMouseEnter={() => setShowMore(true)}
          onMouseLeave={() => setShowMore(false)}
        >
          <button className="flex items-center justify-center space-x-2 w-full">
            <span>More</span>
          </button>

          {showMore && (
            <ul className="absolute left-full top-0 bg-gray-700 rounded-md shadow-lg space-y-2 w-40">
              <li className="hover:bg-gray-600 p-2 rounded-md">
                <Link to="aboutus">About Us</Link>
              </li>
              <li className="hover:bg-gray-600 p-2 rounded-md">
                <Link to="/app/update-user">Update User</Link>
              </li>
              <li className="hover:bg-gray-600 p-2 rounded-md">
                <span>Dark Mode Toggle (Dummy)</span>
              </li>
            </ul>
          )}
        </div>

        {/* Logout Button */}
        <ul className="space-y-8">
          <li className="flex items-center justify-center space-x-3">
            <Link to="/logout" className="flex items-center space-x-2">
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
