import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { Destination } from '../models/destination-model';
import { styleConstants } from '../models/style-constants';
import { useUserState } from '../userContext';
import { createReservation, deleteDestination } from '../services/destination-service';

const DestinationBoxContainer = styled(Box)({
    backgroundColor: styleConstants.boxBackgroundColor,
    borderRadius: styleConstants.boxBorderRadius,
    boxShadow: styleConstants.boxShadow,
    padding: '1rem',

    width: '90%',
    height: '20%'
});

const DestinationTitle = styled(Typography)({
    fontWeight: 'bold',
    marginBottom: '8px',
});

const DestinationLocation = styled(Typography)({
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: '12px',
});

const DestinationDescription = styled(Typography)({
    maxHeight: '50%',
    overflow: 'auto'
});

const DestinationInfoContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
});

const DestinationPrice = styled(Typography)({
    marginBottom: '8px',
    fontWeight: 'bold',
});

const DestinationSpots = styled(Typography)({
    fontWeight: 'bold',
});

interface DestinationBoxProps {
    destination: Destination;
    startDate?: Date;
    endDate?: Date;
    onOpenReservationsDialog?: (destination: Destination) => void;
    onOpenEditDialog?: (destination: Destination) => void;
    onDeleteDestination?: () => void;
}

const DestinationBox: React.FC<DestinationBoxProps> = ({ destination, startDate, endDate, onOpenReservationsDialog, onOpenEditDialog, onDeleteDestination }) => {
    const { userType } = useUserState();

    const handleEdit = (destination: Destination) => {
        console.log('Edit destination:', destination);
        if (onOpenEditDialog) {
            onOpenEditDialog(destination);
        }
    };

    const handleDelete = (destination: Destination) => {
        console.log('Delete destination:', destination);
        deleteDestination(destination.id);
        if (onDeleteDestination) {
            onDeleteDestination();
        }
    };

    const handleSeeReservations = (destination: Destination) => {
        if (onOpenReservationsDialog) {
            onOpenReservationsDialog(destination);
        }
    };

    const onReserveClick = () => {
        console.log('Reserve:', destination, startDate?.toISOString(), endDate?.toISOString());
        if (startDate && endDate)
            createReservation(destination.id, startDate, endDate);
        else
            console.error('Invalid dates');
    };

    return (
        <DestinationBoxContainer>
            <Grid container
                direction="row">
                <Grid item xs={8}>
                    <Grid container direction="column">
                        <Grid item>
                            <DestinationTitle variant="h5">{destination.title}</DestinationTitle>
                        </Grid>
                        <Grid item>
                            <DestinationLocation variant="h3">{destination.location}</DestinationLocation>
                        </Grid>
                    </Grid>
                    <DestinationDescription>{destination.description}</DestinationDescription>
                </Grid>
                <Grid item xs='auto' style={{ marginLeft: 'auto' }}>
                    <DestinationInfoContainer>
                        <DestinationPrice variant="body1" style={{ color: destination.sale > 0 ? 'red' : 'inherit' }}>
                            Price per night: ${destination.pricePerNight}
                        </DestinationPrice>
                        <DestinationSpots variant="body1">
                            Total spots: {destination.totalSpots}
                        </DestinationSpots>
                    </DestinationInfoContainer>
                    {userType === 'agent' ?
                        <div>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleEdit(destination)}
                                sx={ {margin: '1rem' } }>
                                    Edit</Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleDelete(destination)}
                                sx={ { margin: '1rem' }}>
                                    Delete</Button>
                        </div>
                        :
                        <div style={{ display: "flex", justifyContent: "flex-end"}}>
                            {startDate && endDate &&
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={onReserveClick}
                                    sx={ { margin: '1rem', } }>
                                        Reserve</Button>
                            }
                        </div>
                    }

                    {userType === 'agent' ?
                        <div>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleSeeReservations(destination)}
                                sx={ {margin: '1rem' } }>
                                    See Reservations</Button>
                        </div>
                        : <div></div>
                    }
                </Grid>
            </Grid>
        </DestinationBoxContainer>
    );
};

export default DestinationBox;