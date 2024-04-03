import React from 'react';
import { Typography, List, ListItem, Grid, Checkbox, FormControlLabel, Button } from '@mui/material';
import styled from '@emotion/styled';

import DestinationBox from '../../components/DestinationBox';
import { mockDestinations } from '../../models/destination-mocks';
import DestinationDialog from '../../components/DestinationDialog';

const StyledListItem = styled(ListItem)({
    display: 'flex',
    justifyContent: 'left',
});

const AgentPage: React.FC = () => {
    const [showOnSaleOnly, setShowOnSaleOnly] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const destinations = mockDestinations;

    const filteredDestinations = showOnSaleOnly ? destinations.filter(destination => destination.sale) : destinations;

    function onAddDestination() {
        setOpenDialog(true);
    }

    function onCloseDialog() {
        setOpenDialog(false);
    }

    return (
        <Grid container direction="column">
            <Typography variant="h4">Edit destinations:</Typography>

            <Grid item xs={5} container direction="row" spacing={2}
                sx={{ margin: '5px', alignItems: 'center' }}>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={onAddDestination}>
                            Add Destination</Button>
                </Grid>
                <Grid item>
                </Grid>
                <Grid item>
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

            <DestinationDialog open={openDialog} onClose={onCloseDialog} />
        </Grid>
    );
};

export default AgentPage;