import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Users, Briefcase, LogOut } from "lucide-react";
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";

const AdminSidebar = () => {
  const location = useLocation();

  const navItems = [
    { text: "Dashboard", path: "/admin", icon: <Home size={20} /> },
    { text: "Users", path: "/users", icon: <Users size={20} /> },
    { text: "Add Jobs", path: "/addjob", icon: <Briefcase size={20} /> },
    { text: "Logout", path: "/", icon: <LogOut size={20} /> },
  ];

  return (
    <Box sx={{width: 240, backgroundColor: "#f1f1f1", height: "100vh", p: 2  }} >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3, color: "#0caa41" }}>
        Admin Panel
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              borderRadius: 2,
              mb: 1,
              backgroundColor: location.pathname === item.path ? "#e0f2f1" : "transparent",
              color: location.pathname === item.path ? "#0caa41" : "#333",
              "&:hover": {
                backgroundColor: "#e0f2f1",
              },
            }}
          >
            <ListItemIcon sx={{ color: location.pathname === item.path ? "#0caa41" : "#555" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AdminSidebar;