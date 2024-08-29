import React, { useState, useEffect, useContext } from 'react';
import '../index.css';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { ThemeContext } from '../context/ThemeContext';

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  // Determine the classes based on the theme
  const themeClasses = theme === 'dark'
    ? 'bg-gray-800 text-white'
    : 'bg-white text-black';

  const [editMode, setEditMode] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    name: '',
    bio: '',
    profilePicture: '',
    followers: 0,
    following: 0,
  });

  useEffect(() => {
    // Mock user data
    const mockUser = {
      name: 'John Doe',
      bio: 'A brief bio about John Doe.',
      profilePicture: 'https://via.placeholder.com/150',
      followers: 120,
      following: 75,
    };

    setUser(mockUser);
    setUpdatedData(mockUser);
  }, [setUser]);

  const handleChange = (e) => {
    setUpdatedData({
      ...updatedData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('http://localhost:3500/user-profile', updatedData)
      .then(response => {
        setUser(response.data);
        setEditMode(false);
        alert('Profile updated successfully');
      })
      .catch(error => {
        console.error('Error updating profile:', error);
        alert('Failed to update profile.');
      });
  };

  return (
    <div className={`flex flex-col items-center ml-44 min-h-screen ${themeClasses}`}>
      <div className={`relative p-8 rounded-lg w-full shadow-lg  ${themeClasses}`}>
        <div className="absolute top-4 right-4">
          {!editMode && (
            <button
              onClick={() => setEditMode(true)}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Edit Profile
            </button>
          )}
        </div>
        <div className="flex items-center mb-8">
          <img
            src={user.profilePicture || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-40 h-40 rounded-full mr-8"
          />
          <div>
            <h1 className="text-4xl font-semibold">{user.name}</h1>
            <div className="flex space-x-6 mt-4">
              <div>
                <span className="font-semibold">{user.followers}</span> Followers
              </div>
              <div>
                <span className="font-semibold">{user.following}</span> Following
              </div>
            </div>
            <p className="text-gray-600 text-lg mt-2">{user.bio}</p>
          </div>
        </div>

        {editMode ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name:</label>
              <input
                type="text"
                name="name"
                value={updatedData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Bio:</label>
              <textarea
                name="bio"
                value={updatedData.bio}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Profile Picture URL:</label>
              <input
                type="text"
                name="profilePicture"
                value={updatedData.profilePicture}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex space-x-4">
              <div>
                <label className="block text-sm font-medium">Followers:</label>
                <input
                  type="number"
                  name="followers"
                  value={updatedData.followers}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Following:</label>
                <input
                  type="number"
                  name="following"
                  value={updatedData.following}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
              >
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <div>
            <div className="flex justify-between mb-6">
              <div className="w-1/4 h-24 bg-white border border-gray-300 shadow-sm rounded-lg p-4 mr-2">
                <p className="text-center">Box 1</p>
              </div>
              <div className="w-1/4 h-24 bg-white border border-gray-300 shadow-sm rounded-lg p-4 mx-2">
                <p className="text-center">Box 2</p>
              </div>
              <div className="w-1/4 h-24 bg-white border border-gray-300 shadow-sm rounded-lg p-4 mx-2">
                <p className="text-center">Box 3</p>
              </div>
              <div className="w-1/4 h-24 bg-white border border-gray-300 shadow-sm rounded-lg p-4 ml-2">
                <p className="text-center">Box 4</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
