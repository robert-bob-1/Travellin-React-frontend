import { Box, Typography, TextField, Grid, IconButton } from '@mui/material';
import { Email, Phone, Description } from '@mui/icons-material';

const About = () => {
    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom>
                About Travellin
            </Typography>
            <Typography variant="body1" gutterBottom>
                Welcome to Travellin, your ultimate travel companion! Explore the world with ease and convenience through our comprehensive travel platform. Whether you're seeking serene beaches, majestic mountains, bustling cities, or tranquil countryside, Travellin caters to every traveler's wanderlust.
            </Typography>
            <Typography variant="body1" gutterBottom>
                Plan your dream itinerary effortlessly using our intuitive platform. Search and compare flights, browse handpicked accommodations, and book exciting tours and activities with just a few clicks.
            </Typography>
            <Grid container spacing={2} sx={{ mt: 4 }}>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Phone sx={{ mr: 2 }} />
                        <Typography variant="body1">Phone: +1 123 456 7890</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Email sx={{ mr: 2 }} />
                        <Typography variant="body1">Email: info@travellin.com</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;