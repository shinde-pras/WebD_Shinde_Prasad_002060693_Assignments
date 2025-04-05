import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const JobDescription = () => {
  return (
    <Card style={{ maxWidth: 600, height: "960px" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Frontend Developer (Contract)
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <p>
            <strong>Location:</strong> Tech Company Inc. - New York, NY
          </p>
          <p>
            <strong>Job Type:</strong> Contract
          </p>
          <p>
            <strong>Pay:</strong> From $40.00 per hour
          </p>
          <p>
            <strong>Company Overview:</strong> Size: 1 to 50 Employees
          </p>
          <p>
            <strong>Description:</strong> We are looking for a mathematician
            with an advanced degree to join our team to train AI models. As part
            of this role, you will be responsible for measuring the progress of
            AI chatbots, evaluating their logic, and solving problems to enhance
            the quality of each model.
          </p>
          <p>
            <strong>Responsibilities:</strong>
            <ul>
              <li>
                Develop diverse problem sets and solutions to train AI models.
              </li>
              <li>
                Identify and resolve complex issues across various AI models.
              </li>
              <li>
                Evaluate the quality produced by AI models for correctness and
                performance.
              </li>
            </ul>
          </p>
          <p>
            <strong>Qualifications:</strong>
            <ul>
              <li>Fluency in English.</li>
              <li>Detail-oriented individual.</li>
              <li>
                Proficiency in arithmetic, algebra, geometry, calculus,
                probability, statistics, and inductive/deductive reasoning.
              </li>
              <li>A current, in-progress, or completed PhD is required.</li>
            </ul>
          </p>
          <p>
            <strong>Benefits:</strong>
            <ul>
              <li>Full-time or part-time remote position.</li>
              <li>
                Opportunity to choose projects and work on your own schedule.
              </li>
              <li>
                Hourly pay starting at $40+, with bonuses based on the quality
                and volume of work.
              </li>
            </ul>
          </p>
          <p>
            <strong>Note:</strong> Payment is made via PayPal. This job is only
            available to those in the US, UK, Ireland, Canada, Australia, or New
            Zealand.
          </p>
        </Typography>
        <Button
          variant="contained"
          style={{ backgroundColor: "#4caf50", color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply on employer site
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobDescription;
