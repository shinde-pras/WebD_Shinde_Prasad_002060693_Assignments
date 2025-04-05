import React, { useState } from "react";
import { connect } from "react-redux";
import { loginSuccess } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Grid
} from "@mui/material";
import { green } from "@mui/material/colors";
import axios from "axios";

const Login = ({ loginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/user/login", {
        email,
        password,
      });

      console.log("LOGIN RESPONSE FULL:", response);

      const { token, user } = response.data;

      if (!token || !user) {
        console.error("Missing token or user in response");
        setError("Login failed: Missing token or user.");
        return;
      }

      const { email: userEmail, type } = user;

      localStorage.setItem("token", token);
      loginSuccess({ email: userEmail, type, token });

      if (type === "admin") {
        navigate("/admin");
      } else {
        navigate("/home");
        alert("Login Successful!");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setError(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          {error && (
            <Typography variant="body2" sx={{ color: "red", marginBottom: 2 }}>
              {error}
            </Typography>
          )}
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            margin="dense"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            margin="normal"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{
              marginTop: 2,
              backgroundColor: green[500],
              "&:hover": { backgroundColor: green[700] },
            }}
          >
            Login
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loginSuccess: (user) => dispatch(loginSuccess(user)),
});

export default connect(null, mapDispatchToProps)(Login);