import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  // Utility function to get the VtexIdclientAutCookie value
  const getTokenFromCookie = () => {
    const name = 'VtexIdclientAutCookie=';
    const decodedCookie = document.cookie;
    const cookieArr = decodedCookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
      let c = cookieArr[i].trim();
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);  // Returns token value
      }
    }
    return null; // Token not found
  };

  // Fetch the profile on component mount
  useEffect(() => {
    const token = getTokenFromCookie();
    if (token) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setProfile(response.data);
        })
        .catch((error) => {
          setError('Failed to fetch profile');
          console.error(error);
        });
    } else {
      setError('No token found. Please log in.');
    }
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Profile Information</h2>
      {profile ? (
        <div>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
