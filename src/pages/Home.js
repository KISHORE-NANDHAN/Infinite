import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const HomePage = () => {
  const { user, loading } = useContext(UserContext);
  const navigate = useNavigate();
  const cookie = Cookies.get('session_token');
  console.log(cookie)
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    navigate('/');
    return null;
  }
  console.log(user)
  return (
    <div>
      Welcome, {user.username}! {cookie}
    </div>
  );
};

export default HomePage;
