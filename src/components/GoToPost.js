import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoVideo, faCalendarAlt, faNewspaper } from '@fortawesome/free-solid-svg-icons';

function GoToPost() {
  const { user } = useContext(UserContext);

  // Fallback UI if user is not defined
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ml-64 justify-center items-center p-4 w-3/5 border border-gray-200 rounded-3xl shadow-md">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img
            src={user.dp}
            alt="user_dp"
            className="w-12 h-12 rounded-full border border-gray-300"
          />
        </div>
        <div className="ml-4 flex-grow">
          <Link to="/app/post">
            <button className="w-full bg-gray-100 p-2 rounded-3xl focus:outline-none cursor-pointer text-left">
              Start a post
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-around mt-4">
        <Link to="/app/post" className="flex items-center">
          <FontAwesomeIcon icon={faPhotoVideo} className="text-blue-500 w-6 h-6" />
          <span className="ml-2 text-gray-600">Media</span>
        </Link>
        <Link to="/app/post" className="flex items-center">
          <FontAwesomeIcon icon={faCalendarAlt} className="text-yellow-500 w-6 h-6" />
          <span className="ml-2 text-gray-600">Event</span>
        </Link>
        <Link to="/app/post" className="flex items-center">
          <FontAwesomeIcon icon={faNewspaper} className="text-orange-500 w-6 h-6" />
          <span className="ml-2 text-gray-600">Write article</span>
        </Link>
      </div>
    </div>
  );
}

export default GoToPost;
