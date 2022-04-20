import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = () => {
  const { user, admin } = useAuth();
  return user.email && admin ? <Outlet /> : <Navigate to='/home' />;
};

export default AdminRoute;
