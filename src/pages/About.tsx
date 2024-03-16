import { Box, Typography, TextField, Grid, IconButton } from '@mui/material';
import { Email, Phone, Description } from '@mui/icons-material';

const About = () => {
    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom>
                About Travellin
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
                <Description sx={{ mr: 2 }} />
                <TextField
                    label="Description"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                />
            </Box>
            <Grid container spacing={2} sx={{ mt: 4 }}>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Phone sx={{ mr: 2 }} />
                        <TextField label="Phone" variant="outlined" fullWidth />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Email sx={{ mr: 2 }} />
                        <TextField label="Email" variant="outlined" fullWidth />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;