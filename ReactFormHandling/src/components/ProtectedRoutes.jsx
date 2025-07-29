import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const isAuthenticated = localStorage.getItem('userToken'); // Check fake token

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
