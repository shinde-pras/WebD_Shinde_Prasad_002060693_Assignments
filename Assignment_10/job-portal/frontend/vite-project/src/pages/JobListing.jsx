import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Box,
  CircularProgress,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const JobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("/api/getAllJobs");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Header />

      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#2e7d32",
            mb: 5,
          }}
        >
          Available Job Openings
        </Typography>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
            <CircularProgress />
          </Box>
        ) : jobs.length === 0 ? (
          <Typography
            align="center"
            sx={{ mt: 6, color: "text.secondary", fontSize: "1.1rem" }}
          >
            No jobs available.
          </Typography>
        ) : (
          <Grid container spacing={4}>
            {jobs.map((job, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card
                  sx={{
                    backgroundColor: "#e8f5e9",
                    borderRadius: 3,
                    boxShadow: 3,
                    height: "100%",
                    transition: "0.3s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ fontWeight: "bold" }}
                    >
                      {job.jobTitle}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      gutterBottom
                    >
                      {job.companyName}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {job.description}
                    </Typography>
                    <Typography variant="body2" fontWeight="bold">
                      Salary:{" "}
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(job.salary)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      <Footer />
    </Box>
  );
};

export default JobListing;