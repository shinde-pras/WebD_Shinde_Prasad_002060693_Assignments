import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";

const FeaturedJobs = () => {
  // Sample array of featured job listings
  const featuredJobs = [
    {
      id: 1,
      title: "Frontend Developer (Contract)",
      company: "Tech Company Inc.",
      location: "New York, NY",
      description:
        "We are seeking a skilled Frontend Developer to join our team.",
    },
    {
      id: 2,
      title: "AI Product Manager",
      company: "OpenAI",
      location: "New York, NY",
      description:
        "We are seeking a skilled AI Product Manager to join our team.",
    },
    {
      id: 3,
      title: "Product Manager",
      company: "Google",
      location: "Los Angeles, CA",
      description: "Lead cross-functional teams to build great products.",
    },
    
    {
      id: 4,
      title: "UI/UX Designer",
      company: "Meta",
      location: "Los Angeles, CA",
      description: "Design intuitive user experiences.",
    },
    {
      id: 5,
      title: "Cloud Architect",
      company: "Amazon",
      location: "Los Angeles, CA",
      description: "Exciting opportunity for an experienced Marketing Manager.",
    },
    {
      id: 6,
      title: "Marketing Manager",
      company: "Marketing Agency",
      location: "Los Angeles, CA",
      description: "Build AWS solutions for clients.",
    },
  ];

  return (
    <div className="featured-jobs">
      <h2>Featured Jobs</h2>
      <div className="job-cards">
        {featuredJobs.map((job) => (
          <Card
            key={job.id}
            className="job-card"
            style={{
              marginTop: "10px",
              width: "500px",
              backgroundColor: "#e8f5e9",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="h2">
                {job.title}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {job.company} - {job.location}
              </Typography>
              <Typography variant="body2" component="p">
                {job.description}
              </Typography>
              <Button
                component={Link}
                to={`/jobs/${job.id}`}
                size="small"
                color="primary"
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
