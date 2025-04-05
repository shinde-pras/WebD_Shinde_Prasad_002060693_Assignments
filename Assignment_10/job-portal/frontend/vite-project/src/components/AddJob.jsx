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
} from "@mui/material";
import AdminSidebar from "../components/AdminSidebar";

const AddJob = () => {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("/api/getAllJobs");
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/api/create/job", {
        companyName,
        jobTitle,
        description,
        salary,
      });
      setCompanyName("");
      setJobTitle("");
      setDescription("");
      setSalary("");
      setTimeout(() => {
        fetchJobs();
      }, 300);
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  return (
    <Box sx={{display: "flex", height: "100vh", margin: 0, padding: 0, backgroundColor: "#f9f9f9", overflow: "hidden"}}>
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <Box sx={{ flex: 1, padding: 4, overflowY: "auto" }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold", color: "#0caa41" }}>
          Manage Jobs
        </Typography>

        <Grid container spacing={4}>
          {/* Form */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                Job Details
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Company Name"
                  fullWidth
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                  margin="normal"
                />
                <TextField
                  label="Job Title"
                  fullWidth
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  required
                  margin="normal"
                />
                <TextField
                  label="Description"
                  fullWidth
                  multiline
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  margin="normal"
                />
                <TextField
                  label="Salary"
                  fullWidth
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  required
                  margin="normal"
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 2, backgroundColor: "#0caa41", "&:hover": { backgroundColor: "#088d36" } }}
                  fullWidth
                >
                  Add a new Job
                </Button>
              </form>
            </Paper>
          </Grid>

          {/* Job Table */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                Existing Jobs
              </Typography>
              <Table>
                <TableHead sx={{ backgroundColor: "#0caa41" }}>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>Company Name</TableCell>
                    <TableCell sx={{ color: "white" }}>Job Title</TableCell>
                    <TableCell sx={{ color: "white" }}>Description</TableCell>
                    <TableCell sx={{ color: "white" }}>Salary</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {jobs.map((job) => (
                    <TableRow key={job._id}>
                      <TableCell>{job.companyName}</TableCell>
                      <TableCell>{job.jobTitle}</TableCell>
                      <TableCell>{job.description}</TableCell>
                      <TableCell>₹{job.salary}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AddJob;