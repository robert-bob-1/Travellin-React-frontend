import axios from 'axios';
import { Client } from '../models/user-models';

const BASE_URL = 'http://127.0.0.1:8000/users';

function setUserLocation(): void {
    const navigator = window.navigator;

    if (!navigator.geolocation) {
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            const storedCoordinates = JSON.stringify({ latitude, longitude });
            localStorage.setItem('coordinates', storedCoordinates);
            console.log('Coordinates stored', storedCoordinates);
    });
}

export function login(username: string, password: string): Promise<void> {
    return axios.post(`${BASE_URL}/login`, { username, password })
        .then(response => {
            console.log(response.data);
            if (response.data === 'client' || response.data === 'agent') {
                console.log(response.data);
                localStorage.setItem('username', username);
                localStorage.setItem('userType', response.data);
                setUserLocation();
            }
            else {
                throw new Error('Invalid login');
            }
        })
        .catch(error => {
            throw new Error('Invalid login');
        });
}

export function registerClient(username: string, password: string, phoneNumber: string): Promise<Client | undefined> {
    return axios.post(`${BASE_URL}/client/register`, { username, password, phoneNumber })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return undefined;
        });
}

export function registerAgent(username: string, password: string, companyName: string): Promise<void> {
    return axios.post(`${BASE_URL}/agent/register`, { username, password, companyName })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return undefined;
        });
}

