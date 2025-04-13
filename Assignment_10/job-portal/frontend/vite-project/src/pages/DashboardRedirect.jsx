import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Paper } from "@mui/material";
import jobBg from "../assets/jobbg.jpg";

const DashboardRedirect = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    sessionStorage.setItem("cameFromRedirect", "true");
  
    if (user.type === "admin") {
      navigate("/admin");
    } else {
      navigate("/home");
    }
  };

  return (
    <Box
    sx={{
        backgroundImage: `url(${jobBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 5,
          textAlign: "center",
          maxWidth: 400,
          width: "90%",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Welcome,
        </Typography>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {user.email}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          You are logged in as <strong>{user.type}</strong>
        </Typography>
        <Button
          variant="contained"
          color="success"
          fullWidth
          sx={{ fontWeight: "bold" }}
          onClick={handleGoToDashboard}
        >
          GO TO DASHBOARD
        </Button>
      </Paper>
    </Box>
  );
};

export default DashboardRedirect;