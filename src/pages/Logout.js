import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // or useHistory depending on your version of react-router-dom
import Cookies from 'js-cookie';

const Logout = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    // Remove the session cookie
    Cookies.remove('session_token');

    // Redirect to the login page after cookie removal
    navigate('/');
  }, [navigate]);

  return (
    <div>
      Logging out...
    </div>
  );
};

export default Logout;
