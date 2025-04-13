import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
  Grid,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    type: "employee",
  });
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/user/signup", form);
      setMessage("Signup successful! Redirecting to login...");
      setSuccess(true);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        height: "100vh",
        backgroundImage: `url('https://source.unsplash.com/1600x900/?career,technology')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper
          elevation={5}
          sx={{
            padding: 4,
            borderRadius: 3,
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(255,255,255,0.9)",
          }}
        >
          <Typography variant="h5" align="center" sx={{ fontWeight: "bold", mb: 2 }}>
            Sign Up
          </Typography>

          {message && (
            <Typography
              variant="body2"
              sx={{ color: success ? "green" : "red", mb: 2, textAlign: "center" }}
            >
              {message}
            </Typography>
          )}

          <TextField
            name="fullName"
            label="Full Name"
            fullWidth
            margin="normal"
            value={form.fullName}
            onChange={handleChange}
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={form.email}
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={form.password}
            onChange={handleChange}
          />
          <TextField
            name="type"
            label="User Type"
            select
            fullWidth
            margin="normal"
            value={form.type}
            onChange={handleChange}
          >
            <MenuItem value="employee">Employee</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </TextField>

          <Button
            variant="contained"
            fullWidth
            onClick={handleSignup}
            sx={{
              mt: 2,
              py: 1,
              backgroundColor: "#0caa41",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#088d36" },
            }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "SIGN UP"}
          </Button>

          <Typography
            variant="body2"
            sx={{ mt: 2, textAlign: "center", cursor: "pointer", color: "blue" }}
            onClick={() => navigate("/login")}
          >
            Already have an account? Login here
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Signup;