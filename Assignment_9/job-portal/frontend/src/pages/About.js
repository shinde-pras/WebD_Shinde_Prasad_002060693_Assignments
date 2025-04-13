import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
    return (
        <Container sx={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h4" sx={{ marginBottom: '20px' }}>
                About Job Portal
            </Typography>
            <Typography variant="body1">
                Welcome to Job Portal! Our platform connects job seekers with top companies worldwide. 
                Explore job listings, company profiles, and find your dream career today.
            </Typography>
        </Container>
    );
};

export default About;
