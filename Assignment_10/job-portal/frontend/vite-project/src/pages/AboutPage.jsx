import React from "react";
import { Paper, Typography, Grid, Button, Box } from "@mui/material";
import { green } from "@mui/material/colors";
import Header from "../components/Header";
const AboutPage = () => {
  return (
    <div>
      <Header />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{
          minHeight: "100vh",
          padding: "20px",
          marginTop: "100px",
          marginBottom: "20px",
        }}
      >
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" paragraph>
              Glassdoor is one of the world's largest job and recruiting sites.
              We strive to help people everywhere find jobs and companies they
              love.
            </Typography>
            <Typography variant="body1" paragraph>
              Our mission is to help people everywhere find a job and company
              they love. In pursuit of this mission, we strive to ensure that
              every employee at Glassdoor has the resources and support they
              need to thrive.
            </Typography>
            <Typography variant="body1" paragraph>
              For employers, Glassdoor offers effective recruiting and employer
              branding solutions via our Glassdoor for Employers products.
              Glassdoor also helps employers create a more transparent and
              engaging workplace culture through our proprietary data, powerful
              analytics, and employer branding tools.
            </Typography>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              href="/contact"
              sx={{
                marginTop: 2,
                backgroundColor: green[500],
                "&:hover": { backgroundColor: green[700] },
              }}
            >
              Contact Us
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sx={{ marginTop: 4 }}>
          <Typography variant="h6" align="center" gutterBottom>
            Why Choose Us?
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box textAlign="center">
                <Typography variant="h4" color="primary">
                  1K+
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Happy Clients
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box textAlign="center">
                <Typography variant="h4" color="primary">
                  98%
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Job Placement Rate
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ marginTop: 4 }}>
          <Typography variant="h6" align="center" gutterBottom>
            Our Team
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Box textAlign="center">
                  <Typography variant="h6" gutterBottom>
                    John Doe
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    CEO
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Box textAlign="center">
                  <Typography variant="h6" gutterBottom>
                    Jane Smith
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    CTO
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutPage;
