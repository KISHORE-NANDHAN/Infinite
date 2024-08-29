import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faPlus, faUser, faRightFromBracket, faBars } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const themeClasses = theme === 'dark'
    ? 'bg-gray-800 text-white'
    : 'bg-white text-black';
  return (
    <div className={`h-screen inline-flex ${themeClasses}`}>
      <nav className={`bg-gray-800 fixed text-cente w-44 h-full p-6 flex flex-col justify-around items-center ${themeClasses}`}>
        <img src="https://firebasestorage.googleapis.com/v0/b/infiniteconnect-19162.appspot.com/o/logo.png?alt=media&token=da585e14-f4bd-4a00-ac98-cef73b6ccf54" alt='logo' className='w-full h-20 mb-8' />
        <br/><br/>
        <ul className="space-y-8 w-full flex flex-col items-center">
          <li className='flex items-center justify-center'>
            <Link to="/app/home" className="flex flex-col items-center space-y-1">
              <FontAwesomeIcon icon={faHouse} flip="horizontal" size="xl" style={{ color: "#7776B3" }} />
              <span>Home</span>
            </Link>
          </li>
          <li className='flex items-center justify-center'>
            <Link to="/app/search" className="flex flex-col items-center space-y-1">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" style={{ color: "#7776B3" }} />
              <span>Search</span>
            </Link>
          </li>
          <li className='flex items-center justify-center'>
            <Link to="/app/post" className="flex flex-col items-center space-y-1">
              <FontAwesomeIcon icon={faPlus} size="xl" style={{ color: "#7776B3" }} />
              <span>Post</span>
            </Link>
          </li>
          <li className='flex items-center justify-center'>
            <Link to="/app/profile" className="flex flex-col items-center space-y-1">
              <FontAwesomeIcon icon={faUser} size="xl" style={{ color: "#7776B3" }} />
              <span>Profile</span>
            </Link>
          </li>
        </ul>

        <ul className="space-y-8 w-full mt-auto flex flex-col items-center">
          <li className='flex items-center justify-center'>
            <Link to="/logout" className="flex flex-col items-center space-y-1">
              <FontAwesomeIcon icon={faRightFromBracket} size="xl" style={{ color: "#7776B3" }} />
              <span>Logout</span>
            </Link>
          </li>
        </ul>

        <div
          className="relative mt-8"
          onMouseEnter={() => setShowMoreOptions(true)}
          onMouseLeave={() => setShowMoreOptions(false)}
        >
          <div className="flex items-center justify-center cursor-pointer">
            <FontAwesomeIcon icon={faBars} size="xl" style={{ color: "#7776B3" }} />
            <span>More</span>
          </div>

          {showMoreOptions && (
            <div className="absolute  bottom-1 bg-gray-700 text-white rounded-lg p-4 space-y-4 w-40 shadow-lg">
              <Link to="/app/update-user" className="block">
                Update User
              </Link>
              <div className="flex items-center justify-between">
                <span>Dark Mode</span>
                <label htmlFor="theme-toggle" className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="theme-toggle"
                      className="sr-only peer"
                      checked={theme === 'dark'}
                      onChange={toggleTheme}
                    />
                    <div className="block bg-gray-600 w-10 h-6 rounded-full"></div>
                    <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-4"></div>
                  </div>
                </label>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
