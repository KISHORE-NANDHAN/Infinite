import React from 'react'
import '../index.css'
import { useState } from 'react'
import logo from '../images/logo.png'

function Navbar() {
  return (
    <div className="h-screen flex">
      <nav className="bg-gray-800 text-white w-50 min-h-full p-6 flex flex-col items-start space-around">
      <img  src={logo} alt="Logo" className="mb-6 w-24" />
        <ul className="space-y-6">
          <br/><br/><br/><br/><br/>
          <li><a href="/home" className="nav-home">Home</a></li><br/>
          <li><a href="/search" className="nav-link">Search</a></li><br/>
          <li><a href="/post" className="nav-link">Post</a></li><br/>
          <li><a href="/profile" className="nav-link">Profile</a></li><br/>
          <br/><br/><br/><br/><br/>
          <li><a href="/logout" className="nav-logout">Logout</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
