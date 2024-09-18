import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext.js';
import { ThemeProvider } from './context/ThemeContext.js';
import Navbar from './components/Navbar';
import Home from './pages/Home.js';
import Search from './pages/Search.js';
import Post from './pages/Post.js';
import Profile from './pages/Profile.js';
import NotFound from './pages/NotFound.js';
import axios from 'axios';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by calling an API (modify the URL as needed)
    axios.get('http://localhost:5000/api/session', { withCredentials: true })
      .then(res => {
        setLoggedIn(res.data.loggedIn);
      })
      .catch(() => {
        setLoggedIn(false); // Set to false if error occurs or not logged in
      });
  }, []);

  return (
    <UserProvider>
      <ThemeProvider> 
        <div className='App h-screen flex'>
          <Navbar />
          <div className="flex-grow p-6">
            <Routes>
              <Route 
                path="/home" 
                element={loggedIn ? <Home /> : <Navigate to="/login" />} 
              />
              <Route 
                path="/search" 
                element={loggedIn ? <Search /> : <Navigate to="/login" />} 
              />
              <Route 
                path="/post" 
                element={loggedIn ? <Post /> : <Navigate to="/login" />} 
              />
              <Route 
                path="/profile" 
                element={loggedIn ? <Profile /> : <Navigate to="/login" />} 
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
