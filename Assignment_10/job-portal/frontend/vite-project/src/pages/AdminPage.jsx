import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import AdminLayout from "../components/AdminLayout";

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <AdminLayout>
      <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 4, color: "#2e7d32" }}>
        Admin Dashboard
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Users */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent sx={{ textAlign: "center" }}>
              <PeopleIcon sx={{ fontSize: 50, color: "green" }} />
              <Typography variant="h6" sx={{ mt: 2 }}>
                Manage Users
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                View and manage all registered users.
              </Typography>
              <Button
                onClick={() => navigate("/users")}
                variant="contained"
                sx={{ mt: 2, backgroundColor: "green" }}
              >
                View Users
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Jobs */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent sx={{ textAlign: "center" }}>
              <WorkIcon sx={{ fontSize: 50, color: "green" }} />
              <Typography variant="h6" sx={{ mt: 2 }}>
                Manage Jobs
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Post and manage job listings.
              </Typography>
              <Button
                onClick={() => navigate("/addjob")}
                variant="contained"
                sx={{ mt: 2, backgroundColor: "green" }}
              >
                View Jobs
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </AdminLayout>
  );
};

export default AdminPage;