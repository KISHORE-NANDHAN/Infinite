import React, { useState, useEffect, useContext } from 'react';
import '../index.css';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

function Profile() {
  const { user, setUser, loading } = useContext(UserContext);

  const [editMode, setEditMode] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    name: '',
    bio: '',
    profilePicture: '',
  });

  useEffect(() => {
    if (user) {
      setUpdatedData(user);
    }
  }, [user]);

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

  // Show loading state or user information
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user data available.</div>;
  }

  return (
    <div className="flex flex-col items-center ml-44 min-h-screen bg-white text-black">
      <div className="relative p-8 rounded-lg w-full shadow-lg bg-white text-black">
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
                value={updatedData.username}
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
