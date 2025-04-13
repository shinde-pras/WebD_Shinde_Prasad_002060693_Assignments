import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
} from "@mui/material";

const companies = [
  {
    name: "Google",
    description: "Innovating the web through search and AI.",
    logo: "https://logo.clearbit.com/google.com",
  },
  {
    name: "Microsoft",
    description: "Empowering people through technology.",
    logo: "https://logo.clearbit.com/microsoft.com",
  },
  {
    name: "Amazon",
    description: "Delivering smiles worldwide with smart logistics.",
    logo: "https://logo.clearbit.com/amazon.com",
  },
  {
    name: "Meta",
    description: "Building the future of social connection.",
    logo: "https://logo.clearbit.com/meta.com",
  },
  {
    name: "OpenAI",
    description: "Shaping safe and beneficial artificial general intelligence.",
    logo: "https://logo.clearbit.com/openai.com",
  },
];

const Company = () => {
  return (
    <Box sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Header />

      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#e8f5e9",
          py: 6,
          textAlign: "center",
          mt: 4,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
          gutterBottom
        >
          Featured Companies
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Explore top companies hiring right now
        </Typography>
      </Box>

      {/* Company Cards */}
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4} justifyContent="center">
          {companies.map((company, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  padding: 2,
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: "0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={company.logo}
                  alt={`${company.name} logo`}
                  onError={(e) => (e.target.style.display = "none")}
                  sx={{
                    height: 80,
                    width: 80,
                    objectFit: "contain",
                    mx: "auto",
                    mb: 2,
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#2e7d32" }}
                  >
                    {company.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {company.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default Company;