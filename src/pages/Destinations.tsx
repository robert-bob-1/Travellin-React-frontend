import React, { useEffect, useState } from 'react';
import { Typography, List, ListItem, Grid, Checkbox, FormControlLabel } from '@mui/material';
import styled from '@emotion/styled';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import DestinationBox from '../components/DestinationBox';
import { getDestinations } from '../services/destination-service';
import { Destination } from '../models/destination-model';

const StyledListItem = styled(ListItem)({
    display: 'flex',
    justifyContent: 'left',
});

const Destinations: React.FC = () => {
    const [showOnSaleOnly, setShowOnSaleOnly] = React.useState(false);
    const [destinations, setDestinations] = useState<Destination[]>([]);
    let [filteredDestinations, setFilteredDestinations] = useState<Destination[]>([]);

    useEffect(() => {
        getDestinations().then(destinationsResponse => {
            setDestinations(destinationsResponse);
            console.log('Destinations:', destinations);
        });
    }, []);

    useEffect(() => {
        setFilteredDestinations(showOnSaleOnly ? destinations.filter(destination => destination.sale) : destinations);
        console.log('Filtered Destinations:', filteredDestinations);
    }, [destinations, showOnSaleOnly]);

    const [startDate, setStartDate] = React.useState<Date | null>(null);
    const [endDate, setEndDate] = React.useState<Date | null>(null);

    return (
        <Grid container direction="column">
            <Typography variant="h4">Pick your next destination:</Typography>

            <Grid item xs={5} container direction="row" spacing={2}
                sx={{ margin: '5px', alignItems: 'center' }}>
                <Grid item>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Start Date"
                            value={startDate} onChange={(date: React.SetStateAction<Date | null>) => setStartDate(date)} />
                    </LocalizationProvider>
                </Grid>
                <Grid item>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="End Date"
                            value={endDate} onChange={(date: React.SetStateAction<Date | null>) => setEndDate(date)} />
                    </LocalizationProvider>
                </Grid>
                <Grid item> {/* Added Grid item for the checkbox */}
                    <FormControlLabel
                        control={<Checkbox checked={showOnSaleOnly} onChange={e => setShowOnSaleOnly(e.target.checked)} />}
                        label="Show on sale only"
                    />
                </Grid>
            </Grid>

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

export default Destinations;