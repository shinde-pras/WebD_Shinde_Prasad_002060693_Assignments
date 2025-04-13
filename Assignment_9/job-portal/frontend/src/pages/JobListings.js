import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

const jobPosts = [
    { id: 1, title: "Full Stack Developer", skills: ["React", "Node.js"], salary: "$100K" },
    { id: 2, title: "Data Scientist", skills: ["Python", "Machine Learning"], salary: "$120K" },
    { id: 3, title: "UX/UI Designer", skills: ["Figma", "Sketch"], salary: "$80K" },
];

const JobListings = () => {
    return (
        <Container sx={{ padding: '20px' }}>
            <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
                Job Listings
            </Typography>
            <Grid container spacing={2}>
                {jobPosts.map((job) => (
                    <Grid item xs={12} sm={6} md={4} key={job.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{job.title}</Typography>
                                <Typography>Skills: {job.skills.join(", ")}</Typography>
                                <Typography>Salary: {job.salary}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default JobListings;
