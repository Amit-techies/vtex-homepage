import React from 'react';

const VTEX_LOGIN_URL = 'https://vtex-homepage.onrender.com/login'; // Replace with your VTEX store's login URL

const Home = ({ isLoggedIn, handleLogout }) => {
  return (
    <div>
      <h1>Welcome to VTEX Headless Store</h1>
      {isLoggedIn ? (
        <>
          <p>You are logged in!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <p>You are not logged in.</p>
          <a href={VTEX_LOGIN_URL}>
            <button>Login with VTEX</button>
          </a>
        </>
      )}
    </div>
  );
};

export default Home;
