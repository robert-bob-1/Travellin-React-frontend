import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const Destinations: React.FC = () => {
    const destinations = ['Destination 1', 'Destination 2', 'Destination 3'];

    return (
        <div>
            <Typography variant="h4">Pick your next destination:</Typography>
            <List>
                {destinations.map((destination, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={destination} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default Destinations;