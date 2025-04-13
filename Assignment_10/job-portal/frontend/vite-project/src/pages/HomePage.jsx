import React from "react";
import { Box, Paper, Typography, Grid, RadioGroup, Radio, FormControlLabel } from "@mui/material";
import Footer from "../components/Footer";
import SearchBar from "../components/Search";
import FeaturedJobs from "../components/FeaturedJobs";
import CategoryComponent from "../components/Category";
import ImageWithTextOverlay from "../components/ImageContainer";
import JobDescription from "../components/JobDescription";
import Header from "../components/Header";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#fdfdfd", minHeight: "100vh" }}>
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#e8f5e9",
          py: { xs: 6, md: 8 },
          textAlign: "center",
          mt: 4,
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          color="primary"
          sx={{ mb: 2 }}
        >
          Welcome to Job Portal
        </Typography>
      </Box>

      {/* Search + Purpose Section */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
        <Paper
          elevation={4}
          sx={{
            p: 4,
            width: "90%",
            maxWidth: 800,
            borderRadius: 3,
            backgroundColor: "white",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "#388e3c", fontWeight: "bold", mb: 2 }}
          >
            Find Your Opportunity
          </Typography>

          <Box sx={{ mb: 3 }}>
            <SearchBar />
          </Box>

          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              What brings you here today?
            </Typography>
            <RadioGroup defaultValue="browsing">
              <FormControlLabel value="job" control={<Radio />} label="Looking for a job right now" />
              <FormControlLabel value="hire" control={<Radio />} label="Looking for employee" />
              <FormControlLabel value="browsing" control={<Radio />} label="I am just browsing" />
            </RadioGroup>
          </Box>
        </Paper>
      </Box>

      {/* Featured Jobs & Description */}
      <Box sx={{ mt: 6, px: { xs: 2, md: 8 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FeaturedJobs />
          </Grid>
          <Grid item xs={12} md={6}>
            <JobDescription />
          </Grid>
        </Grid>
      </Box>

      {/* Categories */}
      <Box sx={{ mt: 8, px: { xs: 2, md: 8 } }}>
        <CategoryComponent />
      </Box>

      {/* Footer */}
      <Box sx={{ mt: 6 }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;