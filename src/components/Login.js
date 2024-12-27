import React from 'react';

const Login = () => {
  const handleLogin = () => {
    const redirectUri = `${window.location.origin}/auth/callback`;
    const loginUrl = `http://localhost:5000/auth/redirect?redirect_uri=${redirectUri}`;
    window.location.href = loginUrl;
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login with VTEX</button>
    </div>
  );
};

export default Login;
