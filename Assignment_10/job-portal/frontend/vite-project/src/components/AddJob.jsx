import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Grid,
  Paper,
  TextField,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  CircularProgress,
} from "@mui/material";
import AdminSidebar from "../components/AdminSidebar";

const AddJob = () => {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const fetchJobs = async () => {
    try {
      setLoadingJobs(true);
      const response = await axios.get("/api/getAllJobs");
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoadingJobs(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!companyName.trim() || !jobTitle.trim() || !description.trim() || !salary.trim()) {
      alert("Please fill in all the fields.");
      return;
    }

    if (isNaN(salary)) {
      alert("Salary must be a number.");
      return;
    }

    try {
      setSubmitting(true);
      const response = await axios.post("/api/create/job", {
        companyName,
        jobTitle,
        description,
        salary,
      });

      if (response.status === 201) {
        setCompanyName("");
        setJobTitle("");
        setDescription("");
        setSalary("");
        fetchJobs();
      } else {
        alert("Failed to add job. Try again.");
      }
    } catch (error) {
      console.error("Error creating job:", error);
      alert("Error creating job. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
      <AdminSidebar />

      <Box sx={{ flex: 1, padding: 4, overflowY: "auto" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#1b5e20", mb: 3 }}>
          Manage Jobs
        </Typography>

        <Grid container spacing={4}>
          {/* Form Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={4} sx={{ padding: 3, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Job Details
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Company Name *"
                  fullWidth
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  margin="normal"
                />
                <TextField
                  label="Job Title *"
                  fullWidth
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  margin="normal"
                />
                <TextField
                  label="Description *"
                  fullWidth
                  multiline
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  margin="normal"
                />
                <TextField
                  label="Salary *"
                  fullWidth
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  margin="normal"
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={submitting}
                  sx={{
                    mt: 2,
                    backgroundColor: "#1b5e20",
                    "&:hover": { backgroundColor: "#155c1d" },
                  }}
                >
                  {submitting ? <CircularProgress size={24} color="inherit" /> : "Add a New Job"}
                </Button>
              </form>
            </Paper>
          </Grid>

          {/* Existing Jobs Table */}
          <Grid item xs={12} md={6}>
            <Paper elevation={4} sx={{ padding: 3, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Existing Jobs
              </Typography>

              {loadingJobs ? (
                <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
                  <CircularProgress />
                </Box>
              ) : (
                <Table>
                  <TableHead sx={{ backgroundColor: "#1b5e20" }}>
                    <TableRow>
                      <TableCell sx={{ color: "white", fontWeight: "bold" }}>Company Name</TableCell>
                      <TableCell sx={{ color: "white", fontWeight: "bold" }}>Job Title</TableCell>
                      <TableCell sx={{ color: "white", fontWeight: "bold" }}>Description</TableCell>
                      <TableCell sx={{ color: "white", fontWeight: "bold" }}>Salary</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {jobs.map((job) => (
                      <TableRow key={job._id}>
                        <TableCell>{job.companyName}</TableCell>
                        <TableCell>{job.jobTitle}</TableCell>
                        <TableCell>{job.description}</TableCell>
                        <TableCell>
                          {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                          }).format(job.salary)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AddJob;