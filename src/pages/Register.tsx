import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { registerAgent, registerClient } from '../services/user-service';
import { useNavigate } from 'react-router-dom';

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
    checkbox: {
        display: 'flex',
        alignItems: 'center',
        margin: '8px',
    },
}));

const Register: React.FC = () => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [userType, setUserType] = useState('');

    const navigate = useNavigate();

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
    };

    const handleCompanyNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCompanyName(event.target.value);
    };

    const isRegisterDisabled = () => {
        return userType === '' || !(username && password && (userType === 'client' ? phoneNumber : companyName));
    };

    const handleUserTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
        setUserType(event.target.value);
    };

    const handleRegister = () => {
        if (userType === 'client') {
            registerClient(username, password, phoneNumber)
                .then(client => {
                    console.log(client);
                    if (client !== undefined) {
                        navigate('/login');
                    }
                });
        } else if (userType === 'agent') {
            registerAgent(username, password, companyName)
                .then(agent => {
                    console.log(agent);
                    if (agent !== undefined) {
                        navigate('/login')
                    }
                });
        }
    };

    return (
        <Grid container className={classes.root} spacing={2} direction={'column'}>
            <Typography variant='h4'>What type of user do you want to register?</Typography>

            <RadioGroup aria-label="position" name="position"
                defaultValue="client"
                className={classes.checkbox} value={userType} onChange={handleUserTypeChange}>
                <FormControlLabel value="client" control={<Radio />} label="Client" />
                <FormControlLabel value="agent" control={<Radio />} label="Agent" />
            </RadioGroup>

            <TextField label="Username" variant="outlined" style={{ margin: '10px' }} value={username} onChange={handleUsernameChange}/>
            <TextField label="Password" variant="outlined" type="password" style={{ margin: '10px' }} value={password} onChange={handlePasswordChange}/>

            {userType === 'client' && (
                <TextField label="Phone Number" variant="outlined" style={{ margin: '10px' }} value={phoneNumber} onChange={handlePhoneNumberChange}/>
            )}

            {userType === 'agent' && (
                <TextField label="Company Name" variant="outlined" style={{ margin: '10px' }} value={companyName} onChange={handleCompanyNameChange}/>
            )}

            <Button variant="contained" color="primary" style={{ margin: '1rem' }} disabled={isRegisterDisabled()} onClick={handleRegister}>
                Register
            </Button>
        </Grid>
    );
};

export default Register;
