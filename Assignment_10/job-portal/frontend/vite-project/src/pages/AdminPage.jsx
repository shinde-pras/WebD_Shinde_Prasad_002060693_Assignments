import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import AdminLayout from "../components/AdminLayout";

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <AdminLayout>
      <Box sx={{ p: 4 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1b5e20" }}
        >
          Admin Dashboard
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
          {/* Users Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={4} sx={{ borderRadius: 3 }}>
              <CardContent sx={{ textAlign: "center" }}>
                <PeopleIcon sx={{ fontSize: 50, color: "#2e7d32" }} />
                <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
                  Manage Users
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  View and manage all registered users.
                </Typography>
                <Button
                  onClick={() => navigate("/users")}
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2,
                    backgroundColor: "#2e7d32",
                    "&:hover": { backgroundColor: "#1b5e20" },
                  }}
                >
                  View Users
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Jobs Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={4} sx={{ borderRadius: 3 }}>
              <CardContent sx={{ textAlign: "center" }}>
                <WorkIcon sx={{ fontSize: 50, color: "#2e7d32" }} />
                <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
                  Manage Jobs
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Post and manage job listings.
                </Typography>
                <Button
                  onClick={() => navigate("/addjob")}
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2,
                    backgroundColor: "#2e7d32",
                    "&:hover": { backgroundColor: "#1b5e20" },
                  }}
                >
                  View Jobs
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </AdminLayout>
  );
};

export default AdminPage;