import React, { useEffect, useState } from 'react';
import { Typography, List, ListItem, Grid, styled, TextField } from '@mui/material';

import { Destination } from '../models/destination-model';
import { mockDestinations } from '../models/destination-mocks';
import DestinationBox from '../components/DestinationBox';
import { getDestinations } from '../services/destination-service';

const StyledListItem = styled(ListItem)({
    display: 'flex',
    justifyContent: 'left',
});

const Search: React.FC = () => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [destinations, setDestinations] = useState<Destination[]>([]);

    useEffect(() => {
        getDestinations().then(destinationsResponse => {
            setDestinations(destinationsResponse);
            console.log('Destinations:', destinations);
        });
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredDestinations = destinations.filter((destination) =>
        destination.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Grid container direction="column">
            <Typography variant="h4">Search for your next destination based on location:</Typography>

            <TextField
                label="Search"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchChange}
                sx={{ marginTop: '1rem', width: '50%'}}
            />

            <List>
                {filteredDestinations.map((destination, index) => (
                    <StyledListItem key={index}>
                        <DestinationBox destination={destination} />
                    </StyledListItem>
                ))}
            </List>
        </Grid>
    );
};

export default Search;