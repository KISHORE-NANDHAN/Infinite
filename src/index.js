import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'
import Signup from './pages/Signup.js';
import Login from './pages/Login.js';
import Enter from './pages/Enter.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NotFound from './pages/NotFound.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Enter />} />
        <Route path="/signup" element={<Signup />} />
        <Route path = "/login" element={<Login/>} />
        <Route path='/app/*' element={<App/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
