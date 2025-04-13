import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const user = useSelector((state) => state.user);

  if (!user || !user.email) {
    return <Navigate to="/login" replace />;
  }

  if (role && user.type !== role) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default ProtectedRoute;
