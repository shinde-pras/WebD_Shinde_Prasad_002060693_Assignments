import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const user = useSelector((state) => state.user.currentUser); // ✅ fixed

  if (!user || !user.email) {
    return <Navigate to="/login" replace />;
  }

  if (role && user.type !== role) {
    return (
      <div style={{ padding: "60px", textAlign: "center", color: "red" }}>
        <h2>🚫 Access Denied</h2>
        <p>You do not have permission to view this page.</p>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
