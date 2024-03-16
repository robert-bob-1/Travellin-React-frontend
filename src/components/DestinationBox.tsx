import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { Destination } from '../models/destination-model';
import { styleConstants } from '../models/style-constants';

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

const DestinationBox: React.FC<{destination: Destination}> = ({ destination }) => {
    return (
        <DestinationBoxContainer>
            <Grid container>
                <Grid item xs={10}>
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
                        <DestinationPrice variant="body1" style={{ color: destination.sale ? 'red' : 'inherit' }}>
                            Price per night: ${destination.pricePerNight}
                        </DestinationPrice>
                        <DestinationSpots variant="body1">
                            Free spots: {destination.freeSpots}
                        </DestinationSpots>
                    </DestinationInfoContainer>
                </Grid>
            </Grid>
        </DestinationBoxContainer>
    );
};

export default DestinationBox;