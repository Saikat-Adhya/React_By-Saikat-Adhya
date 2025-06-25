import React from 'react';

const Home = () => {
  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    alert("Logged in successfully!");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully!");
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Home Page</h1>
      <button onClick={handleLogin} style={{ marginRight: '10px' }}>
        Login
      </button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
