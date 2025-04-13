const express = require("express");
const router = express.Router();
const JobModel = require("../models/jobSchema");

// POST /api/create/job
router.post("/create/job", async (req, res) => {
  try {
    console.log("Raw request body:", req.body); // 👈 Check if body is parsed

    let { companyName, jobTitle, description, salary } = req.body;

    console.log("Before conversion - salary:", salary, typeof salary);
    salary = Number(salary);
    console.log("After conversion - salary:", salary, typeof salary);

    if (!companyName || !jobTitle || !description || isNaN(salary)) {
      return res.status(400).json({ message: "All fields are required and salary must be a number" });
    }

    const newJob = new JobModel({ companyName, jobTitle, description, salary });
    await newJob.save();

    res.status(201).json({ message: "Job created successfully", job: newJob });
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ message: "Error creating job" });
  }
});

// GET /api/getAllJobs
router.get("/getAllJobs", async (req, res) => {
  try {
    const jobs = await JobModel.find();
    res.status(200).json(jobs);
  } catch (err) {
    console.error("Error in getAllJobs:", err);
    res.status(500).json({ message: "Error fetching jobs" });
  }
});

module.exports = router;
