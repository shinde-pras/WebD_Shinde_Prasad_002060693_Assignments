const Job = require("../models/jobSchema");

exports.createJob = async (req, res, next) => {
  try {
    const { companyName, jobTitle, description, salary } = req.body;

    // Create new job
    const newJob = new JobModel({ companyName, jobTitle, description, salary });
    await newJob.save();

    res.status(201).json(newJob);
  } catch (error) {
    next(error);
  }
};
exports.getAllJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    next(error);
  }
};
