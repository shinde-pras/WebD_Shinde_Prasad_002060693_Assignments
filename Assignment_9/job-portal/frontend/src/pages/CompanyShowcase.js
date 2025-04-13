import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const CompanyShowcase = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/companies'); // Replace with your backend endpoint
                setCompanies(response.data);
            } catch (error) {
                console.error("Error fetching companies:", error);
            }
        };

        fetchCompanies();
    }, []);

    return (
        <Container sx={{ padding: '20px' }}>
            <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
                Company Showcase
            </Typography>
            <Grid container spacing={2}>
                {companies.map((company) => (
                    <Grid item xs={12} sm={6} md={4} key={company.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={company.image}
                                alt={company.name}
                            />
                            <CardContent>
                                <Typography variant="h6">{company.name}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CompanyShowcase;
