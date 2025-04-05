import React from "react";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">{children}</div>
    </div>
  );
};

export default AdminLayout;