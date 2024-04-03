import React, { useEffect } from 'react';
import { Typography, List, ListItem, Grid, Checkbox, FormControlLabel, Button } from '@mui/material';
import styled from '@emotion/styled';

import DestinationBox from '../../components/DestinationBox';
import DestinationDialog from '../../components/DestinationDialog';
import { Destination } from '../../models/destination-model';
import { getDestinations } from '../../services/destination-service';

const StyledListItem = styled(ListItem)({
    display: 'flex',
    justifyContent: 'left',
});

const AgentPage: React.FC = () => {
    const [showOnSaleOnly, setShowOnSaleOnly] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [destinations, setDestinations] = React.useState<Destination[]>([]);
    const [filteredDestinations, setFilteredDestinations] = React.useState<Destination[]>([]);
    const [destination, setDestinationToEdit] = React.useState<Destination | undefined>();
    const [refresh, setRefresh] = React.useState(false);

    useEffect(() => {
        getDestinations().then(destinationsResponse => {
            setDestinations(destinationsResponse);
            console.log('Destinations:', destinations);
        });
    }, [openDialog, refresh]);

    useEffect(() => {
        const tempFilteredDestinations = showOnSaleOnly ?
            destinations.filter(destination => destination.sale > 0)
            : destinations;
        setFilteredDestinations(tempFilteredDestinations);
        console.log('Filtered Destinations:', filteredDestinations);
    }, [destinations, showOnSaleOnly]);

    function onAddDestination() {
        setOpenDialog(true);
    }

    function onCloseDialog() {
        setOpenDialog(false);
        setDestinationToEdit(undefined);
    }

    const onOpenEditDialog = (destination: Destination) => {
        setDestinationToEdit(destination);
        setOpenDialog(true);
    }

    const onDeleteDestination = () => {
        setRefresh(!refresh);
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
                        <DestinationBox
                            destination={destination}
                            onOpenEditDialog={onOpenEditDialog}
                            onDeleteDestination={onDeleteDestination} />
                    </StyledListItem>
                ))}
            </List>

            <DestinationDialog
                open={openDialog}
                onClose={onCloseDialog}
                destination={destination} />
        </Grid>
    );
};

export default AgentPage;