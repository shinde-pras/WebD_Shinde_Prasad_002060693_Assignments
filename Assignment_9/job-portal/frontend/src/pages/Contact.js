import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const Contact = () => {
    return (
        <Container sx={{ padding: '20px', maxWidth: '600px' }}>
            <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
                Contact Us
            </Typography>
            <form>
                <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    sx={{ marginBottom: '20px' }}
                />
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    sx={{ marginBottom: '20px' }}
                />
                <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    sx={{ marginBottom: '20px' }}
                />
                <Button variant="contained" color="primary" fullWidth>
                    Send Message
                </Button>
            </form>
        </Container>
    );
};

export default Contact;
