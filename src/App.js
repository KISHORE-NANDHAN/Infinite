import React, { useContext } from 'react';
import { Routes, Route} from 'react-router-dom';
import { UserProvider } from './context/UserContext.js';
import { ThemeProvider} from './context/ThemeContext.js';
import Navbar from './components/Navbar';
import Home from './pages/Home.js';
import Search from './pages/Search.js';
import Post from './pages/Post.js';
import Profile from './pages/Profile.js';
import NotFound from './pages/NotFound.js';

function App() {
  return (
    <UserProvider>
      <ThemeProvider> 
      <div className='App h-screen flex'>
      <Navbar />
      <div className="flex-grow p-6">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/post" element={<Post />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
      </ThemeProvider>
    </UserProvider>
    
  );
}

export default App;
