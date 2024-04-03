import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Grid, TextField } from '@mui/material';
import { login } from '../services/user-service';
import { useNavigate } from 'react-router-dom';
import { UserType, useUserState } from '../userContext';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        padding: '16px', // Add padding
    },
    submitButton: {
        marginTop: '8px', // Add some space above the button
    },
}));

const Login: React.FC = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { setIsLoggedIn, setUserType } = useUserState();


    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        login(email, password)
            .then(() => {
                console.log('Logged in');
                setIsLoggedIn(true);
                const userType = localStorage.getItem('userType');
                if ( userType !== null
                    && ['client', 'agent'].includes(userType) ) {
                    setUserType(userType as UserType);
                } else {
                    setUserType('none');
                }
                navigate('/');
            })
            .catch((error) => {
                console.error('Error logging in', error);
            });
    };

    const isLoginDisabled = () => {
        return email === '' || password === '';
    };

    return (
        <Grid container className={classes.root} spacing={2} direction={'column'}>
            <TextField label="Email" variant="outlined" style={{ margin: '10px' }} value={email} onChange={handleEmailChange} />
            <TextField label="Password" variant="outlined" type="password" style={{ margin: '10px' }} value={password} onChange={handlePasswordChange} />
            <Button variant="contained" color="primary" style={{ margin: '1rem' }} disabled={isLoginDisabled()} onClick={handleLogin}>
                Login
            </Button>
        </Grid>
    );
};

export default Login;