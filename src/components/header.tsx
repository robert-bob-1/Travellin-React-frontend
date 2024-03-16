import React from 'react';
import { AppBar, Toolbar, Button, styled } from '@mui/material';

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <StyledToolbar>
                <div>
                    <Button color="inherit" href="/">Home</Button>
                    <Button color="inherit" href="/destinations">Destinations</Button>
                    <Button color="inherit" href="/search">Search</Button>
                </div>
                <div>
                    <Button color="inherit" href="/about">About</Button>
                    <Button color="inherit" href="/login">Login</Button>
                </div>
            </StyledToolbar>
        </AppBar>
    );
};

export default Header;