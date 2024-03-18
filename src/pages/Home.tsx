import { Grid, Typography, Button, Divider } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';

import beachImage from '../assets/dalleBeach.png';
import { styleConstants } from '../models/style-constants';

const ComponentGrid = styled(Grid)({

});

const WhiteBox = styled(Grid)({
    backgroundColor: styleConstants.boxBackgroundColor,
    borderRadius: styleConstants.boxBorderRadius,
    boxShadow: styleConstants.boxShadow,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden', // Ensure no overflow by default
    maxHeight: '80vh', // Limit max height to 80% of viewport height
});

const StyledGrid = styled(Grid)({
    height: 'auto'
});

const ScrollableContent = styled('div')({
    flex: '1', // Grow to fill available space, enables scrolling
    overflowY: 'auto', // Enable vertical scrolling
    height: 'auto'
});

const StyledButton = styled(Button)({
    margin: '1rem'
});

export default function Home() {

    return (
        <ComponentGrid container spacing={2}
        >
            {/* Image */}
            <StyledGrid item xs={6}>
                <img src={beachImage} alt="Sample" style={{ width: '100%' }} />
            </StyledGrid>
            {/* Separator Line */}
            <Grid item xs={0.4} sx={{ display: 'flex', alignItems: 'center' }}>
                <Divider orientation="vertical" sx={{ height: '100%', borderColor: styleConstants.dividerColor, borderWidth: styleConstants.dividerWidth }} />
            </Grid>
            {/* White Box */}
            <WhiteBox item xs={5.5}>
                <Typography variant="h3" gutterBottom>
                    Welcome to Travellin!
                </Typography>
                <ScrollableContent>
                    <Typography variant="body1">
                     Welcome to Travellin! Discover a world of endless possibilities with Travellin, your ultimate travel companion. Whether you're seeking serene beaches, majestic mountains, bustling cities, or tranquil countryside, Travellin caters to every traveler's wanderlust.
                    </Typography><br />
                    <Typography variant="body1">
                    Explore the world with ease and convenience through our comprehensive travel platform.
                    </Typography><br />
                    <Typography variant="body1">
                    Dive into crystal-clear waters, hike breathtaking trails, immerse yourself in diverse cultures, or simply unwind in luxurious resorts - the choice is yours with Travellin. Plan your dream itinerary effortlessly using our intuitive platform. Search and compare flights, browse handpicked accommodations, and book exciting tours and activities with just a few clicks.
                    </Typography><br />
                    <Typography variant="body1">
                    Discover amazing destinations, book flights, accommodations, and activities seamlessly,
                    and create unforgettable memories with your loved ones.
                    </Typography><br />
                    <Typography variant="body1">
                    Join millions of travelers who trust Travellin for their journeys, and embark on your next adventure today!
                    </Typography>
                </ScrollableContent>


                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', borderTop: '1.7px solid rgba(0, 0, 0, 0.12)', borderColor: styleConstants.dividerColor }}>
                    <Divider sx={{ margin: '0.5rem 0' }} />
                    <StyledButton variant="outlined" color="primary">
                        Sign Up
                    </StyledButton>
                    <StyledButton variant="contained" color="primary">
                        Go to Login
                    </StyledButton>
                </div>
            </WhiteBox>
        </ComponentGrid>
    );
};