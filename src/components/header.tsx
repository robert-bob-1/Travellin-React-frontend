import React from 'react';
import { AppBar, Toolbar, Button, styled, Box, Typography } from '@mui/material';

import logo from '../assets/travel.png';
import { teal } from '@mui/material/colors';

const StyledAppBar = styled(AppBar)({
    backgroundColor: 'white',
    boxShadow: 'none',
});

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',

    marginLeft: '5%',
    marginRight: '5%',
    paddingLeft: '0',
    paddingRight: '0',
    paddingBottom: '1rem',
    paddingTop: '1rem',
    borderBottom: '2px solid teal'

});

const StyledImage = styled('img')({
    height: '60px',
    margin: '1rem'
});

const Title = styled(Typography)({
    color: teal[800],
    fontSize: '2.4rem',
    fontWeight: 'bold'
});

const Header: React.FC = () => {
    return (
        <StyledAppBar position='static'>
            <StyledToolbar>
                <Box display="flex" alignItems="center">
                    <StyledImage className='logo-small' src={logo} alt="Travel Icon" />
                    <Title>Travellin</Title>
                </Box>
                <div>
                    <Button className='main-button' href="/">Home</Button>
                    <Button href="/destinations">Destinations</Button>
                    <Button href="/search">Search</Button>
                </div>
                <div>
                    <Button href="/about">About</Button>
                    <Button href="/login">Login</Button>
                </div>
            </StyledToolbar>
        </StyledAppBar>
    );
};

export default Header;