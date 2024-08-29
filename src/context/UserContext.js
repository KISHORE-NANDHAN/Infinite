import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    dp: 'https://via.placeholder.com/150',
    username: 'default_user'
  });

  useEffect(() => {
    // Fetch user details with credentials
    axios.get('http://localhost:3500/details', { withCredentials: true })
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};
