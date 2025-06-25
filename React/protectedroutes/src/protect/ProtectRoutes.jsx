import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectRoutes = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectRoutes;
