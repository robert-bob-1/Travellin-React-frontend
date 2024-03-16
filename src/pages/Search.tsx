import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const Search: React.FC = () => {
    const destinations = ['Destination 1', 'Destination 2', 'Destination 3'];

    return (
        <div>
            <Typography variant="h4">Pick your next destination:</Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h6">Search:</Typography>
                <input type="text" placeholder="Enter destination" />
            </div>
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

export default Search;