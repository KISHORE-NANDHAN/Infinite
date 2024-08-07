import './index.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js'
import Search from './pages/Search.js'
import Post from './pages/Post.js'
import Profile from './pages/Profile.js'

function App() {
  return (
    <Router>
    <div className="App h-screen flex">
      <Navbar />
      <div className="flex-grow p-6">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/post" element={<Post />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
