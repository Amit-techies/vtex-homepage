import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      fetch('http://localhost:5000/auth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Token:', data);
          navigate('/'); // Redirect to the home page or another route
        })
        .catch((error) => console.error('Error fetching token:', error));
    }
  }, [navigate]);

  return (
    <div>
      <h1>Authenticating...</h1>
    </div>
  );
};

export default AuthCallback;
