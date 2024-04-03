import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useUserState } from '../userContext';

const LogoutButton: React.FC<{}> = () => {
    const { setIsLoggedIn, setUserType } = useUserState();

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('userType');
        localStorage.removeItem('coordinates');

        setIsLoggedIn(false);
        setUserType('none');
        navigate('/login');
    };

    return (
        <Button onClick={handleLogout}>
            Logout
        </Button>
    );
};

export default LogoutButton;