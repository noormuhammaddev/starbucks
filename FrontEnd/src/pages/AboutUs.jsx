import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <Container maxWidth="md" className="py-12 px-6">
            {/* Top Patch Section */}
            <Box
                className="bg-green-700 text-white py-8 px-4 rounded-lg mb-8"
                textAlign="center"
                borderRadius="8px"
            >
                <Typography variant="h2" component="h1">
                    About Us
                </Typography>
            </Box>

            {/* Main Content Section */}
            <Paper elevation={3} className="p-8 bg-white rounded-lg shadow-md">
                <Box mb={6}>
                    <Typography variant="h5" component="h2" gutterBottom color="#004d40">
                        Our Mission
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Welcome to our blog! Our mission is to provide insightful and engaging content on various topics that matter to our readers. We strive to create a platform where you can find valuable information, inspiration, and perspectives.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Our blog features a wide range of articles, from thought-provoking essays to practical tips and guides. We believe in the power of storytelling and aim to foster a community where ideas and experiences can be shared and celebrated.
                    </Typography>
                </Box>
                <Box mb={6}>
                    <Typography variant="h5" component="h2" gutterBottom color="#004d40">
                        Our Team
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Our team consists of passionate writers, researchers, and editors who are dedicated to delivering high-quality content. Each member brings unique expertise and a fresh perspective to our blog, ensuring a diverse range of topics and viewpoints.
                    </Typography>
                </Box>
                <Box mb={6}>
                    <Typography variant="h5" component="h2" gutterBottom color="#004d40">
                        Get In Touch
                    </Typography>
                    <Typography variant="body1" paragraph>
                        We value your feedback and would love to hear from you. We’re always happy to connect with our readers and improve our content.
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
};

export default AboutUs;
