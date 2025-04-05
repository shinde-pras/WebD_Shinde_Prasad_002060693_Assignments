import React from "react";
import Footer from "../components/Footer";
import SearchBar from "../components/Search";
import FeaturedJobs from "../components/FeaturedJobs";
import CategoryComponent from "../components/Category";
import ImageWithTextOverlay from "../components/ImageContainer";
import JobDescription from "../components/JobDescription";
import Header from "../components/Header";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Header />
      <div
        className="home-content"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 0",
        }}
      >
        <h1 style={{ marginBottom: "20px", fontSize: "2.5rem", color: "#1b5e20" }}>
          Welcome to Glassdoor
        </h1>

        {/* Search Bar Centered */}
        <div style={{ width: "50%", marginBottom: "40px" }}>
          <SearchBar />
        </div>

        {/* Full-width Image Banner with Overlay */}
        <div style={{ width: "100%", marginBottom: "40px" }}>
          <ImageWithTextOverlay />
        </div>

        {/* Featured Jobs and Description */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="flex-start"
          style={{ width: "90%", margin: "0 auto" }}
        >
          <Grid item xs={12} md={6}>
            <FeaturedJobs />
          </Grid>
          <Grid item xs={12} md={6}>
            <JobDescription />
          </Grid>
        </Grid>


        {/* Categories Section */}
        <div style={{ width: "90%", marginTop: "60px" }}>
          <CategoryComponent />
        </div>

        {/* Footer */}
        <div style={{ marginTop: "60px", width: "100%" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
