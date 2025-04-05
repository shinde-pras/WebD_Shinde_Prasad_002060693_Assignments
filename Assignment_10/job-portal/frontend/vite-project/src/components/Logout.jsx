import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the authentication token from local storage
    localStorage.removeItem("token");
    // Redirect or update UI
    navigate("/login");
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        style={{
          backgroundColor: "#0CAA41", // Green color similar to Glassdoor theme
          color: "#fff", // White text color
          padding: "10px 20px", // Padding around the text
          borderRadius: "4px", // Rounded corners
          fontSize: "16px", // Font size
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Box shadow
        }}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};

export default Logout;
