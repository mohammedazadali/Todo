import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  let isAuthenticate = localStorage.getItem("token") === 'true';
  return isAuthenticate ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
