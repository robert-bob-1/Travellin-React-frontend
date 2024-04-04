import React from 'react';
import { AppBar, Toolbar, Button, styled, Box, Typography } from '@mui/material';

import logo from '../assets/travel.png';
import { teal } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import { useUserState } from '../userContext';

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
    color: teal[900],
    fontSize: '2.4rem',
    fontWeight: 'bold'
});

const Header: React.FC = () => {
    const { isLoggedIn, userType } = useUserState();

    return (
        <StyledAppBar position='static'>
            <StyledToolbar>
                <Box display="flex" alignItems="center">
                    <StyledImage className='logo-small' src={logo} alt="Travel Icon" />
                    <Title>Travellin</Title>
                </Box>
                <div>
                    <Button component={Link} to="/">Home</Button>
                    <Button component={Link} to="/destinations">Destinations</Button>
                    <Button component={Link} to="/search">Search</Button>
                    {userType === 'agent'
                        ? <Button component={Link} to="/agent">Agent Page</Button>
                        : null}
                </div>
                <div>
                    <Button component={Link} to="/about">About</Button>
                    {isLoggedIn ? <LogoutButton />
                        :
                        <div>
                            <Button component={Link} to="/login">Login</Button>
                            <Button component={Link} to="/register">Register</Button>
                        </div>
                    }
                </div>
            </StyledToolbar>
        </StyledAppBar>
    );
};

export default Header;