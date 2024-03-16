import React, { useState } from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

const Header: React.FC = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLoginToggle = () => {
        setLoggedIn((prevLoggedIn) => !prevLoggedIn);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" href="/">Home</Button>
                <Button color="inherit" href="/destinations">Destinations</Button>
                <Button color="inherit" href="/search">Search</Button>
                <Button color="inherit" href="/about">About</Button>

                {/* {loggedIn ? (
                    <Button color="inherit">Dashboard</Button>
                ) : (
                    <Button color="inherit">Login</Button>
                )} */}
                {/* <Button color="inherit" onClick={handleLoginToggle}>
                    {loggedIn ? 'Logout' : 'Login'}
                </Button> */}
            </Toolbar>
       </AppBar>
    );
};

export default Header;