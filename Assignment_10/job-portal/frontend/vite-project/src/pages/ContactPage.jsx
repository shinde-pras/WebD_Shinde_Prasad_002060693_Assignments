import React from "react";
import { Paper, Typography, Grid } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "80vh", padding: "20px" }}
      >
        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
              We'd love to hear from you! Reach out with any questions or
              feedback.
            </Typography>
            <Typography variant="body2">
              📧 Email: support@jobportal.com
            </Typography>
            <Typography variant="body2">📞 Phone: +1 (123) 456-7890</Typography>
            <Typography variant="body2" sx={{ marginTop: 2 }}>
              📍 Address: 123 Main Street, Tech City, USA
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default ContactPage;
