import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import AdminSidebar from "../components/AdminSidebar";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/user/getAll");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <Box sx={{ flex: 1, padding: 4 }}>
        <Typography variant="h4" sx={{ mb: 3, color: "#0caa41" }}>
          Users Management
        </Typography>

        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead sx={{ backgroundColor: "#0caa41" }}>
              <TableRow>
                <TableCell sx={{ color: "white" }}>Full Name</TableCell>
                <TableCell sx={{ color: "white" }}>Email</TableCell>
                <TableCell sx={{ color: "white" }}>User Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>{user.fullName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default UsersPage;
