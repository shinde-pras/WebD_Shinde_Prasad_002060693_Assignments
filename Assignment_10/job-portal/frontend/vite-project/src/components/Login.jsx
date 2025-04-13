import React, { useState } from "react";
import { connect } from "react-redux";
import { loginSuccess } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const Login = ({ loginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("/api/user/login", { email, password });
      const { token, user } = response.data;

      localStorage.setItem("token", token);
      loginSuccess({ email: user.email, type: user.type, token });

      setLoading(false);
      sessionStorage.setItem("cameFromRedirect", "true");
      navigate("/dashboard-redirect");
    } catch (err) {
      setLoading(false);
      setError(
        err?.response?.data?.message || err?.response?.data?.error || "Login failed"
      );
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: "url('https://w0.peakpx.com/wallpaper/381/584/HD-wallpaper-curves-green-abstract-pattern-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Paper elevation={6} sx={{ p: 4, maxWidth: 400, width: "100%", borderRadius: 3 }}>
        {/* Logo + Title */}
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <WorkOutlineIcon sx={{ fontSize: 50, color: "#2e7d32" }} />
          <Typography variant="h5" fontWeight="bold" color="primary" sx={{ mt: 1 }}>
            Job Portal
          </Typography>
        </Box>

        <Typography variant="h6" align="center" gutterBottom>
          Login
        </Typography>

        {error && (
          <Typography variant="body2" color="error" align="center" gutterBottom>
            {error}
          </Typography>
        )}

        <TextField
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2, backgroundColor: "#2e7d32" }}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "LOGIN"}
        </Button>
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 2, cursor: "pointer", color: "primary.main" }}
          onClick={() => navigate("/signup")}
        >
          Don’t have an account? Sign up here
        </Typography>
      </Paper>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loginSuccess: (user) => dispatch(loginSuccess(user)),
});

export default connect(null, mapDispatchToProps)(Login);