import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('https://vtex-backend-3.onrender.com/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error.response?.data || error.message);
        alert('Session expired. Please login again.');
        localStorage.removeItem('token');
        navigate('/');
      }
    };

    fetchUserProfile();
  }, [navigate]);

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <div>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={() => {
        localStorage.removeItem('token');
        navigate('/');
      }}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
